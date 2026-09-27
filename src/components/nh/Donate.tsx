import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

const tiers = [
  { amount: "₹500", body: "One month of ration support for a family" },
  { amount: "₹2,000", body: "A full legal consultation and case filing" },
  { amount: "₹5,000", body: "Vocational job training for one person" },
  { amount: "₹10,000+", body: "A full reintegration package, end to end" },
];

const allocation = [
  { label: "Programs", pct: 42 },
  { label: "Legal", pct: 26 },
  { label: "Family", pct: 17 },
  { label: "Admin", pct: 15 },
];

const bankDetails = `Account Name: New Horizons Foundation
Account Number: 5042 1178 9930
IFSC: HDFC0001842
Branch: Civil Lines
UPI: newhorizons@hdfcbank`;

export function Donate() {
  const [selected, setSelected] = useState(1);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(bankDetails);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="donate" className="bg-accent text-accent-foreground">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <h2 className="max-w-4xl text-4xl font-extrabold leading-[1.02] -tracking-tighter sm:text-6xl">
            Your Contribution, Someone&rsquo;s New Beginning
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((t, i) => {
            const active = selected === i;
            return (
              <Reveal key={t.amount} delay={i * 0.06}>
                <button
                  onClick={() => setSelected(i)}
                  className={`h-full w-full rounded-3xl border p-7 text-left transition-transform duration-200 hover:-translate-y-1.5 ${
                    active
                      ? "border-transparent bg-background text-foreground shadow-2xl"
                      : "border-accent-foreground/25 bg-transparent"
                  }`}
                >
                  <div className="font-display text-3xl font-extrabold -tracking-tighter">
                    {t.amount}
                  </div>
                  <p
                    className={`mt-3 text-sm leading-relaxed ${active ? "text-muted-foreground" : "opacity-80"}`}
                  >
                    {t.body}
                  </p>
                  <span
                    className={`mt-6 inline-block text-xs font-bold uppercase tracking-[0.18em] ${active ? "text-accent" : ""}`}
                  >
                    {active ? "Selected" : "Choose"}
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button
              size="xl"
              className="bg-background text-foreground hover:bg-background/90"
              asChild
            >
              <a href="#donate">Donate {tiers[selected]?.amount} Now</a>
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="border-accent-foreground/40 bg-transparent text-accent-foreground hover:bg-accent-foreground/10 hover:text-accent-foreground"
              asChild
            >
              <a href="#contact">Talk to Our Team</a>
            </Button>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl bg-background p-8 text-foreground">
              <h3 className="text-xl font-bold">Where Every Rupee Goes</h3>
              <div className="mt-7 space-y-5">
                {allocation.map((a) => (
                  <div key={a.label}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{a.label}</span>
                      <span className="text-muted-foreground">{a.pct}%</span>
                    </div>
                    <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-accent"
                        style={{ width: `${a.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-3xl bg-background p-8 text-foreground">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold">Bank Transfer</h3>
                <Button variant="subtle" size="sm" onClick={copy}>
                  {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                  {copied ? "Copied" : "Copy"}
                </Button>
              </div>
              <pre className="mt-6 overflow-x-auto rounded-2xl border border-border bg-surface p-5 font-mono text-xs leading-6 text-muted-foreground">
                {bankDetails}
              </pre>
              <p className="mt-4 text-xs text-muted-foreground">
                All donations are 80G tax exempt. Receipts are issued within 48 hours.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
