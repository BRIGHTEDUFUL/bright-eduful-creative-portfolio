import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight, Send } from "lucide-react";
import { toast } from "sonner";
import { PROFILE } from "@/data/portfolio";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in your name, email, and message.");
      return;
    }
    toast.success(`Thanks ${name.trim()} — your message is ready for Bright Eduful.`);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section id="contact" className="border-t border-border/50 py-24 px-4 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary">
              Start a Conversation
            </p>
            <h2 className="font-heading mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Let’s build & secure what’s next.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Available for cybersecurity consulting, Synthxos partnerships, and security engineering
              collaborations.
            </p>

            <div className="mt-8 space-y-4 text-sm">
              <a
                href={`mailto:${PROFILE.email}`}
                className="flex items-center gap-3 text-foreground/90 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 text-primary" />
                <span>{PROFILE.email}</span>
              </a>
              <a
                href={`tel:${PROFILE.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 text-foreground/90 transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 text-primary" />
                <span>{PROFILE.phone}</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{PROFILE.location}</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={PROFILE.synthxosUrl}
                target="_blank"
                rel="noreferrer"
                className="glass-pill inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                Synthxos
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glass-pill inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-border bg-card/85 p-6 sm:p-8"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-medium text-muted-foreground">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alex Mensah"
                  className="mt-1.5 w-full rounded-xl border border-input bg-background/70 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-xs font-medium text-muted-foreground">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="mt-1.5 w-full rounded-xl border border-input bg-background/70 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-xs font-medium text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project or security needs..."
                  className="mt-1.5 w-full resize-none rounded-xl border border-input bg-background/70 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="cta-glow inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-transform duration-200 hover:scale-[1.01]"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </div>
          </motion.form>
        </div>

        <footer className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
          <p className="font-mono">Co-Founder · Synthxos</p>
        </footer>
      </div>
    </section>
  );
}