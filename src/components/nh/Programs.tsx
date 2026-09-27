import { Gavel, TrendingUp, Home } from "lucide-react";
import { Reveal } from "./Reveal";

const programs = [
  {
    icon: Gavel,
    title: "Legal Aid",
    body: "Free legal representation for undertrials and those unable to afford counsel — bail applications, case tracking, and court accompaniment from first hearing to final order.",
  },
  {
    icon: TrendingUp,
    title: "Reintegration Support",
    body: "Practical pathways back to life after release: vocational training, documentation, employer partnerships, and placement mentoring for the first critical year.",
  },
  {
    icon: Home,
    title: "Family Support",
    body: "Emotional and financial assistance for families left behind — ration support, children's schooling, counselling, and guidance through the legal process.",
  },
];

export function Programs() {
  return (
    <section id="programs" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.25em] text-accent">Our Programs</p>
        <h2 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight -tracking-tighter sm:text-5xl">
          Before, during, and after release — we walk alongside every step of the journey.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {programs.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <article className="glow-border h-full rounded-3xl border border-border bg-surface p-8">
              <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-accent/10">
                <p.icon className="size-6 text-accent" />
              </div>
              <h3 className="mt-6 text-2xl font-extrabold -tracking-tighter">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
