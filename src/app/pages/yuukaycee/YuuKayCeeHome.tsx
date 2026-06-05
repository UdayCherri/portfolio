import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ArrowRight } from "lucide-react";
import { yuukayceeProjects } from "../../data/content";
import { useIsDesktop, useIsMd } from "../../components/shared/useMediaQuery";

function ProfileArea() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "480px",
        aspectRatio: "4/5",
        background: "linear-gradient(135deg, #1a1428 0%, #0C0A15 50%, #15102a 100%)",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      {/* Geometric composition */}
      <svg
        viewBox="0 0 480 600"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.4 }}
      >
        <circle cx="240" cy="240" r="180" fill="none" stroke="#A78BFA" strokeWidth="0.5" />
        <circle cx="240" cy="240" r="140" fill="none" stroke="#67E8F9" strokeWidth="0.3" />
        <circle cx="240" cy="240" r="90" fill="none" stroke="#FDBA8C" strokeWidth="0.5" />
        <line x1="60" y1="240" x2="420" y2="240" stroke="#A78BFA" strokeWidth="0.3" />
        <line x1="240" y1="60" x2="240" y2="420" stroke="#A78BFA" strokeWidth="0.3" />
        <rect x="160" y="160" width="160" height="160" fill="none" stroke="#C4B5FD" strokeWidth="0.4" transform="rotate(45 240 240)" />
      </svg>

      {/* Gradient layers */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "60%",
          background: "radial-gradient(ellipse at 50% 0%, rgba(167,139,250,0.15) 0%, transparent 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "40%",
          background: "linear-gradient(to top, rgba(12,10,21,1) 0%, transparent 100%)",
        }}
      />

      {/* Identity text */}
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
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.6rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#A78BFA",
            marginBottom: "0.5rem",
          }}
        >
          The Creator
        </p>
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.5rem",
            fontWeight: 400,
            color: "#EEE9F8",
          }}
        >
          YuuKayCee
        </p>
      </div>
    </div>
  );
}

export default function YuuKayCeeHome() {
  const navigate = useNavigate();
  const featured = yuukayceeProjects.filter((p) => p.featured);
  const isDesktop = useIsDesktop();
  const isMd = useIsMd();

  return (
    <div style={{ background: "#0C0A15", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          padding: "6rem clamp(2rem, 6vw, 6rem)",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isDesktop ? "1fr 1fr" : "1fr",
            gap: isDesktop ? "6rem" : "3rem",
            alignItems: "center",
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Left: text */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#A78BFA",
                marginBottom: "2rem",
              }}
            >
              Design · Identity · Experience
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                fontWeight: 400,
                color: "#EEE9F8",
                lineHeight: 1.1,
                marginBottom: "2rem",
              }}
            >
              Designing<br />
              <em style={{ color: "#A78BFA" }}>connections</em><br />
              between worlds
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "rgba(238,233,248,0.55)",
                maxWidth: "420px",
                marginBottom: "3rem",
              }}
            >
              Brand identities, product systems, and visual language for organizations and individuals
              with something real to communicate.
            </motion.p>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              onClick={() => navigate("/yuukaycee/work")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#EEE9F8",
                background: "transparent",
                border: "1px solid rgba(167,139,250,0.4)",
                padding: "1rem 2rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              whileHover={{
                borderColor: "#A78BFA",
                color: "#A78BFA",
              }}
            >
              View Work
              <ArrowRight size={12} strokeWidth={1.5} />
            </motion.button>
          </div>

          {/* Right: Profile area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <ProfileArea />
          </motion.div>
        </div>
      </section>

      {/* Featured Work */}
      <section
        style={{
          padding: "6rem clamp(2rem, 6vw, 6rem)",
          borderTop: "1px solid rgba(167,139,250,0.1)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "4rem",
            }}
          >
            <div>
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
                Featured Work
              </p>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                  fontWeight: 400,
                  color: "#EEE9F8",
                }}
              >
                Selected Projects
              </h2>
            </div>
            <button
              onClick={() => navigate("/yuukaycee/work")}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(238,233,248,0.5)",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#A78BFA")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(238,233,248,0.5)")}
            >
              All Work <ArrowRight size={12} strokeWidth={1.5} />
            </button>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMd ? "repeat(2, 1fr)" : "1fr",
              gap: "2px",
            }}
          >
            {featured.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => navigate(`/project/${project.id}`)}
                style={{ cursor: "pointer" }}
              >
                <div
                  style={{
                    height: "380px",
                    background: project.coverColor + "22",
                    border: `1px solid ${project.coverColor}20`,
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                    transition: "border-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = project.coverColor + "60";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = project.coverColor + "20";
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "7rem",
                      color: project.coverColor,
                      opacity: 0.08,
                      userSelect: "none",
                    }}
                  >
                    {project.title.slice(0, 2)}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `radial-gradient(ellipse at 50% 30%, ${project.coverColor}18 0%, transparent 70%)`,
                    }}
                  />
                </div>
                <div style={{ padding: "0 0.5rem 2rem" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "0.5rem",
                    }}
                  >
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
                        color: "rgba(238,233,248,0.35)",
                      }}
                    >
                      {project.year}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.6rem",
                      fontWeight: 400,
                      color: "#EEE9F8",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.85rem",
                      color: "rgba(238,233,248,0.5)",
                      lineHeight: 1.6,
                    }}
                  >
                    {project.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
