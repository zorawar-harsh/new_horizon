import { Users, Building2, Scale, Megaphone, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const actions = [
  { icon: Users, title: "Volunteer", body: "Give a few hours a week to courts, classrooms, or families." },
  { icon: Building2, title: "Corporate Partnership", body: "Hire, fund, or host training with your organisation." },
  { icon: Scale, title: "Pro-Bono Legal Aid", body: "Take on a case and change the course of a life." },
  { icon: Megaphone, title: "Spread Awareness", body: "Share stories that shift how society sees second chances." },
];

const openings = ["Legal Case Volunteer", "Employment Mentor", "Awareness Speaker"];

export function GetInvolved() {
  return (
    <section id="get-involved" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <Reveal>
        <h2 className="text-4xl font-extrabold -tracking-tighter sm:text-6xl">
          Join Our <span className="text-accent">Mission</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
          {actions.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.06}>
              <article className="glow-border h-full rounded-3xl border border-border bg-surface p-7">
                <a.icon className="size-6 text-accent" />
                <h3 className="mt-5 text-lg font-bold">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <aside className="h-full rounded-3xl border border-accent/40 bg-accent/5 p-8">
            <h3 className="text-lg font-bold">Current Volunteer Openings</h3>
            <ul className="mt-6 space-y-3">
              {openings.map((o) => (
                <li
                  key={o}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-background px-5 py-4 text-sm font-medium"
                >
                  {o}
                  <ArrowUpRight className="size-4 text-accent" />
                </li>
              ))}
            </ul>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
