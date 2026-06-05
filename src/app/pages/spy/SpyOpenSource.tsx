import { motion } from "motion/react";
import { openSourceRepos } from "../../data/content";
import { Star, ArrowUpRight } from "lucide-react";

export default function SpyOpenSource() {
  return (
    <div style={{ padding: "4rem clamp(2rem, 6vw, 6rem)", minHeight: "100vh", background: "#080C18" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          style={{ marginBottom: "5rem" }}
        >
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#CC1234",
              marginBottom: "0.75rem",
            }}
          >
            Public Repositories
          </p>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 700,
              color: "#F0EEE5",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
            }}
          >
            Open Source
          </h1>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
          {openSourceRepos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, delay: i * 0.06 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "2rem",
                alignItems: "center",
                padding: "2rem 1.5rem",
                border: "1px solid rgba(240,238,229,0.04)",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
              whileHover={{
                backgroundColor: "rgba(204,18,52,0.04)",
                borderColor: "rgba(204,18,52,0.15)",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
                  <h3
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "1rem",
                      fontWeight: 500,
                      color: "#F0EEE5",
                    }}
                  >
                    {repo.name}
                  </h3>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.6rem",
                      color: "#CC1234",
                      padding: "0.15rem 0.5rem",
                      border: "1px solid rgba(204,18,52,0.3)",
                    }}
                  >
                    {repo.language}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.85rem",
                    color: "rgba(240,238,229,0.4)",
                    lineHeight: 1.5,
                  }}
                >
                  {repo.description}
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexShrink: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <Star size={12} strokeWidth={1.5} color="rgba(240,238,229,0.35)" />
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.75rem",
                      color: "rgba(240,238,229,0.35)",
                    }}
                  >
                    {repo.stars.toLocaleString()}
                  </span>
                </div>
                <ArrowUpRight size={14} strokeWidth={1.5} color="rgba(240,238,229,0.3)" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
