"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useRef } from "react";
import { experience } from "@/data/content";
import { SectionHeading } from "@/components/ui/section-heading";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.5"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="section-padding">
      <motion.div
        ref={ref}
        className="mx-auto max-w-6xl px-6 lg:px-8"
      >
        <SectionHeading
          eyebrow="Career"
          title="Work experience — Sumit Beniwal, Full Stack Developer"
          description="From trainee to senior full stack developer & team lead — shipping MERN, Next.js & production systems with AWS DevOps."
        />

        <div ref={timelineRef} className="relative">
          <motion.div
            className="absolute left-[19px] top-0 w-0.5 origin-top bg-accent md:left-1/2 md:-ml-px"
            style={{ height: lineHeight }}
          />
          <div className="absolute left-[19px] top-0 h-full w-0.5 bg-border md:left-1/2 md:-ml-px" />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <motion.article
                key={job.title + job.company}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  delay: i * 0.15,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative grid gap-6 md:grid-cols-2 md:gap-12 ${
                  i % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"
                }`}
              >
                <div className="hidden md:block" />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`glass-card rounded-2xl p-6 md:p-8 ${
                    i % 2 === 0
                      ? "md:col-start-1 md:row-start-1 md:mr-8"
                      : "md:col-start-2 md:ml-8"
                  }`}
                >
                  <span className="font-mono text-xs text-accent">{job.period}</span>
                  <h3 className="mt-2 text-xl font-bold text-foreground">
                    {job.title}
                  </h3>
                  <p className="mt-1 flex items-center gap-2 text-sm font-medium text-muted">
                    <Briefcase className="h-4 w-4 text-accent" />
                    {job.company}
                  </p>
                  <p className="mt-4 leading-relaxed text-muted">
                    {job.description}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: i * 0.15 + 0.2, type: "spring" }}
                  className="absolute left-3 top-8 z-10 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-background md:left-1/2 md:-ml-2"
                >
                  <span className="h-2 w-2 rounded-full bg-accent" />
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
