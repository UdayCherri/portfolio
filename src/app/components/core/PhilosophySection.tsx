import { motion } from "motion/react";

export function PhilosophySection() {
  return (
    <section
      style={{
        padding: "6rem clamp(2rem, 8vw, 8rem)",
        background: "#F7F4EE",
        borderTop: "1px solid rgba(28,28,28,0.08)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "2rem",
          }}
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: "40px",
              height: "1px",
              background: "#B8A46A",
              transformOrigin: "left",
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
              fontWeight: 300,
              color: "#1C1C1C",
              lineHeight: 1.25,
              maxWidth: "680px",
              letterSpacing: "-0.01em",
            }}
          >
            Building across worlds.
            <br />
            <span style={{ color: "rgba(28,28,28,0.45)", fontStyle: "italic" }}>
              Growing beyond them.
            </span>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
