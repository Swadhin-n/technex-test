"use client"
import LeftSidebar from "@/components/left-sidebar"
import RightSidebar from "@/components/right-sidebar"
import TopNav from "@/components/top-nav"
import Image from 'next/image'
import Countdown from '@/components/countdown'


export default function Home() {
  return (
    <div className="relative min-h-screen">
      <LeftSidebar />
      <RightSidebar />
      <TopNav />

      <div className="flex-1 flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mx-auto max-w-md sm:max-w-lg transform -translate-y-12 sm:-translate-y-16">
            <Image
              src="/Technex_26_name.webp"
              alt="Technex 2026"
              width={600}
              height={200}
              className="w-full h-auto object-contain"
            />
          </div>
          <Countdown targetDate={new Date(2025, 11, 18, 9, 0, 0)} />
        </div>
      </div>
      {/* Floating decorative image anchored to viewport bottom-right */}
      <Image
        src="/Floating_space.webp"
        alt="Floating space decoration"
        width={768}
        height={281}
        className="pointer-events-none fixed right-0 bottom-0 sm:right-0 sm:bottom-0 md:right-0 md:bottom-0 w-40 sm:w-56 md:w-72 lg:w-96 object-contain opacity-95 z-[9999] animate-float-y"
      />
    </div>
  )
}

