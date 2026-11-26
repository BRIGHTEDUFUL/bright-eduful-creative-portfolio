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
      className="relative flex min-h-screen flex-col justify-between overflow-hidden pt-16 pb-4"
    >
      {/* Warm obsidian-amber radial studio spotlight behind the portrait */}
      <div
        aria-hidden="true"
        className="hero-spotlight pointer-events-none absolute inset-0 scale-110"
      />

      {/* Main editorial hero stage */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-end px-4 pt-6 sm:px-8">
        {/* Subtle eyebrow */}
        <motion.a
          href={PROFILE.synthxosUrl}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-pill relative z-20 mb-2 inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[11px] tracking-[0.16em] uppercase text-primary transition-colors hover:border-primary/70"
        >
          Co-Founder at Synthxos
          <ArrowUpRight className="h-3.5 w-3.5" />
        </motion.a>

        {/* Monumental layered typography + commanding studio portrait */}
        <div className="relative flex w-full flex-1 flex-col items-center justify-end">
          {/* Arched cinematic display name framing the portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none relative z-0 -mb-24 w-full max-w-[920px] select-none sm:-mb-36 lg:-mb-44"
          >
            <h1 className="sr-only">
              {PROFILE.firstName} {PROFILE.lastName}
            </h1>
            <svg
              viewBox="0 0 1000 320"
              aria-hidden="true"
              className="h-auto w-full overflow-visible"
            >
              <defs>
                <path
                  id="hero-name-arc"
                  d="M 65,300 A 455,250 0 0,1 935,300"
                  fill="none"
                />
                <linearGradient id="hero-name-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--foreground)" stopOpacity="0.32" />
                  <stop offset="28%" stopColor="var(--foreground)" stopOpacity="0.92" />
                  <stop offset="50%" stopColor="var(--primary)" stopOpacity="1" />
                  <stop offset="72%" stopColor="var(--foreground)" stopOpacity="0.92" />
                  <stop offset="100%" stopColor="var(--foreground)" stopOpacity="0.32" />
                </linearGradient>
              </defs>
              <path
                d="M 115,310 A 410,218 0 0,1 885,310"
                fill="none"
                stroke="var(--primary)"
                strokeOpacity="0.22"
                strokeWidth="1.25"
              />
              <text
                fill="url(#hero-name-grad)"
                className="font-display text-[118px] tracking-[0.07em]"
              >
                <textPath
                  href="#hero-name-arc"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  {PROFILE.firstName} {PROFILE.lastName}
                </textPath>
              </text>
            </svg>
          </motion.div>

          {/* Seamlessly integrated studio portrait nested inside the arch */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-[300px] sm:w-[390px] lg:w-[460px]"
          >
            <div className="relative">
              <img
                src={ASSETS.heroPortrait}
                alt="Bright Eduful studio portrait"
                className="portrait-feather h-[380px] w-full object-cover object-top mix-blend-lighten contrast-105 sm:h-[470px] lg:h-[540px]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent"
              />
            </div>
          </motion.div>

          {/* Left editorial copy + Right glowing CTA flanking the portrait */}
          <div className="relative z-20 -mt-6 grid w-full max-w-6xl grid-cols-1 items-center gap-5 pb-4 lg:pointer-events-none lg:absolute lg:inset-x-0 lg:bottom-12 lg:mt-0 lg:grid-cols-2 lg:pb-0">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="pointer-events-auto mx-auto max-w-md text-center text-sm leading-relaxed text-foreground/80 lg:mx-0 lg:max-w-[270px] lg:text-left lg:text-[15px]"
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
      <div className="relative z-20 mt-2 w-full overflow-hidden border-y border-border/50 py-3.5">
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