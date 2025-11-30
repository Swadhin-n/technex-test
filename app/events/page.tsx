"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image" 
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import LeftSidebar from "@/components/left-sidebar"
import RightSidebar from "@/components/right-sidebar"
import TopNav from "@/components/top-nav"

// Register ScrollTrigger safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// event data 
// --- DATA ---
const eventsList = [
  {
    id: 1,
    title: "GAMEATHON 2026",
    prize: "₹50,000",
    description: "The ultimate 24-hour game development hackathon. Build, play, and compete to create the next big game prototype.",
    image: "/images/gameathon-bg.jpeg", 
    category: "Development",
    detailsLink: "#"
  },
  {
    id: 2,
    title: "OVERDRIVE 8.0",
    prize: "₹80,000",
    description: "A high-speed, obstacle-based robotics challenge. Navigate custom multi-terrain arenas with precision and speed.",
    image: "/images/overdrive-bg.jpeg",
    category: "Robotics",
    detailsLink: "#"
  },
  {
    id: 3,
    title: "VORTEX 2k26",
    prize: "₹70,000",
    description: "Competitive 5v5 Valorant gaming tournament highlighting strategy, communication, and high-level gameplay.",
    image: "/images/vortex-bg.jpeg",
    category: "Esports",
    detailsLink: "#"
  },
  {
    id: 4,
    title: "HACKATHON 2k26",
    prize: "₹70,000+",
    description: "A national-level 24-hour innovation challenge. Solve real-world problem statements in a gamified format.",
    image: "/images/hackathon-bg.jpeg",
    category: "Innovation",
    detailsLink: "#"
  },
  {
    id: 5,
    title: "DRIFT-FURY 2.0",
    prize: "₹1,10,000",
    description: "Intense RC car racing. Master the drift, control the chaos, and dominate the obstacle-filled track.",
    image: "/images/drift-bg.jpeg",
    category: "Racing",
    detailsLink: "#"
  },
  {
    id: 6,
    title: "ENVISION 26",
    prize: "₹50,000",
    description: "The Data Intelligence Datathon. Transform raw data into actionable insights using ML and visualization.",
    image: "/images/envision-bg.jpeg",
    category: "Data Science",
    detailsLink: "#"
  },
  {
    id: 7,
    title: "Mind2Market",
    prize: "₹1,00,000",
    description: "From idea to execution. A business simulation and trading challenge for aspiring entrepreneurs.",
    image: "/images/m2m-bg.jpeg",
    category: "Business",
    detailsLink: "#"
  },
  {
    id: 8,
    title: "COASTAL CLASH 3.0",
    prize: "₹50,000",
    description: "Design and race high-performance RC boats through water arenas filled with obstacles.",
    image: "/images/coastal-bg.jpeg",
    category: "Robotics",
    detailsLink: "#"
  },
]

