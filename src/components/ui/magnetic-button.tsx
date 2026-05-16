"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { type ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
  download?: string;
};

export function MagneticButton({
  href,
  onClick,
  children,
  variant = "primary",
  className,
  external,
  download,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.15);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.15);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const variants = {
    primary:
      "bg-accent text-accent-foreground shadow-lg shadow-accent/25 hover:shadow-accent/40",
    secondary:
      "border border-border bg-surface/80 text-foreground backdrop-blur-md hover:border-accent/50 hover:bg-surface-elevated",
    ghost: "text-muted hover:text-foreground",
  };

  const baseClass = cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold transition-colors",
    variants[variant],
    className,
  );

  const inner = (
    <>
      {variant === "primary" && (
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  const motionProps = {
    ref,
    style: { x: springX, y: springY },
    onMouseMove: handleMouse,
    onMouseLeave: reset,
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
  };

  if (href) {
    if (download) {
      return (
        <motion.div {...motionProps} className="inline-block">
          <a href={href} download={download} className={baseClass}>
            {inner}
          </a>
        </motion.div>
      );
    }

    return (
      <motion.div {...motionProps} className="inline-block">
        <Link
          href={href}
          className={baseClass}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {inner}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div {...motionProps} className="inline-block">
      <button type="button" onClick={onClick} className={baseClass}>
        {inner}
      </button>
    </motion.div>
  );
}
