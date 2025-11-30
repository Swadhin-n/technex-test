"use client"

export default function VideoBackground() {
  return (
    <video autoPlay muted loop playsInline className="fixed inset-0 w-full h-full object-cover -z-10">
      <source src="/TNX_bg.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>
  )
}
