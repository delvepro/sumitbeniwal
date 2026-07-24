"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function AnimatedBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isLight = mounted && resolvedTheme === "light";

  if (!mounted) {
    return (
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-background"
      />
    );
  }

  if (isLight) {
    return (
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#f5f7fc]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
          style={{ backgroundImage: "url(/light-bg.png)" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.55)_0%,rgba(245,247,252,0.35)_50%,rgba(245,247,252,0.85)_100%)]" />
        <div className="absolute inset-0 light-dots opacity-70" />

        <motion.div
          className="absolute -left-32 -top-20 h-[28rem] w-[28rem] rounded-full bg-sky-300/35 blur-[110px]"
          animate={{
            x: [0, 40, 10, 0],
            y: [0, 30, -15, 0],
            scale: [1, 1.08, 0.96, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-24 top-1/4 h-[26rem] w-[26rem] rounded-full bg-blue-300/30 blur-[100px]"
          animate={{
            x: [0, -35, -10, 0],
            y: [0, 40, -20, 0],
            scale: [1, 0.94, 1.06, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-16 left-1/3 h-[20rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-200/40 blur-[120px]"
          animate={{
            opacity: [0.35, 0.6, 0.35],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{ backgroundImage: "url(/space-bg.png)" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,20,48,0.75)_0%,rgba(7,11,22,0.55)_45%,rgba(8,40,60,0.7)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(7,11,22,0.55)_55%,rgba(7,11,22,0.92)_100%)]" />
      <div className="absolute inset-0 stars opacity-60" />

      <motion.div
        className="absolute -left-40 top-10 h-[32rem] w-[32rem] rounded-full bg-accent/30 blur-[120px]"
        animate={{
          x: [0, 60, 20, 0],
          y: [0, 40, -20, 0],
          scale: [1, 1.12, 0.96, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-accent-tertiary/25 blur-[110px]"
        animate={{
          x: [0, -50, -20, 0],
          y: [0, 50, -30, 0],
          scale: [1, 0.92, 1.08, 1],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[22rem] w-[40rem] -translate-x-1/2 rounded-full bg-accent-secondary/20 blur-[130px]"
        animate={{
          opacity: [0.35, 0.65, 0.35],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
