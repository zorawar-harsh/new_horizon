import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Download,
  Share2,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Sprout,
  Droplets,
  Layers,
} from "lucide-react";

interface BrochureModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BrochureModal({ open, onOpenChange }: BrochureModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 border-[#E2DDD2] bg-[#FAF9F5]">
        <div className="bg-[#12560E] text-white p-6 sm:p-8 rounded-t-lg">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="size-3.5 text-[#B9F079]" /> Official Field Publication
          </div>
          <DialogTitle className="text-2xl sm:text-3xl font-extrabold text-white">
            Prisons Under Pressure: Addressing Climate Crisis in Indian Prisons
          </DialogTitle>
          <DialogDescription className="text-white/80 mt-2 text-sm sm:text-base">
            Project Eco-Reform Field Brochure & Standard Operating Procedure (SOP) • Piloted at
            Nuh District Jail, Haryana by TYCIA Foundation.
          </DialogDescription>
        </div>

        <div className="p-6 sm:p-8 space-y-8 text-[#1A1C19]">
          {/* Executive Summary Block */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white border border-[#E2DDD2] shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-[#12560E]">
                Pilot Site
              </span>
              <p className="text-lg font-bold mt-1 text-[#1A1C19]">Nuh District Jail</p>
              <p className="text-xs text-[#5A6255] mt-0.5">Mewat Region, Southern Haryana</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E2DDD2] shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-[#12560E]">
                Framework
              </span>
              <p className="text-lg font-bold mt-1 text-[#1A1C19]">30 Standardized Actions</p>
              <p className="text-xs text-[#5A6255] mt-0.5">Across 5 Institutional Domains</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E2DDD2] shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-[#12560E]">
                Verified Cooling
              </span>
              <p className="text-lg font-bold mt-1 text-[#12560E]">3.5°C to 5.2°C Drop</p>
              <p className="text-xs text-[#5A6255] mt-0.5">High-albedo barrack cool roofing</p>
            </div>
          </div>

          {/* Key Brochure Sections */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-[#1A1C19]">Publication Contents & Protocols</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-[#E2DDD2] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#EBF4E8] text-[#12560E]">
                  <Layers className="size-5" />
                </div>
                <div>
                  <h5 className="font-semibold text-sm text-[#1A1C19]">
                    1. National Vulnerability Audit
                  </h5>
                  <p className="text-xs text-[#5A6255] mt-1">
                    Mapping extreme heat, water distress, and ventilation across 20+ correctional
                    hotspots in India.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2DDD2] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#EBF4E8] text-[#12560E]">
                  <Droplets className="size-5" />
                </div>
                <div>
                  <h5 className="font-semibold text-sm text-[#1A1C19]">
                    2. Decentralized Water & Waste
                  </h5>
                  <p className="text-xs text-[#5A6255] mt-1">
                    450,000L monsoon harvesting and 250kg daily organic kitchen waste diversion into
                    vermicompost.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2DDD2] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#EBF4E8] text-[#12560E]">
                  <Sprout className="size-5" />
                </div>
                <div>
                  <h5 className="font-semibold text-sm text-[#1A1C19]">
                    3. Permaculture & Nutrition
                  </h5>
                  <p className="text-xs text-[#5A6255] mt-1">
                    1.2-acre living canopy supplying 420kg of fresh organic vegetables directly to
                    barrack daily diets.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2DDD2] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#EBF4E8] text-[#12560E]">
                  <ShieldCheck className="size-5" />
                </div>
                <div>
                  <h5 className="font-semibold text-sm text-[#1A1C19]">
                    4. Restorative Vocational SOP
                  </h5>
                  <p className="text-xs text-[#5A6255] mt-1">
                    Accredited certificate coursework in organic nursery operations and custodial
                    eco-maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Institutional Endorsement */}
          <div className="p-4 rounded-xl bg-[#EBF4E8] border border-[#CDE5C2] flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-5 text-[#12560E]" />
              <span className="text-sm font-semibold text-[#12560E]">
                Validated with Haryana Prisons Dept. & Supported by Rainmatter Foundation
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="bg-white border-[#CDE5C2] text-[#12560E] hover:bg-[#EBF4E8]"
                onClick={() => {
                  window.print();
                }}
              >
                <Download className="size-3.5 mr-1.5" /> Download / Print SOP
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
