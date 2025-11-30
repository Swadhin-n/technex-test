"use client"

import LeftSidebar from "@/components/left-sidebar"
import RightSidebar from "@/components/right-sidebar"
import TopNav from "@/components/top-nav"

export default function Sponsors() {
  return (
    <div className="relative min-h-screen">
      <LeftSidebar />
      <RightSidebar />
      <TopNav />

      <div className="flex-1 flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Our Sponsors</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-300">
            Meet the amazing organizations supporting Technex.
          </p>
        </div>
      </div>
    </div>
  )
}