export default function EventsPage() {
  const [isMounted, setIsMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  // --- MOUNT CHECK ---
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // --- UNIFIED ANIMATION LOGIC (Mobile & Desktop) ---
  useEffect(() => {
    if (!isMounted || !containerRef.current) return

    const ctx = gsap.context(() => {
      
      // Responsive Configuration
      const isMobile = window.innerWidth < 768
      
      const maxRadius = isMobile 
        ? window.innerWidth * 0.40  
        : window.innerHeight * 0.40 

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=400%", // Long scroll distance
          scrub: 1, 
          pin: true,
          anticipatePin: 1,
        }
      })
      

      eventsList.forEach((_, index) => {
        const card = cardsRef.current[index]
        if (!card) return

        const totalCards = eventsList.length
        const initialAngle = (index / totalCards) * Math.PI * 2 
        
        const state = { 
            radius: 150,
            angle: initialAngle
        }

        tl.to(state, {
          radius: maxRadius, 
          angle: initialAngle + Math.PI * 2,
          duration: 1,
          ease: "power1.inOut",
          onUpdate: () => {
            const x = Math.cos(state.angle) * state.radius
            const y = Math.sin(state.angle) * state.radius
            
            gsap.set(card, { 
                x: x, 
                y: y,
                scale: Math.min(1, state.radius / (isMobile ? maxRadius * 0.8 : maxRadius * 0.2)), 
                opacity: Math.min(1, state.radius / 50)
            })
          }
        }, 0)
      })

    }, containerRef)

    return () => ctx.revert()
  }, [isMounted]) 


  if (!isMounted) return <div className="min-h-screen bg-[#050714]" />

  return (
    <div className="relative w-full  font-[Rajdhani] min-h-screen">
      
      {/* GLOBAL NAV ELEMENTS */}
      <LeftSidebar/>
      <RightSidebar/>
      <TopNav/>
      
      {/* --- SPACER ELEMENT --- */}
      {/* Keeps the large padding before spiral starts */}
      <div className="w-full h-[10vh] flex flex-col items-center justify-center pointer-events-none">
        <p className="text-cyan-500/50 text-sm animate-bounce tracking-widest uppercase">
        </p>
      </div>

      {/* ANIMATION CONTAINER */}
      <div 
        ref={containerRef} 
        className="relative w-full h-screen overflow-hidden flex items-center justify-center z-10"
      >
        
        {/* Central Glow */}
        <div className="absolute z-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        
        {/* Background Image */}
        <div className="absolute z-0 text-center pointer-events-none opacity-50 flex flex-col items-center justify-center">
             <div className="w-[300px] md:w-[600px] animate-pulse">
                <Image
                   src="/Technex_26_name.webp"
                   alt="Technex 2026"
                   width={600}
                   height={200}
                   className="w-full h-auto object-contain"
                />
             </div>
        </div>

        {/* THE ORIGIN POINT (Center of Spiral) */}
        {/* UPDATED: Added translate-x classes to shift the spiral right */}
        <div className="relative w-0 h-0 flex items-center justify-center translate-x-12 md:translate-x-10">
          
          {eventsList.map((event, index) => (
             <div
                key={event.id}
                ref={(el) => { cardsRef.current[index] = el }}
                className="absolute w-[190px] h-[260px] -ml-[95px] -mt-[130px] md:w-[260px] md:h-[360px] md:-ml-[130px] md:-mt-[180px] opacity-0 will-change-transform"
             >
                {/* --- CARD COMPONENT --- */}
                <div className="group relative h-full w-full rounded-xl overflow-hidden border border-white/10 bg-zinc-900 shadow-xl transition-all duration-300 hover:shadow-cyan-500/20 hover:border-cyan-500/50 block hover:scale-105 hover:z-50">
                    <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${event.image})` }}
                    >
                        <div className="absolute inset-0 bg-zinc-800/60" />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />

                    <div className="absolute inset-0 p-3 md:p-5 flex flex-col justify-end">
                        <div className="transform transition-transform duration-500 translate-y-0">
                            <h2 className="text-lg md:text-xl font-bold uppercase font-[Orbitron] tracking-wide text-white mb-1 group-hover:text-cyan-400 transition-colors">
                                {event.title}
                            </h2>
                            <p className="text-sm md:text-base font-semibold text-cyan-300 mb-1">
                                {event.prize}
                            </p>
                        </div>
                        <div className="transition-all duration-500 ease-in-out">
                            <p className="text-[10px] md:text-xs text-gray-300 mb-3 leading-relaxed line-clamp-3">
                                {event.description}
                            </p>
                            
                            <Link 
                                href={event.detailsLink}
                                className="inline-block px-3 py-1.5 md:px-5 md:py-2 rounded-full bg-cyan-500 text-black font-bold text-[10px] md:text-xs uppercase tracking-wider hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300 cursor-pointer"
                            >
                                Details
                            </Link>
                        </div>
                    </div>
                </div>
             </div>
          ))}
        </div>

      </div>
      
      {/* FOOTER */}
      <div className="h-screen transparent flex items-center justify-center relative z-20 border-t border-cyan-500/20 ">
         <div className="text-center px-4">
             <h2 className="text-2xl md:text-4xl text-white font-[Orbitron] mb-4">MORE COMING SOON</h2>
             <p className="text-gray-400 text-sm md:text-base">Keep an eye on the leaderboards.</p>
         </div>
      </div>

    </div>
  )
}