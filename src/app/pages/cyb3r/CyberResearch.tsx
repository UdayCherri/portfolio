import { motion } from "motion/react";
import { cyberResearch } from "../../data/content";

export default function CyberResearch() {
  return (
    <div style={{ padding: "4rem clamp(2rem, 6vw, 6rem)", minHeight: "100vh", background: "#0F1318" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          style={{ marginBottom: "5rem" }}
        >
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              color: "rgba(16,185,129,0.5)",
              marginBottom: "1rem",
            }}
          >
            RESEARCH_ARCHIVE
          </p>
          <h1
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 500,
              color: "#E2EAF0",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            Security Research
          </h1>
          <p
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: "0.9rem",
              color: "rgba(226,234,240,0.4)",
              marginTop: "1.5rem",
              lineHeight: 1.7,
              maxWidth: "520px",
            }}
          >
            Original vulnerability research. Full disclosure policy — all findings responsibly disclosed before publication.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
          {cyberResearch.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              style={{
                padding: "3rem 2rem",
                border: "1px solid rgba(16,185,129,0.08)",
                transition: "border-color 0.2s ease, background 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(16,185,129,0.2)";
                el.style.background = "rgba(16,185,129,0.02)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(16,185,129,0.08)";
                el.style.background = "transparent";
              }}
            >
              <div style={{ display: "flex", gap: "2rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.1em",
                    color: "rgba(226,234,240,0.3)",
                  }}
                >
                  {item.year}
                </span>
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.6rem",
                    color: "rgba(16,185,129,0.6)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {item.subtitle}
                </span>
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.55rem",
                    padding: "0.15rem 0.5rem",
                    border: `1px solid ${item.severity === "Critical" ? "rgba(239,68,68,0.4)" : item.severity === "High" ? "rgba(245,158,11,0.4)" : "rgba(107,114,128,0.35)"}`,
                    color: item.severity === "Critical" ? "rgba(239,68,68,0.8)" : item.severity === "High" ? "rgba(245,158,11,0.8)" : "rgba(107,114,128,0.7)",
                  }}
                >
                  {item.severity}
                </span>
              </div>

              <h2
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "1.3rem",
                  fontWeight: 500,
                  color: "#E2EAF0",
                  lineHeight: 1.25,
                  marginBottom: "1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {item.title}
              </h2>

              <p
                style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontSize: "0.9rem",
                  color: "rgba(226,234,240,0.5)",
                  lineHeight: 1.7,
                  marginBottom: "1.5rem",
                }}
              >
                {item.summary}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "1.5rem" }}>
                {item.findings.map((finding) => (
                  <div key={finding} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "0.6rem",
                        color: "#10B981",
                        opacity: 0.6,
                        marginTop: "0.15rem",
                        flexShrink: 0,
                      }}
                    >
                      &gt;
                    </span>
                    <p
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "0.75rem",
                        color: "rgba(226,234,240,0.55)",
                        lineHeight: 1.5,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {finding}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.55rem",
                      letterSpacing: "0.08em",
                      padding: "0.2rem 0.5rem",
                      border: "1px solid rgba(16,185,129,0.1)",
                      color: "rgba(16,185,129,0.5)",
                    }}
                  >
                    {tag}
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
