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

export function Hero() {
  const [brochureOpen, setBrochureOpen] = useState(false);

  return (
    <section id="hero" className="relative pt-6 pb-14 md:pt-10 md:pb-20 overflow-hidden">
      {/* Dynamic ambient gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 -z-10 w-[700px] h-[350px] bg-gradient-to-r from-[#B9F079]/25 via-[#52A638]/20 to-[#FAF9F5] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF4E8] border border-[#CDE5C2] text-[#12560E] text-xs font-extrabold uppercase tracking-wider mb-6 shadow-2xs">
          <span className="size-2 rounded-full bg-[#52A638] animate-pulse" />
          <span>Towards Climate-Resilient Adaptive Prisons • Prioritising Prisoner Wellbeing</span>
        </div>

        {/* Large Vibrant Headline */}
        <div className="max-w-4xl space-y-4 mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-[#1A1C19] tracking-tight leading-[1.03]">
            Where Second Chances <br />
            <span className="bg-gradient-to-r from-[#12560E] via-[#2E7D32] to-[#7CA123] bg-clip-text text-transparent">
              Transform Prisons.
            </span>
          </h1>

          <p className="text-lg sm:text-2xl text-[#3D4539] font-medium leading-relaxed max-w-2xl pt-1">
            TYCIA Foundation's flagship model turning high-heat, high-density prisons into
            climate-adaptive, regenerative spaces.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12">
          <Button
            asChild
            size="lg"
            className="bg-[#12560E] hover:bg-[#0D3F0A] text-white font-extrabold text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 rounded-2xl shadow-md transition-transform hover:scale-[1.02]"
          >
            <a href="#donate" className="flex items-center gap-2.5">
              <span>Support Mission (80G Tax-Exempt)</span>
              <ArrowRight className="size-4" />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-[#CDE5C2] bg-white text-[#12560E] hover:bg-[#EBF4E8] font-bold text-sm sm:text-base h-12 sm:h-14 px-6 rounded-2xl shadow-2xs"
          >
            <a href="#facility-blueprint" className="flex items-center gap-2">
              <Compass className="size-4 text-[#52A638]" />
              <span>Explore Pilot Model</span>
            </a>
          </Button>

          <Button
            variant="ghost"
            size="lg"
            onClick={() => setBrochureOpen(true)}
            className="text-[#4B5346] hover:text-[#12560E] hover:bg-[#EBF4E8] font-bold text-sm h-12 sm:h-14 px-5 rounded-2xl"
          >
            <FileText className="size-4 mr-2 text-[#52A638]" />
            <span>Field Publication</span>
          </Button>
        </div>

        {/* 4 Clean Visual Stat Blocks (Bento Style) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="p-5 rounded-3xl bg-white border border-[#E2DDD2] shadow-xs hover:border-[#A8CCA0] transition-all">
            <div className="size-10 rounded-2xl bg-[#EBF4E8] flex items-center justify-center text-[#12560E] mb-3">
              <ThermometerSnowflake className="size-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-[#12560E] tracking-tight">
              -3.5°C to -5.2°C
            </div>
            <p className="text-xs font-bold text-[#1A1C19] mt-1">Cool-Roof Barracks</p>
            <p className="text-[11px] text-[#5A6255] mt-0.5">High-albedo solar barrier</p>
          </div>

          <div className="p-5 rounded-3xl bg-white border border-[#E2DDD2] shadow-xs hover:border-[#A8CCA0] transition-all">
            <div className="size-10 rounded-2xl bg-[#EBF4E8] flex items-center justify-center text-[#12560E] mb-3">
              <Droplets className="size-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-[#12560E] tracking-tight">
              450,000 L
            </div>
            <p className="text-xs font-bold text-[#1A1C19] mt-1">Monsoon Water Harvested</p>
            <p className="text-[11px] text-[#5A6255] mt-0.5">Sumps & aquifer recharge</p>
          </div>

          <div className="p-5 rounded-3xl bg-white border border-[#E2DDD2] shadow-xs hover:border-[#A8CCA0] transition-all">
            <div className="size-10 rounded-2xl bg-[#EBF4E8] flex items-center justify-center text-[#12560E] mb-3">
              <Sprout className="size-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-[#12560E] tracking-tight">
              1.2 Acres
            </div>
            <p className="text-xs font-bold text-[#1A1C19] mt-1">Living Farm Canopy</p>
            <p className="text-[11px] text-[#5A6255] mt-0.5">420kg fresh greens/cycle</p>
          </div>

          <div className="p-5 rounded-3xl bg-white border border-[#E2DDD2] shadow-xs hover:border-[#A8CCA0] transition-all">
            <div className="size-10 rounded-2xl bg-[#EBF4E8] flex items-center justify-center text-[#12560E] mb-3">
              <Recycle className="size-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-[#12560E] tracking-tight">
              250 kg/day
            </div>
            <p className="text-xs font-bold text-[#1A1C19] mt-1">Mess Waste Composted</p>
            <p className="text-[11px] text-[#5A6255] mt-0.5">100% kitchen diversion</p>
          </div>
        </div>

        {/* Partners Strip */}
        <div className="p-4 rounded-2xl bg-[#F4F3ED] border border-[#E2DDD2] flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="font-extrabold uppercase tracking-wider text-[#5A6255] text-[11px]">
            Validated & Supported By:
          </span>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-bold text-[#1A1C19]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-[#12560E]" /> Haryana Prisons Dept.
            </span>
            <span className="flex items-center gap-1.5">
              <Sprout className="size-4 text-[#52A638]" /> Rainmatter Foundation (Zerodha)
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-[#7CA123]" /> Fertile Beeghas
            </span>
          </div>
        </div>
      </div>

      <BrochureModal open={brochureOpen} onOpenChange={setBrochureOpen} />
    </section>
  );
}
