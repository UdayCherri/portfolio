import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ArrowRight, Shield } from "lucide-react";
import { cyberResearch, securityProjects } from "../../data/content";
import { useIsDesktop, useIsMd } from "../../components/shared/useMediaQuery";

function ProfileArea() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "460px",
        aspectRatio: "4/5",
        background: "#0A0E12",
        border: "1px solid rgba(16,185,129,0.15)",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      {/* Scan lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(16,185,129,0.03) 3px, rgba(16,185,129,0.03) 4px)",
        }}
      />

      {/* Geometric */}
      <svg viewBox="0 0 460 575" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.3 }}>
        <rect x="80" y="80" width="300" height="415" fill="none" stroke="rgba(16,185,129,0.3)" strokeWidth="0.5" strokeDasharray="4 4" />
        <rect x="110" y="110" width="240" height="355" fill="none" stroke="rgba(16,185,129,0.15)" strokeWidth="0.5" />
        <circle cx="230" cy="287" r="120" fill="none" stroke="rgba(45,212,191,0.2)" strokeWidth="0.5" strokeDasharray="3 5" />
        <circle cx="230" cy="287" r="80" fill="none" stroke="rgba(16,185,129,0.25)" strokeWidth="0.5" />
        <line x1="80" y1="287" x2="380" y2="287" stroke="rgba(16,185,129,0.1)" strokeWidth="0.5" />
        <line x1="230" y1="80" x2="230" y2="495" stroke="rgba(16,185,129,0.1)" strokeWidth="0.5" />
        {/* Crosshair */}
        <line x1="222" y1="287" x2="238" y2="287" stroke="#10B981" strokeWidth="1" />
        <line x1="230" y1="279" x2="230" y2="295" stroke="#10B981" strokeWidth="1" />
        <circle cx="230" cy="287" r="4" fill="none" stroke="#10B981" strokeWidth="1" />
      </svg>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(15,19,24,1) 0%, transparent 50%)",
        }}
      />

      {/* Terminal-style info */}
      <div style={{ position: "absolute", top: "1.5rem", left: "1.5rem" }}>
        <p
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.55rem",
            color: "rgba(16,185,129,0.5)",
            letterSpacing: "0.1em",
          }}
        >
          ID: CYB3R-BO1
        </p>
        <p
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.55rem",
            color: "rgba(16,185,129,0.3)",
            marginTop: "0.2rem",
          }}
        >
          CLASS: RESEARCHER
        </p>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "2rem",
          right: "2rem",
        }}
      >
        <p
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.55rem",
            letterSpacing: "0.2em",
            color: "#10B981",
            marginBottom: "0.5rem",
            opacity: 0.7,
          }}
        >
          THE RESEARCHER
        </p>
        <p
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "1.1rem",
            fontWeight: 500,
            color: "#E2EAF0",
            letterSpacing: "0.05em",
          }}
        >
          CYB3R-BO1
        </p>
      </div>
    </div>
  );
}

