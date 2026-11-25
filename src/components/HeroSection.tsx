import { motion } from "framer-motion";
import {
  Radar,
  ShieldAlert,
  Flame,
  Cloud,
  Terminal,
  Activity,
  Network,
  Sparkles,
  ArrowUpRight,
  FileDown,
} from "lucide-react";
import { ASSETS, CAPABILITIES, PROFILE } from "@/data/portfolio";

const ICON_MAP = {
  Radar,
  ShieldAlert,
  Flame,
  Cloud,
  Terminal,
  Activity,
  Network,
  Sparkles,
} as const;

export function HeroSection() {
  const marqueeItems = [...CAPABILITIES, ...CAPABILITIES];

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden pt-24 pb-8"
    >
      {/* Warm obsidian-amber radial studio spotlight */}
      <div aria-hidden="true" className="hero-spotlight pointer-events-none absolute inset-0" />

      {/* Main editorial hero stage */}
      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-4 sm:px-8">
        {/* Subtle eyebrow */}
        <motion.a
          href={PROFILE.synthxosUrl}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-pill relative z-20 mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[11px] tracking-[0.16em] uppercase text-primary transition-colors hover:border-primary/70"
        >
          Co-Founder at Synthxos
          <ArrowUpRight className="h-3.5 w-3.5" />
        </motion.a>

        {/* Monumental layered typography + studio portrait */}
        <div className="relative flex w-full flex-col items-center justify-center py-2 sm:py-4">
          <motion.h1
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="font-display pointer-events-none select-none text-center text-[clamp(4.5rem,17vw,14.5rem)] leading-[0.86] tracking-[0.02em] text-foreground/22 sm:text-foreground/26"
          >
            {PROFILE.firstName} {PROFILE.lastName}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 -mt-12 w-[260px] sm:-mt-28 sm:w-[340px] md:-mt-36 md:w-[390px]"
          >
            <div className="relative overflow-hidden rounded-t-[180px] rounded-b-3xl">
              <img
                src={ASSETS.heroPortrait}
                alt="Bright Eduful studio portrait"
                className="h-[340px] w-full object-cover object-top sm:h-[430px] md:h-[480px]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/60 to-transparent"
              />
            </div>
          </motion.div>

          {/* Left editorial copy + Right glowing CTA (desktop overlaid, mobile stacked) */}
          <div className="relative z-20 mt-6 grid w-full max-w-5xl grid-cols-1 items-center gap-6 md:pointer-events-none md:absolute md:inset-x-0 md:bottom-14 md:mt-0 md:grid-cols-2">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="pointer-events-auto max-w-xs text-center text-sm leading-relaxed text-muted-foreground md:text-left md:text-[15px]"
            >
              {PROFILE.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="pointer-events-auto flex flex-wrap items-center justify-center gap-3 md:justify-end"
            >
              <a
                href="#contact"
                className="cta-glow inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-transform duration-200 hover:scale-[1.03]"
              >
                Book a free call
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={ASSETS.resumePdf}
                target="_blank"
                rel="noreferrer"
                className="glass-pill inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                <FileDown className="h-4 w-4 text-primary" />
                Resume
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom capability pills marquee */}
      <div className="relative z-20 mt-8 w-full overflow-hidden border-y border-border/50 py-4">
        <div className="animate-marquee flex w-max gap-3">
          {marqueeItems.map((cap, idx) => {
            const Icon = ICON_MAP[cap.icon];
            return (
              <div
                key={`${cap.label}-${idx}`}
                className="glass-pill flex items-center gap-2.5 rounded-2xl px-4 py-2.5 text-xs font-medium text-foreground/90 sm:text-sm"
              >
                <Icon className="h-4 w-4 shrink-0 text-primary" />
                <span className="whitespace-nowrap">{cap.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}