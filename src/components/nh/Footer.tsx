import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const nav = [
  { label: "About Us", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Impact", href: "#impact" },
  { label: "Get Involved", href: "#get-involved" },
  { label: "Donate", href: "#donate" },
];

const socials = [Facebook, Instagram, Twitter, Linkedin];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-3">
        <div>
          <div className="font-display text-xl font-extrabold -tracking-tighter">
            New<span className="text-accent">Horizons</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Legal support, dignity, and a path forward for people leaving prison — and the families
            who wait for them.
          </p>
          <p className="mt-5 text-xs text-muted-foreground">
            Reg. No. NH/NGO/2015/04821 · 80G · FCRA
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em]">Explore</h3>
          <ul className="mt-5 space-y-3">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em]">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-3">
              <Mail className="size-4 text-accent" /> hello@newhorizons.org
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-4 text-accent" /> +91 98200 41185
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              18 Civil Lines, Near District Court, New Delhi 110054
            </li>
          </ul>
          <div className="mt-6 flex gap-3">
            {socials.map((Icon, i) => (
              <a
                key={i}
                href="#contact"
                aria-label="Social link"
                className="inline-flex size-11 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border px-5 py-6 text-center text-xs text-muted-foreground sm:px-8">
        © {new Date().getFullYear()} New Horizons Foundation. All rights reserved.
      </div>
    </footer>
  );
}
