import { createContext, useContext, useState, type ReactNode } from "react";

export type ThemeIdentity = "core" | "yuukaycee" | "spy" | "cyb3r";
export type ThemeMode = "dark" | "light";

interface ThemeContextValue {
  mode: ThemeMode;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  mode: "dark",
  toggle: () => {},
});

const defaults: Record<ThemeIdentity, ThemeMode> = {
  core: "dark",
  yuukaycee: "dark",
  spy: "dark",
  cyb3r: "dark",
};

export function ThemeProvider({
  identity,
  children,
}: {
  identity: ThemeIdentity;
  children: ReactNode;
}) {
  const [mode, setMode] = useState<ThemeMode>(() => {
    try {
      const saved = localStorage.getItem(`theme-${identity}`);
      if (saved === "light" || saved === "dark") return saved as ThemeMode;
    } catch {}
    return defaults[identity];
  });

  const toggle = () => {
    setMode((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(`theme-${identity}`, next);
      } catch {}
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
