import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ArrowRight } from "lucide-react";
import { featuredWork } from "../../data/content";
import { useIsDesktop } from "../shared/useMediaQuery";

const identityFonts: Record<string, string> = {
  yuukaycee: "'Playfair Display', serif",
  spy: "'Space Grotesk', sans-serif",
  cyb3r: "'IBM Plex Mono', monospace",
};

export function FeaturedWork() {
  const navigate = useNavigate();
  const isDesktop = useIsDesktop();

  return (
    <section
      style={{
        padding: "10rem clamp(2rem, 8vw, 8rem)",
        background: "#F7F4EE",
        borderTop: "1px solid rgba(28,28,28,0.08)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "5rem",
          }}
        >
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#B8A46A",
                marginBottom: "1rem",
              }}
            >
              Selected Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 300,
                color: "#1C1C1C",
                lineHeight: 1.15,
              }}
            >
              Three disciplines.<br />One body of work.
            </motion.h2>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isDesktop ? "repeat(3, 1fr)" : "1fr",
            gap: "2px",
          }}
        >
          {featuredWork.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => navigate(item.path)}
              style={{
                cursor: "pointer",
                overflow: "hidden",
                position: "relative",
              }}
              whileHover={{ scale: 1.01 }}
            >
              {/* Color block */}
              <div
                style={{
                  width: "100%",
                  height: "320px",
                  background: item.coverColor,
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Abstract mark per identity */}
                <div
                  style={{
                    opacity: 0.15,
                    fontSize: "8rem",
                    fontFamily: identityFonts[item.identity],
                    color: "#fff",
                    userSelect: "none",
                  }}
                >
                  {item.identity === "yuukaycee" ? "YK" : item.identity === "spy" ? "SD" : "CB"}
                </div>
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.4) 100%)",
                  }}
                />
              </div>

              {/* Meta */}
              <div style={{ padding: "1.5rem 0 2rem" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.75rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.6rem",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: item.coverColor,
                    }}
                  >
                    {item.discipline}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.6rem",
                      letterSpacing: "0.15em",
                      color: "#6B6B6B",
                    }}
                  >
                    {item.year}
                  </p>
                </div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    color: "#1C1C1C",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.85rem",
                    lineHeight: 1.6,
                    color: "#6B6B6B",
                    marginBottom: "1.25rem",
                  }}
                >
                  {item.description}
                </p>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#1C1C1C",
                  }}
                >
                  Explore
                  <ArrowRight size={11} strokeWidth={1.5} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
