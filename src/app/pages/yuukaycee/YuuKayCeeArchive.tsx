import { motion } from "motion/react";
import { yuukayceeProjects } from "../../data/content";

const archive = yuukayceeProjects.filter((p) => !p.featured);

export default function YuuKayCeeArchive() {
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
            Archive
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
            Creative Explorations
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.95rem",
              color: "rgba(238,233,248,0.4)",
              marginTop: "1.5rem",
              lineHeight: 1.7,
              maxWidth: "520px",
            }}
          >
            Work that isn't in the main portfolio. Experiments, early directions, and explorations that informed what came after.
          </p>
        </motion.div>

        {/* Archive list */}
        <div>
          {archive.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                display: "grid",
                gridTemplateColumns: "60px 1fr 80px",
                gap: "2rem",
                alignItems: "center",
                padding: "1.75rem 0",
                borderBottom: "1px solid rgba(167,139,250,0.06)",
                cursor: "default",
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.15em",
                  color: "rgba(238,233,248,0.3)",
                }}
              >
                {project.year}
              </span>
              <div>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.15rem",
                    fontWeight: 400,
                    color: "#EEE9F8",
                    marginBottom: "0.25rem",
                  }}
                >
                  {project.title}
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.8rem",
                    color: "rgba(238,233,248,0.35)",
                  }}
                >
                  {project.subtitle}
                </p>
              </div>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: project.coverColor,
                  textAlign: "right",
                }}
              >
                {project.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
