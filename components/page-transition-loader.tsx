"use client";
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransitionLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Skip transition on first load
    if (isFirstLoad) {
      setIsFirstLoad(false);
      return;
    }

    setIsLoading(true);
    setFadeOut(false);
    
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Remove from DOM after fade completes
      setTimeout(() => setIsLoading(false), 400);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div 
      className="fixed inset-0 z-[9998] bg-gradient-to-br from-black via-purple-950/20 to-black backdrop-blur-sm flex items-center justify-center transition-opacity duration-400 ease-in-out"
      style={{ opacity: fadeOut ? 0 : 1 }}
    >
      <div className="relative flex items-center justify-center">
        {/* Outer rotating ring */}
        <div className="absolute w-24 h-24 border-4 border-transparent border-t-purple-500 border-r-purple-400 rounded-full animate-spin"></div>
        
        {/* Middle rotating ring (opposite direction) */}
        <div className="absolute w-16 h-16 border-4 border-transparent border-b-pink-500 border-l-pink-400 rounded-full animate-spin-reverse"></div>
        
        {/* Inner pulsing core */}
        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-pulse shadow-lg shadow-purple-500/50"></div>
        
        {/* Glow effects */}
        <div className="absolute inset-0 w-24 h-24">
          <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
        </div>
        
        {/* Orbiting particles */}
        <div className="absolute w-2 h-2 bg-purple-400 rounded-full animate-orbit-1" style={{ boxShadow: '0 0 10px rgba(168,85,247,0.8)' }}></div>
        <div className="absolute w-2 h-2 bg-pink-400 rounded-full animate-orbit-2" style={{ boxShadow: '0 0 10px rgba(236,72,153,0.8)' }}></div>
      </div>
      
      {/* Loading text */}
      <div className="absolute bottom-1/3 text-white text-sm tracking-wider animate-pulse">
        Loading...
      </div>

      <style jsx>{`
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes orbit-1 {
          0% { transform: rotate(0deg) translateX(40px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(40px) rotate(-360deg); }
        }
        @keyframes orbit-2 {
          0% { transform: rotate(180deg) translateX(40px) rotate(-180deg); }
          100% { transform: rotate(540deg) translateX(40px) rotate(-540deg); }
        }
        .animate-spin-reverse {
          animation: spin-reverse 1.5s linear infinite;
        }
        .animate-orbit-1 {
          animation: orbit-1 2s linear infinite;
        }
        .animate-orbit-2 {
          animation: orbit-2 2s linear infinite;
        }
      `}</style>
    </div>
  );
}
