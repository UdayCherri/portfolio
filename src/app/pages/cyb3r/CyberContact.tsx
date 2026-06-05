import { motion } from "motion/react";
import { Mail, ArrowRight } from "lucide-react";

export default function CyberContact() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0F1318",
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
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            color: "rgba(16,185,129,0.5)",
            marginBottom: "2rem",
          }}
        >
          CONTACT
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 500,
            color: "#E2EAF0",
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            marginBottom: "2rem",
          }}
        >
          Discuss<br />
          <span style={{ color: "#10B981" }}>responsible research</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontSize: "0.9rem",
            lineHeight: 1.75,
            color: "rgba(226,234,240,0.45)",
            marginBottom: "3rem",
          }}
        >
          Vulnerability disclosures, security research collaboration, CTF team inquiries.
          All communications encrypted where possible.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.25 }}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <a
            href="mailto:cyb3r@udaycherri.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1rem",
              textDecoration: "none",
              color: "#E2EAF0",
              padding: "1.25rem 2rem",
              border: "1px solid rgba(16,185,129,0.15)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(16,185,129,0.04)";
              e.currentTarget.style.borderColor = "rgba(16,185,129,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(16,185,129,0.15)";
            }}
          >
            <Mail size={14} strokeWidth={1.5} color="#10B981" />
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "0.8rem" }}>
              cyb3r@udaycherri.com
            </span>
            <ArrowRight size={12} strokeWidth={1.5} style={{ marginLeft: "auto" }} />
          </a>

          <div style={{ display: "flex", gap: "1rem" }}>
            {["GitHub", "Keybase", "HackTheBox"].map((platform) => (
              <a
                key={platform}
                href="#"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.1em",
                  color: "rgba(226,234,240,0.3)",
                  textDecoration: "none",
                  padding: "0.5rem 1rem",
                  border: "1px solid rgba(16,185,129,0.1)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#10B981";
                  e.currentTarget.style.borderColor = "rgba(16,185,129,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(226,234,240,0.3)";
                  e.currentTarget.style.borderColor = "rgba(16,185,129,0.1)";
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
