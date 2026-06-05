import { motion } from "motion/react";
import { ctfArchive } from "../../data/content";

export default function CyberCTF() {
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
            COMPETITION_ARCHIVE
          </p>
          <h1
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 500,
              color: "#E2EAF0",
              letterSpacing: "-0.02em",
            }}
          >
            CTF Archive
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
            Competition history and notable solves. CTF is where theoretical knowledge meets operational execution under pressure.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
          {ctfArchive.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              style={{
                padding: "2.5rem 2rem",
                border: "1px solid rgba(16,185,129,0.07)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(16,185,129,0.18)";
                el.style.background = "rgba(16,185,129,0.02)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(16,185,129,0.07)";
                el.style.background = "transparent";
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "2rem",
                  alignItems: "start",
                  marginBottom: "1.5rem",
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.55rem",
                      letterSpacing: "0.15em",
                      color: "rgba(226,234,240,0.25)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {event.year}
                  </p>
                  <h3
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "1.05rem",
                      fontWeight: 500,
                      color: "#E2EAF0",
                      lineHeight: 1.3,
                    }}
                  >
                    {event.event}
                  </h3>
                </div>
                <div
                  style={{
                    padding: "0.35rem 0.75rem",
                    border: "1px solid rgba(16,185,129,0.25)",
                    textAlign: "center",
                    flexShrink: 0,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.7rem",
                      fontWeight: 500,
                      color: "#10B981",
                      letterSpacing: "0.05em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {event.placement}
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
                {event.categories.map((cat) => (
                  <span
                    key={cat}
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.55rem",
                      letterSpacing: "0.1em",
                      padding: "0.2rem 0.5rem",
                      border: "1px solid rgba(16,185,129,0.12)",
                      color: "rgba(16,185,129,0.5)",
                    }}
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                {event.notableSolves.map((solve) => (
                  <div key={solve} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "0.55rem",
                        color: "rgba(45,212,191,0.5)",
                        marginTop: "0.1rem",
                        flexShrink: 0,
                      }}
                    >
                      ◆
                    </span>
                    <p
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "0.7rem",
                        color: "rgba(226,234,240,0.45)",
                        lineHeight: 1.5,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {solve}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
