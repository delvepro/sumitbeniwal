"use client";

import { motion } from "framer-motion";
import { ArrowUp, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/content";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    {
      href: siteConfig.social.github || undefined,
      label: "GitHub",
      icon: GitHubIcon,
      show: !!siteConfig.social.github,
    },
    {
      href: siteConfig.social.linkedin,
      label: "LinkedIn",
      icon: LinkedInIcon,
      show: true,
    },
    {
      href: siteConfig.email ? `mailto:${siteConfig.email}` : "#contact",
      label: "Email",
      icon: Mail,
      show: true,
    },
  ].filter((s) => s.show);

  return (
    <footer className="relative pb-10 pt-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="glass-panel flex flex-col gap-8 rounded-2xl border border-border/70 p-6 sm:p-7 md:flex-row md:items-center md:justify-between md:gap-10 md:p-8">
          <div className="flex min-w-0 flex-1 gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-sm font-bold text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]">
              SB
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-foreground">{siteConfig.name}</p>
              <p className="mt-0.5 text-sm text-muted">
                Full Stack Developer & Senior Software Engineer
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted/80">
                Full stack developer · MERN & Next.js · TypeScript · Node.js ·
                AWS DevOps
              </p>
              <p className="mt-2 flex items-center gap-1.5 text-xs text-muted">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                {siteConfig.location}
              </p>
              <p className="mt-3 text-xs text-muted/70">
                © {year} Sumit Beniwal · Full Stack Developer Portfolio
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 sm:gap-6">
            <div>
              <p className="mb-2.5 text-xs font-medium uppercase tracking-wider text-muted">
                Connect
              </p>
              <div className="flex items-center gap-2.5">
                {socials.map(({ href, label, icon: Icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={href?.startsWith("http") ? "_blank" : undefined}
                    rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                    whileHover={{ y: -3, scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface/70 text-muted transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.a
              href="#home"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-btn flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
