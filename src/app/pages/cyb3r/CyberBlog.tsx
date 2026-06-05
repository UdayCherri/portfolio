import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function CyberBlog() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0F1318",
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
          transition={{ duration: 0.35 }}
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            color: "rgba(16,185,129,0.5)",
            marginBottom: "2rem",
          }}
        >
          EXTERNAL_BLOG
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 500,
            color: "#E2EAF0",
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            marginBottom: "2rem",
          }}
        >
          Writing on<br />
          <span style={{ color: "#10B981" }}>security &amp; systems</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontSize: "0.9rem",
            lineHeight: 1.75,
            color: "rgba(226,234,240,0.45)",
            marginBottom: "4rem",
          }}
        >
          Technical writeups, research notes, and analysis of interesting security problems.
          The blog lives externally — hosted where the content can speak for itself without the wrapper.
        </motion.p>

        <motion.a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.25 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
            color: "#E2EAF0",
            textDecoration: "none",
            padding: "1rem 2rem",
            border: "1px solid rgba(16,185,129,0.25)",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = "rgba(16,185,129,0.06)";
            el.style.borderColor = "#10B981";
            el.style.color = "#10B981";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = "transparent";
            el.style.borderColor = "rgba(16,185,129,0.25)";
            el.style.color = "#E2EAF0";
          }}
        >
          Read the Blog
          <ArrowUpRight size={12} strokeWidth={2} />
        </motion.a>
      </div>
    </div>
  );
}
