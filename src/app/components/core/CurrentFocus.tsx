import { motion } from "motion/react";
import { currentFocus } from "../../data/content";
import { useIsMd } from "../shared/useMediaQuery";

export function CurrentFocus() {
  const isMd = useIsMd();

  return (
    <section
      style={{
        padding: "8rem clamp(2rem, 8vw, 8rem)",
        background: "#F7F4EE",
        borderTop: "1px solid rgba(28,28,28,0.08)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMd ? "1fr 2fr" : "1fr",
            gap: isMd ? "6rem" : "2.5rem",
            alignItems: "start",
          }}
        >
          <div style={{ position: "sticky", top: "8rem" }}>
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
              Now
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 3vw, 2.8rem)",
                fontWeight: 300,
                color: "#1C1C1C",
                lineHeight: 1.15,
                marginBottom: "1.5rem",
              }}
            >
              Currently building
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                lineHeight: 1.7,
                color: "#6B6B6B",
                maxWidth: "260px",
              }}
            >
              Active work across all three disciplines.
            </motion.p>
          </div>

          {/* Focus items */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {currentFocus.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1.75rem 0",
                  borderBottom: "1px solid rgba(28,28,28,0.08)",
                  gap: "1rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", minWidth: 0 }}>
                  {/* Status dot */}
                  <div
                    style={{
                      flexShrink: 0,
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: item.accent,
                    }}
                  />
                  {/* Name */}
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)",
                      fontWeight: 400,
                      color: "#1C1C1C",
                      lineHeight: 1.2,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.name}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    flexShrink: 0,
                  }}
                >
                  {/* Category */}
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.6rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#6B6B6B",
                    }}
                  >
                    {item.category}
                  </p>

                  {/* Status badge */}
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.55rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      padding: "0.25rem 0.65rem",
                      border: `1px solid ${item.accent}40`,
                      color: item.accent,
                    }}
                  >
                    <span
                      style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: item.accent,
                        flexShrink: 0,
                      }}
                    />
                    {item.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
