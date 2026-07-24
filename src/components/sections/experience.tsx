"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Briefcase,
  Building2,
  Code2,
  Rocket,
  Users,
} from "lucide-react";
import { useRef } from "react";
import { careerMetrics, experience } from "@/data/content";
import { SkillIcon } from "@/components/ui/skill-icons";
import { cn } from "@/lib/utils";

const VISIBLE_TECH = 5;

const metricIcons = {
  briefcase: Briefcase,
  code: Code2,
  rocket: Rocket,
  users: Users,
} as const;

const metricStyles = [
  "bg-blue-500/15 text-blue-400 shadow-[0_0_18px_rgba(59,130,246,0.3)] border-blue-400/30",
  "bg-sky-500/15 text-sky-400 shadow-[0_0_18px_rgba(14,165,233,0.3)] border-sky-400/30",
  "bg-cyan-500/15 text-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.3)] border-cyan-400/30",
  "bg-blue-600/15 text-blue-300 shadow-[0_0_18px_rgba(37,99,235,0.3)] border-blue-300/30",
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.85", "end 0.45"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-accent/20 blur-[110px]"
      />

      <motion.div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-12 max-w-4xl"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/35 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <Briefcase className="h-3.5 w-3.5" />
            Career
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Work experience — Sumit Beniwal,{" "}
            <span className="gradient-text">Full Stack Developer</span>
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            From trainee to senior full stack developer & team lead — shipping
            MERN, Next.js & production systems with AWS DevOps.
          </p>
        </motion.div>

        <div ref={timelineRef} className="relative">
          <div className="absolute left-[19px] top-0 h-full w-px bg-border/80 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            className="absolute left-[19px] top-0 w-px origin-top bg-gradient-to-b from-accent via-accent-tertiary to-accent md:left-1/2 md:-translate-x-1/2"
            style={{ height: lineHeight }}
          />

          <div className="space-y-10 md:space-y-14">
            {experience.map((job, i) => {
              const isLeft = i % 2 === 0;
              const visible = job.tech.slice(0, VISIBLE_TECH);
              const extra = job.tech.length - visible.length;
              const isPresent = job.period.toLowerCase() === "present";

              return (
                <motion.article
                  key={job.title + job.company}
                  initial={{ opacity: 0, x: isLeft ? -36 : 36 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    delay: i * 0.12,
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative grid md:grid-cols-2 md:gap-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: i * 0.12 + 0.15, type: "spring" }}
                    className="absolute left-[11px] top-8 z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 border-accent bg-background shadow-[0_0_16px_rgba(59,130,246,0.7)] md:left-1/2 md:-translate-x-1/2"
                  >
                    <span className="h-2 w-2 rounded-full bg-accent" />
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    className={cn(
                      "glass-panel ml-10 rounded-2xl border border-accent/20 p-5 shadow-[0_0_28px_rgba(59,130,246,0.06)] sm:p-6 md:ml-0",
                      isLeft
                        ? "md:col-start-1 md:mr-8 md:justify-self-end"
                        : "md:col-start-2 md:ml-8 md:justify-self-start",
                      "md:w-full md:max-w-xl",
                    )}
                  >
                    <span
                      className={cn(
                        "inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
                        isPresent
                          ? "border border-accent/40 bg-accent/15 text-accent"
                          : "border border-sky-400/30 bg-sky-500/10 text-sky-300",
                      )}
                    >
                      {job.period}
                    </span>

                    <h3 className="mt-3 text-lg font-bold text-foreground sm:text-xl">
                      {job.title}
                    </h3>

                    <p className="mt-2 flex items-center gap-2 text-sm font-medium text-muted">
                      <Building2 className="h-4 w-4 shrink-0 text-accent" />
                      {job.company}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-muted sm:text-[15px]">
                      {job.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {visible.map((tech) => (
                        <span
                          key={tech}
                          className="chip inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-foreground shadow-sm"
                        >
                          <SkillIcon name={tech} className="h-3.5 w-3.5" />
                          {tech}
                        </span>
                      ))}
                      {extra > 0 && (
                        <span className="inline-flex items-center rounded-lg border border-accent/30 bg-accent/10 px-2.5 py-1.5 text-xs font-semibold text-accent">
                          +{extra}
                        </span>
                      )}
                    </div>
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.65 }}
          className="glass-panel mt-14 grid grid-cols-2 gap-4 rounded-2xl border border-accent/20 p-4 sm:gap-0 sm:p-2 md:grid-cols-4"
        >
          {careerMetrics.map((metric, i) => {
            const Icon = metricIcons[metric.icon];
            return (
              <div
                key={metric.label}
                className={cn(
                  "flex items-center gap-3 px-3 py-3 sm:px-5 sm:py-4",
                  i < careerMetrics.length - 1 &&
                    "md:border-r md:border-border/60",
                )}
              >
                <div
                  className={cn(
                    "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border",
                    metricStyles[i],
                  )}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xl font-bold text-foreground sm:text-2xl">
                    {metric.value}
                  </p>
                  <p className="text-xs text-muted sm:text-sm">{metric.label}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
