"use client"
import { useEffect, useState } from 'react'
import LeftSidebar from "@/components/left-sidebar"
import RightSidebar from "@/components/right-sidebar"
import TopNav from "@/components/top-nav"
import Image from 'next/image'
import Countdown from '@/components/countdown'
import Spaceship from "@/components/spaceship"


export default function Home() {
  const [startSpaceship, setStartSpaceship] = useState(false)

  useEffect(() => {
    // Check if we're navigating from another page (loader already completed)
    const loaderAlreadyCompleted = sessionStorage.getItem('loaderCompleted') === 'true'
    
    if (loaderAlreadyCompleted) {
      // Start spaceship immediately on page navigation
      setStartSpaceship(true)
    } else {
      // Listen for when the loader completes (first load)
      const handleLoaderComplete = () => {
        setStartSpaceship(true)
        sessionStorage.setItem('loaderCompleted', 'true')
      }
      window.addEventListener('spaceshipStart', handleLoaderComplete)
      return () => window.removeEventListener('spaceshipStart', handleLoaderComplete)
    }
  }, [])

  return (
    <div className="relative min-h-screen">
      <LeftSidebar />
      <RightSidebar />
      <TopNav />

      <div className="absolute inset-0 pointer-events-none z-30">
        <Spaceship startAnimation={startSpaceship} />
      </div>

      <div className="flex-1 flex items-center justify-center min-h-screen px-2 sm:px-4 md:px-8 lg:px-16">
        <div className="text-center w-full md:max-w-2xl mx-auto">
          <div
            className="mx-auto w-full md:max-w-2xl transform -translate-y-48 sm:-translate-y-52 md:-translate-y-16"
          >
            <Image
              src="/Technex_26_name.webp"
              alt="Technex 2026"
              width={1600}
              height={700}
              className="w-full h-auto object-contain mx-auto"
            />
          </div>
          <div className="-mt-44 sm:-mt-48 md:mt-0">
            <Countdown targetDate={new Date(2025, 11, 18, 9, 0, 0)} />
            
            {/* Register Button */}
            <div className="mt-10 sm:mt-12 flex justify-center">
              <style dangerouslySetInnerHTML={{__html: `
                @keyframes button-glow {
                  0%, 100% { box-shadow: 0 0 15px rgba(168,85,247,0.4), 0 0 30px rgba(168,85,247,0.2); }
                  50% { box-shadow: 0 0 20px rgba(168,85,247,0.6), 0 0 40px rgba(168,85,247,0.3), 0 0 60px rgba(168,85,247,0.1); }
                }
                @keyframes button-shimmer {
                  0% { transform: translateX(-100%); }
                  100% { transform: translateX(100%); }
                }
                .animate-button-glow {
                  animation: button-glow 2s ease-in-out infinite;
                }
                .animate-button-shimmer {
                  animation: button-shimmer 3s infinite;
                }
              `}} />
              <button
                className="relative px-4 py-2.5 sm:px-6 sm:py-3 
                          bg-white/5 backdrop-blur-md
                          border-2 border-purple-400/30 rounded-xl
                          text-white font-semibold text-xs sm:text-base
                          overflow-hidden
                          animate-button-glow
                          hover:bg-white/10 hover:border-purple-400/50 hover:scale-105
                          active:scale-95
                          transition-all duration-300 ease-out
                          group"
                onClick={() => window.location.href = '/events'}
              >
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 via-pink-500/8 to-blue-500/15 
                              group-hover:from-purple-500/25 group-hover:via-pink-500/15 group-hover:to-blue-500/25
                              transition-all duration-300" />
                
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                              -translate-x-full group-hover:animate-button-shimmer" />
                
                {/* Button text */}
                <span className="relative z-10 tracking-wide">
                  REGISTER NOW
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-5 left-0 right-0 flex justify-center z-10">
        <p className="text-white text-lg sm:text-xl md:text-3xl slide-up-bounce">
          Registrations are Live...!
        </p>
      </div>
      
      {/* Floating decorative image anchored to viewport bottom-right */}
      <Image
        src="/Floating_space.webp"
        alt="Floating space decoration"
        width={768}
        height={281}
        className="pointer-events-none fixed right-0 bottom-0 w-72 lg:w-96 object-contain opacity-95 z-10 animate-float-y hidden md:block"
      />

      {/* Bottom-left decorative Walle image - mobile version */}
      <Image
        src="/walle_mobile.webp"
        alt="Walle"
        width={320}
        height={320}
        className="pointer-events-none fixed bottom-16 left-3 z-20 w-28 sm:w-36 opacity-100 animate-float-y md:hidden"
        style={{ width: 'auto', color: 'transparent', height: '11rem' }}
      />
      
      {/* Bottom-left decorative Walle image - desktop version */}
      <Image
        src="/walle.webp"
        alt="Walle"
        width={320}
        height={320}
        className="pointer-events-none fixed bottom-0 left-3 z-20 transform translate-y-1 w-60 lg:w-72 opacity-100 animate-float-y hidden md:block"
      />
    </div>
  )
}