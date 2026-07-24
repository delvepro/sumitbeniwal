"use client";

import { motion, useInView } from "framer-motion";
import {
  Cloud,
  Code2,
  Layers,
  Rocket,
  Sparkles,
  UserRound,
  Users,
  Zap,
} from "lucide-react";
import { useRef } from "react";
import { aboutHighlights, aboutMetrics, siteConfig } from "@/data/content";
import { cn } from "@/lib/utils";

const highlightIcons = [Users, Cloud, Code2];

const metricIcons = {
  rocket: Rocket,
  code: Code2,
  star: Sparkles,
  layers: Layers,
  zap: Zap,
} as const;

const metricStyles = [
  "bg-blue-500/15 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.25)]",
  "bg-sky-500/15 text-sky-400 shadow-[0_0_20px_rgba(14,165,233,0.25)]",
  "bg-cyan-500/15 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.25)]",
  "bg-blue-600/15 text-blue-300 shadow-[0_0_20px_rgba(37,99,235,0.25)]",
  "bg-sky-400/15 text-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.25)]",
];

const keywordColors: Record<string, string> = {
  TypeScript: "text-sky-400",
  "React, Next.js, and Node.js": "text-blue-400",
  "MERN stack": "text-cyan-400",
  PostgreSQL: "text-sky-300",
  MongoDB: "text-blue-300",
  Redis: "text-cyan-300",
  WebSockets: "text-sky-400",
  Docker: "text-blue-400",
  "CI/CD": "text-cyan-400",
  AWS: "text-sky-400",
};

function HighlightedBio({ text }: { text: string }) {
  const phrases = Object.keys(keywordColors).sort((a, b) => b.length - a.length);
  const pattern = new RegExp(`(${phrases.map(escapeRegex).join("|")})`, "g");
  const parts = text.split(pattern);

  return (
    <p className="text-base leading-relaxed text-muted sm:text-lg">
      {parts.map((part, i) => {
        const color = keywordColors[part];
        if (color) {
          return (
            <span key={`${part}-${i}`} className={cn("font-medium", color)}>
              {part}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </p>
  );
}

function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-accent/20 blur-[100px]"
      />

      <motion.div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-10 max-w-4xl"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <UserRound className="h-3.5 w-3.5" />
            Profile
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Sumit Beniwal — Full Stack{" "}
            <span className="gradient-text">Developer & Team Lead</span>
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            Senior fullstack developer specializing in TypeScript, MERN stack,
            Next.js, PostgreSQL & AWS DevOps — from architecture to production
            systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="glass-panel relative overflow-hidden rounded-3xl border border-accent/25 p-6 shadow-[0_0_40px_rgba(59,130,246,0.08)] sm:p-8 md:p-10"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-accent-tertiary/10 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.65 }}
              className="space-y-4"
            >
              <HighlightedBio text={siteConfig.profile} />
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                Currently at{" "}
                <span className="font-medium text-sky-400">
                  Delve Professionals LLC
                </span>{" "}
                — leading teams with{" "}
                <span className="font-medium text-blue-400">
                  MERN, DevOps & AI
                </span>{" "}
                from{" "}
                <span className="font-medium text-cyan-400">
                  {siteConfig.location}
                </span>
                .
              </p>
            </motion.div>

            <div className="flex flex-col gap-3.5">
              {aboutHighlights.map((h, i) => {
                const Icon = highlightIcons[i] ?? Code2;
                return (
                  <motion.div
                    key={h.title}
                    initial={{ opacity: 0, x: 24 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.55 }}
                    whileHover={{ x: 4 }}
                    className="flex gap-4 rounded-2xl border border-border/70 bg-surface/60 p-4 backdrop-blur-md transition-colors hover:border-accent/40 sm:p-5"
                  >
                    <div
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12",
                        metricStyles[i],
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{h.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {h.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.65 }}
          className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5"
        >
          {aboutMetrics.map((metric, i) => {
            const Icon = metricIcons[metric.icon];
            return (
              <motion.div
                key={metric.label}
                whileHover={{ y: -4 }}
                className="glass-panel flex items-center gap-3 rounded-2xl border border-border/70 p-4 sm:gap-3.5 sm:p-5"
              >
                <div
                  className={cn(
                    "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                    metricStyles[i],
                  )}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xl font-bold text-foreground sm:text-2xl">
                    {metric.value}
                  </p>
                  <p className="text-[11px] leading-snug text-muted sm:text-xs">
                    {metric.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
