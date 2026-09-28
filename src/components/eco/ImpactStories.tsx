import React from "react";
import { Quote } from "lucide-react";

export function ImpactStories() {
  return (
    <section id="impact" className="py-14 md:py-20 bg-white border-t border-[#E2DDD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-6 sm:mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF4E8] text-[#12560E] text-xs font-bold uppercase tracking-wider">
            Lived Realities
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1A1C19] tracking-tight">
            Verified Impact
          </h2>
          <p className="text-xs sm:text-base text-[#5A6255]">
            Real stories of restored dignity, reduced heat aggression, and reintegration livelihoods.
          </p>
        </div>

        {/* 3 Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-5">
          {/* Card 1: Rajesh */}
          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#FAF9F5] border border-[#E2DDD2] flex flex-col justify-between hover:border-[#A8CCA0] transition-all shadow-xs">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#12560E] bg-white px-2 py-0.5 rounded-md border border-[#E2DDD2]">
                  Case #481
                </span>
                <Quote className="size-4 text-[#52A638]/50" />
              </div>

              <h3 className="font-extrabold text-sm sm:text-base text-[#1A1C19]">
                From 3 Years Confinement to Agro-Supervisor
              </h3>

              <p className="text-xs text-[#5A6255] leading-relaxed italic">
                “Trained in our custodial garden and vermicompost pits at Nuh Jail. Today, Rajesh manages a community nursery in Gurgaon.”
              </p>
            </div>

            <div className="pt-3 mt-3 border-t border-[#E2DDD2] flex items-center gap-3">
              <div className="size-9 rounded-full bg-[#12560E] text-[#B9F079] font-black text-xs flex items-center justify-center shrink-0">
                R
              </div>
              <div>
                <p className="text-xs font-bold text-[#1A1C19]">Rajesh M. (Reintegrated)</p>
                <p className="text-[11px] font-semibold text-[#12560E]">Earns ₹22,000/mo in Gurgaon</p>
              </div>
            </div>
          </div>

          {/* Card 2: Deputy Superintendent */}
          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#FAF9F5] border border-[#E2DDD2] flex flex-col justify-between hover:border-[#A8CCA0] transition-all shadow-xs">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#12560E] bg-white px-2 py-0.5 rounded-md border border-[#E2DDD2]">
                  Institutional Voice
                </span>
                <Quote className="size-4 text-[#52A638]/50" />
              </div>

              <h3 className="font-extrabold text-sm sm:text-base text-[#1A1C19]">
                “Visibly Lowered Summer Barrack Stress”
              </h3>

              <p className="text-xs text-[#5A6255] leading-relaxed italic">
                “Heat waves make wards boiling cauldrons. The roof whitewash and green beds gave inmates a constructive channel. Ward friction dropped noticeably.”
              </p>
            </div>

            <div className="pt-3 mt-3 border-t border-[#E2DDD2] flex items-center gap-3">
              <div className="size-9 rounded-full bg-[#12560E] text-[#B9F079] font-black text-xs flex items-center justify-center shrink-0">
                D
              </div>
              <div>
                <p className="text-xs font-bold text-[#1A1C19]">Deputy Superintendent of Prisons</p>
                <p className="text-[11px] font-semibold text-[#12560E]">Nuh District Jail, Haryana</p>
              </div>
            </div>
          </div>

          {/* Card 3: Sunita Devi */}
          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#FAF9F5] border border-[#E2DDD2] flex flex-col justify-between hover:border-[#A8CCA0] transition-all shadow-xs">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#12560E] bg-white px-2 py-0.5 rounded-md border border-[#E2DDD2]">
                  Family Welfare
                </span>
                <Quote className="size-4 text-[#52A638]/50" />
              </div>

              <h3 className="font-extrabold text-sm sm:text-base text-[#1A1C19]">
                Emergency Education Grant for 2 Daughters
              </h3>

              <p className="text-xs text-[#5A6255] leading-relaxed italic">
                “When Sunita's spouse was detained, household stability collapsed. Emergency grants kept both daughters in school until family reunion.”
              </p>
            </div>

            <div className="pt-3 mt-3 border-t border-[#E2DDD2] flex items-center gap-3">
              <div className="size-9 rounded-full bg-[#12560E] text-[#B9F079] font-black text-xs flex items-center justify-center shrink-0">
                S
              </div>
              <div>
                <p className="text-xs font-bold text-[#1A1C19]">Sunita Devi</p>
                <p className="text-[11px] font-semibold text-[#12560E]">2 Daughters Kept in School</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
