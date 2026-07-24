"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Activities", "experience"],
  ["Certifications", "certifications"],
  ["Contact", "contact"],
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );

    navItems.forEach(([, id]) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all ${
        scrolled || open
          ? "border-slate-200 bg-white/95 shadow-sm backdrop-blur"
          : "border-transparent bg-white/80 backdrop-blur"
      }`}
    >
      <nav
        className="container-shell flex h-20 items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="flex items-center gap-3 font-black tracking-[-0.03em] text-ink"
          onClick={() => setOpen(false)}
        >
          <span className="grid size-10 place-items-center rounded-2xl bg-ink text-sm text-cyan">
            CI
          </span>
          <span className="hidden sm:inline">Chisanupong Inlin.</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`rounded-full px-3.5 py-2 text-sm font-semibold transition ${
                active === id
                  ? "bg-blue/10 text-blue"
                  : "text-slate-600 hover:bg-slate-100 hover:text-ink"
              }`}
              aria-current={active === id ? "page" : undefined}
            >
              {label}
            </a>
          ))}
        </div>

        <a href="#contact" className="btn-primary hidden !min-h-10 !px-5 lg:inline-flex">
          Let&apos;s talk
        </a>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-slate-200 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="container-shell border-t border-slate-100 bg-white py-4 lg:hidden">
          <div className="grid gap-1">
            {navItems.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className={`rounded-2xl px-4 py-3 text-sm font-bold ${
                  active === id ? "bg-blue/10 text-blue" : "text-slate-700"
                }`}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
