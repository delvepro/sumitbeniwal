"use client";

import { motion, useInView } from "framer-motion";
import { Cloud, Code2, Users } from "lucide-react";
import { useRef } from "react";
import { aboutHighlights, siteConfig } from "@/data/content";
import { SectionHeading } from "@/components/ui/section-heading";

const icons = [Users, Cloud, Code2];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <motion.div ref={ref} className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Profile"
          title="Sumit Beniwal — Full Stack Developer & Team Lead"
          description="Senior fullstack developer specializing in TypeScript, MERN stack, Next.js, PostgreSQL & AWS DevOps — from architecture to production systems."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card relative overflow-hidden rounded-3xl p-8 md:p-12"
        >
          <motion.div
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div className="relative grid gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <p className="text-lg leading-relaxed text-muted">{siteConfig.profile}</p>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Currently at{" "}
                <span className="font-medium text-foreground">Delve Professionals LLC</span>{" "}
                — leading teams with{" "}
                <span className="font-medium text-foreground">MERN, DevOps & AI</span>{" "}
                from{" "}
                <span className="font-medium text-foreground">{siteConfig.location}</span>
                .
              </p>
            </motion.div>

            <div className="grid gap-4">
              {aboutHighlights.map((h, i) => {
                const Icon = icons[i] ?? Code2;
                return (
                  <motion.div
                    key={h.title}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                    whileHover={{ x: 6 }}
                    className="flex gap-4 rounded-2xl border border-border/60 bg-surface/50 p-5 transition-colors hover:border-accent/30"
                  >
                    <motion.div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                      <Icon className="h-6 w-6" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-foreground">{h.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{h.text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
