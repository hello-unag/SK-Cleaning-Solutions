"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  layout?: "horizontal" | "vertical";
  theme?: "light" | "dark" | "responsive";
  isScrolled?: boolean;
  isOpen?: boolean;
}

export function Logo({
  className,
  layout = "horizontal",
  theme = "responsive",
}: LogoProps) {
  
  const isDark = theme === "dark";

  // Vertical Layout (always wrapped in a white card to show original colors)
  if (layout === "vertical") {
    return (
      <div 
        className={cn(
          "bg-white rounded-2xl shadow-premium border border-secondary/15 p-6 flex flex-col items-center justify-center overflow-hidden max-w-[320px] mx-auto hover:shadow-premium-hover hover:border-secondary/35 transition-all duration-500",
          className
        )}
      >
        <img
          src="/logo.png"
          alt="SK Cleaning Solutions Logo"
          className="h-32 w-auto object-contain select-none pointer-events-none"
          style={{ imageRendering: "-webkit-optimize-contrast" }}
        />
      </div>
    );
  }

  // Horizontal Layout on a Dark Background: wrapped in a rounded white badge to protect original colors
  if (isDark) {
    return (
      <div 
        className={cn(
          "bg-white rounded-xl shadow-premium border border-secondary/15 px-5 py-3 flex items-center justify-center overflow-hidden h-20 hover:shadow-premium-hover hover:border-secondary/30 transition-all duration-300",
          className
        )}
      >
        <img
          src="/logo.png"
          alt="SK Cleaning Solutions Logo"
          className="h-full w-auto object-contain select-none pointer-events-none"
          style={{ imageRendering: "-webkit-optimize-contrast" }}
        />
      </div>
    );
  }

  // Plain horizontal logo (for light backgrounds like the white glass navbar)
  // Rendered natively with zero CSS filters to guarantee razor-sharp clarity
  return (
    <img
      src="/logo.png"
      alt="SK Cleaning Solutions Logo"
      className={cn(
        "h-14 sm:h-20 w-auto object-contain select-none pointer-events-none transition-all duration-300",
        className
      )}
      style={{ imageRendering: "-webkit-optimize-contrast" }}
    />
  );
}
