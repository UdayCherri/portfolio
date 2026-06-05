import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ArrowRight } from "lucide-react";
import { spyProjects } from "../../data/content";

export default function SpyProjects() {
  const navigate = useNavigate();

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
            Projects
          </p>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 700,
              color: "#F0EEE5",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
            }}
          >
            All Projects
          </h1>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
          {spyProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: i * 0.05 }}
              onClick={() => navigate(`/project/${project.id}`)}
              style={{
                display: "grid",
                gridTemplateColumns: "60px 1fr 200px 40px",
                gap: "2rem",
                alignItems: "center",
                padding: "2rem 1.5rem",
                border: "1px solid rgba(240,238,229,0.04)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              whileHover={{
                backgroundColor: "rgba(204,18,52,0.04)",
                borderColor: "rgba(204,18,52,0.15)",
              }}
              className="grid-cols-1 lg:grid-cols-[60px_1fr_200px_40px]"
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.7rem",
                  color: "#CC1234",
                  opacity: 0.6,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: "#F0EEE5",
                    marginBottom: "0.25rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.02em",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.8rem",
                    color: "rgba(240,238,229,0.35)",
                  }}
                >
                  {project.subtitle}
                </p>
              </div>
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                {project.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.55rem",
                      letterSpacing: "0.08em",
                      padding: "0.2rem 0.5rem",
                      border: "1px solid rgba(240,238,229,0.08)",
                      color: "rgba(240,238,229,0.35)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ArrowRight size={14} strokeWidth={1.5} color="rgba(240,238,229,0.2)" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
