import { motion } from "motion/react";
import { Mail, ArrowRight } from "lucide-react";

export default function YuuKayCeeContact() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0C0A15",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 clamp(2rem, 6vw, 6rem)",
      }}
    >
      <div style={{ maxWidth: "700px" }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#A78BFA",
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
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: 400,
            color: "#EEE9F8",
            lineHeight: 1.1,
            marginBottom: "2rem",
          }}
        >
          Let's make<br />
          <em style={{ color: "#A78BFA" }}>something together</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.95rem",
            lineHeight: 1.8,
            color: "rgba(238,233,248,0.45)",
            marginBottom: "4rem",
          }}
        >
          Brand identity, product design, typographic systems — if it involves creating visual experiences
          that communicate clearly and feel right, I want to hear about it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <a
            href="mailto:yuukaycee@udaycherri.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1rem",
              textDecoration: "none",
              color: "#EEE9F8",
              padding: "1.5rem 2rem",
              border: "1px solid rgba(167,139,250,0.15)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#A78BFA";
              e.currentTarget.style.background = "rgba(167,139,250,0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(167,139,250,0.15)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            <Mail size={16} strokeWidth={1.5} color="#A78BFA" />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem" }}>
              yuukaycee@udaycherri.com
            </span>
            <ArrowRight size={14} strokeWidth={1.5} style={{ marginLeft: "auto" }} />
          </a>

          <div style={{ display: "flex", gap: "1rem" }}>
            {["Behance", "Dribbble", "LinkedIn"].map((platform) => (
              <a
                key={platform}
                href="#"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(238,233,248,0.4)",
                  textDecoration: "none",
                  padding: "0.6rem 1.25rem",
                  border: "1px solid rgba(167,139,250,0.12)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#A78BFA";
                  e.currentTarget.style.borderColor = "rgba(167,139,250,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(238,233,248,0.4)";
                  e.currentTarget.style.borderColor = "rgba(167,139,250,0.12)";
                }}
              >
                {platform}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
