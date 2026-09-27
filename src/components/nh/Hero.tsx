import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "500+", label: "Prisoners Assisted" },
  { value: "300+", label: "Families Supported" },
  { value: "150+", label: "Successfully Reintegrated" },
  { value: "10+", label: "Years of Service" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-25 blur-[120px]"
        style={{ background: "var(--gradient-accent)" }}
      />
      <div className="relative mx-auto max-w-7xl px-5 pb-40 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground"
        >
          Est. 2015 — Justice with dignity
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-8 max-w-4xl text-5xl font-extrabold leading-[0.95] -tracking-tighter sm:text-7xl lg:text-8xl"
        >
          Everyone Deserves a <span className="text-accent">Second Chance</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          We stand with those leaving prison — offering legal support, dignity, and a genuine path
          forward for individuals and their families.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <Button variant="accent" size="xl" asChild>
            <a href="#donate">
              Donate Now <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button variant="accentOutline" size="xl" asChild>
            <a href="#programs">Learn Our Work</a>
          </Button>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto -mb-20 max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-surface px-6 py-9 text-center sm:px-8 sm:py-12">
              <div className="font-display text-4xl font-extrabold -tracking-tighter text-accent sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
