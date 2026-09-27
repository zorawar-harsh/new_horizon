import React, { useState } from "react";
import {
  Flame,
  Droplets,
  Building,
  Trash2,
  Sprout,
  CloudRain,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ShieldAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChallengeItem {
  id: string;
  category: "heat" | "water" | "infra";
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  problem: string;
  solutionTitle: string;
  metricBadge: string;
}

const challenges: ChallengeItem[] = [
  {
    id: "heat",
    category: "heat",
    title: "Extreme Heat",
    icon: Flame,
    tag: "Thermal Trap",
    problem: "Barracks exceed 44°C in summer peaks, triggering acute heat exhaustion and aggression.",
    solutionTitle: "High-Albedo Cool Roof & Bamboo Screens",
    metricBadge: "-3.5°C to -5.2°C indoor temperature reduction",
  },
  {
    id: "water",
    category: "water",
    title: "Water Scarcity",
    icon: Droplets,
    tag: "Ablution Queues",
    problem: "Groundwater depletion and peak load leave undertrials queuing for hours for sanitation.",
    solutionTitle: "Rooftop Rain Catchment & Push Aerators",
    metricBadge: "450,000L stored & 42% tap water saved",
  },
  {
    id: "infra",
    category: "infra",
    title: "Aged Infrastructure",
    icon: Building,
    tag: "Heat Entrapment",
    problem: "Concrete roofs without thermal barriers, zero airflow, and frequent power blackouts.",
    solutionTitle: "Cross-Ventilation Louvers & Shaded Verandas",
    metricBadge: "2.2x increase in night-time air change rate",
  },
  {
    id: "waste",
    category: "water",
    title: "Kitchen Waste",
    icon: Trash2,
    tag: "Vector Hazard",
    problem: "Mess generates 250kg unsegregated wet scraps daily, creating odor and pest risks.",
    solutionTitle: "3-Stream Sorting & Aerobic Vermicomposting",
    metricBadge: "100% organic diversion; 1.5t compost/month",
  },
  {
    id: "food",
    category: "infra",
    title: "Barren Yards",
    icon: Sprout,
    tag: "Nutritional Gap",
    problem: "Concrete yards magnify heat island effect while inmate diets lack fresh micronutrients.",
    solutionTitle: "1.2-Acre Permaculture Raised Beds",
    metricBadge: "420kg organic greens harvested per cycle",
  },
  {
    id: "weather",
    category: "heat",
    title: "Changing Weather",
    icon: CloudRain,
    tag: "Flash Floods",
    problem: "Sudden dust storms and monsoon flooding disrupt barracks sanitation and health.",
    solutionTitle: "Permeable Pavers & Deep Aquifer Injections",
    metricBadge: "+1.8m local water table stabilization",
  },
];

export function CrisisSection() {
  const [filter, setFilter] = useState<"all" | "heat" | "water" | "infra">("all");
  const [expandedIds, setExpandedIds] = useState<string[]>([]);

  const filteredChallenges =
    filter === "all"
      ? challenges
      : challenges.filter((c) => c.category === filter);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (expandedIds.length === challenges.length) {
      setExpandedIds([]);
    } else {
      setExpandedIds(challenges.map((c) => c.id));
    }
  };

  return (
    <section id="crisis" className="py-14 md:py-20 bg-[#FAF9F5] border-t border-[#E2DDD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2ECE1] text-[#703D00] text-xs font-bold uppercase tracking-wider">
              <ShieldAlert className="size-3.5" /> Compounding Vulnerability
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1C19] tracking-tight">
              Why Climate-Adaptive Prisons?
            </h2>
            <p className="text-sm sm:text-base text-[#5A6255]">
              High density, enclosed infrastructure, and zero adaptive resources create extreme climate vulnerability.
            </p>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={toggleAll}
            className="text-xs font-bold text-[#12560E] hover:bg-[#EBF4E8] self-start md:self-auto"
          >
            {expandedIds.length === challenges.length ? (
              <>
                <ChevronUp className="size-4 mr-1" /> Collapse All
              </>
            ) : (
              <>
                <ChevronDown className="size-4 mr-1" /> Expand All Solutions
              </>
            )}
          </Button>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filter === "all"
                ? "bg-[#12560E] text-white shadow-xs"
                : "bg-white text-[#5A6255] border border-[#E2DDD2] hover:bg-[#EBF4E8]"
            }`}
          >
            All 6 Challenges
          </button>
          <button
            onClick={() => setFilter("heat")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filter === "heat"
                ? "bg-[#12560E] text-white shadow-xs"
                : "bg-white text-[#5A6255] border border-[#E2DDD2] hover:bg-[#EBF4E8]"
            }`}
          >
            Heat & Weather
          </button>
          <button
            onClick={() => setFilter("water")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filter === "water"
                ? "bg-[#12560E] text-white shadow-xs"
                : "bg-white text-[#5A6255] border border-[#E2DDD2] hover:bg-[#EBF4E8]"
            }`}
          >
            Water & Waste
          </button>
          <button
            onClick={() => setFilter("infra")}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filter === "infra"
                ? "bg-[#12560E] text-white shadow-xs"
                : "bg-white text-[#5A6255] border border-[#E2DDD2] hover:bg-[#EBF4E8]"
            }`}
          >
            Infrastructure & Green
          </button>
        </div>

        {/* 6 Minimal Block Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredChallenges.map((item) => {
            const Icon = item.icon;
            const isExpanded = expandedIds.includes(item.id);

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-[#E2DDD2] p-5 shadow-xs hover:border-[#A8CCA0] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#F4F3ED] text-[#5A6255]">
                      {item.tag}
                    </span>
                    <div className="p-1.5 rounded-xl bg-[#EBF4E8] text-[#12560E]">
                      <Icon className="size-4" />
                    </div>
                  </div>

                  <h3 className="font-extrabold text-base text-[#1A1C19] mb-1.5">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#5A6255] leading-relaxed mb-3">
                    {item.problem}
                  </p>
                </div>

                <div>
                  {isExpanded && (
                    <div className="p-3 rounded-2xl bg-[#EBF4E8] border border-[#CDE5C2] space-y-1 mb-2 animate-in fade-in-50 duration-200">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#12560E]">
                        <Sparkles className="size-3 text-[#52A638]" />
                        <span>{item.solutionTitle}</span>
                      </div>
                      <p className="text-[11px] font-bold text-[#12560E]">
                        ✦ {item.metricBadge}
                      </p>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => toggleExpand(item.id)}
                    className="w-full py-1.5 px-3 rounded-xl bg-[#FAF9F5] hover:bg-[#EBF4E8] text-[#12560E] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors border border-[#E2DDD2]"
                  >
                    <span>{isExpanded ? "Hide Intervention" : "Inspect Solution"}</span>
                    {isExpanded ? (
                      <ChevronUp className="size-3.5" />
                    ) : (
                      <ChevronDown className="size-3.5" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
