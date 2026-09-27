import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
}

export function Logo({ className = "", size = "md", showTagline = true }: LogoProps) {
  // Height configurations - significantly enlarged as requested
  const heightClasses = {
    sm: "h-11 sm:h-12",
    md: "h-16 sm:h-20",
    lg: "h-20 sm:h-24",
    xl: "h-24 sm:h-28",
  };

  return (
    <a
      href="#hero"
      aria-label="Eco-Reform Home"
      className={`inline-flex items-center gap-2 group transition-transform duration-200 hover:scale-[1.02] ${className}`}
    >
      <div className="overflow-hidden rounded-md inline-flex items-center">
        <img
          src="/images/logo.png"
          alt="Eco-Reform - Towards Climate-Resilient Adaptive Prisons"
          className={`${heightClasses[size]} w-auto object-contain [clip-path:inset(2px_0_0_0)]`}
          onError={(e) => {
          const target = e.currentTarget;
          target.style.display = "none";
          const fallback = target.nextElementSibling as HTMLElement | null;
          if (fallback) fallback.style.display = "flex";
        }}
      />
      </div>
      {/* SVG Fallback */}
      <div className="hidden items-center gap-2" style={{ display: "none" }}>
        <div className="flex items-center justify-center size-12 rounded-full bg-[#12560E] text-[#B9F079] font-black text-xl">
          e
        </div>
        <div className="flex flex-col">
          <span className="font-black text-2xl tracking-tight text-[#4EA738] leading-none">
            eCO-REFORM
          </span>
          {showTagline && (
            <span className="text-[9px] font-bold text-[#12560E] tracking-wider uppercase mt-1">
              Towards Climate-Resilient Adaptive Prisons
            </span>
          )}
        </div>
      </div>
    </a>
  );
}
