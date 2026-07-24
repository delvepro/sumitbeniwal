"use client";

import { ArchitecturePanel } from "@/components/projects/architecture-panel";
import { SkillIcon } from "@/components/ui/skill-icons";
import { projects } from "@/data/projects";
import type { Project } from "@/types/project";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Building2,
  Home,
  MapPinned,
  Music2,
  Share2,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const categoryIcons: Record<string, LucideIcon> = {
  "SaaS & Platform": Building2,
  "Analytics Platform": BarChart3,
  "Trading Platform": TrendingUp,
  "IT Services": Building2,
  "Real Estate": Home,
  Marketing: Sparkles,
  "Music Platform": Music2,
  "Social Media": Share2,
  "E-Commerce": ShoppingBag,
  "Tourism Platform": MapPinned,
};

const accentStyles = [
  {
    icon: "from-blue-500 to-sky-400 shadow-[0_0_22px_rgba(59,130,246,0.4)]",
    badge: "bg-blue-400 text-slate-950",
    glow: "bg-blue-500/20",
  },
  {
    icon: "from-cyan-500 to-sky-400 shadow-[0_0_22px_rgba(34,211,238,0.4)]",
    badge: "bg-cyan-400 text-slate-950",
    glow: "bg-cyan-500/20",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const accent = accentStyles[index % accentStyles.length];
  const Icon = categoryIcons[project.category] ?? Building2;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="group h-full"
    >
      <motion.article
        whileHover={{ y: -4 }}
        className="glass-panel relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 p-6 md:p-7"
      >
        <div
          className={cn(
            "pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full blur-3xl transition-opacity group-hover:opacity-80",
            accent.glow,
          )}
        />

        <div className="relative flex items-start justify-between gap-3">
          <div
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white",
              accent.icon,
            )}
          >
            <Icon className="h-5 w-5" />
          </div>
          <span
            className={cn(
              "rounded-full px-3 py-1 text-[11px] font-bold tracking-wide",
              accent.badge,
            )}
          >
            {project.category}
          </span>
        </div>

        <h3 className="relative mt-5 text-xl font-bold text-foreground md:text-[1.35rem]">
          {project.title}
        </h3>
        <p className="relative mt-3 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="relative mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="chip inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-foreground shadow-sm"
            >
              <SkillIcon name={tag} className="h-3.5 w-3.5" />
              {tag}
            </span>
          ))}
        </div>

        <ArchitecturePanel architecture={project.architecture} />

        <div className="relative mt-auto flex flex-wrap items-center gap-4 border-t border-border/60 pt-5">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-tertiary transition-colors hover:text-accent"
          >
            <BookOpen className="h-4 w-4" />
            Read case study
          </Link>
          <span className="hidden h-4 w-px bg-border sm:block" aria-hidden />
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent-tertiary"
          >
            Visit live site
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </motion.article>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-accent/15 blur-[110px]"
      />

      <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-12 max-w-4xl"
        >
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Portfolio
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Featured projects by{" "}
            <span className="gradient-text">Sumit Beniwal</span>
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            Production full stack apps with architecture breakdowns — built by
            Sumit Beniwal, senior developer. Case studies: Problem, Architecture,
            Challenges, Optimization & Scalability.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-7">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
