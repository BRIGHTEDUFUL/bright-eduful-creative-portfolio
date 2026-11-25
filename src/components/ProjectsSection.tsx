import { motion } from "framer-motion";
import { ScanSearch, Radar, ShieldCheck } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";

const PROJECT_ICONS = {
  ScanSearch,
  Radar,
  ShieldCheck,
} as const;

export function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-border/50 py-24 px-4 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary">
            Selected Security Work
          </p>
          <h2 className="font-heading mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROJECTS.map((project, idx) => {
            const Icon = PROJECT_ICONS[project.icon];
            return (
              <motion.article
                key={project.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card/85 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="grid h-11 w-11 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-display text-4xl tracking-wider text-foreground/15 transition-colors group-hover:text-primary/35">
                      {project.number}
                    </span>
                  </div>

                  <p className="font-mono mt-6 text-[11px] tracking-[0.15em] uppercase text-primary">
                    {project.category}
                  </p>
                  <h3 className="font-heading mt-2 text-2xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-border/60 pt-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono rounded-full bg-secondary px-3 py-1 text-[11px] text-foreground/85"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}