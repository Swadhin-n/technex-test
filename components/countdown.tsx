"use client"
import React, { useEffect, useState } from 'react'

type CountdownProps = {
  /** target date or string; if omitted, defaults to 15 days from now */
  targetDate?: string | Date
}

// This helper handles the design of the individual glass rectangles
const TimeBox = ({ value, label }: { value: number; label: string }) => {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes gradient-shift {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 8px rgba(168,85,247,0.6)); }
          50% { filter: drop-shadow(0 0 12px rgba(168,85,247,0.9)) drop-shadow(0 0 20px rgba(168,85,247,0.5)); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        .animate-gradient-shift {
          animation: gradient-shift 2s ease-in-out infinite;
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}} />
      <div className="flex flex-col items-center justify-center 
                      w-12 h-14 sm:w-14 sm:h-16 md:w-16 md:h-18 
                      bg-white/6 backdrop-blur-md
                      border border-purple-400/30 rounded-lg 
                      shadow-[0_0_15px_rgba(168,85,247,0.3)]
                      animate-pulse
                      relative overflow-hidden p-1">
        
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-blue-500/20 
                        animate-gradient-shift" />
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                        -translate-x-full animate-shimmer" />
        
        {/* The Number */}
        <span className="relative z-10 text-lg sm:text-xl md:text-2xl font-semibold text-white 
                         animate-glow">
          {value < 10 ? `0${value}` : value}
        </span>
        
        {/* The Label */}
        <span className="relative z-10 text-[8px] sm:text-[9px] text-purple-200 uppercase tracking-widest mt-1">
          {label}
        </span>
      </div>
    </>
  );
};

export default function Countdown({ targetDate }: CountdownProps) {
  const computeTarget = () => {
    if (targetDate) return new Date(targetDate)
    return new Date(Date.now() + 15 * 24 * 60 * 60 * 1000) // default 15 days
  }

  // 1. Store target in state so it doesn't change on re-renders
  const [target] = useState<Date>(computeTarget())
  
  // 2. Start 'now' as null to prevent server/client mismatch
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    // 3. Set the time immediately on mount
    setNow(new Date())
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  // 4. Don't render anything until the client has loaded
  if (!now) return null;

  const diff = Math.max(0, target.getTime() - now.getTime())
  const days = Math.floor(diff / (24 * 60 * 60 * 1000))
  const hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
  const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000))
  const seconds = Math.floor((diff % (60 * 1000)) / 1000)

  const ariaLabel = (unit: string, value: number) => `${value} ${unit}`

  return (
    <div className="mt-3 sm:mt-6 flex items-center justify-center px-2">
      <div className="flex flex-wrap gap-1.5 sm:gap-2.5 justify-center">
        <TimeBox value={days} label="Days" />
        <TimeBox value={hours} label="Hours" />
        <TimeBox value={minutes} label="Min" />
        <TimeBox value={seconds} label="Sec" />
      </div>
    </div>
  )
}
