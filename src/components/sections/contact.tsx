"use client";

import { motion, useInView } from "framer-motion";
import {
  Link2,
  Mail,
  MapPin,
  Send,
  Sparkles,
  UserRound,
} from "lucide-react";
import { useRef, useState } from "react";
import { siteConfig } from "@/data/content";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden pb-16">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-accent/20 blur-[110px]"
      />

      <motion.div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-10 max-w-3xl"
        >
          <span className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            <Send className="h-3.5 w-3.5" />
            Contact
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Let&apos;s <span className="gradient-text">connect</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Open to full-time opportunities, freelance projects, and
            collaborations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="grid gap-5 lg:grid-cols-5 lg:gap-6"
        >
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="glass-panel flex flex-col rounded-2xl border border-border/70 p-6 sm:p-7 lg:col-span-2"
          >
            <h3 className="text-lg font-semibold text-foreground">Get in touch</h3>

            <ul className="mt-6 space-y-0">
              <motion.li whileHover={{ x: 3 }} className="pb-5">
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/15 text-accent shadow-[0_0_16px_rgba(59,130,246,0.25)]">
                    <Link2 className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block break-all text-sm font-medium text-foreground transition-colors hover:text-accent">
                      linkedin.com/in/sumit-beniwal-7b25462b0
                    </span>
                    <span className="mt-0.5 block text-xs text-muted">
                      LinkedIn Profile
                    </span>
                  </span>
                </a>
              </motion.li>

              <li className="border-t border-border/60 pt-5">
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-500/15 text-sky-400 shadow-[0_0_16px_rgba(56,189,248,0.25)]">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-foreground">
                      {siteConfig.location}
                    </span>
                    <span className="mt-0.5 block text-xs text-muted">
                      Available Worldwide
                    </span>
                  </span>
                </div>
              </li>
            </ul>

            <div className="mt-auto rounded-xl border border-dashed border-accent/40 bg-accent/5 p-4 pt-5">
              <p className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>
                  Open to{" "}
                  <span className="font-semibold text-sky-300">
                    senior roles, consulting & technical leadership
                  </span>
                </span>
              </p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.28 }}
            className="glass-panel rounded-2xl border border-accent/30 p-6 shadow-[0_0_40px_rgba(59,130,246,0.12)] sm:p-7 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <div className="relative">
                  <UserRound className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-border bg-input py-3 pl-10 pr-4 text-foreground outline-none transition-all placeholder:text-muted/60 focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-border bg-input py-3 pl-10 pr-4 text-foreground outline-none transition-all placeholder:text-muted/60 focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="Tell me about your project or role..."
                className="w-full resize-none rounded-xl border border-border bg-input px-4 py-3 text-foreground outline-none transition-all placeholder:text-muted/60 focus:border-accent focus:ring-2 focus:ring-accent/20"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="gradient-btn mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all hover:brightness-110 sm:w-auto"
            >
              {sent ? (
                "Message sent!"
              ) : (
                <>
                  Send message
                  <Send className="h-4 w-4" />
                </>
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </section>
  );
}
