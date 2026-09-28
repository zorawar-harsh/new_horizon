import React from "react";
import { ShieldCheck, Sprout, CheckCircle2 } from "lucide-react";

export function PartnersSection() {
  return (
    <section id="partners" className="py-14 md:py-20 bg-white border-t border-[#E2DDD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-6 sm:mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF4E8] text-[#12560E] text-xs font-bold uppercase tracking-wider">
            Collaboration
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1A1C19] tracking-tight">
            Institutional Partners
          </h2>
          <p className="text-xs sm:text-base text-[#5A6255]">
            Bridging correctional administration with environmental philanthropy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {/* Partner 1 */}
          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#FAF9F5] border border-[#E2DDD2] shadow-xs hover:border-[#A8CCA0] transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-xl bg-[#EBF4E8] text-[#12560E] shrink-0">
                <ShieldCheck className="size-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-[#1A1C19]">Department of Prisons, Haryana</h3>
                <p className="text-xs font-bold text-[#12560E]">Government Host • Nuh District Jail</p>
              </div>
            </div>

            <p className="text-xs text-[#5A6255] leading-relaxed mb-3">
              Granting institutional access, custodial collaboration, and administrative validation of the 30 Climate Actions Blueprint.
            </p>

            <ul className="space-y-1.5 text-xs text-[#3A4036] pt-2 border-t border-[#E2DDD2]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-[#12560E] shrink-0" />
                <span>Compound access & warden-inmate participation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-[#12560E] shrink-0" />
                <span>Systemic endorsement of cool-roof and garden SOPs</span>
              </li>
            </ul>
          </div>

          {/* Partner 2 */}
          <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#FAF9F5] border border-[#E2DDD2] shadow-xs hover:border-[#A8CCA0] transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-xl bg-[#EBF4E8] text-[#12560E] shrink-0">
                <Sprout className="size-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-[#1A1C19]">Rainmatter Foundation</h3>
                <p className="text-xs font-bold text-[#12560E]">Catalytic Philanthropic Partner • Zerodha</p>
              </div>
            </div>

            <p className="text-xs text-[#5A6255] leading-relaxed mb-3">
              Providing vital catalytic funding, mentorship, and ecosystem backing to scale regenerative prison models nationwide.
            </p>

            <ul className="space-y-1.5 text-xs text-[#3A4036] pt-2 border-t border-[#E2DDD2]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-[#12560E]" />
                <span>Catalytic funding for eco-infrastructure retrofits</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-[#12560E]" />
                <span>Ecosystem network support for nationwide replication</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