export default function CyberHome() {
  const navigate = useNavigate();
  const isDesktop = useIsDesktop();
  const isMd = useIsMd();

  return (
    <div style={{ background: "#0F1318", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          padding: "5rem clamp(2rem, 6vw, 6rem)",
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isDesktop ? "1fr 1fr" : "1fr",
            gap: isDesktop ? "5rem" : "3rem",
            alignItems: "center",
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "2rem",
              }}
            >
              <Shield size={10} strokeWidth={2} color="#10B981" />
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.15em",
                  color: "rgba(16,185,129,0.7)",
                }}
              >
                SECURITY_BEGINS_WITH_UNDERSTANDING
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "clamp(2rem, 5vw, 4.5rem)",
                fontWeight: 500,
                color: "#E2EAF0",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: "2rem",
              }}
            >
              Security<br />
              begins with<br />
              <span style={{ color: "#10B981" }}>understanding</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: "0.9rem",
                lineHeight: 1.75,
                color: "rgba(226,234,240,0.5)",
                maxWidth: "420px",
                marginBottom: "3rem",
              }}
            >
              Vulnerability research, CTF competition, security tooling.
              Understanding systems deeply enough to secure them.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
            >
              <button
                onClick={() => navigate("/cyb3r/research")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  color: "#0F1318",
                  background: "#10B981",
                  border: "1px solid #10B981",
                  padding: "0.85rem 1.75rem",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#0D9668"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#10B981"; }}
              >
                View Research
                <ArrowRight size={12} strokeWidth={2} />
              </button>
              <button
                onClick={() => navigate("/cyb3r/ctf-archive")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  color: "rgba(226,234,240,0.5)",
                  background: "transparent",
                  border: "1px solid rgba(16,185,129,0.2)",
                  padding: "0.85rem 1.75rem",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#10B981";
                  e.currentTarget.style.borderColor = "rgba(16,185,129,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(226,234,240,0.5)";
                  e.currentTarget.style.borderColor = "rgba(16,185,129,0.2)";
                }}
              >
                CTF Archive
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <ProfileArea />
          </motion.div>
        </div>
      </section>

      {/* Security Highlights */}
      <section
        style={{
          padding: "5rem clamp(2rem, 6vw, 6rem)",
          borderTop: "1px solid rgba(16,185,129,0.1)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              color: "rgba(16,185,129,0.6)",
              marginBottom: "3rem",
            }}
          >
            SECURITY_HIGHLIGHTS
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMd ? "repeat(3, 1fr)" : "1fr",
              gap: "1px",
              background: "rgba(16,185,129,0.06)",
            }}
          >
            {cyberResearch.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                onClick={() => navigate("/cyb3r/research")}
                style={{
                  padding: "2.5rem",
                  background: "#0F1318",
                  cursor: "pointer",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(16,185,129,0.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "#0F1318";
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.55rem",
                      letterSpacing: "0.15em",
                      color: "rgba(16,185,129,0.5)",
                    }}
                  >
                    {item.year}
                  </span>
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.55rem",
                      letterSpacing: "0.1em",
                      padding: "0.15rem 0.5rem",
                      border: `1px solid ${item.severity === "Critical" ? "rgba(239,68,68,0.4)" : item.severity === "High" ? "rgba(245,158,11,0.4)" : "rgba(107,114,128,0.4)"}`,
                      color: item.severity === "Critical" ? "rgba(239,68,68,0.8)" : item.severity === "High" ? "rgba(245,158,11,0.8)" : "rgba(107,114,128,0.8)",
                    }}
                  >
                    {item.severity}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "#E2EAF0",
                    lineHeight: 1.3,
                    marginBottom: "0.75rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'IBM Plex Sans', sans-serif",
                    fontSize: "0.8rem",
                    color: "rgba(226,234,240,0.45)",
                    lineHeight: 1.65,
                    marginBottom: "1.5rem",
                  }}
                >
                  {item.subtitle}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "0.55rem",
                        letterSpacing: "0.08em",
                        padding: "0.2rem 0.5rem",
                        border: "1px solid rgba(16,185,129,0.12)",
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
      </section>

      {/* Security Projects teaser */}
      <section
        style={{
          padding: "5rem clamp(2rem, 6vw, 6rem)",
          borderTop: "1px solid rgba(16,185,129,0.08)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2.5rem" }}>
            <p
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                color: "rgba(16,185,129,0.5)",
              }}
            >
              SECURITY_TOOLS
            </p>
            <button
              onClick={() => navigate("/cyb3r/security-projects")}
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.1em",
                color: "rgba(226,234,240,0.35)",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#10B981")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(226,234,240,0.35)")}
            >
              All Projects <ArrowRight size={10} strokeWidth={2} />
            </button>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMd ? "repeat(2, 1fr)" : "1fr",
              gap: "1px",
              background: "rgba(16,185,129,0.05)",
            }}
          >
            {securityProjects.slice(0, 2).map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                onClick={() => navigate("/cyb3r/security-projects")}
                style={{
                  padding: "2.5rem",
                  background: "#0F1318",
                  cursor: "pointer",
                  borderTop: "2px solid transparent",
                  transition: "border-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderTopColor = "#10B981";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderTopColor = "transparent";
                }}
              >
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.55rem",
                    letterSpacing: "0.15em",
                    color: "#10B981",
                    opacity: 0.6,
                    marginBottom: "1rem",
                  }}
                >
                  [{project.category.toUpperCase()}]
                </p>
                <h3
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "#E2EAF0",
                    marginBottom: "0.5rem",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'IBM Plex Sans', sans-serif",
                    fontSize: "0.82rem",
                    color: "rgba(226,234,240,0.4)",
                    lineHeight: 1.6,
                  }}
                >
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
