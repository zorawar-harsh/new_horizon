import React, { useState } from "react";
import {
  ArrowRight,
  Compass,
  FileText,
  ShieldCheck,
  Sprout,
  CheckCircle2,
  Sparkles,
  ThermometerSnowflake,
  Droplets,
  Recycle,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrochureModal } from "./BrochureModal";
import heroBg from "@/images/6fdf7437-ffc7-46eb-b7c2-266c4119efc6.jpg";

export function Hero() {
  const [brochureOpen, setBrochureOpen] = useState(false);

  return (
    <section id="hero" className="relative pt-4 pb-12 sm:pt-6 sm:pb-16 md:pt-12 md:pb-24 overflow-hidden isolate">
      {/* Desktop/Tablet Background Image (Hidden on Phone Screens) */}
      <div className="hidden md:block absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src={heroBg}
          alt="TYCIA Foundation Prison Reform - Second Chances"
          className="w-full h-full object-cover object-[center_30%] scale-[1.02] filter contrast-[1.05] brightness-[1.02]"
        />
        {/* Directional gradient mask: solid/subtle cream wash on the left for text contrast, open on the right for handshake */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F5]/92 via-[#FAF9F5]/75 sm:via-[#FAF9F5]/65 to-[#FAF9F5]/25" />
        {/* Vertical fades to seamlessly merge into the page */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F5]/50 via-transparent to-[#FAF9F5]" />
        {/* Subtle eco ambient tint */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#B9F079]/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#EBF4E8] border border-[#CDE5C2] text-[#12560E] text-[10px] sm:text-xs font-extrabold uppercase tracking-wider mb-4 sm:mb-6 shadow-2xs max-w-full">
          <span className="size-2 rounded-full bg-[#52A638] animate-pulse shrink-0" />
          <span className="truncate sm:whitespace-normal">Climate-Resilient Adaptive Prisons • Prioritising Wellbeing</span>
        </div>

        {/* Large Vibrant Headline */}
        <div className="max-w-4xl space-y-3 sm:space-y-4 mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-[#1A1C19] tracking-tight leading-[1.08] sm:leading-[1.03]">
            Where Second Chances <br />
            <span className="bg-gradient-to-r from-[#12560E] via-[#2E7D32] to-[#7CA123] bg-clip-text text-transparent">
              Transform Prisons.
            </span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-[#3D4539] font-medium leading-relaxed max-w-2xl pt-1">
            TYCIA Foundation's flagship model turning high-heat, high-density prisons into
            climate-adaptive, regenerative spaces.
          </p>
        </div>

        {/* Phone View: Dedicated Standalone Visual Block */}
        <div className="block md:hidden mb-7">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E2DDD2] bg-white shadow-sm">
            <div className="aspect-[16/10] w-full relative overflow-hidden">
              <img
                src={heroBg}
                alt="TYCIA Foundation Prison Reform - Second Chances"
                className="w-full h-full object-cover object-[center_35%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
              
              <div className="absolute top-2.5 left-2.5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-[#12560E]/90 text-white backdrop-blur-md shadow-xs">
                  <Sparkles className="size-3 text-[#B9F079]" />
                  <span>Second Chances in Action</span>
                </span>
              </div>

              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                <p className="text-xs font-bold leading-tight drop-shadow-sm">
                  Government & Institutional Partnership
                </p>
                <p className="text-[10px] text-white/80 mt-0.5 line-clamp-1">
                  Department of Prisons, Haryana & TYCIA Foundation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons - Fully Optimized for Mobile Stack and Touch */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 mb-8 sm:mb-12">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-[#12560E] hover:bg-[#0D3F0A] text-white font-extrabold text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 rounded-2xl shadow-md transition-transform hover:scale-[1.02] justify-center"
          >
            <a href="#donate" className="flex items-center justify-center gap-2.5">
              <span>Support Mission (80G Tax-Exempt)</span>
              <ArrowRight className="size-4 shrink-0" />
            </a>
          </Button>

          <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 sm:gap-3">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#CDE5C2] bg-white text-[#12560E] hover:bg-[#EBF4E8] font-bold text-xs sm:text-sm md:text-base h-11 sm:h-14 px-3 sm:px-6 rounded-2xl shadow-2xs justify-center"
            >
              <a href="#facility-blueprint" className="flex items-center justify-center gap-1.5 sm:gap-2">
                <Compass className="size-3.5 sm:size-4 text-[#52A638] shrink-0" />
                <span className="truncate">Explore Model</span>
              </a>
            </Button>

            <Button
              variant="ghost"
              size="lg"
              onClick={() => setBrochureOpen(true)}
              className="text-[#4B5346] hover:text-[#12560E] hover:bg-[#EBF4E8] font-bold text-xs sm:text-sm h-11 sm:h-14 px-3 sm:px-5 rounded-2xl justify-center border border-[#E2DDD2] sm:border-transparent"
            >
              <FileText className="size-3.5 sm:size-4 mr-1 sm:mr-2 text-[#52A638] shrink-0" />
              <span className="truncate">Field Brochure</span>
            </Button>
          </div>
        </div>

        {/* 4 Clean Visual Stat Blocks (Bento Style with Glassmorphism) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
          <div className="p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/90 backdrop-blur-md border border-[#E2DDD2]/90 shadow-xs hover:border-[#A8CCA0] hover:shadow-md transition-all">
            <div className="size-8 sm:size-10 rounded-xl sm:rounded-2xl bg-[#EBF4E8] flex items-center justify-center text-[#12560E] mb-2 sm:mb-3">
              <ThermometerSnowflake className="size-4 sm:size-5" />
            </div>
            <div className="text-lg sm:text-2xl lg:text-3xl font-black text-[#12560E] tracking-tight">
              -3.5°C to -5.2°C
            </div>
            <p className="text-[11px] sm:text-xs font-bold text-[#1A1C19] mt-0.5 sm:mt-1">Cool-Roof Barracks</p>
            <p className="text-[10px] sm:text-[11px] text-[#5A6255] mt-0.5">High-albedo solar barrier</p>
          </div>

          <div className="p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/90 backdrop-blur-md border border-[#E2DDD2]/90 shadow-xs hover:border-[#A8CCA0] hover:shadow-md transition-all">
            <div className="size-8 sm:size-10 rounded-xl sm:rounded-2xl bg-[#EBF4E8] flex items-center justify-center text-[#12560E] mb-2 sm:mb-3">
              <Droplets className="size-4 sm:size-5" />
            </div>
            <div className="text-lg sm:text-2xl lg:text-3xl font-black text-[#12560E] tracking-tight">
              450,000 L
            </div>
            <p className="text-[11px] sm:text-xs font-bold text-[#1A1C19] mt-0.5 sm:mt-1">Monsoon Water Harvested</p>
            <p className="text-[10px] sm:text-[11px] text-[#5A6255] mt-0.5">Sumps & aquifer recharge</p>
          </div>

          <div className="p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/90 backdrop-blur-md border border-[#E2DDD2]/90 shadow-xs hover:border-[#A8CCA0] hover:shadow-md transition-all">
            <div className="size-8 sm:size-10 rounded-xl sm:rounded-2xl bg-[#EBF4E8] flex items-center justify-center text-[#12560E] mb-2 sm:mb-3">
              <Sprout className="size-4 sm:size-5" />
            </div>
            <div className="text-lg sm:text-2xl lg:text-3xl font-black text-[#12560E] tracking-tight">
              1.2 Acres
            </div>
            <p className="text-[11px] sm:text-xs font-bold text-[#1A1C19] mt-0.5 sm:mt-1">Living Farm Canopy</p>
            <p className="text-[10px] sm:text-[11px] text-[#5A6255] mt-0.5">420kg fresh greens/cycle</p>
          </div>

          <div className="p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/90 backdrop-blur-md border border-[#E2DDD2]/90 shadow-xs hover:border-[#A8CCA0] hover:shadow-md transition-all">
            <div className="size-8 sm:size-10 rounded-xl sm:rounded-2xl bg-[#EBF4E8] flex items-center justify-center text-[#12560E] mb-2 sm:mb-3">
              <Recycle className="size-4 sm:size-5" />
            </div>
            <div className="text-lg sm:text-2xl lg:text-3xl font-black text-[#12560E] tracking-tight">
              250 kg/day
            </div>
            <p className="text-[11px] sm:text-xs font-bold text-[#1A1C19] mt-0.5 sm:mt-1">Mess Waste Composted</p>
            <p className="text-[10px] sm:text-[11px] text-[#5A6255] mt-0.5">100% kitchen diversion</p>
          </div>
        </div>

        {/* Partners Strip */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F4F3ED]/90 backdrop-blur-md border border-[#E2DDD2]/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 text-xs shadow-2xs">
          <span className="font-extrabold uppercase tracking-wider text-[#5A6255] text-[10px] sm:text-[11px]">
            Validated & Supported By:
          </span>
          <div className="flex flex-wrap items-center gap-2 sm:gap-6 font-bold text-[#1A1C19] text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-3.5 sm:size-4 text-[#12560E] shrink-0" /> Haryana Prisons Dept.
            </span>
            <span className="flex items-center gap-1.5">
              <Sprout className="size-3.5 sm:size-4 text-[#52A638] shrink-0" /> Rainmatter Foundation (Zerodha)
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="size-3.5 sm:size-4 text-[#7CA123] shrink-0" /> Fertile Beeghas
            </span>
          </div>
        </div>
      </div>

      <BrochureModal open={brochureOpen} onOpenChange={setBrochureOpen} />
    </section>
  );
}

