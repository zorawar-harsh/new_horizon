import React from "react";
import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";

export function TyciaFoundation() {
  return (
    <section className="py-14 md:py-20 bg-[#FAF9F5] border-t border-[#E2DDD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Mission Block */}
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF4E8] text-[#12560E] text-xs font-bold uppercase tracking-wider">
              Turn Your Concern Into Action • Est. 2015
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1C19] tracking-tight">
              Prioritising Prisoner Wellbeing
            </h2>

            <p className="text-sm sm:text-base text-[#5A6255] leading-relaxed max-w-xl">
              TYCIA Foundation leads Project Eco-Reform to transform prisons into climate-adaptive,
              sustainable, and rehabilitative spaces across India.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
              <span className="flex items-center gap-1.5 font-bold text-[#12560E] bg-white px-3 py-1.5 rounded-xl border border-[#E2DDD2]">
                <ShieldCheck className="size-4" /> Section 12A & 80G Certified
              </span>
              <span className="font-semibold text-[#5A6255] bg-white px-3 py-1.5 rounded-xl border border-[#E2DDD2]">
                Reg. TYCIA/NGO/2015/04821
              </span>
            </div>
          </div>

          {/* Founder Compact Block */}
          <div className="lg:col-span-5 p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white border border-[#E2DDD2] shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="size-11 sm:size-12 rounded-2xl bg-[#12560E] text-[#B9F079] font-black text-base sm:text-lg flex items-center justify-center shrink-0">
                KK
              </div>
              <div>
                <h3 className="font-extrabold text-sm sm:text-base text-[#1A1C19]">Karan Kumar</h3>
                <p className="text-xs font-bold text-[#12560E]">Founder, Eco-Reform & TYCIA</p>
                <p className="text-[11px] text-[#7A8275] flex items-center gap-1">
                  <MapPin className="size-3 shrink-0" /> Green Park Extension, New Delhi
                </p>
              </div>
            </div>

            <p className="text-xs text-[#5A6255] leading-relaxed italic bg-[#FAF9F5] p-3 rounded-2xl border border-[#E2DDD2]">
              “Extreme weather and poor infrastructure heavily impact inmates and staff. Eco-Reform creates low-cost, restorative interventions that scale.”
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs pt-2 border-t border-[#F0EDE4]">
              <a href="mailto:Karanpsc@gmail.com" className="font-bold text-[#12560E] hover:underline flex items-center gap-1.5 truncate">
                <Mail className="size-3.5 shrink-0" /> <span className="truncate">Karanpsc@gmail.com</span>
              </a>
              <a href="tel:+91880573488" className="font-semibold text-[#5A6255] hover:text-[#1A1C19] flex items-center gap-1.5 shrink-0">
                <Phone className="size-3.5 shrink-0" /> +91 880573488
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
