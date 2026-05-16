"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Download, Link2, Sparkles } from "lucide-react";
import { marqueeTech, siteConfig, stats } from "@/data/content";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { cn } from "@/lib/utils";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function TechMarquee() {
  const doubled = [...marqueeTech, ...marqueeTech];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="relative mt-16 overflow-hidden border-y border-border py-4"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <motion.div
        className="flex w-max gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="shrink-0 font-mono text-sm text-muted/80"
          >
            {tech}
            <span className="mx-4 text-accent">◆</span>
          </span>
        ))}
      </motion.div>
      <motion.div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
    </motion.div>
  );
}

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  const rotateX = useTransform(springY, [-300, 300], [8, -8]);
  const rotateY = useTransform(springX, [-300, 300], [-8, 8]);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
      }}
    >
      <div className="mx-auto max-w-6xl px-6 pb-8 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <motion.div variants={item} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              {siteConfig.availability}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="text-muted">Hi, I&apos;m </span>
            <span className="gradient-text">{siteConfig.name}</span>
            <br />
            <motion.span
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-foreground"
            >
              {siteConfig.role}
            </motion.span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <MagneticButton href="#contact" variant="primary">
              Let&apos;s work together
            </MagneticButton>
            <MagneticButton href="#projects" variant="secondary">
              View projects
            </MagneticButton>
            <MagneticButton
              href={siteConfig.social.linkedin}
              variant="ghost"
              className="!px-4"
              external
            >
              <Link2 className="h-4 w-4" />
              LinkedIn
            </MagneticButton>
            <MagneticButton
              href={siteConfig.resume.href}
              download={siteConfig.resume.downloadName}
              variant="ghost"
              className="!px-4"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={item}
            style={{ rotateX, rotateY, transformPerspective: 1000 }}
            className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4 lg:max-w-none"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className={cn(
                  "glass-card group rounded-2xl p-5 text-center lg:text-left",
                )}
              >
                <motion.p
                  className="text-2xl font-bold text-foreground sm:text-3xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + i * 0.1 }}
                >
                  {stat.value}
                </motion.p>
                <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1.5 },
            y: { duration: 2, repeat: Infinity },
          }}
          className="mx-auto mt-12 flex h-12 w-12 items-center justify-center rounded-full border border-border text-muted hover:border-accent hover:text-accent"
          aria-label="Scroll to about"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.a>
      </div>

      <TechMarquee />
    </section>
  );
}
