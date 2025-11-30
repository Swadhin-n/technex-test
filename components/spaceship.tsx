"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import * as THREE from "three"
import { useMemo, useRef, Suspense, useState, useEffect } from "react"

// Load GLB spaceship
function SpaceshipModel({ isMobile, scale }: { isMobile: boolean; scale?: number }) {
  const { scene } = useGLTF("/spaceship.glb")
  const finalScale = scale ?? (isMobile ? 0.015 : 0.03)
  return <primitive object={scene} scale={finalScale} />
}

function SpaceshipController({ shouldStart }: { shouldStart: boolean }) {
  const ship = useRef<THREE.Group>(null!)
  const initDone = useRef(false)
  const startTime = useRef<number | null>(null)
  const [screenSize, setScreenSize] = useState({ width: 1920, height: 1080, aspect: 1.78 })

  useEffect(() => {
    const updateScreenSize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      setScreenSize({ width: w, height: h, aspect: w / h })
    }
    updateScreenSize()
    window.addEventListener('resize', updateScreenSize)
    return () => window.removeEventListener('resize', updateScreenSize)
  }, [])

  // Responsive curve generation based on screen dimensions
  const curve = useMemo(() => {
    const { width, height, aspect } = screenSize
    
    // Determine device category
    const isMobile = width < 768
    const isTablet = width >= 768 && width < 1024
    const isUltrawide = aspect > 2.0
    const isTall = aspect < 1.3
    
    // Viewport-relative positioning for consistent cross-device appearance
    // Mobile landing: OnePlus 8 optimized, with specific adjustments for other devices
    // OnePlus 8 / similar (width ~400-430): Perfect at (0.6, -1.05, -1.3)
    // iPhone 12 Pro (width ~390, height ~844): Specific positioning
    // iPhone 13/14/15 Pro (width ~393, height ~852)
    // iPhone 12/13/14 Pro Max (width ~428, height ~926)
    // Galaxy S20 Ultra (width ~412, height ~915): Needs height compensation
    
    let mobileLandingX = 0.5
    let mobileLandingY = 0
    let mobileLandingZ = -1.3
    
    // Specific iPhone detection and positioning
    const isIPhone12Pro = width >= 375 && width <= 395 && height >= 800 && height <= 850
    const isIPhone13ProPlus = width >= 390 && width <= 400 && height >= 850 && height <= 880
    const isIPhoneProMax = width >= 410 && width <= 430 && height >= 920 && height <= 932
    
    if (isIPhone12Pro) {
      mobileLandingY = -1.58  // iPhone 12 Pro specific
    } else if (isIPhone13ProPlus) {
      mobileLandingY = -1.56  // iPhone 13/14/15 Pro
    } else if (isIPhoneProMax) {
      mobileLandingY = -1.52  // iPhone Pro Max models
    }
    // Adjust for narrower screens (other small phones)
    else if (width < 380) {
      mobileLandingY = -1.20  // Very small screens
    }
    // Adjust for taller screens (Galaxy S20 Ultra, etc.)
    else if (height > 900) {
      mobileLandingY = -1.52  // Much lower for tall screens to land on platform
    }
    
    if (isMobile) {
      // Mobile: viewport-aware path that adapts to any screen size
      // Path coordinates scale more conservatively to maintain consistency
      const aspectScale = Math.max(0.75, Math.min(0.95, aspect * 1.8))
      
      return new THREE.CatmullRomCurve3(
        [
          // Start visible upper-right (scales with viewport)
          new THREE.Vector3(2.0 * aspectScale, 1.8, 0.2),
          // Arc across top
          new THREE.Vector3(0.9 * aspectScale, 1.5, 0.7),
          // Center peak
          new THREE.Vector3(-0.1, 1.2, 0.8),
          // Begin descent (maintains relative position)
          new THREE.Vector3(-0.6 * aspectScale, 0.5, 0.4),
          // Mid descent
          new THREE.Vector3(-0.3 * aspectScale, -0.2, 0.0),
          // Approach landing from right
          new THREE.Vector3(0.35 * aspectScale, -0.6, -0.5),
          // Landing: always beside platform, calibrated for all devices
          new THREE.Vector3(mobileLandingX, mobileLandingY, mobileLandingZ),
        ],
        false,
        "centripetal",
        0.5
      )
    } else if (isTablet) {
      // Tablet: medium path with aspect-aware scaling
      const tabletScale = 0.85 + (aspect * 0.05)
      
      return new THREE.CatmullRomCurve3(
        [
          new THREE.Vector3(3.8 * tabletScale, 2.5, -0.5),
          new THREE.Vector3(2.5 * tabletScale, 1.8, 1.5),
          new THREE.Vector3(0.5, 1.0, 2.0),
          new THREE.Vector3(-0.8, 0.5, 0.5),
          new THREE.Vector3(0.2, 0.8, -1.0),
          new THREE.Vector3(1.5, 0.2, 0.8),
          new THREE.Vector3(2.8, -1.2, -0.6),
        ],
        false,
        "centripetal",
        0.5
      )
    } else {
      // Desktop: full cinematic path (original scaling)
      return new THREE.CatmullRomCurve3(
        [
          new THREE.Vector3(4.5, 2.8, -0.9),
          new THREE.Vector3(4.344, 2.131, -0.8),
          new THREE.Vector3(1.0, 0.0, 2.8),
          new THREE.Vector3(-1.22, 0.003, 0.8),
          new THREE.Vector3(-0.32, 1.0, -1.3),
          new THREE.Vector3(1.32, 1.4, -1.3),
          new THREE.Vector3(1.82, 0.4, 1.3),
          new THREE.Vector3(3.95, -1.803, -0.8),
        ],
        false,
        "centripetal",
        0.5
      )
    }
  }, [screenSize])



  // Orbit settings
  const orbitCenter = new THREE.Vector3(0, 0.3, -0.4)
  const orbitRadius = 0.9

