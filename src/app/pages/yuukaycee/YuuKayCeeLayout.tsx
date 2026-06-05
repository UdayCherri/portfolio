import { Outlet, Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { BackToCore } from "../../components/shared/BackToCore";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/yuukaycee", label: "Home" },
  { to: "/yuukaycee/work", label: "Work" },
  { to: "/yuukaycee/case-studies", label: "Case Studies" },
  { to: "/yuukaycee/nyx-bureau", label: "NYX Bureau" },
  { to: "/yuukaycee/archive", label: "Archive" },
  { to: "/yuukaycee/contact", label: "Contact" },
];

export default function YuuKayCeeLayout() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <div
      style={{
        "--yk-bg": "#0C0A15",
        "--yk-fg": "#EEE9F8",
        "--yk-violet": "#A78BFA",
        "--yk-cyan": "#67E8F9",
        "--yk-peach": "#FDBA8C",
        "--yk-lavender": "#C4B5FD",
        "--yk-gold": "#F0C060",
        "--yk-muted": "rgba(238,233,248,0.45)",
        background: "#0C0A15",
        minHeight: "100vh",
        fontFamily: "'DM Sans', sans-serif",
        color: "#EEE9F8",
        position: "relative",
      } as React.CSSProperties}
    >
      {/* Navigation */}
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          padding: "1.5rem 3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled ? "rgba(12,10,21,0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(167,139,250,0.1)" : "1px solid transparent",
          transition: "all 0.4s ease",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <Link
            to="/yuukaycee"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.1rem",
              fontWeight: 400,
              letterSpacing: "0.05em",
              color: "#EEE9F8",
              textDecoration: "none",
            }}
          >
            YuuKayCee
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.slice(1).map(({ to, label }) => {
            const active = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  color: active ? "#A78BFA" : "rgba(238,233,248,0.55)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  borderBottom: active ? "1px solid #A78BFA" : "1px solid transparent",
                  paddingBottom: "2px",
                }}
              >
                {label}
              </Link>
            );
          })}
          <BackToCore
            style={{ color: "rgba(238,233,248,0.35)" }}
          />
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: "#EEE9F8", background: "transparent", border: "none", cursor: "pointer" }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </motion.header>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 39,
            background: "#0C0A15",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "3rem",
            gap: "2rem",
          }}
        >
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "2rem",
                fontWeight: 400,
                color: "#EEE9F8",
                textDecoration: "none",
              }}
            >
              {label}
            </Link>
          ))}
          <BackToCore style={{ color: "rgba(238,233,248,0.35)", marginTop: "1rem" }} />
        </div>
      )}

      {/* Page content */}
      <div style={{ paddingTop: "80px" }}>
        <Outlet />
      </div>
    </div>
  );
}
