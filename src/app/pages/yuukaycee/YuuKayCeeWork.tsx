import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { yuukayceeProjects } from "../../data/content";

const filters = ["All", "Branding", "UI/UX", "Typography", "Posters", "Concepts"];

export default function YuuKayCeeWork() {
  const [active, setActive] = useState("All");
  const navigate = useNavigate();

  const filtered =
    active === "All"
      ? yuukayceeProjects
      : yuukayceeProjects.filter((p) => p.category === active);

  return (
    <div
      style={{
        padding: "4rem clamp(2rem, 6vw, 6rem)",
        minHeight: "100vh",
        background: "#0C0A15",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "5rem" }}
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
            Work Gallery
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
            All Projects
          </h1>
        </motion.div>

        {/* Filter bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "flex",
            gap: "0",
            marginBottom: "4rem",
            borderBottom: "1px solid rgba(167,139,250,0.1)",
          }}
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.75rem 1.5rem",
                background: "transparent",
                border: "none",
                borderBottom: active === f ? "2px solid #A78BFA" : "2px solid transparent",
                color: active === f ? "#A78BFA" : "rgba(238,233,248,0.4)",
                cursor: "pointer",
                transition: "all 0.2s ease",
                marginBottom: "-1px",
              }}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2px",
          }}
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              onClick={() => navigate(`/project/${project.id}`)}
              style={{
                cursor: "pointer",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "280px",
                  background: project.coverColor + "18",
                  border: `1px solid ${project.coverColor}18`,
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.4s ease",
                  marginBottom: "1rem",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = project.coverColor + "50";
                  el.style.background = project.coverColor + "28";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = project.coverColor + "18";
                  el.style.background = project.coverColor + "18";
                }}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "5rem",
                    color: project.coverColor,
                    opacity: 0.1,
                    userSelect: "none",
                  }}
                >
                  {project.title.slice(0, 1)}
                </span>
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `radial-gradient(ellipse at 50% 0%, ${project.coverColor}10 0%, transparent 60%)`,
                  }}
                />
              </div>
              <div style={{ padding: "0 0.25rem 2rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.35rem" }}>
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
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.3rem",
                    fontWeight: 400,
                    color: "#EEE9F8",
                    marginBottom: "0.25rem",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.8rem",
                    color: "rgba(238,233,248,0.4)",
                  }}
                >
                  {project.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
