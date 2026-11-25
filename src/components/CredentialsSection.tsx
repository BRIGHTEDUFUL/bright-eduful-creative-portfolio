import { motion } from "framer-motion";
import { Award, ExternalLink, FileDown } from "lucide-react";
import { ASSETS, CERTIFICATIONS } from "@/data/portfolio";

export function CredentialsSection() {
  return (
    <section id="credentials" className="border-t border-border/50 py-24 px-4 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary">
              Verified Credentials
            </p>
            <h2 className="font-heading mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Certifications & Resume
            </h2>
          </div>
          <a
            href={ASSETS.resumePdf}
            target="_blank"
            rel="noreferrer"
            className="glass-pill inline-flex items-center gap-2 self-start rounded-full px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/60 hover:text-primary sm:self-auto"
          >
            <FileDown className="h-4 w-4 text-primary" />
            Download Full Resume (PDF)
          </a>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card/80 p-6 transition-colors hover:border-primary/50"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="font-mono text-[11px] text-muted-foreground">{cert.issuer}</span>
                </div>
                <h3 className="font-heading mt-4 text-lg font-bold text-foreground">
                  {cert.title}
                </h3>
                <p className="font-mono mt-1.5 text-xs text-muted-foreground">{cert.date}</p>
                {"credentialId" in cert && (
                  <p className="font-mono mt-1 text-[11px] text-primary/85">
                    ID: {cert.credentialId}
                  </p>
                )}
              </div>

              {"pdfUrl" in cert && (
                <a
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-opacity hover:opacity-80"
                >
                  View Certificate PDF
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}