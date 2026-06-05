import { motion } from "motion/react";
import { spySystems } from "../../data/content";

export default function SpySystems() {
  return (
    <div style={{ padding: "4rem clamp(2rem, 6vw, 6rem)", minHeight: "100vh", background: "#080C18" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{ marginBottom: "5rem" }}
        >
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#CC1234",
              marginBottom: "0.75rem",
            }}
          >
            Architecture
          </p>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 700,
              color: "#F0EEE5",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            Systems
          </h1>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.9rem",
              color: "rgba(240,238,229,0.4)",
              lineHeight: 1.7,
              maxWidth: "500px",
            }}
          >
            Architectural patterns and system designs. How things are built, not just that they were.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(240,238,229,0.04)",
          }}
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {spySystems.map((system, i) => (
            <motion.div
              key={system.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              style={{
                padding: "2.5rem",
                background: "#080C18",
                borderTop: "2px solid transparent",
                transition: "border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderTopColor = "#CC1234";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderTopColor = "transparent";
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "1.5rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.55rem",
                    letterSpacing: "0.15em",
                    color: "#CC1234",
                    opacity: 0.7,
                  }}
                >
                  SYS_{String(i + 1).padStart(2, "0")}
                </span>
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.55rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    padding: "0.2rem 0.5rem",
                    border: `1px solid ${system.status === "Production" ? "rgba(204,18,52,0.3)" : "rgba(240,238,229,0.1)"}`,
                    color: system.status === "Production" ? "#CC1234" : "rgba(240,238,229,0.35)",
                  }}
                >
                  {system.status}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "#F0EEE5",
                  marginBottom: "1rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.02em",
                  lineHeight: 1.2,
                }}
              >
                {system.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.85rem",
                  color: "rgba(240,238,229,0.4)",
                  lineHeight: 1.65,
                  marginBottom: "1.5rem",
                }}
              >
                {system.description}
              </p>
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                {system.components.map((c) => (
                  <span
                    key={c}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.6rem",
                      padding: "0.2rem 0.5rem",
                      background: "rgba(240,238,229,0.03)",
                      border: "1px solid rgba(240,238,229,0.06)",
                      color: "rgba(240,238,229,0.4)",
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
