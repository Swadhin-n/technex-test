import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import LayoutWrapper from "@/components/layout-wrapper"
import "./globals.css"

export const metadata: Metadata = {
  title: "Technex",
  description: "Technex - Tech Events & Workshops",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/logo.webp" },
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#050714" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Science+Gothic:wght@100..900&display=swap%22" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'Science Gothic', sans-serif" }}>
        <LayoutWrapper>
          {children}
          <Analytics />
        </LayoutWrapper>
      </body>
    </html>
  )
}
