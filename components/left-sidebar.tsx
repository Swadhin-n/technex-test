"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home09Icon,
  Image01Icon,
  Award02Icon,
  InformationCircleIcon,
  UserGroupIcon,
} from "hugeicons-react";

// Local wrapper to support <HugeiconsIcon icon={...} /> usage
const HugeiconsIcon: React.FC<{
  icon: React.ElementType;
  size?: number;
  className?: string;
}> = ({ icon: Icon, size = 24, className }) => {
  return <Icon size={size} className={className} />;
};

type NavItem = {
  name: string;
  href: string;
  icon: React.ElementType | React.ReactNode;
};

const navItems: NavItem[] = [
  { name: "Home", href: "/", icon: Home09Icon },
  { name: "Gallery", href: "/gallery", icon: Image01Icon },
  { name: "Sponsors", href: "/sponsors", icon: Award02Icon },
  { name: "About Us", href: "/about", icon: InformationCircleIcon },
  { name: "Team", href: "/team", icon: UserGroupIcon },
];

export default function LeftSidebar() {
  const pathname = usePathname() || "/";

  const clipLeft: React.CSSProperties = {
    clipPath: "polygon(0 0, 100% 7%, 100% 93%, 0 100%)",
  };

  const renderIcon = (icon: NavItem["icon"], props: Record<string, any> = {}) => {
    if (React.isValidElement(icon)) return icon;

    const isRenderableComponent =
      typeof icon === "function" || (typeof icon === "object" && icon !== null && "render" in icon);

    if (isRenderableComponent) {
      const C = icon as React.ElementType;
      return <C {...props} />;
    }

    return icon as any;
  };

  return (
    <>
      {/* DESKTOP — ANGLED LEFT SIDEBAR */}
      <aside
        className="hidden md:flex fixed left-0 top-30 h-150 w-20 lg:w-20 z-50 flex-col items-center justify-center"
        style={{
          ...clipLeft,
          background:
            "linear-gradient(180deg, rgba(29, 16, 84, 0.2), rgba(17, 6, 45, 0.2))",
        }}
      >
        <div className="absolute inset-0 bg-purple-600/10 backdrop-blur-sm border-r border-white/5" />

        <div className="relative z-10 flex flex-col items-center w-full py-8 gap-8 h-fit">
          <nav className="flex flex-col items-center gap-6 w-full">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex flex-col items-center relative"
                >
                  <div
                    className={`p-2.5 rounded-lg transition-all ${
                      active
                        ? "bg-purple-600/60 border border-purple-400/60 scale-110"
                        : "bg-white/10 border border-white/10 hover:bg-purple-600/40 hover:border-purple-400/40"
                    }`}
                  >
                    {renderIcon(item.icon, {
                      className: `w-6 h-6 ${
                        active ? "text-white" : "text-purple-300"
                      }`,
                    })}
                  </div>
                  <span className="relative left-full transform translate-x-[-100%] mb-1 hidden group-hover:block bg-transparent text-white text-xs rounded px-2 py-1">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* MOBILE — FIXED BOTTOM NAVBAR */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full h-16 z-50 bg-purple-600/10 backdrop-blur-md border-t border-white/10 flex items-center justify-around px-4">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex flex-col items-center gap-1"
            >
              <div
                className={`p-2 rounded-md transition-all ${
                  active
                    ? "bg-purple-600/60 border border-purple-400/60 scale-110"
                    : "bg-white/5 border border-white/10"
                }`}
              >
                {renderIcon(item.icon, {
                  className: `w-5 h-5 ${
                    active ? "text-white" : "text-purple-300"
                  }`,
                })}
              </div>
              <span
                className={`text-[8px] ${
                  active ? "text-purple-300" : "text-gray-400"
                }`}
              >
                {item.name.split(" ")[0]}
              </span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
