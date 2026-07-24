"use client";

import { motion, useInView } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { useRef } from "react";
import { education } from "@/data/content";
import { cn } from "@/lib/utils";

const accents = [
  {
    icon: "bg-blue-500/15 text-blue-400 border-blue-400/40 shadow-[0_0_22px_rgba(59,130,246,0.35)]",
    period: "text-blue-400",
    pin: "text-blue-400",
    glow: "from-blue-500/50 via-blue-400/20 to-transparent",
    border: "border-blue-400/25 hover:border-blue-400/45",
  },
  {
    icon: "bg-cyan-500/15 text-cyan-400 border-cyan-400/40 shadow-[0_0_22px_rgba(34,211,238,0.35)]",
    period: "text-cyan-400",
    pin: "text-cyan-400",
    glow: "from-cyan-400/50 via-sky-400/20 to-transparent",
    border: "border-cyan-400/25 hover:border-cyan-400/45",
  },
];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="section-padding relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-accent/20 blur-[110px]"
      />

      <motion.div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-10 max-w-3xl"
        >
          <span className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            <GraduationCap className="h-4 w-4" />
            Education
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Academic <span className="gradient-text">background</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Strong foundation in computer science from Maharishi Dayanand
            University, Rohtak.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-5 md:grid-cols-2 md:gap-6"
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.14 } },
          }}
        >
          {education.map((item, i) => {
            const accent = accents[i % accents.length];

            return (
              <motion.article
                key={item.degree}
                variants={{
                  hidden: { opacity: 0, y: 32 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -6 }}
                className={cn(
                  "glass-panel relative overflow-hidden rounded-2xl border p-6 sm:p-7",
                  accent.border,
                )}
              >
                <div
                  aria-hidden
                  className={cn(
                    "absolute inset-x-0 top-0 h-px bg-gradient-to-r",
                    accent.glow,
                  )}
                />
                <div
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute -left-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br opacity-40 blur-2xl",
                    accent.glow,
                  )}
                />

                <div className="relative flex gap-4 sm:gap-5">
                  <motion.div
                    whileHover={{ rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 0.4 }}
                    className={cn(
                      "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border",
                      accent.icon,
                    )}
                  >
                    <GraduationCap className="h-7 w-7" />
                  </motion.div>

                  <div className="min-w-0">
                    <span
                      className={cn(
                        "text-sm font-semibold tracking-wide",
                        accent.period,
                      )}
                    >
                      {item.period}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-foreground sm:text-xl">
                      {item.degree}
                    </h3>
                    <p
                      className={cn(
                        "mt-2 flex items-start gap-1.5 text-sm",
                        accent.pin,
                      )}
                    >
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>{item.institution}</span>
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
