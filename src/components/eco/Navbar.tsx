import React, { useState } from "react";
import { Menu, X, BookOpen, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { BrochureModal } from "./BrochureModal";

const navItems = [
  { label: "Overview", href: "#hero" },
  { label: "Crisis", href: "#crisis" },
  { label: "Model", href: "#model" },
  { label: "Blueprint", href: "#facility-blueprint" },
  { label: "30 Actions", href: "#climate-actions" },
  { label: "Impact", href: "#impact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [brochureOpen, setBrochureOpen] = useState(false);

  return (
    <>
      {/* Top Banner Announcement Pill */}
      <div className="bg-[#12560E] text-white text-[11px] sm:text-xs py-1.5 px-3 sm:px-4 font-semibold border-b border-[#0D3F0A]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black bg-[#B9F079] text-[#12560E] uppercase tracking-wider shrink-0">
              Nuh Pilot Active
            </span>
            <span className="text-white/90 text-[11px] sm:text-xs truncate hidden xs:inline sm:inline">
              Validated by Prisons Dept., Haryana & Rainmatter
            </span>
          </div>
          <div className="text-[10px] sm:text-[11px] text-white/80 font-medium shrink-0">
            <span className="hidden xs:inline">Section 12A & </span>80G Certified
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-[#E2DDD2] transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 sm:h-20 md:h-24 px-3 sm:px-6">
          {/* Prominently Enlarged Logo */}
          <div className="flex items-center py-1 sm:py-2">
            <Logo size="md" />
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 text-sm font-bold text-[#4B5346] hover:text-[#12560E] hover:bg-[#EBF4E8] rounded-xl transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setBrochureOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold border-[#CDE5C2] bg-white text-[#12560E] hover:bg-[#EBF4E8] h-10 px-4 rounded-xl"
            >
              <BookOpen className="size-4 text-[#52A638]" />
              Field Brochure
            </Button>

            <Button
              size="sm"
              asChild
              className="bg-[#12560E] hover:bg-[#0E3E0A] text-white text-xs sm:text-sm font-bold shadow-xs h-9 sm:h-10 px-3 sm:px-5 rounded-xl"
            >
              <a href="#donate" className="flex items-center gap-1.5 sm:gap-2">
                <Heart className="size-3.5 sm:size-4 fill-[#B9F079] text-[#B9F079] shrink-0" />
                <span>Donate <span className="hidden xs:inline">(80G)</span></span>
              </a>
            </Button>

            {/* Mobile menu trigger */}
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex lg:hidden p-2 sm:p-2.5 rounded-xl text-[#1A1C19] hover:bg-[#EBF4E8] border border-[#E2DDD2] touch-manipulation"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF9F5] border-b border-[#E2DDD2] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-150">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-base font-bold text-[#1A1C19] hover:bg-[#EBF4E8] rounded-xl transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-[#E2DDD2] flex flex-col gap-2.5">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setBrochureOpen(true);
                  }}
                  className="w-full justify-center border-[#CDE5C2] text-[#12560E] font-bold"
                >
                  <BookOpen className="size-4 mr-2" /> Field Brochure
                </Button>
                <Button
                  size="lg"
                  asChild
                  className="w-full justify-center bg-[#12560E] text-white font-bold"
                >
                  <a href="#donate" onClick={() => setMobileMenuOpen(false)}>
                    <Heart className="size-4 mr-2 text-[#B9F079] fill-[#B9F079]" /> Donate (80G Tax-Exempt)
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <BrochureModal open={brochureOpen} onOpenChange={setBrochureOpen} />
    </>
  );
}
