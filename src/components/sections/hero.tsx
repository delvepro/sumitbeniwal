"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  Briefcase,
  Code2,
  FolderKanban,
  Globe2,
  Mail,
  MapPin,
  Rocket,
  Smile,
} from "lucide-react";
import Image from "next/image";
import { heroTech, siteConfig, stats } from "@/data/content";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { SkillIcon } from "@/components/ui/skill-icons";
import { cn } from "@/lib/utils";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const statIcons = {
  apps: Briefcase,
  assets: FolderKanban,
  users: Code2,
  views: Smile,
} as const;

const iconColors = [
  "bg-accent/20 text-accent",
  "bg-accent-secondary/20 text-accent-secondary",
  "bg-success/20 text-success",
  "bg-accent-tertiary/20 text-accent-tertiary",
];

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.833L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function ProfileCard() {
  const socials = [
    {
      href: siteConfig.social.github || "#",
      icon: GitHubIcon,
      label: "GitHub",
      show: !!siteConfig.social.github,
    },
    {
      href: siteConfig.social.linkedin,
      icon: LinkedInIcon,
      label: "LinkedIn",
      show: true,
    },
    {
      href: siteConfig.social.twitter || "#",
      icon: XIcon,
      label: "Twitter",
      show: !!siteConfig.social.twitter,
    },
    {
      href: siteConfig.email ? `mailto:${siteConfig.email}` : "#contact",
      icon: Mail,
      label: "Email",
      show: true,
    },
  ].filter((s) => s.show);

  return (
    <motion.div
      variants={item}
      className="glass-panel relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] p-6 sm:p-8"
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-tertiary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-accent/25 blur-3xl" />

      <div className="relative flex flex-col items-center">
        <div className="glow-ring relative rounded-full p-[3px]">
          <div className="relative h-44 w-44 overflow-hidden rounded-full bg-background sm:h-52 sm:w-52">
            <Image
              src="/profile.png"
              alt={`${siteConfig.name} — ${siteConfig.title}`}
              fill
              sizes="(max-width: 640px) 176px, 208px"
              className="object-cover object-[center_20%]"
              priority
            />
          </div>
        </div>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3 py-1 text-xs font-medium text-success">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          {siteConfig.hireStatus}
        </div>

        <h2 className="mt-4 text-xl font-bold text-foreground sm:text-2xl">
          {siteConfig.title}
        </h2>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm text-muted">
          <span className="inline-flex items-center gap-1.5">
            <Globe2 className="h-4 w-4 text-accent-tertiary" />
            {siteConfig.workScope}
          </span>
          <span className="inline-flex items-center gap-1.5 text-success">
            <MapPin className="h-4 w-4" />
            India
          </span>
        </div>

        <div className="mt-6 flex items-center gap-3">
          {socials.map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              whileHover={{ y: -3, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface/70 text-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Icon className="h-4 w-4" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10"
        >
          <div className="flex flex-col items-start text-left">
            <motion.div variants={item} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-medium text-foreground backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                </span>
                {siteConfig.availability}
                <Rocket className="h-3.5 w-3.5 text-accent" />
              </span>
            </motion.div>

            <motion.p variants={item} className="text-base text-muted sm:text-lg">
              Hi, I&apos;m
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-1 text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-7xl"
            >
              <span className="gradient-text">{siteConfig.name}</span>
            </motion.h1>

            <motion.h2
              variants={item}
              className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-foreground sm:text-4xl md:text-5xl"
            >
              {siteConfig.role}
            </motion.h2>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              Building scalable web, cloud and AI powered products that solve{" "}
              <span className="font-medium text-accent">real world</span> problems.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <MagneticButton href="#contact" variant="primary">
                <Rocket className="h-4 w-4" />
                Hire Me
              </MagneticButton>
              <MagneticButton href="#projects" variant="secondary">
                <Boxes className="h-4 w-4" />
                Explore Projects
              </MagneticButton>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap gap-2.5"
            >
              {heroTech.map((tech, i) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.05 }}
                  whileHover={{ y: -2, scale: 1.04 }}
                  className="chip inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium text-foreground shadow-sm backdrop-blur-md sm:text-sm"
                >
                  <SkillIcon name={tech.name} className="h-4 w-4" />
                  {tech.name}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <ProfileCard />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7 }}
          className="glass-panel mt-14 grid grid-cols-2 gap-4 rounded-[1.75rem] p-5 sm:gap-6 sm:p-7 lg:grid-cols-4"
        >
          {stats.map((stat, i) => {
            const Icon = statIcons[stat.icon];
            return (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4 }}
                className="flex items-center gap-3 sm:gap-4"
              >
                <div
                  className={cn(
                    "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12",
                    iconColors[i],
                  )}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xl font-bold text-foreground sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted sm:text-sm">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
