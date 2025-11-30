"use client";
import { useState, useEffect } from 'react';
import VideoBackground from "@/components/video-background";
import Loader from "@/components/loader";
import PageTransitionLoader from "@/components/page-transition-loader";
import Image from "next/image";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // Check if loader has already been shown this session
    const loaderCompleted = sessionStorage.getItem('loaderCompleted') === 'true';
    
    if (loaderCompleted) {
      // Skip loader on subsequent navigation
      setIsLoading(false);
      setShowLoader(false);
    } else {
      // Show loader on first visit
      setShowLoader(true);
    }

    // Listen for loader completion
    const handleLoaderComplete = () => {
      setIsLoading(false);
      sessionStorage.setItem('loaderCompleted', 'true');
      // Trigger spaceship animation
      window.dispatchEvent(new Event('spaceshipStart'));
    };
    window.addEventListener('loaderComplete', handleLoaderComplete);
    
    // Fallback in case event doesn't fire
    const timeout = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem('loaderCompleted', 'true');
      window.dispatchEvent(new Event('spaceshipStart'));
    }, 16000);
    
    return () => {
      window.removeEventListener('loaderComplete', handleLoaderComplete);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {showLoader && <Loader onComplete={() => {
        setIsLoading(false);
        // Trigger spaceship immediately
        window.dispatchEvent(new Event('spaceshipStart'));
      }} />}
      
      {/* Page transition loader for navigation between pages */}
      <PageTransitionLoader />
      
      {/* Main content - starts hidden with opacity 0, fades in smoothly */}
      <div 
        className="transition-opacity duration-1000 ease-in"
        style={{ 
          opacity: isLoading ? 0 : 1,
          pointerEvents: isLoading ? 'none' : 'auto',
          visibility: isLoading ? 'hidden' : 'visible'
        }}
      >
        {/* Top-left clickable logo */}
        <div className="fixed top-3 left-3 z-[9999]">
          <a href="/" aria-label="Home" className="flex items-center gap-3">
            <Image
              src="/logo.webp"
              alt="Technex logo"
              width={44}
              height={44}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-md shadow-md"
            />
            <span className="hidden md:block text-sm xs:text-base text-white">
              TECHNEX 2025-26
            </span>
          </a>
        </div>

        <VideoBackground />

        {children}
      </div>
    </>
  );
}
