import { Scale, HeartHandshake, ShieldCheck, Eye, BadgeCheck, Target, Compass } from "lucide-react";
import { Reveal } from "./Reveal";

const values = [
  { icon: ShieldCheck, label: "Dignity" },
  { icon: Scale, label: "Justice" },
  { icon: HeartHandshake, label: "Compassion" },
  { icon: Eye, label: "Transparency" },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 pb-24 pt-40 sm:px-8">
      <Reveal>
        <h2 className="max-w-3xl text-4xl font-extrabold -tracking-tighter sm:text-6xl">
          About Us &amp; <span className="text-accent">Mission</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <article className="glow-border h-full rounded-3xl border border-border bg-surface p-8 sm:p-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Est. 2015
            </span>
            <h3 className="mt-6 text-3xl font-extrabold -tracking-tighter sm:text-4xl">
              Our Story, Our Mission
            </h3>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Founded in 2015, New Horizons began as a weekend legal clinic run by three lawyers in
              a borrowed room beside a district court. Today we are a registered NGO partnering with
              courts, prisons, and local businesses across the region.
            </p>
            <p className="mt-4 text-xl font-semibold leading-snug">
              &ldquo;No person is defined by their worst moment — and no family should be punished
              for it either.&rdquo;
            </p>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid h-full gap-5">
            <article className="glow-border rounded-3xl border border-border bg-surface p-8">
              <Target className="size-6 text-accent" />
              <h3 className="mt-4 text-xl font-bold">Our Mission</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                To secure fair legal representation and a dignified return to society for every
                person touched by incarceration.
              </p>
            </article>
            <article className="glow-border rounded-3xl border border-border bg-surface p-8">
              <Compass className="size-6 text-cyan" />
              <h3 className="mt-4 text-xl font-bold">Our Vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                A justice system where release is a beginning, not a sentence that follows someone
                for life.
              </p>
            </article>
          </div>
        </Reveal>

        <Reveal delay={0.05} className="lg:col-span-2">
          <article className="glow-border h-full rounded-3xl border border-border bg-surface p-8 sm:p-10">
            <h3 className="text-xl font-bold">Core Values</h3>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {values.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-border bg-background px-4 py-6 text-center"
                >
                  <Icon className="mx-auto size-6 text-accent" />
                  <div className="mt-3 text-sm font-semibold">{label}</div>
                </div>
              ))}
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.12}>
          <article className="glow-border h-full rounded-3xl border border-border bg-surface p-8">
            <h3 className="text-xl font-bold">Accreditations</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <BadgeCheck className="mt-0.5 size-5 shrink-0 text-accent" />
                <span>80G Tax Exempt Certified</span>
              </li>
              <li className="flex items-start gap-3">
                <BadgeCheck className="mt-0.5 size-5 shrink-0 text-accent" />
                <span>FCRA Registered</span>
              </li>
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
