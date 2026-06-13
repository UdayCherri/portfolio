import { CoreNav } from "../../components/core/CoreNav";
import { motion } from "motion/react";
import { Mail, ArrowRight } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";

export default function CoreContact() {
  const { mode } = useTheme();
  const theme = getIdentityTheme("core", mode);

  return (
    <div
      style={{
        background: theme.bg,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        transition: "background 0.4s ease, color 0.4s ease",
      }}
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
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 300,
              color: theme.fg,
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
              fontSize: "clamp(0.9rem, 1.8vw, 1rem)",
              lineHeight: 1.8,
              color: theme.fgMuted,
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
              href="mailto:cherriuday@gmail.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "1rem",
                textDecoration: "none",
                color: theme.fg,
                padding: "1.5rem 2rem",
                border: `1px solid ${theme.borderSubtle}`,
                transition: "border-color 0.3s ease, background 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = theme.accent;
                e.currentTarget.style.background = theme.accent + "08";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = theme.borderSubtle;
                e.currentTarget.style.background = "transparent";
              }}
            >
              <Mail size={16} strokeWidth={1.5} color={theme.accent} />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(0.875rem, 1.8vw, 0.9rem)",
                  letterSpacing: "0.05em",
                }}
              >
                cherriuday@gmail.com
              </span>
              <ArrowRight size={14} strokeWidth={1.5} color={theme.fgMuted} style={{ marginLeft: "auto" }} />
            </a>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {[
                { label: "GitHub", url: "https://github.com/UdayCherri" },
                { label: "LinkedIn", url: "https://linkedin.com/in/uday-kiran-cherri" },
                { label: "Twitter", url: "https://x.com/Uday_Cherri" },
                { label: "Instagram", url: "https://www.instagram.com/uday.cherri/" },
              ].map(({ label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: theme.fgMuted,
                    textDecoration: "none",
                    padding: "0.6rem 1.25rem",
                    border: `1px solid ${theme.borderSubtle}`,
                    transition: "color 0.2s ease, border-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = theme.fg;
                    e.currentTarget.style.borderColor = theme.accent;
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
    </div>
  );
}
