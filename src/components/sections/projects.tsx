"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useRef } from "react";
import { projects } from "@/data/content";
import { SectionHeading } from "@/components/ui/section-heading";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = e.clientX - rect.left - rect.width / 2;
    const cy = e.clientY - rect.top - rect.height / 2;
    rotateX.set(-cy / 20);
    rotateY.set(cx / 20);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformPerspective: 1200,
      }}
      className="group relative"
    >
      <motion.article
        whileHover={{ y: -8 }}
        className="glass-card relative h-full overflow-hidden rounded-2xl p-6 md:p-8"
      >
        <motion.div
          className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${project.gradient} opacity-20 blur-2xl transition-opacity group-hover:opacity-40`}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <motion.div
          className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${project.gradient} text-white shadow-lg`}
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <ExternalLink className="h-5 w-5" />
        </motion.div>

        <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <motion.div
          className="mt-6 flex flex-wrap gap-2"
          initial="hidden"
          whileHover="show"
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted border border-border"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent"
          whileHover={{ x: 4 }}
        >
          Visit live site
          <ArrowUpRight className="h-4 w-4" />
        </motion.a>
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
          title="Featured projects"
          description="9+ production apps — scalable backends, queues, auth, real-time systems, and AWS DevOps deployments."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
