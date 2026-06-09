import { motion } from "motion/react";
import { Mail, ArrowRight } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";

export default function YuuKayCeeContact() {
  const { mode } = useTheme();
  const theme = getIdentityTheme("yuukaycee", mode);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "transparent",
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
            color: theme.accent,
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
            color: theme.fg,
            lineHeight: 1.1,
            marginBottom: "2rem",
          }}
        >
          Let's make<br />
          <em style={{ color: theme.accent }}>something together</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(0.875rem, 2vw, 0.95rem)",
            lineHeight: 1.8,
            color: theme.fgMuted,
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
              color: theme.fg,
              padding: "1.5rem 2rem",
              border: `1px solid ${theme.borderSubtle}`,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = theme.accent;
              e.currentTarget.style.background = mode === "dark" ? "rgba(103,232,249,0.04)" : "rgba(8,145,178,0.04)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = theme.borderSubtle;
              e.currentTarget.style.background = "transparent";
            }}
          >
            <Mail size={16} strokeWidth={1.5} color={theme.accent} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(0.85rem, 1.8vw, 0.9rem)" }}>
              yuukaycee@udaycherri.com
            </span>
            <ArrowRight size={14} strokeWidth={1.5} color={theme.fgMuted} style={{ marginLeft: "auto" }} />
          </a>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {["Behance", "Dribbble", "LinkedIn"].map((platform) => (
              <a
                key={platform}
                href="#"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: theme.fgMuted,
                  textDecoration: "none",
                  padding: "0.6rem 1.25rem",
                  border: `1px solid ${theme.borderSubtle}`,
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = theme.accent;
                  e.currentTarget.style.borderColor = theme.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = theme.fgMuted;
                  e.currentTarget.style.borderColor = theme.borderSubtle;
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
