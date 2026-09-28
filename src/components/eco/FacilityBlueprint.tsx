import React, { useState } from "react";
import {
  MapPin,
  Sprout,
  Home,
  Trash2,
  Droplets,
  BookOpen,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrochureModal } from "./BrochureModal";

interface Hotspot {
  id: string;
  name: string;
  tag: string;
  coords: { x: number; y: number };
  icon: React.ComponentType<{ className?: string }>;
  status: string;
  impactMetric: string;
  description: string;
  details: string[];
}

const hotspots: Hotspot[] = [
  {
    id: "garden",
    name: "1.2-Acre Permaculture Kitchen Garden",
    tag: "Green Practices",
    coords: { x: 50, y: 52 },
    icon: Sprout,
    status: "Active",
    impactMetric: "420 kg organic greens harvested per cycle",
    description: "Courtyard transformed into raised beds growing moringa, spinach, and gourds for daily barrack meals.",
    details: [
      "Supplements inmate mess with fresh vitamins & iron",
      "Managed by 120+ active incarcerated trainees",
    ],
  },
  {
    id: "barracks",
    name: "Sleeping Barracks Cool-Roofing",
    tag: "Infrastructure",
    coords: { x: 26, y: 35 },
    icon: Home,
    status: "Verified",
    impactMetric: "3.5°C to 5.2°C ambient reduction",
    description: "Solar-reflective white elastomeric coating on barrack roofs deflecting radiant midday thermal gain.",
    details: [
      "Lowers ceiling heat by up to 12°C",
      "Coupled with natural reed window blinds",
    ],
  },
  {
    id: "compost",
    name: "Central Mess Vermicomposting",
    tag: "Waste Circularity",
    coords: { x: 74, y: 36 },
    icon: Trash2,
    status: "100% Diverted",
    impactMetric: "Processes 250 kg food scraps daily (1.5t/mo)",
    description: "Raised aerobic brick pits using red worms converting daily kitchen greens into premium organic fertilizer.",
    details: [
      "Zero open dumping or foul organic odor",
      "Yields 1.5 tons bio-fertilizer monthly",
    ],
  },
  {
    id: "rainwater",
    name: "Rainwater Catchment & Sump",
    tag: "Water Conservation",
    coords: { x: 70, y: 68 },
    icon: Droplets,
    status: "Operational",
    impactMetric: "Harvests ~450,000 liters every monsoon",
    description: "Dual sand-gravel filter sumps storing rainwater and directing surplus storm runoff to recharge shafts.",
    details: [
      "Gravity-fed subsurface drip lines",
      "+1.8 meter local water table stabilization",
    ],
  },
  {
    id: "literacy",
    name: "Climate Capacity Hall",
    tag: "Education",
    coords: { x: 30, y: 68 },
    icon: BookOpen,
    status: "Certified",
    impactMetric: "165 individuals certified as Climate Stewards",
    description: "Weekly interactive sessions uniting custodial staff and inmates in hands-on agroecology and conservation.",
    details: [
      "Recognized certificate for community reintegration",
      "18 active peer ward ambassadors",
    ],
  },
];

