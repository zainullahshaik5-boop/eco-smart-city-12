import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Role = "citizen" | "worker" | "admin";

export type SessionUser = { name: string; email: string; role: Role };

type AppState = {
  theme: "light" | "dark";
  toggleTheme: () => void;
  user: SessionUser | null;
  signIn: (user: SessionUser) => void;
  signOut: () => void;
  points: number;
  addPoints: (n: number) => void;
};

const Ctx = createContext<AppState | null>(null);

const THEME_KEY = "ecosense-theme";
const USER_KEY = "ecosense-user";
const POINTS_KEY = "ecosense-points";

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [user, setUser] = useState<SessionUser | null>(null);
  const [points, setPoints] = useState(1890);

  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_KEY);
    if (storedTheme === "dark" || storedTheme === "light") setTheme(storedTheme);
    const storedUser = localStorage.getItem(USER_KEY);
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser) as SessionUser);
      } catch {
        /* ignore malformed session */
      }
    }
    const storedPoints = localStorage.getItem(POINTS_KEY);
    if (storedPoints) setPoints(Number(storedPoints) || 1890);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem(THEME_KEY, next);
      return next;
    });
  }, []);

  const signIn = useCallback((next: SessionUser) => {
    setUser(next);
    localStorage.setItem(USER_KEY, JSON.stringify(next));
  }, []);

  const signOut = useCallback(() => {
    setUser(null);
    localStorage.removeItem(USER_KEY);
  }, []);

  const addPoints = useCallback((n: number) => {
    setPoints((prev) => {
      const next = prev + n;
      localStorage.setItem(POINTS_KEY, String(next));
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ theme, toggleTheme, user, signIn, signOut, points, addPoints }),
    [theme, toggleTheme, user, signIn, signOut, points, addPoints],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useApp() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}
