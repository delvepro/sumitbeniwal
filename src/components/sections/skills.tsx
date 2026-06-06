"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/data/content";
import { SectionHeading } from "@/components/ui/section-heading";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section-padding">
      <div ref={ref} className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Expertise"
          title="Skills — Full Stack Developer (TypeScript, MERN, AWS)"
          description="Sumit Beniwal full stack skills: TypeScript, React, Next.js, Node.js, PostgreSQL, MongoDB, scalable architecture, real-time systems, AWS cloud & CI/CD."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40, rotateX: 15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{
                delay: gi * 0.1,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="glass-card group rounded-2xl p-6"
              style={{ transformPerspective: 800 }}
            >
              <motion.h3
                className="mb-4 font-mono text-xs uppercase tracking-widest text-accent"
                initial={{ width: 0 }}
                animate={isInView ? { width: "auto" } : {}}
              >
                {group.category}
              </motion.h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: gi * 0.1 + si * 0.05 }}
                    whileHover={{
                      scale: 1.08,
                      backgroundColor: "var(--accent-muted)",
                    }}
                    className="cursor-default rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
