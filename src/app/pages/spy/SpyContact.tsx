import { motion } from "motion/react";
import { Mail, ArrowRight } from "lucide-react";

export default function SpyContact() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#080C18",
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
          transition={{ duration: 0.3 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "0.6rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#CC1234",
            marginBottom: "2rem",
          }}
        >
          Contact
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
            fontWeight: 700,
            color: "#F0EEE5",
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            lineHeight: 1.0,
            marginBottom: "2.5rem",
          }}
        >
          Build something<br />
          <span style={{ color: "#CC1234" }}>real.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.15 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "0.9rem",
            lineHeight: 1.75,
            color: "rgba(240,238,229,0.45)",
            marginBottom: "4rem",
          }}
        >
          Distributed systems, infrastructure challenges, open-source collaboration.
          If the problem is interesting and the constraints are real, I'm interested.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.25 }}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <a
            href="mailto:spy@udaycherri.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1rem",
              textDecoration: "none",
              color: "#F0EEE5",
              padding: "1.25rem 2rem",
              border: "1px solid rgba(204,18,52,0.2)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(204,18,52,0.06)";
              e.currentTarget.style.borderColor = "#CC1234";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(204,18,52,0.2)";
            }}
          >
            <Mail size={14} strokeWidth={1.5} color="#CC1234" />
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.85rem" }}>
              spy@udaycherri.com
            </span>
            <ArrowRight size={12} strokeWidth={1.5} style={{ marginLeft: "auto" }} />
          </a>

          <div style={{ display: "flex", gap: "1rem" }}>
            {["GitHub", "Twitter"].map((platform) => (
              <a
                key={platform}
                href="#"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(240,238,229,0.35)",
                  textDecoration: "none",
                  padding: "0.5rem 1.25rem",
                  border: "1px solid rgba(240,238,229,0.08)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#F0EEE5";
                  e.currentTarget.style.borderColor = "rgba(240,238,229,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(240,238,229,0.35)";
                  e.currentTarget.style.borderColor = "rgba(240,238,229,0.08)";
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
