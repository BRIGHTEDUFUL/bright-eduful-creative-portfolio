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
      className="relative flex min-h-screen flex-col justify-between overflow-hidden pt-20 pb-6"
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
          className="glass-pill relative z-20 mb-3 inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[11px] tracking-[0.16em] uppercase text-primary transition-colors hover:border-primary/70"
        >
          Co-Founder at Synthxos
          <ArrowUpRight className="h-3.5 w-3.5" />
        </motion.a>

        {/* Monumental layered typography + studio portrait */}
        <div className="relative flex w-full flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="font-display pointer-events-none relative z-0 select-none text-center text-[clamp(3.75rem,13.5vw,12.5rem)] leading-[0.88] tracking-[0.03em] text-foreground/30"
          >
            {PROFILE.firstName} {PROFILE.lastName}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 -mt-6 w-[230px] sm:-mt-10 sm:w-[270px] lg:-mt-16 lg:w-[340px]"
          >
            <div
              className="relative overflow-hidden"
              style={{
                maskImage:
                  "radial-gradient(ellipse 74% 82% at 50% 44%, black 52%, transparent 98%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 74% 82% at 50% 44%, black 52%, transparent 98%)",
              }}
            >
              <img
                src={ASSETS.heroPortrait}
                alt="Bright Eduful studio portrait"
                className="h-[300px] w-full object-cover object-top sm:h-[340px] lg:h-[430px]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background via-background/70 to-transparent"
              />
            </div>
          </motion.div>

          {/* Left editorial copy + Right glowing CTA (wide desktop overlaid, tablet/mobile stacked cleanly) */}
          <div className="relative z-20 mt-4 grid w-full max-w-5xl grid-cols-1 items-center gap-5 lg:pointer-events-none lg:absolute lg:inset-x-0 lg:bottom-10 lg:mt-0 lg:grid-cols-2">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="pointer-events-auto mx-auto max-w-md text-center text-sm leading-relaxed text-muted-foreground lg:mx-0 lg:max-w-xs lg:text-left lg:text-[15px]"
            >
              {PROFILE.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="pointer-events-auto flex flex-wrap items-center justify-center gap-3 lg:justify-end"
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
      <div className="relative z-20 mt-6 w-full overflow-hidden border-y border-border/50 py-3.5">
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