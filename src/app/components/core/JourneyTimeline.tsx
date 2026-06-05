import { motion } from "motion/react";
import { journeyMilestones } from "../../data/content";
import { useIsMd } from "../shared/useMediaQuery";

const disciplineColors: Record<string, string> = {
  design: "#A78BFA",
  development: "#CC1234",
  security: "#10B981",
  core: "#B8A46A",
};

const disciplineLabels: Record<string, string> = {
  design: "Design",
  development: "Dev",
  security: "Security",
  core: "Core",
};

export function JourneyTimeline() {
  const isMd = useIsMd();

  return (
    <section
      style={{
        padding: "8rem clamp(2rem, 8vw, 8rem)",
        background: "#F0EDE5",
        borderTop: "1px solid rgba(28,28,28,0.08)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "5rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#B8A46A",
                marginBottom: "1rem",
              }}
            >
              Milestones
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 300,
                color: "#1C1C1C",
                lineHeight: 1.15,
              }}
            >
              Work that speaks.
            </motion.h2>
          </div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: "flex",
              gap: "1.5rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {Object.entries(disciplineLabels).filter(([k]) => k !== "core").map(([key, label]) => (
              <div key={key} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: disciplineColors[key],
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#6B6B6B",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Milestones grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMd ? "repeat(2, 1fr)" : "1fr",
            gap: "0",
          }}
        >
          {journeyMilestones.map((milestone, i) => (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                padding: "1.5rem 0",
                borderBottom: "1px solid rgba(28,28,28,0.07)",
                borderRight: isMd && i % 2 === 0 ? "1px solid rgba(28,28,28,0.07)" : "none",
                paddingRight: isMd && i % 2 === 0 ? "3rem" : "0",
                paddingLeft: isMd && i % 2 !== 0 ? "3rem" : "0",
              }}
            >
              {/* Discipline dot */}
              <div
                style={{
                  flexShrink: 0,
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: disciplineColors[milestone.discipline],
                }}
              />

              {/* Year */}
              <p
                style={{
                  flexShrink: 0,
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.1rem",
                  fontWeight: 300,
                  color: "rgba(28,28,28,0.3)",
                  width: "3rem",
                  lineHeight: 1,
                }}
              >
                {milestone.year}
              </p>

              {/* Title */}
              <p
                style={{
                  flex: 1,
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.15rem",
                  fontWeight: 400,
                  color: "#1C1C1C",
                  lineHeight: 1.3,
                }}
              >
                {milestone.title}
              </p>

              {/* Note */}
              <p
                style={{
                  flexShrink: 0,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.1em",
                  color: disciplineColors[milestone.discipline],
                  textAlign: "right",
                  maxWidth: "100px",
                  lineHeight: 1.4,
                }}
              >
                {milestone.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
