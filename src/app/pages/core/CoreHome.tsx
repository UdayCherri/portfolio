import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { udayProfile } from "../../data/content";
import { PhilosophySection } from "../../components/core/PhilosophySection";
import { JourneyTimeline } from "../../components/core/JourneyTimeline";
import { FeaturedWork } from "../../components/core/FeaturedWork";
import { IdentityDiscovery } from "../../components/core/IdentityDiscovery";
import { CurrentFocus } from "../../components/core/CurrentFocus";
import { IdentityTree } from "../../components/core/IdentityTree";

export default function CoreHome() {
  return (
    <div style={{ background: "#F7F4EE" }}>
      {/* Hero */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 clamp(2rem, 8vw, 8rem)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            height: "1px",
            background: "rgba(28,28,28,0.06)",
            transformOrigin: "left",
          }}
        />

        <div style={{ maxWidth: "1000px", position: "relative", zIndex: 1 }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#B8A46A",
              marginBottom: "2.5rem",
            }}
          >
            {udayProfile.archetype}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem, 7vw, 6.5rem)",
              fontWeight: 300,
              color: "#1C1C1C",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              marginBottom: "2.5rem",
            }}
          >
            {udayProfile.name}
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: "60px",
              height: "1px",
              background: "#B8A46A",
              marginBottom: "2.5rem",
              transformOrigin: "left",
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(0.95rem, 1.5vw, 1.15rem)",
              lineHeight: 1.75,
              color: "#6B6B6B",
              maxWidth: "560px",
            }}
          >
            {udayProfile.introduction}
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          style={{
            position: "absolute",
            bottom: "3rem",
            left: "clamp(2rem, 8vw, 8rem)",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#6B6B6B",
            }}
          >
            Scroll
          </p>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown size={14} strokeWidth={1.5} color="#6B6B6B" />
          </motion.div>
        </motion.div>
      </section>

      {/* Manifesto statement */}
      <PhilosophySection />

      {/* Evidence milestones */}
      <JourneyTimeline />

      {/* Selected Work */}
      <FeaturedWork />

      {/* Current Focus */}
      <CurrentFocus />

      {/* Identity Relationship */}
      <IdentityTree />

      {/* Identity Discovery */}
      <IdentityDiscovery />

      {/* Footer */}
      <div
        style={{
          padding: "5rem clamp(2rem, 8vw, 8rem)",
          borderTop: "1px solid rgba(28,28,28,0.08)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1rem",
            color: "rgba(28,28,28,0.4)",
            fontStyle: "italic",
          }}
        >
          {udayProfile.motto}
        </p>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(28,28,28,0.3)",
          }}
        >
          2024
        </p>
      </div>
    </div>
  );
}
