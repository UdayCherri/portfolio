import { motion } from "motion/react";
import { Mail, ArrowRight } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";

export default function SpyContact() {
  const { mode } = useTheme();
  const theme = getIdentityTheme("spy", mode);

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
          transition={{ duration: 0.3 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
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
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
            fontWeight: 700,
            color: theme.fg,
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            lineHeight: 1.0,
            marginBottom: "2.5rem",
          }}
        >
          Build something<br />
          <span style={{ color: theme.accent }}>real.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.15 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(0.875rem, 1.8vw, 0.9rem)",
            lineHeight: 1.75,
            color: theme.fgMuted,
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
            href="mailto:spyd.veloper@gmail.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1rem",
              textDecoration: "none",
              color: theme.fg,
              padding: "1.25rem 2rem",
              border: `1px solid ${theme.borderSubtle}`,
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = mode === "dark" ? "rgba(204,18,52,0.06)" : "rgba(204,18,52,0.04)";
              e.currentTarget.style.borderColor = theme.accent;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = theme.borderSubtle;
            }}
          >
            <Mail size={14} strokeWidth={1.5} color={theme.accent} />
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(0.8rem, 1.6vw, 0.875rem)" }}>
              spyd.veloper@gmail.com
            </span>
            <ArrowRight size={12} strokeWidth={1.5} color={theme.fgMuted} style={{ marginLeft: "auto" }} />
          </a>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {[
              { label: "GitHub", url: "https://github.com/Spy-D-Veloper" },
              { label: "Twitter", url: "https://x.com/SpyD_Veloper" },
              { label: "Instagram", url: "https://www.instagram.com/spyd.veloper/" },
            ].map(({ label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: theme.fgMuted,
                  textDecoration: "none",
                  padding: "0.5rem 1.25rem",
                  border: `1px solid ${theme.borderSubtle}`,
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = theme.fg;
                  e.currentTarget.style.borderColor = mode === "dark" ? "rgba(240,238,229,0.25)" : "rgba(8,12,24,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = theme.fgMuted;
                  e.currentTarget.style.borderColor = theme.borderSubtle;
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
