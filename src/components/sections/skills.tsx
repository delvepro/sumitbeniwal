"use client";

import { motion, useInView } from "framer-motion";
import {
  Cloud,
  Code2,
  Database,
  Puzzle,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { useRef } from "react";
import { skills } from "@/data/content";
import { SkillIcon } from "@/components/ui/skill-icons";
import { cn } from "@/lib/utils";

const categoryMeta: {
  match: string;
  icon: LucideIcon;
  iconClass: string;
  titleClass: string;
}[] = [
  {
    match: "TypeScript & Frontend",
    icon: Code2,
    iconClass:
      "bg-blue-500/15 text-blue-400 shadow-[0_0_18px_rgba(59,130,246,0.35)] border-blue-400/30",
    titleClass: "text-blue-400",
  },
  {
    match: "Backend & Architecture",
    icon: Database,
    iconClass:
      "bg-sky-500/15 text-sky-400 shadow-[0_0_18px_rgba(14,165,233,0.35)] border-sky-400/30",
    titleClass: "text-sky-400",
  },
  {
    match: "Real-time",
    icon: Zap,
    iconClass:
      "bg-cyan-500/15 text-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.35)] border-cyan-400/30",
    titleClass: "text-cyan-400",
  },
  {
    match: "DevOps",
    icon: Cloud,
    iconClass:
      "bg-blue-600/15 text-blue-300 shadow-[0_0_18px_rgba(37,99,235,0.35)] border-blue-300/30",
    titleClass: "text-blue-300",
  },
  {
    match: "Tools",
    icon: Puzzle,
    iconClass:
      "bg-sky-400/15 text-sky-300 shadow-[0_0_18px_rgba(56,189,248,0.35)] border-sky-300/30",
    titleClass: "text-sky-300",
  },
];

function getCategoryMeta(category: string) {
  return (
    categoryMeta.find((m) => category.includes(m.match) || category.startsWith(m.match)) ??
    categoryMeta[0]
  );
}

function CategoryTitle({ category }: { category: string }) {
  const meta = getCategoryMeta(category);

  if (category.includes("AWS")) {
    const [before] = category.split("(AWS)");
    return (
      <h3
        className={cn(
          "text-sm font-semibold uppercase tracking-[0.14em]",
          meta.titleClass,
        )}
      >
        {before.trim()}{" "}
        <span className="text-[#FF9900]">(AWS)</span>
      </h3>
    );
  }

  return (
    <h3
      className={cn(
        "text-sm font-semibold uppercase tracking-[0.14em]",
        meta.titleClass,
      )}
    >
      {category}
    </h3>
  );
}

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-accent/15 blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-accent-tertiary/10 blur-[100px]"
      />

      <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-12 max-w-4xl"
        >
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Expertise
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Skills — Full Stack Developer{" "}
            <span className="gradient-text">(TypeScript, MERN, AWS)</span>
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            Sumit Beniwal full stack skills: TypeScript, React, Next.js, Node.js,
            PostgreSQL, MongoDB, scalable architecture, real-time systems, AWS
            cloud & CI/CD.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map((group, gi) => {
            const meta = getCategoryMeta(group.category);
            const Icon = meta.icon;

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 36 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: gi * 0.08,
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -4 }}
                className="glass-panel group relative overflow-hidden rounded-2xl border border-border/70 p-6 sm:p-7"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-3xl transition-opacity group-hover:opacity-80" />

                <div className="relative mb-5 flex items-center gap-3">
                  <div
                    className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-xl border",
                      meta.iconClass,
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <CategoryTitle category={group.category} />
                </div>

                <div className="relative flex flex-wrap gap-2.5">
                  {group.items.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.88 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: gi * 0.08 + si * 0.03 }}
                      whileHover={{
                        scale: 1.05,
                        borderColor: "rgba(59,130,246,0.45)",
                      }}
                      className="chip inline-flex cursor-default items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-foreground shadow-sm backdrop-blur-sm"
                    >
                      <SkillIcon name={skill} className="h-4 w-4" />
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
