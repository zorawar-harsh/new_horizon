import React, { useState } from "react";
import {
  Heart,
  Check,
  Copy,
  Calculator,
  Landmark,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    id: 1,
    tier: "Essential Care",
    amount: "₹1,500",
    numericAmount: 1500,
    title: "Seed Stewardship Kit",
    deliverable: "1 Trainee equipped with agro kit",
    isCritical: false,
  },
  {
    id: 2,
    tier: "Livelihoods",
    amount: "₹5,000",
    numericAmount: 5000,
    title: "Vocational Training Kit",
    deliverable: "1 Inmate certified in green practices",
    isCritical: false,
  },
  {
    id: 3,
    tier: "Most Critical",
    amount: "₹15,000",
    numericAmount: 15000,
    title: "Barrack Cool-Roof Pack",
    deliverable: "Thermal relief for 80+ inmates",
    isCritical: true,
  },
  {
    id: 4,
    tier: "Resilience",
    amount: "₹50,000",
    numericAmount: 50000,
    title: "Prison Permaculture Bed",
    deliverable: "1 Permanent garden bed (120 inmates)",
    isCritical: false,
  },
];

const presets = [2500, 5000, 15000, 50000, 100000];

export function DonateSection() {
  const [calculatorAmount, setCalculatorAmount] = useState<number>(15000);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const coolRoofArea = Math.round(calculatorAmount * 0.0666);
  const agroecologyBeds = Math.round(calculatorAmount * 0.02);
  const ecoTrainingHours = Math.round(calculatorAmount * 0.004);
  const taxExemption = Math.round(calculatorAmount * 0.5);

  return (
    <section id="donate" className="py-14 md:py-20 bg-[#FAF9F5] border-t border-[#E2DDD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF4E8] text-[#12560E] text-xs font-bold uppercase tracking-wider">
            <Heart className="size-3.5 fill-[#12560E]" /> Transparent 80G Giving Tiers
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A1C19] tracking-tight">
            Support the Mission
          </h2>
          <p className="text-sm sm:text-base text-[#5A6255]">
            100% of individual contributions directly fund cool roofs, rainwater sumps, and permaculture beds.
          </p>
        </div>

        {/* 4 Tiers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 mb-8 sm:mb-12">
          {tiers.map((t) => (
            <div
              key={t.id}
              className={`p-4 sm:p-5 rounded-2xl sm:rounded-3xl border transition-all flex flex-col justify-between ${
                t.isCritical
                  ? "bg-white border-[#12560E] ring-2 ring-[#12560E]/15 shadow-sm"
                  : "bg-white border-[#E2DDD2] hover:border-[#A8CCA0] shadow-xs"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-[#5A6255] uppercase tracking-wider">
                    {t.tier}
                  </span>
                  {t.isCritical && (
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-[#12560E] text-white">
                      Critical
                    </span>
                  )}
                </div>

                <div className="text-2xl sm:text-3xl font-black text-[#1A1C19] mb-1">
                  {t.amount}
                </div>

                <h3 className="font-bold text-sm text-[#1A1C19] mb-3">
                  {t.title}
                </h3>
              </div>

              <div>
                <div className="p-2.5 rounded-xl bg-[#FAF9F5] border border-[#E2DDD2] mb-3 text-[11px] font-bold text-[#12560E] flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-[#52A638] shrink-0" />
                  <span className="truncate">{t.deliverable}</span>
                </div>

                <Button
                  size="sm"
                  onClick={() => setCalculatorAmount(t.numericAmount)}
                  className={`w-full text-xs font-bold h-10 rounded-xl touch-manipulation ${
                    t.isCritical
                      ? "bg-[#12560E] hover:bg-[#0D3F0A] text-white"
                      : "bg-[#FAF9F5] hover:bg-[#EBF4E8] text-[#12560E] border border-[#E2DDD2]"
                  }`}
                >
                  Select {t.amount}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Live Calculator & Bank Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
          {/* Calculator Card */}
          <div className="lg:col-span-7 bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#E2DDD2] shadow-xs space-y-4 sm:space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs font-bold text-[#12560E] uppercase tracking-wider">
                <Calculator className="size-4 shrink-0" /> Live Impact Calculator
              </div>
              <span className="text-xl sm:text-2xl font-black text-[#12560E]">
                ₹{calculatorAmount.toLocaleString("en-IN")}
              </span>
            </div>

            <input
              type="range"
              min="1000"
              max="100000"
              step="500"
              value={calculatorAmount}
              onChange={(e) => setCalculatorAmount(Number(e.target.value))}
              className="w-full h-2.5 bg-[#E2DDD2] rounded-lg appearance-none cursor-pointer accent-[#12560E] touch-manipulation"
            />

            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="text-xs text-[#7A8275] font-semibold mr-1">Presets:</span>
              {presets.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setCalculatorAmount(preset)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all touch-manipulation ${
                    calculatorAmount === preset
                      ? "bg-[#12560E] text-white shadow-xs"
                      : "bg-[#FAF9F5] text-[#5A6255] border border-[#E2DDD2] hover:bg-[#EBF4E8]"
                  }`}
                >
                  ₹{preset.toLocaleString("en-IN")}
                </button>
              ))}
            </div>

            {/* Calculated Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-[#FAF9F5] border border-[#E2DDD2]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#5A6255] block">
                  Cool Roof
                </span>
                <p className="text-sm sm:text-base font-black text-[#12560E] mt-0.5 truncate">{coolRoofArea} sq ft</p>
              </div>

              <div className="p-3 rounded-2xl bg-[#FAF9F5] border border-[#E2DDD2]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#5A6255] block">
                  Garden Beds
                </span>
                <p className="text-sm sm:text-base font-black text-[#12560E] mt-0.5 truncate">{agroecologyBeds} sq ft</p>
              </div>

              <div className="p-3 rounded-2xl bg-[#FAF9F5] border border-[#E2DDD2]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#5A6255] block">
                  Training
                </span>
                <p className="text-sm sm:text-base font-black text-[#12560E] mt-0.5 truncate">{ecoTrainingHours} hrs</p>
              </div>

              <div className="p-3 rounded-2xl bg-[#FAF9F5] border border-[#E2DDD2]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#5A6255] block">
                  80G Relief
                </span>
                <p className="text-sm sm:text-base font-black text-[#12560E] mt-0.5 truncate">
                  ₹{taxExemption.toLocaleString("en-IN")}
                </p>
              </div>
            </div>
          </div>

          {/* Direct Bank Details */}
          <div className="lg:col-span-5 bg-[#12560E] text-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-white/15 pb-2">
              <div className="flex items-center gap-2">
                <Landmark className="size-4 text-[#B9F079] shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Statutory Trust Bank Details
                </span>
              </div>
              <span className="text-[10px] text-[#B9F079] font-bold shrink-0">80G Certified</span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10">
                <div>
                  <span className="text-white/60 text-[10px] block">A/C Number:</span>
                  <span className="font-mono font-bold text-sm text-white">38491029482</span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard("38491029482", "acc")}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white touch-manipulation"
                  aria-label="Copy Account Number"
                >
                  {copiedKey === "acc" ? <Check className="size-4 text-[#B9F079]" /> : <Copy className="size-4" />}
                </button>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10">
                <div>
                  <span className="text-white/60 text-[10px] block">IFSC Code:</span>
                  <span className="font-mono font-bold text-sm text-white">SBIN0001234</span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard("SBIN0001234", "ifsc")}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white touch-manipulation"
                  aria-label="Copy IFSC Code"
                >
                  {copiedKey === "ifsc" ? <Check className="size-4 text-[#B9F079]" /> : <Copy className="size-4" />}
                </button>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10">
                <div>
                  <span className="text-white/60 text-[10px] block">UPI ID:</span>
                  <span className="font-mono font-bold text-sm text-[#B9F079]">tycia@sbi</span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard("tycia@sbi", "upi")}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white touch-manipulation"
                  aria-label="Copy UPI ID"
                >
                  {copiedKey === "upi" ? <Check className="size-4 text-[#B9F079]" /> : <Copy className="size-4" />}
                </button>
              </div>
            </div>

            <p className="text-[11px] text-white/70">
              Audited annually under the Indian Trusts Act. Email:{" "}
              <a href="mailto:tyciafoundation@gmail.com" className="text-white font-bold underline break-all sm:break-normal">
                tyciafoundation@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
