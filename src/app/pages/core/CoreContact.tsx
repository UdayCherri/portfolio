import { CoreNav } from "../../components/core/CoreNav";
import { motion } from "motion/react";
import { Mail, ArrowRight } from "lucide-react";

export default function CoreContact() {
  return (
    <div
      style={{ background: "#F7F4EE", minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <CoreNav />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 clamp(2rem, 8vw, 8rem)",
          paddingTop: "100px",
        }}
      >
        <div style={{ maxWidth: "700px" }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#B8A46A",
              marginBottom: "2rem",
            }}
          >
            Contact
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 300,
              color: "#1C1C1C",
              lineHeight: 1.1,
              marginBottom: "3rem",
            }}
          >
            Start a conversation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "#6B6B6B",
              marginBottom: "4rem",
            }}
          >
            Whether you're looking to collaborate on a design project, build something ambitious, or
            discuss security research — I'm interested in work that matters.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <a
              href="mailto:uday@udaycherri.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "1rem",
                textDecoration: "none",
                color: "#1C1C1C",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(28,28,28,0.12)",
                transition: "border-color 0.3s ease, background 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#B8A46A";
                e.currentTarget.style.background = "rgba(184,164,106,0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(28,28,28,0.12)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              <Mail size={16} strokeWidth={1.5} color="#B8A46A" />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9rem",
                  letterSpacing: "0.05em",
                }}
              >
                uday@udaycherri.com
              </span>
              <ArrowRight size={14} strokeWidth={1.5} style={{ marginLeft: "auto" }} />
            </a>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              {["GitHub", "LinkedIn", "Twitter"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#6B6B6B",
                    textDecoration: "none",
                    padding: "0.6rem 1.25rem",
                    border: "1px solid rgba(28,28,28,0.1)",
                    transition: "color 0.2s ease, border-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#1C1C1C";
                    e.currentTarget.style.borderColor = "rgba(28,28,28,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#6B6B6B";
                    e.currentTarget.style.borderColor = "rgba(28,28,28,0.1)";
                  }}
                >
                  {platform}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
