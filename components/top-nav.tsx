"use client"

import Link from "next/link"

export default function TopNav() {
  return (
    <nav className="fixed top-3 left-0 right-0 z-[9998] flex justify-center" style={{ height: '48px' }}>
      <div className="flex gap-6 sm:gap-10 md:gap-14 lg:gap-20 items-center h-full">
        <Link href="/workshops" className="group">
          <div className="text-base sm:text-xl md:text-3xl lg:text-4xl font-bold text-white transition-transform duration-200 ease-out whitespace-nowrap group-hover:scale-105">
            WORKSHOPS
          </div>
        </Link>

        <Link href="/events" className="group">
          <div className="text-base sm:text-xl md:text-3xl lg:text-4xl font-bold text-white transition-transform duration-200 ease-out whitespace-nowrap group-hover:scale-105">
            EVENTS
          </div>
        </Link>
      </div>
    </nav>
  )
}