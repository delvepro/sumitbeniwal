"use client";

import { ArchitecturePanel } from "@/components/projects/architecture-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";
import type { Project } from "@/types/project";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, BookOpen, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const TILT_DIVISOR = 130;

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 500, damping: 55 });
  const springRotateY = useSpring(rotateY, { stiffness: 500, damping: 55 });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = e.clientX - rect.left - rect.width / 2;
    const cy = e.clientY - rect.top - rect.height / 2;
    rotateX.set(-cy / TILT_DIVISOR);
    rotateY.set(cx / TILT_DIVISOR);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.04, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformPerspective: 1600,
      }}
      className="group relative"
    >
      <motion.article
        whileHover={{ y: -3 }}
        className="glass-card relative h-full overflow-hidden rounded-2xl p-6 md:p-8"
      >
        <motion.div
          className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${project.gradient} opacity-20 blur-2xl transition-opacity group-hover:opacity-30`}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <motion.div
          className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${project.gradient} text-white shadow-lg`}
          whileHover={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.35 }}
        >
          <ExternalLink className="h-5 w-5" />
        </motion.div>

        <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <ArchitecturePanel architecture={project.architecture} />

        <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border/60 pt-6">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent"
          >
            <BookOpen className="h-4 w-4" />
            Read case study
          </Link>
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
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
  return (
    <section id="projects" className="section-padding">
      <motion.div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured projects by Sumit Beniwal"
          description="Production full stack apps with architecture breakdowns — built by Sumit Beniwal, senior developer. Case studies: Problem, Architecture, Challenges, Optimization & Scalability."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
