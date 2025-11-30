"use client"

import LeftSidebar from "@/components/left-sidebar"
import RightSidebar from "@/components/right-sidebar"
import TopNav from "@/components/top-nav"

export default function Sponsors() {
  return (
    <div className="relative min-h-screen text-white">
      <LeftSidebar />
      <RightSidebar />
      <TopNav />

      <div className="flex-1 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-20">
        <div className="text-center mt-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold animate-title-shimmer">Coming Soon</h1>
          <p className="text-gray-300 mt-2 animate-fade">Sponsored by partners. Announcing shortly.</p>
        </div>

        {/* Badges removed as requested */}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-title-shimmer {
          background: linear-gradient(90deg, rgba(255,255,255,0.2), rgba(255,255,255,0.85), rgba(255,255,255,0.2));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          background-size: 200% 100%;
          animation: shimmer 2.5s linear infinite;
          text-shadow: 0 0 10px rgba(255,255,255,0.15);
        }
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .animate-fade { animation: fadeInOut 3s ease-in-out infinite; }
        /* Badge styles removed */
      `}</style>
    </div>
  )
}
