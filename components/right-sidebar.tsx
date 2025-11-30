"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// HUGEICONS
import {
  InstagramIcon,
  Facebook01Icon,
  YoutubeIcon,
  Linkedin01Icon,
  NewTwitterRectangleIcon,
} from "hugeicons-react";

type NavItem = {
  name: string;
  href: string;
  icon: React.ComponentType<any>;
};

const navItems: NavItem[] = [
  { name: "Instagram", href: "https://www.instagram.com/technex_svpcet_nagpur/?hl=en", icon: InstagramIcon },
  { name: "Facebook", href: "https://www.facebook.com/stvincentngp/", icon: Facebook01Icon },
  { name: "YouTube", href: "https://youtu.be/bCcJIvfuiRc?si=bYSNiLfIxK33WN9e", icon: YoutubeIcon },
  { name: "LinkedIn", href: "https://www.linkedin.com/school/svpcet/posts/?feedView=all", icon: Linkedin01Icon },
  { name: "X", href: "https://x.com/techpallottines", icon: NewTwitterRectangleIcon },
];

export default function RightSidebar() {
  const pathname = usePathname() || "/";

  const clipRight: React.CSSProperties = {
    clipPath: "polygon(0 7%, 100% 0, 100% 100%, 0 93%)",
  };

  return (
    <>
      {/* DESKTOP — RIGHT SIDEBAR */}
      <aside
        className="hidden md:flex fixed right-0 top-30 h-150 w-20 lg:w-20 z-50 flex-col items-center justify-center"
        style={{
          ...clipRight,
          background:
            "linear-gradient(180deg, rgba(29, 16, 84, 0.2), rgba(17, 6, 45, 0.2))",
        }}
      >
        <div className="absolute inset-0 bg-purple-600/10 backdrop-blur-sm border-l border-white/5" />

        <div className="relative z-10 flex flex-col items-center w-full py-8 gap-8">

          {/* NAV */}
          <nav className="flex flex-col items-center gap-6 w-full">
            {navItems.map((item) => {
              const active = pathname === item.href;
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex flex-col items-center relative"
                >
                  <div
                    className={`p-2.5 rounded-lg transition-all duration-300 ease-out ${
                      active
                        ? "bg-purple-600/60 border border-purple-400/60 scale-110"
                        : "bg-white/10 border border-white/10 hover:bg-purple-600/40 hover:border-purple-400/40 hover:scale-105"
                    }`}
                  >
                    <IconComponent
                      size={24}
                      className={`transition-colors duration-300 ${
                        active ? "text-white" : "text-purple-300 group-hover:text-white"
                      }`}
                    />
                  </div>
                  <span className="absolute top-full mt-2 whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none text-white text-xs transition-opacity duration-300 ease-out">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
