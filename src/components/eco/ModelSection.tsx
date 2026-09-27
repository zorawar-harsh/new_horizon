import React, { useState } from "react";
import {
  Search,
  GraduationCap,
  Hammer,
  TestTube,
  Share2,
  CheckCircle2,
  ArrowRight,
  Compass,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const stages = [
  {
    phase: "01",
    title: "Assessment",
    metric: "Thermal Spikes >44°C",
    description: "Auditing indoor heat, water stress, and organic waste baselines across barracks.",
    icon: Search,
  },
  {
    phase: "02",
    title: "Eco-Stewards",
    metric: "120+ Trainees",
    description: "Interactive workshops uniting wardens and incarcerated cohorts in hands-on stewardship.",
    icon: GraduationCap,
  },
  {
    phase: "03",
    title: "Interventions",
    metric: "30 Custodial Actions",
    description: "Low-cost physical retrofits: cool roofs, reed shading, sumps, and vermiculture.",
    icon: Hammer,
  },
  {
    phase: "04",
    title: "Demonstration",
    metric: "3.5°C Cooling Verified",
    description: "Live operational testing at Nuh District Jail tracking heat drops and organic harvests.",
    icon: TestTube,
  },
  {
    phase: "05",
    title: "Replication",
    metric: "Pan-India Blueprint",
    description: "Open-source standard operating procedures for state and national prison directorates.",
    icon: Share2,
  },
];

export function ModelSection() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section id="model" className="py-14 md:py-20 bg-white border-t border-[#E2DDD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF4E8] text-[#12560E] text-xs font-bold uppercase tracking-wider">
              TYCIA Foundation Flagship
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1C19] tracking-tight">
              Research-to-Action Protocol
            </h2>
            <p className="text-sm sm:text-base text-[#5A6255]">
              Can prisons become part of the climate solution? Piloting practical custodial resilience at Nuh District Jail, Haryana.
            </p>
          </div>

          <Button
            asChild
            className="bg-[#12560E] hover:bg-[#0D3F0A] text-white font-bold text-xs h-11 px-5 rounded-xl self-start lg:self-auto"
          >
            <a href="#facility-blueprint" className="flex items-center gap-2">
              <Compass className="size-4" />
              <span>Inspect Compound Blueprint</span>
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>

        {/* 5 Compact Stage Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            const isSelected = activeStage === idx;

            return (
              <div
                key={stage.phase}
                onClick={() => setActiveStage(idx)}
                className={`cursor-pointer p-5 rounded-3xl border transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#EBF4E8] border-[#12560E] shadow-xs"
                    : "bg-[#FAF9F5] border-[#E2DDD2] hover:bg-white hover:border-[#A8CCA0]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[11px] font-black px-2 py-0.5 rounded-md ${
                        isSelected ? "bg-[#12560E] text-white" : "bg-white text-[#5A6255]"
                      }`}
                    >
                      P-{stage.phase}
                    </span>
                    <Icon className={`size-4 ${isSelected ? "text-[#12560E]" : "text-[#7A8275]"}`} />
                  </div>

                  <h3 className="font-extrabold text-sm text-[#1A1C19] mb-1">
                    {stage.title}
                  </h3>

                  <p className="text-xs text-[#5A6255] leading-relaxed mb-3">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E2DDD2]/60">
                  <span className="text-[11px] font-bold text-[#12560E] flex items-center gap-1">
                    <CheckCircle2 className="size-3 text-[#52A638]" />
                    <span className="truncate">{stage.metric}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
