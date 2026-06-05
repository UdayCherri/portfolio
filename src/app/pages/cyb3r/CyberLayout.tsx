import { Outlet, Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { BackToCore } from "../../components/shared/BackToCore";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/cyb3r", label: "Home" },
  { to: "/cyb3r/research", label: "Research" },
  { to: "/cyb3r/security-projects", label: "Projects" },
  { to: "/cyb3r/ctf-archive", label: "CTF" },
  { to: "/cyb3r/blog", label: "Blog" },
  { to: "/cyb3r/contact", label: "Contact" },
];

export default function CyberLayout() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  return (
    <div
      style={{
        background: "#0F1318",
        minHeight: "100vh",
        fontFamily: "'IBM Plex Sans', sans-serif",
        color: "#E2EAF0",
        position: "relative",
      }}
    >
      {/* Scan-line texture */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(16,185,129,0.01) 2px, rgba(16,185,129,0.01) 4px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Navigation — status bar style */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          padding: "0",
          background: scrolled ? "rgba(15,19,24,0.95)" : "rgba(15,19,24,0.8)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(16,185,129,0.12)",
          transition: "background 0.3s ease",
        }}
      >
        {/* Top status bar */}
        <div
          style={{
            padding: "0.5rem 3rem",
            background: "rgba(16,185,129,0.05)",
            borderBottom: "1px solid rgba(16,185,129,0.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.6rem",
              color: "rgba(16,185,129,0.6)",
              letterSpacing: "0.1em",
            }}
          >
            CYB3R-BO1 // Research Operations
          </p>
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.6rem",
              color: "rgba(16,185,129,0.4)",
            }}
          >
            STATUS: ACTIVE
          </p>
        </div>

        {/* Main nav */}
        <div
          style={{
            padding: "1rem 3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            to="/cyb3r"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.9rem",
              fontWeight: 500,
              color: "#E2EAF0",
              textDecoration: "none",
              letterSpacing: "0.05em",
            }}
          >
            CYB3R-BO1
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.slice(1).map(({ to, label }) => {
              const active = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    color: active ? "#10B981" : "rgba(226,234,240,0.45)",
                    textDecoration: "none",
                    transition: "color 0.15s ease",
                    paddingBottom: active ? "1px" : "2px",
                    borderBottom: active ? "1px solid #10B981" : "none",
                  }}
                >
                  {label}
                </Link>
              );
            })}
            <BackToCore style={{ color: "rgba(226,234,240,0.3)" }} />
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: "#E2EAF0", background: "transparent", border: "none", cursor: "pointer" }}
          >
            {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 39,
            background: "#0F1318",
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
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "1.5rem",
                fontWeight: 500,
                color: "#E2EAF0",
                textDecoration: "none",
              }}
            >
              {label}
            </Link>
          ))}
          <BackToCore style={{ color: "rgba(226,234,240,0.35)", marginTop: "1rem" }} />
        </div>
      )}

      {/* Content */}
      <div style={{ paddingTop: "96px", position: "relative", zIndex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
}
