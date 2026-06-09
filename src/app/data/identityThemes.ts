export interface IdentityTheme {
  bg: string;
  bgSubtle: string;
  fg: string;
  fgMuted: string;
  accent: string;
  accentSecondary: string;
  accentTertiary: string;
  navBg: string;
  navBgScrolled: string;
  borderSubtle: string;
  gridLine: string;
}

// ─── YuuKayCee ───────────────────────────────────────────────────────────────
// Aurora-first: cyan is primary, lavender secondary, peach tertiary.
// Violet is one color in a 6-hue system — not the dominant one.

const yuukayceeDark: IdentityTheme = {
  bg: "#080A12",
  bgSubtle: "#0D0F1A",
  fg: "#F0EEF8",
  fgMuted: "rgba(240,238,248,0.55)",
  accent: "#67E8F9",          // cyan — primary
  accentSecondary: "#C4B5FD", // soft lavender — secondary
  accentTertiary: "#FDBA8C",  // peach — tertiary
  navBg: "transparent",
  navBgScrolled: "rgba(8,10,18,0.93)",
  borderSubtle: "rgba(103,232,249,0.12)",
  gridLine: "rgba(103,232,249,0.02)",
};

const yuukayceeLight: IdentityTheme = {
  bg: "#F5F8FF",
  bgSubtle: "#EBF2FF",
  fg: "#0E1020",
  fgMuted: "rgba(14,16,32,0.55)",
  accent: "#0891B2",          // deep cyan — primary
  accentSecondary: "#0D9488", // teal — secondary
  accentTertiary: "#C2410C",  // deep peach/rust
  navBg: "transparent",
  navBgScrolled: "rgba(245,248,255,0.93)",
  borderSubtle: "rgba(8,145,178,0.14)",
  gridLine: "rgba(8,145,178,0.04)",
};

// ─── Spy D. Veloper ──────────────────────────────────────────────────────────

const spyDark: IdentityTheme = {
  bg: "#080C18",
  bgSubtle: "#0D1020",
  fg: "#F0EEE5",
  fgMuted: "rgba(240,238,229,0.55)",
  accent: "#CC1234",
  accentSecondary: "#F0EEE5",
  accentTertiary: "#CC1234",
  navBg: "rgba(8,12,24,0.7)",
  navBgScrolled: "rgba(8,12,24,0.95)",
  borderSubtle: "rgba(204,18,52,0.15)",
  gridLine: "rgba(240,238,229,0.02)",
};

const spyLight: IdentityTheme = {
  bg: "#F4F2ED",
  bgSubtle: "#EAE7DF",
  fg: "#080C18",
  fgMuted: "rgba(8,12,24,0.55)",
  accent: "#CC1234",
  accentSecondary: "#080C18",
  accentTertiary: "#CC1234",
  navBg: "rgba(244,242,237,0.7)",
  navBgScrolled: "rgba(244,242,237,0.97)",
  borderSubtle: "rgba(204,18,52,0.15)",
  gridLine: "rgba(8,12,24,0.04)",
};

// ─── CYB3R-BO1 ───────────────────────────────────────────────────────────────

const cyberDark: IdentityTheme = {
  bg: "#0F1318",
  bgSubtle: "#141A20",
  fg: "#E2EAF0",
  fgMuted: "rgba(226,234,240,0.55)",
  accent: "#10B981",
  accentSecondary: "#2DD4BF",
  accentTertiary: "#10B981",
  navBg: "rgba(15,19,24,0.8)",
  navBgScrolled: "rgba(15,19,24,0.97)",
  borderSubtle: "rgba(16,185,129,0.12)",
  gridLine: "rgba(16,185,129,0.015)",
};

const cyberLight: IdentityTheme = {
  bg: "#EEF4F1",
  bgSubtle: "#E0EDE8",
  fg: "#0F1318",
  fgMuted: "rgba(15,19,24,0.55)",
  accent: "#059669",
  accentSecondary: "#0D9488",
  accentTertiary: "#059669",
  navBg: "rgba(238,244,241,0.8)",
  navBgScrolled: "rgba(238,244,241,0.97)",
  borderSubtle: "rgba(5,150,105,0.14)",
  gridLine: "rgba(5,150,105,0.04)",
};

// ─── Core (Uday Cherri) ───────────────────────────────────────────────────────
// Light: ivory/stone/soft-gold — Gallery / Architectural Space
// Dark:  graphite/charcoal/champagne — Observatory / Nexus

const coreDark: IdentityTheme = {
  bg: "#111110",
  bgSubtle: "#1A1917",
  fg: "#EDE8DE",
  fgMuted: "rgba(237,232,222,0.55)",
  accent: "#C4A96A",
  accentSecondary: "#EDE8DE",
  accentTertiary: "#C4A96A",
  navBg: "transparent",
  navBgScrolled: "rgba(17,17,16,0.93)",
  borderSubtle: "rgba(237,232,222,0.08)",
  gridLine: "transparent",
};

const coreLight: IdentityTheme = {
  bg: "#F7F4EE",
  bgSubtle: "#F0EDE5",
  fg: "#1C1C1C",
  fgMuted: "rgba(28,28,28,0.55)",
  accent: "#B8A46A",
  accentSecondary: "#1C1C1C",
  accentTertiary: "#B8A46A",
  navBg: "transparent",
  navBgScrolled: "rgba(247,244,238,0.93)",
  borderSubtle: "rgba(28,28,28,0.08)",
  gridLine: "transparent",
};

// ─── Export ───────────────────────────────────────────────────────────────────

export const identityThemeMap = {
  yuukaycee: { dark: yuukayceeDark, light: yuukayceeLight },
  spy: { dark: spyDark, light: spyLight },
  cyb3r: { dark: cyberDark, light: cyberLight },
  core: { dark: coreDark, light: coreLight },
} as const;

export function getIdentityTheme(
  identity: keyof typeof identityThemeMap,
  mode: "dark" | "light"
): IdentityTheme {
  return identityThemeMap[identity][mode];
}
