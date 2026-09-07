import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { HardHat, Leaf, Shield, User } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useApp, type Role } from "@/lib/app-state";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Log in — EcoSense Smart Waste" },
      { name: "description", content: "Sign in to EcoSense as a citizen, collection worker or municipal admin." },
      { property: "og:title", content: "Log in — EcoSense Smart Waste" },
      { property: "og:description", content: "Role-based access for citizens, workers and city admins." },
    ],
  }),
  component: LoginPage,
});

const roles: { id: Role; label: string; icon: typeof User; desc: string }[] = [
  { id: "citizen", label: "Citizen", icon: User, desc: "Report bins, learn segregation, earn Eco Points." },
  { id: "worker", label: "Worker", icon: HardHat, desc: "Optimised routes, task list and collection proof." },
  { id: "admin", label: "Admin", icon: Shield, desc: "City-wide map, analytics and downloadable reports." },
];

function LoginPage() {
  const { signIn } = useApp();
  const navigate = useNavigate();
  const [role, setRole] = useState<Role>("citizen");
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [name, setName] = useState("Zainullah Shaik");
  const [email, setEmail] = useState("demo@ecosense.city");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    signIn({ name: name || "EcoSense User", email, role });
    toast.success(`Welcome, ${name || "EcoSense User"}!`, { description: `Signed in as ${role}.` });
    navigate({ to: `/${role}` });
  }

  return (
    <div className="surface-hero grid min-h-screen lg:grid-cols-2">
      <div className="hidden flex-col justify-between p-12 lg:flex">
        <Link to="/" className="flex items-center gap-2">
          <span className="bg-brand-gradient flex h-9 w-9 items-center justify-center rounded-xl text-eco-foreground">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold">
            Eco<span className="text-gradient">Sense</span>
          </span>
        </Link>
        <div>
          <h2 className="max-w-md text-4xl font-bold leading-tight">
            One city. One map. <span className="text-gradient">Zero overflowing bins.</span>
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Pick the role you want to explore. Every dashboard is fully interactive with live demo data.
          </p>
        </div>
        <p className="text-xs text-muted-foreground">Demo access — no password required.</p>
      </div>

      <div className="flex items-center justify-center p-4 sm:p-10">
        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass w-full max-w-md rounded-3xl p-7"
        >
          <div className="lg:hidden">
            <Link to="/" className="mb-6 inline-flex items-center gap-2">
              <span className="bg-brand-gradient flex h-8 w-8 items-center justify-center rounded-lg text-eco-foreground">
                <Leaf className="h-4 w-4" />
              </span>
              <span className="font-bold">EcoSense</span>
            </Link>
          </div>

          <h1 className="text-2xl font-bold">{mode === "login" ? "Welcome back" : "Create your account"}</h1>
          <p className="mt-1 text-sm text-muted-foreground">Choose your role to continue.</p>

          <div className="mt-5 grid gap-2">
            {roles.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setRole(r.id)}
                className={cn(
                  "flex items-start gap-3 rounded-xl border border-border p-3 text-left transition-all",
                  role === r.id ? "bg-brand-gradient text-eco-foreground shadow-soft" : "hover:bg-secondary",
                )}
              >
                <r.icon className="mt-0.5 h-5 w-5 shrink-0" />
                <span>
                  <span className="block text-sm font-semibold">{r.label}</span>
                  <span className={cn("block text-xs", role === r.id ? "opacity-90" : "text-muted-foreground")}>
                    {r.desc}
                  </span>
                </span>
              </button>
            ))}
          </div>

          <div className="mt-5 space-y-3">
            <div>
              <Label htmlFor="name">Full name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" defaultValue="ecosense" className="mt-1" />
            </div>
          </div>

          <Button type="submit" size="lg" className="bg-brand-gradient mt-6 w-full text-eco-foreground hover:opacity-90">
            {mode === "login" ? "Log in" : "Sign up"} as {role}
          </Button>

          <div className="mt-4 flex items-center justify-between text-sm">
            <button
              type="button"
              className="text-muted-foreground underline-offset-4 hover:underline"
              onClick={() => setMode(mode === "login" ? "signup" : "login")}
            >
              {mode === "login" ? "Create an account" : "I already have an account"}
            </button>
            <Link to="/" className="text-muted-foreground underline-offset-4 hover:underline">
              Back to site
            </Link>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
