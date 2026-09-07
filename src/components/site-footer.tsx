import { Link } from "@tanstack/react-router";
import { Leaf } from "lucide-react";

const groups = [
  {
    title: "Platform",
    links: [
      { to: "/features", label: "Features" },
      { to: "/how-it-works", label: "How it works" },
      { to: "/sort-assistant", label: "AI sorting assistant" },
      { to: "/scan", label: "Scan bin QR" },
    ],
  },
  {
    title: "Dashboards",
    links: [
      { to: "/citizen", label: "Citizen" },
      { to: "/worker", label: "Worker" },
      { to: "/admin", label: "Admin" },
      { to: "/login", label: "Log in" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/faq", label: "FAQ" },
      { to: "/contact", label: "Contact" },
      { to: "/leaderboard", label: "Leaderboard" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-brand-gradient flex h-9 w-9 items-center justify-center rounded-xl text-eco-foreground">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="text-lg font-bold">
              Eco<span className="text-gradient">Sense</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            AI-powered smart waste management for cleaner, greener and smarter cities.
          </p>
        </div>
        {groups.map((g) => (
          <div key={g.title}>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">{g.title}</h3>
            <ul className="mt-4 space-y-2">
              {g.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/60 px-4 py-5 text-center text-xs text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} EcoSense Smart Waste Management. Built for a cleaner city.
      </div>
    </footer>
  );
}
