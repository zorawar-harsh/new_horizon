import React, { useState } from "react";
import {
  Building2,
  Droplets,
  Trash2,
  Sprout,
  GraduationCap,
  Search,
  TrendingUp,
  ArrowRight,
  Layers,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export interface ClimateAction {
  id: number;
  category: "infrastructure" | "water" | "waste" | "green" | "education";
  categoryLabel: string;
  status: "Active at Nuh" | "In Progress" | "Planned";
  title: string;
  description: string;
  impactMetric: string;
  sopSteps: string[];
}

const actionsData: ClimateAction[] = [
  {
    id: 1,
    category: "infrastructure",
    categoryLabel: "Infrastructure",
    status: "Active at Nuh",
    title: "High-Albedo Cool Roof Coating",
    description: "Solar-reflective white paint on roofs to bounce thermal radiation.",
    impactMetric: "-3.5°C to -5.2°C ambient reduction inside barracks",
    sopSteps: [
      "Surface power-washing of concrete barrack slabs",
      "Primer coat application sealing micro-cracks",
      "Two coats of SRI >104 elastomeric solar reflective paint",
    ],
  },
  {
    id: 2,
    category: "infrastructure",
    categoryLabel: "Infrastructure",
    status: "Active at Nuh",
    title: "Bamboo & Reed Window Screens",
    description: "Woven reed shades placed outside windows to block radiant solar gain.",
    impactMetric: "Reduces peak afternoon radiant glare by 65%",
    sopSteps: [
      "Sourcing locally woven wild reed lattices",
      "Exterior bracket installation allowing air circulation",
      "Seasonal replacement by custodial weaver trainees",
    ],
  },
  {
    id: 3,
    category: "infrastructure",
    categoryLabel: "Infrastructure",
    status: "In Progress",
    title: "Passive Cross-Ventilation Louvers",
    description: "Clerestory air release vents expelling hot air near ceiling ridges.",
    impactMetric: "2.2x increase in night-time air change rate",
    sopSteps: [
      "Masonry perforation along upper ceiling perimeters",
      "Vandal-safe security mesh insertion",
      "Thermo-siphonic exhaust calibration across sleeping wards",
    ],
  },
  {
    id: 4,
    category: "infrastructure",
    categoryLabel: "Infrastructure",
    status: "In Progress",
    title: "Thermal Veranda Breezeways",
    description: "Covered breezeways shielding interior living cells from direct wall baking.",
    impactMetric: "Blocks midday baking over 180 linear meters",
    sopSteps: [
      "Lightweight awning anchoring along outer verandas",
      "Creates a secondary microclimate thermal buffer",
      "Protects undertrial transit walkways from direct solar exposure",
    ],
  },
  {
    id: 5,
    category: "infrastructure",
    categoryLabel: "Infrastructure",
    status: "Planned",
    title: "Solar Inverter Backups",
    description: "Rooftop solar packs keeping ceiling fans running during blackout spikes.",
    impactMetric: "Zero downtime during 6-hour summer grid outages",
    sopSteps: [
      "5kW rooftop solar bank installation over dispensary and ward cores",
      "Battery bank synchronization for nighttime circulation",
      "Custodial electrical technician maintenance training",
    ],
  },
  {
    id: 6,
    category: "infrastructure",
    categoryLabel: "Infrastructure",
    status: "Planned",
    title: "Permeable Courtyard Pavements",
    description: "Hollow concrete pavers allowing rain percolation while curbing radiant heat.",
    impactMetric: "-4.8°C lower radiant ground temperature",
    sopSteps: [
      "Excavation of non-porous asphalt surfaces in main assembly yard",
      "Installation of hollow-core grass pavers with sand sub-base",
      "Immediate stormwater percolation into local subsoil strata",
    ],
  },
  {
    id: 7,
    category: "water",
    categoryLabel: "Water Conservation",
    status: "Active at Nuh",
    title: "Rooftop Rainwater Catchment",
    description: "Barrack roof drains routed through sand-gravel filters into sumps.",
    impactMetric: "Harvests ~450,000L potable water each monsoon",
    sopSteps: [
      "PVC gutter attachment along barrack perimeter rooflines",
      "Multi-stage sand, gravel, and charcoal first-flush chambers",
      "Gravity feed into existing 50,000L storage cisterns",
    ],
  },
  {
    id: 8,
    category: "water",
    categoryLabel: "Water Conservation",
    status: "In Progress",
    title: "Greywater Reed-Bed Biofilters",
    description: "Root-zone biofilter treating laundry and ablution runoff for garden reuse.",
    impactMetric: "Reclaims 8,000 liters daily for garden crop irrigation",
    sopSteps: [
      "Diverting washing block wastewater through grease baffles",
      "Subsurface wetland trench planted with Typha and Canna indica reeds",
      "Treated pathogen-free effluent pumped to permaculture beds",
    ],
  },
  {
    id: 9,
    category: "water",
    categoryLabel: "Water Conservation",
    status: "Active at Nuh",
    title: "Push Aerators & Flow Restrictors",
    description: "Vandal-proof brass aerator caps regulating flow rates across washblocks.",
    impactMetric: "42% reduction in daily municipal water consumption",
    sopSteps: [
      "Fitting self-closing mechanical timed valves in ablution rows",
      "Replacing unrestricted open spigots with tamper-resistant 3LPM nozzles",
      "Weekly undertrial water-marshal leak inspection rounds",
    ],
  },
  {
    id: 10,
    category: "water",
    categoryLabel: "Water Conservation",
    status: "Active at Nuh",
    title: "Subsurface Drip Irrigation",
    description: "Root-zone drip lines for kitchen gardens operating without fossil pumps.",
    impactMetric: "Saves 70% irrigation water vs manual spraying",
    sopSteps: [
      "Connecting elevated water cisterns to low-pressure drip laterals",
      "Emitters placed directly at crop roots minimizing evaporation",
      "Inmate garden supervisors monitor pressure flow valves daily",
    ],
  },
  {
    id: 11,
    category: "water",
    categoryLabel: "Water Conservation",
    status: "Planned",
    title: "Deep Aquifer Recharge Pits",
    description: "Direct percolation shafts directing surplus storm runoff past clay strata.",
    impactMetric: "+1.8 meter local water table stabilization",
    sopSteps: [
      "Drilling 60-foot recharge bores with slotted casing pipes",
      "Graded boulder and gravel filtration pits catching runoff overflow",
      "Recharges Mewat's stressed deep groundwater aquifers",
    ],
  },
  {
    id: 12,
    category: "water",
    categoryLabel: "Water Conservation",
    status: "Active at Nuh",
    title: "Tank Telemetry & Leak Audits",
    description: "Mechanical floats and daily undertrial water-marshal logs to prevent overflows.",
    impactMetric: "Zero accidental tank overflow loss recorded",
    sopSteps: [
      "Mechanical weighted float gauges installed with visual red markers",
      "Shift-wise logbooks maintained by designated inmate eco-marshals",
      "Instantaneous washer replacements for dripping custodial valves",
    ],
  },
  {
    id: 13,
    category: "waste",
    categoryLabel: "Waste Management",
    status: "Active at Nuh",
    title: "Kitchen 3-Stream Segregation",
    description: "Color-coded stainless mess bins separating organic scraps and dry packaging.",
    impactMetric: "100% organic scraps diverted from municipal dumps",
    sopSteps: [
      "Green stainless bins for vegetable peels and meal scraps",
      "Blue bins for dry packaging cardboard and plastic containers",
      "Direct daily transfer from kitchen mess to vermicompost yard",
    ],
  },
  {
    id: 14,
    category: "waste",
    categoryLabel: "Waste Management",
    status: "Active at Nuh",
    title: "Aerobic Vermicomposting Beds",
    description: "Raised brick pits with red wiggler earthworms processing 250kg greens daily.",
    impactMetric: "Yields 1.5 tons of nutrient-rich vermicompost monthly",
    sopSteps: [
      "Layering dried leaves, pre-composted vegetable waste, and cow dung",
      "Inoculation with Eisenia fetida red wiggler worm colonies",
      "Moisture monitoring and bi-weekly turning by trained inmates",
    ],
  },
  {
    id: 15,
    category: "waste",
    categoryLabel: "Waste Management",
    status: "Active at Nuh",
    title: "Zero Open-Burning Protocol",
    description: "Directive ending open burning of leaf litter and plastics within jail grounds.",
    impactMetric: "Zero toxic smoke plumes over custodial dormitories",
    sopSteps: [
      "Strict administrative directive prohibiting open leaf/trash fires",
      "Leaf litter channeled directly into compost carbon bulk supply",
      "Improved respiratory health for wardens and inmate dormitories",
    ],
  },
  {
    id: 16,
    category: "waste",
    categoryLabel: "Waste Management",
    status: "In Progress",
    title: "Dry Recyclables Baling",
    description: "Sorting clean cardboard and plastic for authorized collection.",
    impactMetric: "₹14,000/mo generated for Inmate Welfare Fund",
    sopSteps: [
      "Inmates sort and flatten cardboard cartons and paper supplies",
      "Manual mechanical lever baler compresses sorted plastics",
      "Authorized recyclers collect bales monthly with audited welfare deposits",
    ],
  },
  {
    id: 17,
    category: "waste",
    categoryLabel: "Waste Management",
    status: "In Progress",
    title: "Bio-Enzyme Floor Cleaners",
    description: "Fermenting fruit peels and jaggery into natural acidic sanitation cleaner.",
    impactMetric: "Replaces 60% of caustic chemical phenyl",
    sopSteps: [
      "Fermentation barrels populated with citrus scraps, jaggery, and water",
      "90-day anaerobic fermentation produces natural acidic enzyme cleaner",
      "Safe, fragrant, non-toxic cleaner for barrack stone floors",
    ],
  },
  {
    id: 18,
    category: "waste",
    categoryLabel: "Waste Management",
    status: "Active at Nuh",
    title: "Hazardous & Medical Segregation",
    description: "Color-coded puncture-proof disposal boxes for dispensary sharps.",
    impactMetric: "100% compliance with Biomedical Waste Rules",
    sopSteps: [
      "Yellow puncture-proof containers in dispensary for syringes & blades",
      "Autoclave protocol before authorized hospital incinerator pickup",
      "Zero medical sharps contamination in regular prison waste streams",
    ],
  },
  {
    id: 19,
    category: "green",
    categoryLabel: "Green Practices",
    status: "Active at Nuh",
    title: "1.2-Acre Permaculture Garden",
    description: "Multi-tiered edible ecosystem producing chemical-free vegetables for mess.",
    impactMetric: "420kg+ fresh seasonal greens harvested per cycle",
    sopSteps: [
      "Raised planting beds enriched with on-site vermicompost",
      "Seasonal crop rotation: bottle gourd, spinach, fenugreek, brinjal",
      "Managed by a dedicated cohort of 120+ incarcerated trainees",
    ],
  },
  {
    id: 20,
    category: "green",
    categoryLabel: "Green Practices",
    status: "Active at Nuh",
    title: "Drought-Hardy Native Canopy",
    description: "Planting Neem, Peepal, and Jamun trees to create long-term windbreaks.",
    impactMetric: "180 native saplings planted with 92% survival rate",
    sopSteps: [
      "Planting fast-growing native hardy trees along outer wall borders",
      "Deep basin mulching with shredded prison paper and leaf waste",
      "Each sapling adopted and nurtured by a designated undertrial",
    ],
  },
  {
    id: 21,
    category: "green",
    categoryLabel: "Green Practices",
    status: "Active at Nuh",
    title: "High-Nutrition Moringa Groves",
    description: "Fast-growing drumstick trees providing bioavailable iron and vitamins.",
    impactMetric: "Provides dietary iron to 300+ inmates weekly",
    sopSteps: [
      "High-density moringa planting in central courtyard perimeter",
      "Weekly leaf harvesting incorporated into standard dal rations",
      "Addresses pervasive anemia among custodial populations",
    ],
  },
  {
    id: 22,
    category: "green",
    categoryLabel: "Green Practices",
    status: "In Progress",
    title: "Anti-Mosquito Botanical Belts",
    description: "Border plantings of Tulsi, Citronella, and Lemongrass along drains.",
    impactMetric: "35% drop in seasonal vector dispensary visits",
    sopSteps: [
      "Aromatic herb borders planted along ablution perimeter trenches",
      "Natural essential oils repel mosquitoes and vector insects",
      "Fresh tulsi leaves used in daily barracks herbal tea rations",
    ],
  },
  {
    id: 23,
    category: "green",
    categoryLabel: "Green Practices",
    status: "In Progress",
    title: "Heirloom Seed-Bank & Nursery",
    description: "Preserving open-pollinated vegetable seeds for self-sufficient propagation.",
    impactMetric: "Self-sufficiency in seasonal vegetable seeds",
    sopSteps: [
      "Selecting hardiest heirloom parent plants each harvest cycle",
      "Seed desiccation, labelling, and airtight glass jar storage",
      "Surplus native seeds gifted to families during prisoner visits",
    ],
  },
  {
    id: 24,
    category: "green",
    categoryLabel: "Green Practices",
    status: "Active at Nuh",
    title: "Botanical Pest Brews",
    description: "Neemastra brews replacing toxic organophosphate chemical pesticides.",
    impactMetric: "100% elimination of toxic insecticides in garden",
    sopSteps: [
      "Boiling neem foliage with garlic, green chilies, and cow urine",
      "Fermented liquid strained and diluted for foliar garden spraying",
      "Zero toxic poison exposure risk for custodial participants",
    ],
  },
  {
    id: 25,
    category: "education",
    categoryLabel: "Education",
    status: "Active at Nuh",
    title: "Staff-Inmate Climate Classes",
    description: "Weekly masterclasses bringing wardens and incarcerated cohorts together.",
    impactMetric: "165 certified Civic Climate Stewards",
    sopSteps: [
      "Classroom modules covering heat defense, water audits, and soil science",
      "Joint warden-inmate discussion panels building mutual trust",
      "Bi-lingual pictorial guides designed for varied literacy backgrounds",
    ],
  },
  {
    id: 26,
    category: "education",
    categoryLabel: "Education",
    status: "Active at Nuh",
    title: "Peer Eco-Ambassador Cohort",
    description: "Designating trained inmate leaders in each ward to audit taps and waste.",
    impactMetric: "18 active ward ambassadors driving daily audits",
    sopSteps: [
      "Cohort election and appointment of barrack climate captains",
      "Daily checklist audits inspecting running taps and light switches",
      "Weekly debrief with prison superintendent on conservation metrics",
    ],
  },
  {
    id: 27,
    category: "education",
    categoryLabel: "Education",
    status: "Active at Nuh",
    title: "Vocational Farm Certificates",
    description: "Accredited training valid for nursery employment upon community reentry.",
    impactMetric: "Valid credential with partner organic nurseries",
    sopSteps: [
      "120 hours of hands-on vocational coursework in organic farming",
      "Skill testing covering irrigation layout, composting, and nursery care",
      "Direct placement linkage with agricultural nurseries in NCR",
    ],
  },
  {
    id: 28,
    category: "education",
    categoryLabel: "Education",
    status: "Active at Nuh",
    title: "Harvest Day Convocations",
    description: "Quarterly harvest festivals celebrating farm yields and certificates.",
    impactMetric: "Boosts self-efficacy index by 78%",
    sopSteps: [
      "Compound festival celebrating seasonal harvest yields and shared meals",
      "Formal certificate distribution in the presence of prison leadership",
      "Photographic portfolio created for inmate post-release resumes",
    ],
  },
  {
    id: 29,
    category: "education",
    categoryLabel: "Education",
    status: "In Progress",
    title: "Ecotherapy Mindfulness",
    description: "Garden grounding sessions alleviating custodial confinement anxiety.",
    impactMetric: "Drop in sleep disturbances & panic episodes",
    sopSteps: [
      "Daily 30-minute morning grounding and soil work in garden beds",
      "Certified psychological counselor feedback and wellness tracking",
      "Noticeable reduction in inter-barrack friction and anxiety levels",
    ],
  },
  {
    id: 30,
    category: "education",
    categoryLabel: "Education",
    status: "In Progress",
    title: "State Policy Replication SOPs",
    description: "Synthesizing Nuh Jail data into replication manuals for national prisons.",
    impactMetric: "Presented at South Asia Reform Summit 2025",
    sopSteps: [
      "Compiling thermodynamic data, harvest figures, and financial budgets",
      "Publishing open-source SOP handbook for state prison departments",
      "Policy roundtables with national correctional administration leaders",
    ],
  },
];

export function ClimateActions() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("" );
  const [activeSopAction, setActiveSopAction] = useState<ClimateAction | null>(null);

  const filteredActions = actionsData.filter((action) => {
    const matchesCategory =
      selectedCategory === "all" || action.category === selectedCategory;
    const matchesStatus =
      selectedStatus === "all" || action.status === selectedStatus;
    const matchesSearch =
      searchQuery.trim() === "" ||
      action.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      action.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesStatus && matchesSearch;
  });

  return (
    <section id="climate-actions" className="py-14 md:py-20 bg-white border-t border-[#E2DDD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header & Readiness Gauge */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF4E8] text-[#12560E] text-xs font-bold uppercase tracking-wider">
              Standardized Framework
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1C19] tracking-tight">
              30 Climate Actions Audit
            </h2>
            <p className="text-sm sm:text-base text-[#5A6255]">
              Standardized interventions transforming correctional compounds into climate-resilient restorative spaces.
            </p>
          </div>

          {/* Readiness Meter Card */}
          <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#E2DDD2] shadow-xs min-w-[260px]">
            <div className="flex items-center justify-between text-xs font-bold text-[#1A1C19] mb-1">
              <span>Nuh Jail Readiness</span>
              <span className="text-sm font-black text-[#12560E]">75%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#E2DDD2] overflow-hidden flex mb-2">
              <div style={{ width: "60%" }} className="bg-[#12560E] h-full" />
              <div style={{ width: "30%" }} className="bg-[#7CA123] h-full" />
              <div style={{ width: "10%" }} className="bg-[#D1C9BC] h-full" />
            </div>
            <div className="flex items-center justify-between text-[10px] font-bold text-[#5A6255]">
              <span>18 Active</span>
              <span>9 In Progress</span>
              <span>3 Planned</span>
            </div>
          </div>
        </div>

        {/* Category Selector Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === "all"
                ? "bg-[#12560E] text-white shadow-xs"
                : "bg-[#FAF9F5] text-[#5A6255] border border-[#E2DDD2] hover:bg-white"
            }`}
          >
            All 30 Actions
          </button>
          <button
            onClick={() => setSelectedCategory("infrastructure")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === "infrastructure"
                ? "bg-[#12560E] text-white shadow-xs"
                : "bg-[#FAF9F5] text-[#5A6255] border border-[#E2DDD2] hover:bg-white"
            }`}
          >
            Infrastructure (6)
          </button>
          <button
            onClick={() => setSelectedCategory("water")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === "water"
                ? "bg-[#12560E] text-white shadow-xs"
                : "bg-[#FAF9F5] text-[#5A6255] border border-[#E2DDD2] hover:bg-white"
            }`}
          >
            Water (6)
          </button>
          <button
            onClick={() => setSelectedCategory("waste")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === "waste"
                ? "bg-[#12560E] text-white shadow-xs"
                : "bg-[#FAF9F5] text-[#5A6255] border border-[#E2DDD2] hover:bg-white"
            }`}
          >
            Waste (6)
          </button>
          <button
            onClick={() => setSelectedCategory("green")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === "green"
                ? "bg-[#12560E] text-white shadow-xs"
                : "bg-[#FAF9F5] text-[#5A6255] border border-[#E2DDD2] hover:bg-white"
            }`}
          >
            Green Practices (6)
          </button>
          <button
            onClick={() => setSelectedCategory("education")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === "education"
                ? "bg-[#12560E] text-white shadow-xs"
                : "bg-[#FAF9F5] text-[#5A6255] border border-[#E2DDD2] hover:bg-white"
            }`}
          >
            Education (6)
          </button>
        </div>

        {/* Search */}
        <div className="mb-6 max-w-sm">
          <div className="relative">
            <Search className="size-4 text-[#7A8275] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter actions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-[#E2DDD2] bg-[#FAF9F5] text-xs text-[#1A1C19] placeholder-[#7A8275] focus:outline-none focus:ring-1 focus:ring-[#12560E]"
            />
          </div>
        </div>

        {/* 30 Actions Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredActions.map((action) => (
            <div
              key={action.id}
              className="p-5 rounded-3xl bg-white border border-[#E2DDD2] hover:border-[#A8CCA0] transition-all flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-extrabold text-[#12560E] bg-[#EBF4E8] px-2 py-0.5 rounded-md">
                    #{String(action.id).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] font-bold text-[#5A6255]">
                    {action.status}
                  </span>
                </div>

                <h3 className="font-bold text-sm text-[#1A1C19] mb-1">
                  {action.title}
                </h3>

                <p className="text-xs text-[#5A6255] leading-relaxed mb-3">
                  {action.description}
                </p>
              </div>

              <div>
                <div className="p-2.5 rounded-2xl bg-[#FAF9F5] border border-[#E2DDD2] mb-3 text-[11px] font-bold text-[#12560E] flex items-center gap-1.5">
                  <TrendingUp className="size-3.5 text-[#52A638] shrink-0" />
                  <span className="truncate">{action.impactMetric}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveSopAction(action)}
                  className="text-xs font-bold text-[#12560E] hover:underline flex items-center gap-1"
                >
                  <span>View Field SOP</span>
                  <ArrowRight className="size-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SOP Dialog Modal */}
      {activeSopAction && (
        <Dialog open={!!activeSopAction} onOpenChange={() => setActiveSopAction(null)}>
          <DialogContent className="max-w-md border-[#E2DDD2] bg-[#FAF9F5] p-5">
            <DialogHeader>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-extrabold text-[#12560E] bg-[#EBF4E8] px-2 py-0.5 rounded-md">
                  Action #{String(activeSopAction.id).padStart(2, "0")}
                </span>
                <span className="text-xs font-bold text-[#5A6255]">
                  {activeSopAction.categoryLabel}
                </span>
              </div>
              <DialogTitle className="text-lg font-extrabold text-[#1A1C19]">
                {activeSopAction.title}
              </DialogTitle>
              <DialogDescription className="text-xs text-[#5A6255]">
                Verified Implementation Standard Operating Procedure.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-3 pt-2">
              <div className="p-3 rounded-2xl bg-white border border-[#E2DDD2]">
                <span className="text-[10px] font-bold text-[#12560E] uppercase tracking-wider block">
                  Targeted Metric Impact
                </span>
                <p className="text-xs font-black text-[#1A1C19] mt-0.5">
                  {activeSopAction.impactMetric}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-[10px] font-bold text-[#1A1C19] uppercase tracking-wider">
                  SOP Steps:
                </h4>
                {activeSopAction.sopSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#3A4036] bg-white p-2 rounded-xl border border-[#E2DDD2]">
                    <span className="size-4 rounded-full bg-[#EBF4E8] text-[#12560E] font-black text-[10px] flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex justify-end">
                <Button
                  size="sm"
                  onClick={() => setActiveSopAction(null)}
                  className="bg-[#12560E] text-white text-xs font-bold h-8 px-4 rounded-lg"
                >
                  Close
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
