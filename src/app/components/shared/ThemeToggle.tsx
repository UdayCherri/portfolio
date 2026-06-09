import { Sun, Moon, Sparkles } from "lucide-react";
import { useTheme, type ThemeIdentity } from "../../contexts/ThemeContext";

export function ThemeToggle({ identity }: { identity: ThemeIdentity }) {
  const { mode, toggle } = useTheme();
  const isDark = mode === "dark";

  if (identity === "yuukaycee") {
    return (
      <button
        onClick={toggle}
        title={isDark ? "Switch to light" : "Switch to dark"}
        style={{
          display: "flex",
          alignItems: "center",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          color: isDark ? "rgba(103,232,249,0.45)" : "rgba(8,145,178,0.45)",
          transition: "color 0.2s ease",
          padding: "0.25rem",
          flexShrink: 0,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = isDark ? "#67E8F9" : "#0891B2";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = isDark
            ? "rgba(103,232,249,0.45)"
            : "rgba(8,145,178,0.45)";
        }}
      >
        <Sparkles size={12} strokeWidth={1} />
      </button>
    );
  }

  if (identity === "spy") {
    return (
      <button
        onClick={toggle}
        title={isDark ? "Switch to light" : "Switch to dark"}
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.5rem",
          letterSpacing: "0.08em",
          color: isDark ? "rgba(240,238,229,0.3)" : "rgba(8,12,24,0.35)",
          background: "transparent",
          border: `1px solid ${isDark ? "rgba(204,18,52,0.2)" : "rgba(8,12,24,0.15)"}`,
          padding: "0.2rem 0.45rem",
          cursor: "pointer",
          transition: "all 0.15s ease",
          flexShrink: 0,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#CC1234";
          e.currentTarget.style.borderColor = "rgba(204,18,52,0.5)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = isDark
            ? "rgba(240,238,229,0.3)"
            : "rgba(8,12,24,0.35)";
          e.currentTarget.style.borderColor = isDark
            ? "rgba(204,18,52,0.2)"
            : "rgba(8,12,24,0.15)";
        }}
      >
        {isDark ? "[DARK]" : "[LITE]"}
      </button>
    );
  }

  if (identity === "cyb3r") {
    return (
      <button
        onClick={toggle}
        title={isDark ? "Switch to light" : "Switch to dark"}
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "0.5rem",
          letterSpacing: "0.12em",
          color: isDark ? "rgba(16,185,129,0.45)" : "rgba(5,150,105,0.45)",
          background: "transparent",
          border: "none",
          padding: "0.25rem",
          cursor: "pointer",
          transition: "color 0.15s ease",
          flexShrink: 0,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = isDark ? "#10B981" : "#059669";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = isDark
            ? "rgba(16,185,129,0.45)"
            : "rgba(5,150,105,0.45)";
        }}
      >
        {isDark ? "0x1" : "0x0"}
      </button>
    );
  }

  // core
  return (
    <button
      onClick={toggle}
      title={isDark ? "Switch to light" : "Switch to dark"}
      style={{
        display: "flex",
        alignItems: "center",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        color: isDark ? "rgba(232,226,213,0.4)" : "rgba(28,28,28,0.35)",
        transition: "color 0.2s ease",
        padding: "0.25rem",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = isDark ? "#C4A96A" : "#B8A46A";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = isDark
          ? "rgba(232,226,213,0.4)"
          : "rgba(28,28,28,0.35)";
      }}
    >
      {isDark ? (
        <Sun size={14} strokeWidth={1.5} />
      ) : (
        <Moon size={14} strokeWidth={1.5} />
      )}
    </button>
  );
}
