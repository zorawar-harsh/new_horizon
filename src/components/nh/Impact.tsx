import { Quote, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

const stories = [
  {
    name: "Suresh M.",
    tag: "Legal Aid",
    quote:
      "New Horizons didn't just give me a lawyer — they gave me someone who believed my case was worth fighting. I walked out after fourteen months.",
  },
  {
    name: "Lakshmi D.",
    tag: "Family Support",
    quote:
      "When my father was in prison, we had nothing. They paid my school fees and sat with my mother in court. We were never treated like a burden.",
  },
  {
    name: "Vikram S.",
    tag: "Reintegration",
    quote:
      "The skill workshop changed how I saw myself. I run a small workshop now and I have employed two men who came out the same year I did.",
  },
];

export function Impact() {
  return (
    <section id="impact" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.25em] text-cyan">In Their Own Words</p>
        <h2 className="mt-5 text-4xl font-extrabold -tracking-tighter sm:text-6xl">
          Real Stories, <span className="text-accent">Real Change</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {stories.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.08}>
            <figure className="glow-border flex h-full flex-col rounded-3xl border border-border bg-surface p-8">
              <Quote className="size-7 text-accent" />
              <blockquote className="mt-5 flex-1 leading-relaxed text-foreground/90">
                &ldquo;{s.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-7 border-t border-border pt-5">
                <div className="font-bold">{s.name}</div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {s.tag}
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-12 flex justify-center">
          <Button variant="accentOutline" size="xl">
            <Download className="size-4" /> Download Annual Impact Report 2025–26
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
