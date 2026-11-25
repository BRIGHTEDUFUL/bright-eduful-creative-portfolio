import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Credentials", href: "#credentials" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 md:flex md:items-center md:justify-between">
        <a
          href="#home"
          className="font-heading truncate text-sm font-bold tracking-[0.18em] uppercase text-foreground transition-opacity hover:opacity-80"
        >
          <span className="italic">{PROFILE.firstName}</span>{" "}
          <span className="font-normal text-muted-foreground">{PROFILE.lastName}</span>
        </a>

        <nav
          aria-label="Primary"
          className="glass-pill hidden items-center gap-1 rounded-full px-2 py-1.5 md:flex"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary/80 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href="#contact"
            className="glass-pill hidden items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary/60 hover:text-primary md:inline-flex"
          >
            Get in Touch
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="glass-pill grid h-10 w-10 place-items-center rounded-full text-foreground md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="glass-pill mx-auto mt-3 flex max-w-6xl flex-col gap-1 rounded-2xl p-3 md:hidden">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Get in Touch
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </header>
  );
}