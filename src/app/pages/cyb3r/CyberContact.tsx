import { motion } from "motion/react";
import { Mail, ArrowRight } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";

export default function CyberContact() {
  const { mode } = useTheme();
  const theme = getIdentityTheme("cyb3r", mode);

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
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            color: theme.accent,
            opacity: 0.65,
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
            color: theme.fg,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            marginBottom: "2rem",
          }}
        >
          Discuss<br />
          <span style={{ color: theme.accent }}>responsible research</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontSize: "clamp(0.875rem, 1.8vw, 0.9rem)",
            lineHeight: 1.75,
            color: theme.fgMuted,
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
            href="mailto:cyb3rbo1@scr1ptk1dd13s.xyz"
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
              e.currentTarget.style.background = theme.accent + "06";
              e.currentTarget.style.borderColor = theme.accent + "55";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = theme.borderSubtle;
            }}
          >
            <Mail size={14} strokeWidth={1.5} color={theme.accent} />
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "clamp(0.75rem, 1.5vw, 0.8rem)" }}>
              cyb3rbo1@scr1ptk1dd13s.xyz
            </span>
            <ArrowRight size={12} strokeWidth={1.5} color={theme.fgMuted} style={{ marginLeft: "auto" }} />
          </a>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {[
              { label: "GitHub", url: "https://github.com/udaycherri" },
              { label: "Keybase", url: "https://keybase.io/udaycherri" },
              { label: "HackTheBox", url: "https://app.hackthebox.com/profile/udaycherri" },
            ].map(({ label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  color: theme.fgMuted,
                  textDecoration: "none",
                  padding: "0.5rem 1rem",
                  border: `1px solid ${theme.borderSubtle}`,
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = theme.accent;
                  e.currentTarget.style.borderColor = theme.accent + "44";
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
