"use client"

import Link from "next/link"

export default function TopNav() {
  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-40 pt-4 md:pt-8 px-4">
      <div className="flex gap-8 md:gap-16 lg:gap-24 items-center">
        <Link href="/workshops" className="group relative">
          <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white transition-all duration-300 ">
            WORKSHOPS
          </div>
          <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
        </Link>

        <Link href="/events" className="group relative">
          <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white transition-all duration-300 group-hover:text-blue-400">
            EVENTS
          </div>
          <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
        </Link>
      </div>
    </div>
  )
}
