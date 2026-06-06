"use client";

import { motion } from "framer-motion";
import { ArrowUp, Link2 } from "lucide-react";
import { siteConfig } from "@/data/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-surface/50 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 sm:flex-row lg:px-8"
      >
        <motion.div className="text-center sm:text-left">
          <p className="font-semibold text-foreground">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-muted">{siteConfig.role}</p>
          <p className="mt-2 max-w-sm text-xs leading-relaxed text-muted/80">
            Full stack developer · MERN & Next.js · TypeScript · Node.js · AWS DevOps · Rohtak, India
          </p>
          <p className="mt-4 text-xs text-muted">
            © {year} Sumit Beniwal · Full Stack Developer Portfolio
          </p>
        </motion.div>

        <motion.div className="flex items-center gap-3">
          <motion.a
            href={siteConfig.social.linkedin}
            aria-label="LinkedIn profile"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-accent/50 hover:text-accent"
          >
            <Link2 className="h-4 w-4" />
          </motion.a>
          <motion.a
            href="#home"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </motion.div>
    </footer>
  );
}
