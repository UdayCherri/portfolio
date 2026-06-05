import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { spyProjects } from "../../data/content";
import { ArrowRight } from "lucide-react";

const experiments = spyProjects.filter((p) => p.category === "Experiments");

export default function SpyExperiments() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "4rem clamp(2rem, 6vw, 6rem)", minHeight: "100vh", background: "#080C18" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
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
            R&D
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
            Experiments
          </h1>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.9rem",
              color: "rgba(240,238,229,0.4)",
              marginTop: "1rem",
              lineHeight: 1.7,
              maxWidth: "480px",
            }}
          >
            Prototypes, proofs of concept, and technical explorations. Where production constraints don't apply.
          </p>
        </motion.div>

        {experiments.length > 0 ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            {experiments.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25, delay: i * 0.07 }}
                onClick={() => navigate(`/project/${exp.id}`)}
                style={{
                  padding: "2.5rem",
                  border: "1px solid rgba(240,238,229,0.04)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(204,18,52,0.04)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(204,18,52,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "transparent";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(240,238,229,0.04)";
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "1.2rem",
                        fontWeight: 600,
                        color: "#F0EEE5",
                        textTransform: "uppercase",
                        letterSpacing: "0.02em",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {exp.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "0.85rem",
                        color: "rgba(240,238,229,0.4)",
                        marginBottom: "1rem",
                      }}
                    >
                      {exp.subtitle}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "0.85rem",
                        color: "rgba(240,238,229,0.5)",
                        lineHeight: 1.65,
                        maxWidth: "600px",
                      }}
                    >
                      {exp.overview}
                    </p>
                  </div>
                  <ArrowRight size={14} strokeWidth={1.5} color="rgba(240,238,229,0.3)" style={{ marginLeft: "2rem", flexShrink: 0 }} />
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Fallback: show the language experiment */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            onClick={() => navigate("/project/prism-lang")}
            style={{
              padding: "3rem",
              border: "1px solid rgba(240,238,229,0.06)",
              cursor: "pointer",
            }}
          >
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.6rem",
                color: "#CC1234",
                marginBottom: "1rem",
                opacity: 0.7,
              }}
            >
              EXP_01
            </p>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.4rem",
                fontWeight: 600,
                color: "#F0EEE5",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}
            >
              Prism Language
            </h3>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.85rem",
                color: "rgba(240,238,229,0.4)",
              }}
            >
              Declarative DSL for data transformation. Compiles to Rust.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
