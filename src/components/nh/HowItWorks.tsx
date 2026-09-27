import { Reveal } from "./Reveal";

const steps = [
  { n: "01", title: "Identify", body: "We reach individuals through courts, prisons, and legal aid referrals." },
  { n: "02", title: "Support", body: "A case lawyer and family support worker are assigned within days." },
  { n: "03", title: "Guide", body: "We walk alongside with skills training, counselling, and documentation." },
  { n: "04", title: "Reintegrate", body: "Transition into employment, housing, and community belonging." },
];

export function HowItWorks() {
  return (
    <section className="border-y border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <h2 className="text-4xl font-extrabold -tracking-tighter sm:text-5xl">How It Works</h2>
        </Reveal>

        <div className="relative mt-14 grid gap-8 md:grid-cols-4">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-6 hidden h-px bg-border md:block"
          />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="relative">
                <div className="flex size-12 items-center justify-center rounded-full border border-accent/60 bg-background font-display text-sm font-bold text-accent">
                  {s.n}
                </div>
                <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
