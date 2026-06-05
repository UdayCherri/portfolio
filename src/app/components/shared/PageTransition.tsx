import { motion, AnimatePresence } from "motion/react";
import { useLocation } from "react-router";
import type { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  variant?: "core" | "yuukaycee" | "spy" | "cyb3r";
}

const variants = {
  core: {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
  yuukaycee: {
    initial: { opacity: 0, filter: "blur(8px)", y: 16 },
    animate: { opacity: 1, filter: "blur(0px)", y: 0 },
    exit: { opacity: 0, filter: "blur(4px)", y: -8 },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  spy: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 10 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
  cyb3r: {
    initial: { opacity: 0, scaleY: 0.96 },
    animate: { opacity: 1, scaleY: 1 },
    exit: { opacity: 0, scaleY: 0.98 },
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export function PageTransition({ children, variant = "core" }: PageTransitionProps) {
  const location = useLocation();
  const v = variants[variant];
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={v.initial}
        animate={v.animate}
        exit={v.exit}
        transition={v.transition}
        style={{ width: "100%", minHeight: "100%" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
