"use client"
import React, { useEffect, useState } from 'react'

type CountdownProps = {
  /** target date or string; if omitted, defaults to 15 days from now */
  targetDate?: string | Date
}

// This helper handles the design of the individual glass rectangles
const TimeBox = ({ value, label }: { value: number; label: string }) => {
  return (
    <div className="flex flex-col items-center justify-center 
                    w-12 h-14 sm:w-14 sm:h-16 md:w-16 md:h-18 
                    bg-white/4 backdrop-blur-sm 
                    border border-white/12 rounded-lg 
                    shadow-[0_1px_8px_rgba(0,0,0,0.06)] p-1">
      
      {/* The Number - slightly smaller for compact layout */}
      <span className="text-lg sm:text-xl md:text-2xl font-semibold text-white font-serif drop-shadow-sm">
        {value < 10 ? `0${value}` : value}
      </span>
      
      {/* The Label */}
      <span className="text-[8px] sm:text-[9px] text-gray-300 uppercase tracking-widest mt-1 font-sans">
        {label}
      </span>
    </div>
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
