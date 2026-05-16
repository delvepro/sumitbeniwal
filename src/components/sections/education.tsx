"use client";

import { motion, useInView } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useRef } from "react";
import { education } from "@/data/content";
import { SectionHeading } from "@/components/ui/section-heading";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="section-padding">
      <motion.div ref={ref} className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          description="Strong foundation in computer science from Maharishi Dayanand University, Rohtak."
        />

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {education.map((item) => (
            <motion.article
              key={item.degree}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -6 }}
              className="glass-card flex gap-5 rounded-2xl p-6 md:p-8"
            >
              <motion.div
                whileHover={{ rotate: [0, -8, 8, 0] }}
                transition={{ duration: 0.4 }}
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent"
              >
                <GraduationCap className="h-7 w-7" />
              </motion.div>
              <div>
                <span className="font-mono text-xs text-accent">{item.period}</span>
                <h3 className="mt-2 text-lg font-bold text-foreground">{item.degree}</h3>
                <p className="mt-1 text-sm text-muted">{item.institution}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
