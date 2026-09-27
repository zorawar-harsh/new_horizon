import React, { useState } from "react";
import { Mail, Phone, MapPin, ShieldCheck, Heart, Check } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { BrochureModal } from "./BrochureModal";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [brochureOpen, setBrochureOpen] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <>
      <footer className="bg-[#182613] text-white pt-12 pb-10 border-t border-[#2A3E24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Main Footer Links & Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10">
            {/* Col 1: Enlarged Logo & Statutory */}
            <div className="lg:col-span-5 space-y-3">
              <div className="bg-white/95 p-3 rounded-2xl inline-block">
                <Logo size="lg" />
              </div>

              <p className="text-xs text-white/70 leading-relaxed max-w-sm">
                Flagship climate-resilience programme transforming prisons into climate-adaptive, sustainable spaces.
              </p>

              <div className="text-[11px] text-white/60 space-y-1">
                <p>Reg. Trust ID: TYCIA/NGO/2015/04821 • Indian Trusts Act, 1882</p>
                <p className="flex items-center gap-1.5 text-[#B9F079] font-medium">
                  <ShieldCheck className="size-3.5" /> Section 12A & 80G Certified
                </p>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="lg:col-span-3 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B9F079] block mb-2">
                Quick Navigation
              </span>
              <ul className="space-y-1.5 text-xs text-white/70">
                <li><a href="#hero" className="hover:text-white transition-colors">Overview</a></li>
                <li><a href="#crisis" className="hover:text-white transition-colors">The Crisis</a></li>
                <li><a href="#model" className="hover:text-white transition-colors">5-Stage Protocol</a></li>
                <li><a href="#facility-blueprint" className="hover:text-white transition-colors">Pilot Schematic</a></li>
                <li><a href="#climate-actions" className="hover:text-white transition-colors">30 Climate Actions</a></li>
                <li><a href="#donate" className="hover:text-white transition-colors">80G Giving Tiers</a></li>
              </ul>
            </div>

            {/* Col 3: Quarterly Dispatch & Contact */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B9F079] block">
                Quarterly Dispatch
              </span>
              <p className="text-xs text-white/70 leading-relaxed">
                Receive policy briefs, agroecology field notes, and constitutional updates.
              </p>

              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-[#B9F079]"
                />
                <Button
                  type="submit"
                  size="sm"
                  className="bg-[#B9F079] hover:bg-[#A6DE66] text-[#12560E] font-bold text-xs h-9 px-3 rounded-xl"
                >
                  {subscribed ? <Check className="size-3.5" /> : "Join"}
                </Button>
              </form>

              <div className="pt-2 text-xs text-white/70 space-y-1">
                <p>Contact: <a href="mailto:tyciafoundation@gmail.com" className="text-[#B9F079] hover:underline font-semibold">tyciafoundation@gmail.com</a> • +91 880573488</p>
                <p className="text-[11px] text-white/50">N-33, 2nd Floor, Green Park Ext., New Delhi</p>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Legal Links */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/60">
            <p className="text-center sm:text-left">
              © 2015–2026 TYCIA Foundation (Turn Your Concern Into Action). Reg. TYCIA/NGO/2015/04821.
            </p>

            <div className="flex items-center gap-4">
              <a href="#donate" className="hover:text-white underline">80G Compliance</a>
              <button
                type="button"
                onClick={() => setBrochureOpen(true)}
                className="hover:text-white underline"
              >
                Field Brochure
              </button>
            </div>
          </div>
        </div>
      </footer>

      <BrochureModal open={brochureOpen} onOpenChange={setBrochureOpen} />
    </>
  );
}
