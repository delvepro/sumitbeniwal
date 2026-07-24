"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/data/content";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 80],
    ["var(--nav-scroll-from)", "var(--nav-bg)"],
  );
  const blur = useTransform(scrollY, [0, 80], ["blur(0px)", "blur(16px)"]);

  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        style={{ backgroundColor: background, backdropFilter: blur }}
        className="fixed inset-x-0 top-0 z-50 border-b border-transparent"
      >
        <nav className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-6 py-3 lg:px-8">
          <Link href="#home" className="group flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent via-accent-secondary to-accent-tertiary text-sm font-bold text-white shadow-[0_0_20px_rgba(59,130,246,0.45)]">
              {siteConfig.name.charAt(0)}
            </span>
            <span className="hidden font-semibold tracking-tight sm:inline">
              {siteConfig.name.split(" ")[0]}
              <span className="text-accent">.</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 rounded-full border border-border/60 bg-surface/40 px-2 py-1.5 backdrop-blur-xl lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors",
                    active === link.href
                      ? "text-foreground"
                      : "text-muted hover:text-foreground",
                  )}
                >
                  {link.label}
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute bottom-0.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_10px_rgba(59,130,246,0.9)]"
                      transition={{ type: "spring", stiffness: 400, damping: 28 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <a
              href={siteConfig.resume.href}
              download={siteConfig.resume.downloadName}
              className="hidden items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-2.5 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:border-accent/50 hover:bg-surface-elevated sm:inline-flex"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <button
              type="button"
              aria-label="Menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface lg:hidden"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/85 backdrop-blur-xl lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col gap-2 px-6 pt-24"
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl border border-border bg-surface px-6 py-4 text-lg font-medium"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <li>
                <a
                  href={siteConfig.resume.href}
                  download={siteConfig.resume.downloadName}
                  className="mt-2 flex items-center justify-center gap-2 rounded-2xl border border-border bg-surface px-6 py-4 text-lg font-medium"
                >
                  <Download className="h-5 w-5" />
                  Download CV
                </a>
              </li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