export function FacilityBlueprint() {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot>(hotspots[0] as Hotspot);
  const [mode, setMode] = useState<"2025" | "2023">("2025");
  const [brochureOpen, setBrochureOpen] = useState(false);

  return (
    <section id="facility-blueprint" className="py-14 md:py-20 bg-[#FAF9F5] border-t border-[#E2DDD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF4E8] text-[#12560E] text-xs font-bold uppercase tracking-wider">
              <MapPin className="size-3.5" /> Nuh District Jail, Haryana
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1C19] tracking-tight">
              Interactive Schematic
            </h2>
            <p className="text-sm sm:text-base text-[#5A6255]">
              Tap active hotspots to inspect physical interventions situated inside the correctional compound.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="p-1 rounded-xl bg-white border border-[#E2DDD2] flex items-center shadow-xs">
              <button
                type="button"
                onClick={() => setMode("2023")}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  mode === "2023"
                    ? "bg-amber-100 text-amber-900 shadow-xs"
                    : "text-[#5A6255] hover:text-[#1A1C19]"
                }`}
              >
                2023 Baseline
              </button>
              <button
                type="button"
                onClick={() => setMode("2025")}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  mode === "2025"
                    ? "bg-[#12560E] text-white shadow-xs"
                    : "text-[#5A6255] hover:text-[#1A1C19]"
                }`}
              >
                2025 Eco-Pilot
              </button>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setBrochureOpen(true)}
              className="border-[#CDE5C2] text-[#12560E] bg-white hover:bg-[#EBF4E8] font-bold text-xs h-9 px-3 rounded-xl"
            >
              <BookOpen className="size-3.5 mr-1" /> Brochure
            </Button>
          </div>
        </div>

        {/* Blueprint Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Schematic SVG Canvas Container */}
          <div className="lg:col-span-8 bg-[#182613] rounded-3xl p-4 sm:p-5 text-white border border-[#2A3E24] shadow-md relative overflow-hidden">
            <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1.5 mb-3 text-[10px] sm:text-[11px] font-mono">
              <span className="text-[#B9F079] bg-white/10 px-2 py-0.5 rounded-md self-start xs:self-auto">
                Lat 28.107° N, Long 77.004° E
              </span>
              <span className="text-white/70 font-sans font-bold text-xs truncate">
                {mode === "2025" ? "2025 Eco-Interventions" : "2023 Baseline (High Thermal)"}
              </span>
            </div>

            {/* SVG Schematic Canvas */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#0E1A0B] rounded-2xl border border-white/10 overflow-hidden mb-3">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 500" preserveAspectRatio="none">
                <rect x="40" y="40" width="720" height="420" rx="16" fill="none" stroke="#385E30" strokeWidth="2" strokeDasharray="6 4" />
                <rect x="80" y="80" width="640" height="340" rx="12" fill={mode === "2025" ? "#142811" : "#1F1D15"} stroke="#4E7C44" strokeWidth="1.5" />
                <rect x="280" y="170" width="240" height="160" rx="10" fill={mode === "2025" ? "#234B1D" : "#382E1E"} stroke={mode === "2025" ? "#7CA123" : "#8A6D3B"} strokeWidth="2" />
                <rect x="120" y="120" width="120" height="110" rx="6" fill={mode === "2025" ? "#2B4C25" : "#4A3225"} stroke={mode === "2025" ? "#A8CCA0" : "#A65C38"} strokeWidth="1.5" />
                <rect x="560" y="120" width="120" height="110" rx="6" fill={mode === "2025" ? "#2B4C25" : "#3F3725"} stroke="#7CA123" strokeWidth="1.5" />
                <rect x="120" y="270" width="120" height="110" rx="6" fill="#1C3518" stroke="#52A638" strokeWidth="1.5" />
                <circle cx="620" cy="325" r="45" fill={mode === "2025" ? "#1B4045" : "#2E2820"} stroke="#38BDF8" strokeWidth="2" />
              </svg>

              {/* Hotspots */}
              {hotspots.map((hotspot) => {
                const isSelected = selectedHotspot.id === hotspot.id;
                const Icon = hotspot.icon;

                return (
                  <button
                    key={hotspot.id}
                    type="button"
                    onClick={() => setSelectedHotspot(hotspot)}
                    style={{ left: `${hotspot.coords.x}%`, top: `${hotspot.coords.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group focus:outline-none touch-manipulation"
                    aria-label={`Select ${hotspot.name}`}
                  >
                    <div className="relative flex items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-[#B9F079] opacity-40" />
                      <div
                        className={`size-7 sm:size-9 rounded-full flex items-center justify-center transition-all border-2 ${
                          isSelected
                            ? "bg-[#B9F079] text-[#12560E] border-white scale-110 shadow-lg"
                            : "bg-[#12560E] text-[#B9F079] border-[#B9F079]/70 hover:scale-105"
                        }`}
                      >
                        <Icon className="size-3.5 sm:size-4" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Strip with Touch Scroll on Mobile */}
            <div className="flex items-center gap-1.5 pt-1 overflow-x-auto pb-1 no-scrollbar sm:flex-wrap">
              <span className="text-xs text-white/60 font-semibold mr-1 shrink-0">Tap:</span>
              {hotspots.map((h) => (
                <button
                  key={h.id}
                  onClick={() => setSelectedHotspot(h)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 touch-manipulation ${
                    selectedHotspot.id === h.id
                      ? "bg-[#B9F079] text-[#12560E]"
                      : "bg-white/10 text-white/80 hover:bg-white/20"
                  }`}
                >
                  {h.name.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Compact Inspector Card */}
          <div className="lg:col-span-4 bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#E2DDD2] shadow-xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#F0EDE4]">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#12560E] bg-[#EBF4E8] px-2 py-0.5 rounded-md">
                {selectedHotspot.tag}
              </span>
              <span className="text-xs font-bold text-[#52A638]">
                {selectedHotspot.status}
              </span>
            </div>

            <h3 className="text-base font-extrabold text-[#1A1C19]">
              {selectedHotspot.name}
            </h3>

            <div className="p-3 rounded-2xl bg-[#FAF9F5] border border-[#E2DDD2]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#5A6255] block">
                Recorded Field Impact
              </span>
              <p className="text-xs font-black text-[#12560E] mt-0.5">
                {selectedHotspot.impactMetric}
              </p>
            </div>

            <p className="text-xs text-[#5A6255] leading-relaxed">
              {selectedHotspot.description}
            </p>

            <ul className="space-y-1.5 pt-2 border-t border-[#F0EDE4]">
              {selectedHotspot.details.map((point, i) => (
                <li key={i} className="text-xs text-[#3A4036] flex items-start gap-1.5">
                  <CheckCircle2 className="size-3.5 text-[#52A638] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Button
                asChild
                className="w-full bg-[#12560E] hover:bg-[#0D3F0A] text-white text-xs font-bold h-9 rounded-xl"
              >
                <a href="#climate-actions" className="flex items-center justify-center gap-1.5">
                  <span>Audit 30 Actions</span>
                  <ArrowRight className="size-3" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <BrochureModal open={brochureOpen} onOpenChange={setBrochureOpen} />
    </section>
  );
}
