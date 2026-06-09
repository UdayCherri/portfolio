import { CoreNav } from "../../components/core/CoreNav";
import { FeaturedWork } from "../../components/core/FeaturedWork";
import { motion } from "motion/react";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";

export default function CoreWork() {
  const { mode } = useTheme();
  const theme = getIdentityTheme("core", mode);

  return (
    <div style={{ background: theme.bg, minHeight: "100vh", transition: "background 0.4s ease, color 0.4s ease" }}>
      <CoreNav />
      <div style={{ paddingTop: "100px" }}>
        <div
          style={{
            padding: "6rem clamp(2rem, 8vw, 8rem) 0",
            borderBottom: `1px solid ${theme.borderSubtle}`,
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem, 6vw, 5rem)",
              fontWeight: 300,
              color: theme.fg,
              lineHeight: 1.1,
            }}
          >
            Featured Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(0.875rem, 1.8vw, 0.9rem)",
              color: theme.fgMuted,
              marginTop: "1rem",
              maxWidth: "480px",
              lineHeight: 1.7,
            }}
          >
            Three disciplines. One body of work. Each piece selected as evidence of capability, not promise.
          </motion.p>
        </div>
        <FeaturedWork />
      </div>
    </div>
  );
}
