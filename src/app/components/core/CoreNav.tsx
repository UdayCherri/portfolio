import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ThemeToggle } from "../shared/ThemeToggle";
import { useTheme } from "../../contexts/ThemeContext";
import { getIdentityTheme } from "../../data/identityThemes";

const links = [
  { to: "/", label: "Home" },
  { to: "/journey", label: "Journey" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
];

export function CoreNav() {
  const location = useLocation();
  const { mode } = useTheme();
  const theme = getIdentityTheme("core", mode);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          padding: "1.5rem clamp(1rem, 4vw, 3rem)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "background 0.4s ease, border-color 0.4s ease",
          background: scrolled ? theme.navBgScrolled : theme.navBg,
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? `1px solid ${theme.borderSubtle}` : "1px solid transparent",
        }}
      >
        {/* Wordmark */}
        <Link
          to="/"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.1rem",
            fontWeight: 400,
            letterSpacing: "0.15em",
            color: theme.fg,
            textDecoration: "none",
            textTransform: "uppercase",
            transition: "color 0.3s ease",
          }}
        >
          Uday Cherri
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => {
            const active = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(0.65rem, 1.5vw, 0.7rem)",
                  fontWeight: 400,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: active ? theme.fg : theme.fgMuted,
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  borderBottom: active ? `1px solid ${theme.accent}` : "1px solid transparent",
                  paddingBottom: "2px",
                }}
              >
                {label}
              </Link>
            );
          })}
          <ThemeToggle identity="core" />
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            style={{
              display: "block",
              width: "20px",
              height: "1px",
              background: theme.fg,
              transition: "transform 0.3s ease",
              transform: menuOpen ? "rotate(45deg) translate(3px, 3px)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "20px",
              height: "1px",
              background: theme.fg,
              opacity: menuOpen ? 0 : 1,
              transition: "opacity 0.3s ease",
            }}
          />
          <span
            style={{
              display: "block",
              width: "20px",
              height: "1px",
              background: theme.fg,
              transition: "transform 0.3s ease",
              transform: menuOpen ? "rotate(-45deg) translate(3px, -3px)" : "none",
            }}
          />
        </button>
      </motion.header>

      {/* Mobile menu backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="core-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMenuOpen(false)}
            style={{ position: "fixed", inset: 0, zIndex: 38, background: "rgba(0,0,0,0.3)" }}
          />
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="core-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed",
              top: "70px",
              left: 0,
              right: 0,
              zIndex: 39,
              background: theme.bg,
              padding: "2rem clamp(1rem, 4vw, 3rem)",
              borderBottom: `1px solid ${theme.borderSubtle}`,
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
            }}
          >
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.5rem",
                  fontWeight: 300,
                  color: theme.fg,
                  textDecoration: "none",
                  padding: "0.75rem 0",
                  transition: "color 0.2s ease",
                }}
              >
                {label}
              </Link>
            ))}
            <div style={{ marginTop: "0.75rem" }}>
              <ThemeToggle identity="core" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
