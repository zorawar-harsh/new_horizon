import React, { useState } from "react";
import { Building2, Droplets, Sprout, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PillarsSection() {
  const [tab, setTab] = useState<"pillars" | "pathway">("pillars");

  return (
    <section id="pathways" className="py-14 md:py-20 bg-[#FAF9F5] border-t border-[#E2DDD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header with Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF4E8] text-[#12560E] text-xs font-bold uppercase tracking-wider">
              Three Pillars & Scale
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1C19] tracking-tight">
              Holistic Action Model
            </h2>
            <p className="text-sm sm:text-base text-[#5A6255]">
              Targeting heat relief, decentralized water/waste circularity, and accredited vocational skills.
            </p>
          </div>

          <div className="p-1 rounded-xl bg-white border border-[#E2DDD2] flex items-center shadow-xs self-start md:self-auto">
            <button
              onClick={() => setTab("pillars")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                tab === "pillars"
                  ? "bg-[#12560E] text-white shadow-xs"
                  : "text-[#5A6255] hover:text-[#1A1C19]"
              }`}
            >
              Three Core Pillars
            </button>
            <button
              onClick={() => setTab("pathway")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                tab === "pathway"
                  ? "bg-[#12560E] text-white shadow-xs"
                  : "text-[#5A6255] hover:text-[#1A1C19]"
              }`}
            >
              Replication Pathway
            </button>
          </div>
        </div>

        {/* Tab 1: Three Pillars */}
        {tab === "pillars" ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Pillar I */}
            <div className="p-6 rounded-3xl bg-white border border-[#E2DDD2] shadow-xs flex flex-col justify-between hover:border-[#A8CCA0] transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#12560E] bg-[#EBF4E8] px-2 py-0.5 rounded-md">
                    Pillar 01
                  </span>
                  <div className="p-2 rounded-xl bg-[#EBF4E8] text-[#12560E]">
                    <Building2 className="size-5" />
                  </div>
                </div>

                <h3 className="text-lg font-black text-[#1A1C19]">
                  Resilient Infrastructure
                </h3>

                <ul className="space-y-2 pt-2 border-t border-[#F0EDE4] text-xs text-[#3A4036]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-[#12560E] shrink-0 mt-0.5" />
                    <span><strong>Cool Roofs:</strong> Lowers ceiling heat by up to 12°C</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-[#12560E] shrink-0 mt-0.5" />
                    <span><strong>Reed Shading:</strong> Deflects 65% direct radiant glare</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-[#12560E] shrink-0 mt-0.5" />
                    <span><strong>Louvers:</strong> Passive night-time air change boost</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 mt-2">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full border-[#CDE5C2] text-[#12560E] hover:bg-[#EBF4E8] font-bold text-xs h-9 rounded-xl"
                >
                  <a href="#donate" className="flex items-center justify-center gap-1.5">
                    <span>Support Pillar</span>
                    <ArrowRight className="size-3" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Pillar II */}
            <div className="p-6 rounded-3xl bg-white border border-[#E2DDD2] shadow-xs flex flex-col justify-between hover:border-[#A8CCA0] transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#12560E] bg-[#EBF4E8] px-2 py-0.5 rounded-md">
                    Pillar 02
                  </span>
                  <div className="p-2 rounded-xl bg-[#EBF4E8] text-[#12560E]">
                    <Droplets className="size-5" />
                  </div>
                </div>

                <h3 className="text-lg font-black text-[#1A1C19]">
                  Water & Circular Waste
                </h3>

                <ul className="space-y-2 pt-2 border-t border-[#F0EDE4] text-xs text-[#3A4036]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-[#12560E] shrink-0 mt-0.5" />
                    <span><strong>Monsoon Rain:</strong> 450,000L stored in sand filters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-[#12560E] shrink-0 mt-0.5" />
                    <span><strong>Vermicompost:</strong> 250kg kitchen scraps recycled daily</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-[#12560E] shrink-0 mt-0.5" />
                    <span><strong>Greywater:</strong> Reed beds reclaim 8,000L daily for crops</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 mt-2">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full border-[#CDE5C2] text-[#12560E] hover:bg-[#EBF4E8] font-bold text-xs h-9 rounded-xl"
                >
                  <a href="#donate" className="flex items-center justify-center gap-1.5">
                    <span>Support Pillar</span>
                    <ArrowRight className="size-3" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Pillar III */}
            <div className="p-6 rounded-3xl bg-white border border-[#E2DDD2] shadow-xs flex flex-col justify-between hover:border-[#A8CCA0] transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#12560E] bg-[#EBF4E8] px-2 py-0.5 rounded-md">
                    Pillar 03
                  </span>
                  <div className="p-2 rounded-xl bg-[#EBF4E8] text-[#12560E]">
                    <Sprout className="size-5" />
                  </div>
                </div>

                <h3 className="text-lg font-black text-[#1A1C19]">
                  Wellbeing & Vocational Skills
                </h3>

                <ul className="space-y-2 pt-2 border-t border-[#F0EDE4] text-xs text-[#3A4036]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-[#12560E] shrink-0 mt-0.5" />
                    <span><strong>1.2 Acres Beds:</strong> Fresh chemical-free greens for mess</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-[#12560E] shrink-0 mt-0.5" />
                    <span><strong>Eco-Stewards:</strong> Joint warden & inmate classes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-[#12560E] shrink-0 mt-0.5" />
                    <span><strong>Accredited Cert:</strong> Vocational credential for release</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 mt-2">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full border-[#CDE5C2] text-[#12560E] hover:bg-[#EBF4E8] font-bold text-xs h-9 rounded-xl"
                >
                  <a href="#donate" className="flex items-center justify-center gap-1.5">
                    <span>Support Pillar</span>
                    <ArrowRight className="size-3" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-6 rounded-3xl bg-white border border-[#E2DDD2] shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
              <div className="space-y-1">
                <span className="font-extrabold text-[#12560E] uppercase tracking-wider block">
                  Step 01 • Diagnostic Audit
                </span>
                <p className="font-bold text-sm text-[#1A1C19]">20+ Hotspots Evaluated</p>
                <p className="text-[#5A6255]">Rapid thermal imaging, water balances, and waste audits in 14 days.</p>
              </div>

              <div className="space-y-1">
                <span className="font-extrabold text-[#12560E] uppercase tracking-wider block">
                  Step 02 • Fast Retrofit
                </span>
                <p className="font-bold text-sm text-[#1A1C19]">Standard 30 Actions</p>
                <p className="text-[#5A6255]">Security-cleared materials installed using trained inmate cohorts.</p>
              </div>

              <div className="space-y-1">
                <span className="font-extrabold text-[#12560E] uppercase tracking-wider block">
                  Step 03 • National Policy
                </span>
                <p className="font-bold text-sm text-[#1A1C19]">Directorate Integration</p>
                <p className="text-[#5A6255]">Replication manual for state prison departments and welfare funds.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
