"use client";
import { useEffect, useRef, useState } from 'react';

interface LoaderProps {
  onComplete?: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    // Start fade-out transition and notify parent immediately when video ends
    const onEnded = () => {
      setFadeOut(true);
      // Notify parent immediately so spaceship can start
      onComplete?.();
      // Remove from DOM after fade animation completes
      setTimeout(() => {
        setVisible(false);
      }, 800);
    };
    vid.addEventListener('ended', onEnded, { once: true });

    // Extended fallback: if playback fails or is blocked, fade out after 15s (enough for full video)
    const fallback = setTimeout(() => {
      setFadeOut(true);
      onComplete?.();
      setTimeout(() => {
        setVisible(false);
      }, 800);
    }, 15000);

    return () => {
      vid.removeEventListener('ended', onEnded);
      clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;
    // Autoplay attempt; some browsers require muted + playsInline
    videoRef.current.play().catch(() => {});
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] bg-black flex items-center justify-center transition-opacity duration-700 ease-in-out overflow-hidden"
      style={{ 
        opacity: fadeOut ? 0 : 1,
        pointerEvents: 'none',
        touchAction: 'none',
        userSelect: 'none'
      }}
    >
      <div 
        className="w-full h-full transition-opacity duration-700 ease-in-out"
        style={{ 
          opacity: fadeOut ? 0 : 1,
          pointerEvents: 'none',
          touchAction: 'none'
        }}
      >
        <video
          ref={videoRef}
          src="/Loader.webm"
          autoPlay
          muted
          // Do not loop; we want it to play fully once
          loop={false}
          playsInline
          className="w-full h-full object-contain md:object-cover pointer-events-none"
          style={{ 
            pointerEvents: 'none',
            touchAction: 'none',
            userSelect: 'none'
          }}
        />
      </div>
    </div>
  );
}
