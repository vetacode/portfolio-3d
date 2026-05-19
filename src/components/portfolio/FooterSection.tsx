import { Instagram, Twitter, Youtube, Mail, ArrowUpRight } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { ContactButton } from "./ContactButton";

const SOCIALS = [
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "Twitter", icon: Twitter, href: "#" },
  { label: "Youtube", icon: Youtube, href: "#" },
  { label: "Email", icon: Mail, href: "mailto:hello@jack.studio" },
];

const LINKS = ["About", "Price", "Projects", "Contact"];

export function FooterSection() {
  return (
    <footer
      id="contact"
      className="relative z-10 px-6 sm:px-12 md:px-16 lg:px-20 pt-24 sm:pt-32 md:pt-40 pb-10 sm:pb-12 md:pb-14"
      style={{ background: "#0C0C0C", color: "#D7E2EA" }}
    >
      <div className="max-w-[1600px] mx-auto">
        <FadeIn>
          <p
            className="uppercase tracking-[0.3em] text-[#D7E2EA]/50 mb-6"
            style={{ fontSize: "clamp(0.7rem, 1vw, 0.9rem)" }}
          >
            Let&apos;s work together
          </p>
          <h2
            className="hero-heading font-black uppercase leading-[0.9] tracking-tight mb-10 sm:mb-12 md:mb-16"
            style={{ fontSize: "clamp(2.75rem, 11vw, 180px)" }}
          >
            Got a project<br />in mind?
          </h2>
          <div className="flex flex-wrap items-center gap-6 mb-20 sm:mb-24 md:mb-28">
            <ContactButton size="lg" label="Start a project" />
            <a
              href="mailto:hello@jack.studio"
              className="inline-flex items-center gap-2 text-[#D7E2EA] underline-offset-4 hover:underline uppercase tracking-widest text-sm sm:text-base"
            >
              hello@jack.studio <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 pt-10 border-t border-[#D7E2EA]/15">
          <div>
            <p className="hero-heading font-black uppercase text-2xl sm:text-3xl mb-2">Jack</p>
            <p className="text-[#D7E2EA]/60 text-sm leading-relaxed max-w-xs">
              A 3D creator driven by crafting striking and unforgettable projects.
            </p>
          </div>

          <div>
            <p className="uppercase tracking-widest text-[#D7E2EA]/50 text-xs mb-4">Navigate</p>
            <ul className="space-y-2.5">
              {LINKS.map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-[#D7E2EA] uppercase tracking-wider text-sm sm:text-base hover:opacity-60 transition-opacity"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="uppercase tracking-widest text-[#D7E2EA]/50 text-xs mb-4">Follow</p>
            <ul className="flex flex-wrap gap-3">
              {SOCIALS.map(({ label, icon: Icon, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-[#D7E2EA]/30 text-[#D7E2EA] hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#D7E2EA]/10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs uppercase tracking-widest text-[#D7E2EA]/40">
          <span>© {new Date().getFullYear()} Jack Studio. All rights reserved.</span>
          <span>Designed &amp; built with care</span>
        </div>
      </div>
    </footer>
  );
}
