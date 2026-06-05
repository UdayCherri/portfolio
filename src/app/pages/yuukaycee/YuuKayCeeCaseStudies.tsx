import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { yuukayceeProjects } from "../../data/content";
import { ArrowRight } from "lucide-react";

const caseStudies = yuukayceeProjects.filter((p) => p.featured);

export default function YuuKayCeeCaseStudies() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "4rem clamp(2rem, 6vw, 6rem)", minHeight: "100vh", background: "#0C0A15" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "6rem" }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#A78BFA",
              marginBottom: "1rem",
            }}
          >
            Case Studies
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 400,
              color: "#EEE9F8",
              lineHeight: 1.1,
            }}
          >
            Deep project breakdowns
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.95rem",
              color: "rgba(238,233,248,0.45)",
              marginTop: "1.5rem",
              lineHeight: 1.7,
              maxWidth: "520px",
            }}
          >
            Each case study documents the full project arc — from brief through execution. Evidence of process, not just result.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
          {caseStudies.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => navigate(`/project/${project.id}`)}
              style={{
                display: "grid",
                gridTemplateColumns: "280px 1fr auto",
                gap: "3rem",
                alignItems: "center",
                padding: "3rem 2rem",
                border: "1px solid rgba(167,139,250,0.08)",
                cursor: "pointer",
                transition: "border-color 0.3s ease, background 0.3s ease",
              }}
              whileHover={{
                backgroundColor: "rgba(167,139,250,0.04)",
              }}
              className="grid-cols-1 lg:grid-cols-[280px_1fr_auto]"
            >
              <div
                style={{
                  height: "180px",
                  background: project.coverColor + "15",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "4rem",
                    color: project.coverColor,
                    opacity: 0.12,
                    userSelect: "none",
                  }}
                >
                  {project.title.slice(0, 2)}
                </span>
              </div>
              <div>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "0.75rem" }}>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.6rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: project.coverColor,
                    }}
                  >
                    {project.category}
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.6rem",
                      color: "rgba(238,233,248,0.3)",
                    }}
                  >
                    {project.year}
                  </span>
                </div>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.8rem",
                    fontWeight: 400,
                    color: "#EEE9F8",
                    marginBottom: "0.5rem",
                  }}
                >
                  {project.title}
                </h2>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.85rem",
                    color: "rgba(238,233,248,0.5)",
                    lineHeight: 1.6,
                    marginBottom: "1rem",
                  }}
                >
                  {project.overview}
                </p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.6rem",
                        letterSpacing: "0.1em",
                        padding: "0.2rem 0.6rem",
                        border: "1px solid rgba(167,139,250,0.2)",
                        color: "rgba(238,233,248,0.4)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <ArrowRight size={16} strokeWidth={1.5} color="rgba(238,233,248,0.3)" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
