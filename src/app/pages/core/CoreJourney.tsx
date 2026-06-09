import { CoreNav } from "../../components/core/CoreNav";
import { JourneyTimeline } from "../../components/core/JourneyTimeline";
import { motion } from "motion/react";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";

export default function CoreJourney() {
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
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: theme.accent,
              marginBottom: "1rem",
            }}
          >
            Record
          </motion.p>
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
              maxWidth: "600px",
            }}
          >
            Work that speaks.
          </motion.h1>
        </div>
        <JourneyTimeline />
      </div>
    </div>
  );
}
