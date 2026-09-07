import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <section className="surface-hero border-b border-border/60">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <span className="inline-block rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-widest">
          {eyebrow}
        </span>
        <h1 className="mt-5 text-4xl font-bold sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{subtitle}</p>
        {children && <div className="mt-7 flex flex-wrap justify-center gap-3">{children}</div>}
      </div>
    </section>
  );
}
