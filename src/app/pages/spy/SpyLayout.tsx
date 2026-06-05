import { Outlet, Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { BackToCore } from "../../components/shared/BackToCore";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/spy", label: "Home" },
  { to: "/spy/projects", label: "Projects" },
  { to: "/spy/systems", label: "Systems" },
  { to: "/spy/experiments", label: "Experiments" },
  { to: "/spy/open-source", label: "Open Source" },
  { to: "/spy/contact", label: "Contact" },
];

export default function SpyLayout() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  return (
    <div
      style={{
        background: "#080C18",
        minHeight: "100vh",
        fontFamily: "'Space Grotesk', sans-serif",
        color: "#F0EEE5",
        position: "relative",
      }}
    >
      {/* Subtle grid overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(240,238,229,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(240,238,229,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Navigation */}
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          padding: "1.25rem 3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled ? "rgba(8,12,24,0.92)" : "rgba(8,12,24,0.7)",
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${scrolled ? "rgba(204,18,52,0.2)" : "rgba(204,18,52,0.08)"}`,
          transition: "all 0.3s ease",
        }}
      >
        <Link
          to="/spy"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "0.95rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            color: "#F0EEE5",
            textDecoration: "none",
            textTransform: "uppercase",
          }}
        >
          Spy D. Veloper
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.slice(1).map(({ to, label }) => {
            const active = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: active ? 500 : 400,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: active ? "#CC1234" : "rgba(240,238,229,0.5)",
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                  borderBottom: active ? "1px solid #CC1234" : "none",
                  paddingBottom: active ? "1px" : "2px",
                }}
              >
                {label}
              </Link>
            );
          })}
          <BackToCore style={{ color: "rgba(240,238,229,0.3)" }} />
        </nav>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: "#F0EEE5", background: "transparent", border: "none", cursor: "pointer" }}
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
            background: "#080C18",
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
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.8rem",
                fontWeight: 600,
                color: "#F0EEE5",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              {label}
            </Link>
          ))}
          <BackToCore style={{ color: "rgba(240,238,229,0.35)", marginTop: "1rem" }} />
        </div>
      )}

      {/* Content */}
      <div style={{ paddingTop: "72px", position: "relative", zIndex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
}
