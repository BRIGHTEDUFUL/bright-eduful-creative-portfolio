import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Shield } from "lucide-react";
import { ASSETS, EXPERIENCES, PROFILE } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary">
              Leadership & Track Record
            </p>
            <h2 className="font-heading mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Synthxos & Experience
            </h2>
          </div>
          <a
            href={PROFILE.synthxosUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-opacity hover:opacity-80"
          >
            Visit synthxos.com
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          {/* Experience list */}
          <div className="space-y-4">
            {EXPERIENCES.map((exp, idx) => (
              <motion.article
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group rounded-2xl border border-border bg-card/80 p-6 transition-colors hover:border-primary/50"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-primary">
                      {"url" in exp ? (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 hover:underline"
                        >
                          {exp.company}
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        exp.company
                      )}
                    </p>
                  </div>
                  <span className="font-mono rounded-full border border-border bg-secondary/70 px-3 py-1 text-xs text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {exp.summary}
                </p>
                <ul className="mt-4 space-y-1.5 text-sm text-foreground/85">
                  {exp.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Shield className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>

          {/* Portrait & Education side column */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <img
                src={ASSETS.aboutPortrait}
                alt="Bright Eduful in tailored navy blazer"
                className="h-80 w-full object-cover object-top"
              />
              <div className="p-5">
                <p className="font-heading text-base font-bold text-foreground">
                  {PROFILE.name}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {PROFILE.location} · Co-Founder, Synthxos
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card/80 p-6">
              <div className="flex items-center gap-2 text-primary">
                <GraduationCap className="h-5 w-5" />
                <span className="font-mono text-xs tracking-[0.15em] uppercase">Education</span>
              </div>
              <h3 className="font-heading mt-3 text-lg font-bold text-foreground">
                {PROFILE.education.degree}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{PROFILE.education.school}</p>
              <p className="font-mono mt-1 text-xs text-primary/90">{PROFILE.education.period}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {PROFILE.education.focus.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-border bg-secondary/70 px-2.5 py-1 text-xs text-foreground/85"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}