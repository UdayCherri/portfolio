import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

const links = [
  { to: "/", label: "Home" },
  { to: "/journey", label: "Journey" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
];

export function CoreNav() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
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
        padding: "1.5rem 3rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "background 0.4s ease, border-color 0.4s ease",
        background: scrolled ? "rgba(247,244,238,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(28,28,28,0.08)" : "1px solid transparent",
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
          color: "#1C1C1C",
          textDecoration: "none",
          textTransform: "uppercase",
        }}
      >
        Uday Cherri
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-10">
        {links.map(({ to, label }) => {
          const active = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 400,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: active ? "#1C1C1C" : "#6B6B6B",
                textDecoration: "none",
                transition: "color 0.2s ease",
                borderBottom: active ? "1px solid #B8A46A" : "1px solid transparent",
                paddingBottom: "2px",
              }}
            >
              {label}
            </Link>
          );
        })}
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
            background: "#1C1C1C",
            transition: "transform 0.3s ease",
            transform: menuOpen ? "rotate(45deg) translate(3px, 3px)" : "none",
          }}
        />
        <span
          style={{
            display: "block",
            width: "20px",
            height: "1px",
            background: "#1C1C1C",
            opacity: menuOpen ? 0 : 1,
            transition: "opacity 0.3s ease",
          }}
        />
        <span
          style={{
            display: "block",
            width: "20px",
            height: "1px",
            background: "#1C1C1C",
            transition: "transform 0.3s ease",
            transform: menuOpen ? "rotate(-45deg) translate(3px, -3px)" : "none",
          }}
        />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            left: 0,
            right: 0,
            background: "#F7F4EE",
            padding: "2rem 3rem",
            borderBottom: "1px solid rgba(28,28,28,0.08)",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
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
                color: "#1C1C1C",
                textDecoration: "none",
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </motion.header>
  );
}