useFrame(({ clock }) => {
  const DURATION = 10 // keep overall speed consistent

  // Eased progress for smoother acceleration/deceleration
  const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
  
  // One-time init to prevent any pre-flight drift or pop - do this BEFORE checking shouldStart
  if (!initDone.current) {
    const pos0 = curve.getPoint(0)
    const next0 = curve.getPoint(0.005)
    ship.current.position.copy(pos0)
    const tmp = new THREE.Object3D()
    tmp.position.copy(pos0)
    tmp.lookAt(next0)
    ship.current.quaternion.copy(tmp.quaternion)
    initDone.current = true
    return
  }

  // Don't start animation until loader is done
  if (!shouldStart) return
  if (startTime.current === null) startTime.current = clock.getElapsedTime()
  const elapsed = clock.getElapsedTime() - startTime.current
  const u = Math.min(elapsed / DURATION, 1)
  const ue = easeInOutCubic(u)

  // If curve length is uneven, this fixes the speed
  const t = curve.getUtoTmapping(ue, 0)

  // Helper: smooth look at via quaternion slerp
  const smoothLookAt = (target: THREE.Vector3) => {
    const tmpObj = new THREE.Object3D()
    tmpObj.position.copy(ship.current.position)
    tmpObj.lookAt(target)
    const targetQuat = tmpObj.quaternion
    ship.current.quaternion.slerp(targetQuat, 0.2)
  }

  if (u < 1) {
    const pos = curve.getPoint(t)
    const endPos = curve.getPoint(1)

    // As we approach the end, orient toward final hover-facing direction
    const progressToEnd = THREE.MathUtils.clamp((ue - 0.9) / 0.1, 0, 1)
    const hoverLook = new THREE.Vector3(endPos.x - 0.3, endPos.y, endPos.z)
    const nextAlong = curve.getPoint(Math.min(t + 0.003, 1))
    const tmpDirObj = new THREE.Object3D()
    tmpDirObj.position.copy(ship.current.position)
    tmpDirObj.lookAt(nextAlong)
    const tmpHoverObj = new THREE.Object3D()
    tmpHoverObj.position.copy(ship.current.position)
    tmpHoverObj.lookAt(hoverLook)

    // Blend rotation target between path tangent and hover direction
    const targetQuat = tmpDirObj.quaternion.clone().slerp(tmpHoverObj.quaternion, progressToEnd)

    // Slightly damp movement and orientation to reduce jerkiness
    const nearEndBoost = THREE.MathUtils.lerp(0.25, 0.8, progressToEnd)
    ship.current.position.lerp(pos, nearEndBoost)
    ship.current.quaternion.slerp(targetQuat, 0.2)

    // During last 15% blend subtly towards final altitude for a continuous landing feel
    const landBlend = Math.max(0, (ue - 0.85) / 0.15) // 0..1 over the last part
    if (landBlend > 0) {
      const blendedY = THREE.MathUtils.lerp(ship.current.position.y, endPos.y, landBlend * 0.15)
      ship.current.position.y = blendedY
    }

    // If extremely close to the end, clamp exactly to end pose to avoid any residual drift
    if (ue >= 0.999) {
      ship.current.position.copy(endPos)
      const finalFace = new THREE.Object3D()
      finalFace.position.copy(endPos)
      finalFace.lookAt(hoverLook)
      ship.current.quaternion.copy(finalFace.quaternion)
    }
    return
  }

  // Hover with a gentle ramp-in to avoid any snap
  const endPos = curve.getPoint(1)
  const hoverAmp = 0.03
  const hover = Math.sin(clock.getElapsedTime() * 2.0) * hoverAmp
  const hoverBlend = Math.min((elapsed - DURATION) / 0.8, 1) // ramp hover over 0.8s

  const target = new THREE.Vector3(endPos.x, endPos.y + hover * hoverBlend, endPos.z)
  ship.current.position.lerp(target, 0.2)
  smoothLookAt(new THREE.Vector3(endPos.x - 0.3, endPos.y, endPos.z))
})


  const modelScale = screenSize.width < 768 ? 0.015 : screenSize.width < 1024 ? 0.022 : 0.03
  
  return (
    <group ref={ship}>
      <SpaceshipModel isMobile={screenSize.width < 768} scale={modelScale} />
    </group>
  )
}

export default function Spaceship({ startAnimation = true }: { startAnimation?: boolean }) {
  return (
    <Canvas camera={{ position: [0, 0.4, 5], fov: 45 }} className="pointer-events-none" style={{ pointerEvents: 'none' }}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[4, 4, 4]} intensity={1.4} />

      <Suspense fallback={null}>
        <SpaceshipController shouldStart={startAnimation} />
      </Suspense>
    </Canvas>
  )
}

useGLTF.preload("/spaceship.glb")
