import { motion } from "motion/react";
import { securityProjects } from "../../data/content";

export default function CyberSecurityProjects() {
  return (
    <div style={{ padding: "4rem clamp(2rem, 6vw, 6rem)", minHeight: "100vh", background: "#0F1318" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
            TOOLING_&_PROJECTS
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
            Security Projects
          </h1>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1px",
            background: "rgba(16,185,129,0.06)",
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {securityProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: i * 0.07 }}
              style={{
                padding: "2.5rem",
                background: "#0F1318",
                borderTop: "2px solid transparent",
                transition: "all 0.2s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderTopColor = "#10B981";
                el.style.background = "rgba(16,185,129,0.03)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderTopColor = "transparent";
                el.style.background = "#0F1318";
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.55rem",
                    letterSpacing: "0.15em",
                    color: "#10B981",
                    opacity: 0.6,
                  }}
                >
                  [{project.category.toUpperCase()}]
                </span>
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.55rem",
                    color: "rgba(226,234,240,0.25)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {project.year}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  color: "#E2EAF0",
                  marginBottom: "0.5rem",
                  lineHeight: 1.3,
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.7rem",
                  color: "rgba(45,212,191,0.6)",
                  marginBottom: "1rem",
                  letterSpacing: "0.05em",
                }}
              >
                {project.subtitle}
              </p>

              <p
                style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontSize: "0.85rem",
                  color: "rgba(226,234,240,0.45)",
                  lineHeight: 1.65,
                  marginBottom: "1.5rem",
                }}
              >
                {project.description}
              </p>

              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.55rem",
                      letterSpacing: "0.06em",
                      padding: "0.2rem 0.5rem",
                      border: "1px solid rgba(16,185,129,0.12)",
                      color: "rgba(16,185,129,0.45)",
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
