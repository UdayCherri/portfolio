import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ArrowRight, Terminal } from "lucide-react";
import { spyProjects } from "../../data/content";
import { useIsDesktop } from "../../components/shared/useMediaQuery";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

function ProfileArea() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "460px",
        aspectRatio: "4/5",
        background: "#0A0E1A",
        border: "1px solid rgba(204,18,52,0.15)",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      <ImageWithFallback
        src="/assets/images/sdv.png"
        alt="Spy D. Veloper Profile"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
        }}
      />
      {/* Grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(204,18,52,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(204,18,52,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          zIndex: 2,
        }}
      />
      {/* Geometric marks */}
      <svg
        viewBox="0 0 460 575"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 3 }}
      >
        <rect x="100" y="100" width="260" height="375" fill="none" stroke="rgba(204,18,52,0.2)" strokeWidth="1" />
        <rect x="120" y="120" width="220" height="335" fill="none" stroke="rgba(240,238,229,0.04)" strokeWidth="1" />
        <line x1="100" y1="287" x2="360" y2="287" stroke="rgba(204,18,52,0.1)" strokeWidth="1" />
        <line x1="230" y1="100" x2="230" y2="475" stroke="rgba(204,18,52,0.1)" strokeWidth="1" />
        <circle cx="230" cy="287" r="8" fill="none" stroke="#CC1234" strokeWidth="1" />
        <circle cx="230" cy="287" r="2" fill="#CC1234" />
      </svg>

      {/* Corner marks */}
      {[
        { x: "0", y: "0" },
        { x: "calc(100% - 14px)", y: "0" },
        { x: "0", y: "calc(100% - 14px)" },
        { x: "calc(100% - 14px)", y: "calc(100% - 14px)" },
      ].map((pos, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: pos.x,
            top: pos.y,
            width: "14px",
            height: "14px",
            borderTop: `1px solid ${i < 2 ? "#CC1234" : "transparent"}`,
            borderBottom: `1px solid ${i >= 2 ? "#CC1234" : "transparent"}`,
            borderLeft: `1px solid ${i % 2 === 0 ? "#CC1234" : "transparent"}`,
            borderRight: `1px solid ${i % 2 !== 0 ? "#CC1234" : "transparent"}`,
          }}
        />
      ))}

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
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "0.55rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#CC1234",
            marginBottom: "0.5rem",
          }}
        >
          The Builder
        </p>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "1.2rem",
            fontWeight: 600,
            color: "#F0EEE5",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          Spy D. Veloper
        </p>
      </div>
    </div>
  );
}

export default function SpyHome() {
  const navigate = useNavigate();
  const featured = spyProjects.filter((p) => p.featured);
  const isDesktop = useIsDesktop();

  return (
    <div style={{ background: "#080C18", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          padding: "6rem clamp(2rem, 6vw, 6rem)",
          minHeight: "88vh",
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
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.4rem 0.75rem",
                border: "1px solid rgba(204,18,52,0.3)",
                marginBottom: "2rem",
              }}
            >
              <Terminal size={10} strokeWidth={2} color="#CC1234" />
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#CC1234",
                }}
              >
                Systems · Infrastructure · Open Source
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2.2rem, 5.5vw, 5rem)",
                fontWeight: 700,
                color: "#F0EEE5",
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
                marginBottom: "2rem",
                textTransform: "uppercase",
              }}
            >
              Creating<br />
              <span style={{ color: "#CC1234" }}>systems</span><br />
              that move<br />
              forward
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                color: "rgba(240,238,229,0.5)",
                maxWidth: "420px",
                marginBottom: "3rem",
              }}
            >
              Distributed systems, infrastructure tooling, and open-source software.
              Ideas only matter when built.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.35 }}
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
            >
              <button
                onClick={() => navigate("/spy/projects")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#F0EEE5",
                  background: "#CC1234",
                  border: "1px solid #CC1234",
                  padding: "0.9rem 1.75rem",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#AA0F28";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#CC1234";
                }}
              >
                View Projects
                <ArrowRight size={12} strokeWidth={2} />
              </button>
              <button
                onClick={() => navigate("/spy/open-source")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(240,238,229,0.6)",
                  background: "transparent",
                  border: "1px solid rgba(240,238,229,0.15)",
                  padding: "0.9rem 1.75rem",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#F0EEE5";
                  e.currentTarget.style.borderColor = "rgba(240,238,229,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(240,238,229,0.6)";
                  e.currentTarget.style.borderColor = "rgba(240,238,229,0.15)";
                }}
              >
                Open Source
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <ProfileArea />
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section
        style={{
          padding: "6rem clamp(2rem, 6vw, 6rem)",
          borderTop: "1px solid rgba(204,18,52,0.1)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "3rem",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#CC1234",
                  marginBottom: "0.5rem",
                }}
              >
                Featured
              </p>
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                  fontWeight: 700,
                  color: "#F0EEE5",
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                }}
              >
                Selected Projects
              </h2>
            </div>
            <button
              onClick={() => navigate("/spy/projects")}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(240,238,229,0.4)",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#CC1234")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,238,229,0.4)")}
            >
              All Projects <ArrowRight size={12} strokeWidth={2} />
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            {featured.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                onClick={() => navigate(`/project/${project.id}`)}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr 1fr auto",
                  gap: "2rem",
                  alignItems: "center",
                  padding: "2rem 1.5rem",
                  background: "rgba(240,238,229,0.02)",
                  border: "1px solid rgba(240,238,229,0.04)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                whileHover={{
                  backgroundColor: "rgba(204,18,52,0.04)",
                  borderColor: "rgba(204,18,52,0.2)",
                }}
                className="grid-cols-1 lg:grid-cols-[80px_1fr_1fr_auto]"
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    background: project.coverColor + "20",
                    border: `1px solid ${project.coverColor}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.7rem",
                      fontWeight: 500,
                      color: project.coverColor,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1.15rem",
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
                      color: "rgba(240,238,229,0.4)",
                    }}
                  >
                    {project.subtitle}
                  </p>
                </div>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "0.6rem",
                        letterSpacing: "0.08em",
                        padding: "0.2rem 0.5rem",
                        border: "1px solid rgba(240,238,229,0.1)",
                        color: "rgba(240,238,229,0.4)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ArrowRight size={14} strokeWidth={1.5} color="rgba(240,238,229,0.3)" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
