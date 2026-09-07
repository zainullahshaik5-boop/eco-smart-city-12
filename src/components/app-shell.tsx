import { Link, Outlet, useNavigate } from "@tanstack/react-router";
import { Leaf, LogOut, Home } from "lucide-react";
import type { ComponentType } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/site-header";
import { useApp, type Role } from "@/lib/app-state";

export type NavItem = { to: string; label: string; icon: ComponentType<{ className?: string }> };

export function AppShell({ role, title, nav }: { role: Role; title: string; nav: NavItem[] }) {
  const { user, signOut } = useApp();
  const navigate = useNavigate();

  return (
    <div className="surface-hero min-h-screen">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-4 p-3 sm:p-5 lg:flex-row">
        <aside className="glass sticky top-3 z-40 rounded-2xl p-3 lg:h-[calc(100vh-2.5rem)] lg:w-64 lg:shrink-0">
          <Link to="/" className="mb-3 flex items-center gap-2 px-2 py-1">
            <span className="bg-brand-gradient flex h-8 w-8 items-center justify-center rounded-lg text-eco-foreground">
              <Leaf className="h-4 w-4" />
            </span>
            <span className="font-bold">
              Eco<span className="text-gradient">Sense</span>
            </span>
          </Link>
          <p className="px-2 pb-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
            {title}
          </p>
          <nav className="flex gap-1 overflow-x-auto lg:flex-col lg:overflow-visible">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === `/${role}` }}
                activeProps={{ className: "bg-brand-gradient text-eco-foreground shadow-soft" }}
                className="flex shrink-0 items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 hidden border-t border-border/60 pt-3 lg:block">
            <p className="px-2 text-sm font-semibold">{user?.name ?? "Guest user"}</p>
            <p className="px-2 text-xs capitalize text-muted-foreground">{user?.role ?? role} account</p>
            <div className="mt-2 flex gap-1">
              <Button asChild variant="ghost" size="sm" className="flex-1 justify-start">
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" /> Site
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="flex-1 justify-start"
                onClick={() => {
                  signOut();
                  navigate({ to: "/login" });
                }}
              >
                <LogOut className="mr-2 h-4 w-4" /> Exit
              </Button>
            </div>
          </div>
        </aside>

        <main className="min-w-0 flex-1 pb-10">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
              <p className="text-sm text-muted-foreground">
                Live smart-city data · updated a few seconds ago
              </p>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button asChild variant="outline" size="sm" className="lg:hidden">
                <Link to="/login">Switch</Link>
              </Button>
            </div>
          </div>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export function StatTile({
  label,
  value,
  hint,
  icon: Icon,
}: {
  label: string;
  value: string;
  hint?: string;
  icon: ComponentType<{ className?: string }>;
}) {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{label}</p>
        <span className="bg-brand-gradient flex h-9 w-9 items-center justify-center rounded-xl text-eco-foreground">
          <Icon className="h-4 w-4" />
        </span>
      </div>
      <p className="mt-3 text-3xl font-bold">{value}</p>
      {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}
