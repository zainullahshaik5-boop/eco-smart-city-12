import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Bell,
  Bot,
  Camera,
  Gauge,
  Leaf,
  MapPin,
  QrCode,
  Route as RouteIcon,
  ShieldCheck,
  Sparkles,
  Trophy,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/counter";
import { GlassCard, SectionTitle } from "@/components/glass-card";
import { PublicLayout } from "@/components/public-layout";
import { SmartCity } from "@/components/smart-city";
import { faqs, testimonials } from "@/lib/eco-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EcoSense — Keep Our City Clean with AI" },
      {
        name: "description",
        content:
          "EcoSense is an AI-powered smart waste platform: live bin monitoring, overflow prediction, optimised collection routes and citizen rewards.",
      },
      { property: "og:title", content: "EcoSense — Keep Our City Clean with AI" },
      {
        property: "og:description",
        content: "Live smart bin monitoring, AI overflow prediction and optimised collection routes.",
      },
    ],
  }),
  component: Landing,
});

const features = [
  { icon: Gauge, title: "Real-time bin monitoring", text: "Every smart bin streams its fill level so the city always knows what needs attention.", to: "/features" },
  { icon: Bot, title: "AI sorting assistant", text: "Snap a photo of any waste item and get the right bin in seconds.", to: "/sort-assistant" },
  { icon: Sparkles, title: "Overflow prediction", text: "Forecasts tell crews which bins will fill next, hours before they do.", to: "/features" },
  { icon: RouteIcon, title: "Smart route optimiser", text: "Shortest collection path per shift — less fuel, less time, less CO₂.", to: "/worker/route" },
  { icon: Trophy, title: "Eco Score & badges", text: "Citizens earn points and badges for reporting and recycling.", to: "/leaderboard" },
  { icon: QrCode, title: "QR instant reporting", text: "Scan the code on a bin to report an issue without typing an address.", to: "/scan" },
  { icon: Bell, title: "Emergency alerts", text: "Overflow and illegal dumping alerts reach the right crew instantly.", to: "/features" },
  { icon: ShieldCheck, title: "Role-based access", text: "Separate, secure spaces for citizens, workers and municipal admins.", to: "/login" },
];

const steps = [
  { icon: MapPin, title: "Sense", text: "Smart bins measure fill level, weight and temperature around the clock." },
  { icon: Bot, title: "Predict", text: "AI forecasts overflow risk and flags high-waste hotspots on the city map." },
  { icon: RouteIcon, title: "Optimise", text: "Workers receive the shortest route covering only the bins that need it." },
  { icon: Leaf, title: "Reward", text: "Citizens earn Eco Points, and the city tracks CO₂ saved every single day." },
];

function Landing() {
  return (
    <PublicLayout>
      <section className="surface-hero relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="h-3.5 w-3.5" /> AI Smart City Platform
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-6xl">
              Keep Our City <span className="text-gradient">Clean with AI</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              EcoSense connects smart bins, collection crews and citizens on one live map — predicting
              overflows before they happen and optimising every collection trip.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-brand-gradient text-eco-foreground shadow-soft hover:opacity-90">
                <Link to="/login">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/how-it-works">See how it works</Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link to="/sort-assistant">
                  <Camera className="mr-2 h-4 w-4" /> Try AI sorting
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="glass float-slow rounded-3xl p-6"
          >
            <SmartCity />
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              {[
                { label: "Bins online", value: "1,248" },
                { label: "Overflow risk", value: "12" },
                { label: "CO₂ saved today", value: "418 kg" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-secondary/70 p-3">
                  <p className="text-lg font-bold">{s.value}</p>
                  <p className="text-[11px] text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionTitle
          eyebrow="Features"
          title="Everything a clean city needs"
          subtitle="From sensing to sorting to reporting — one connected platform for the whole waste cycle."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <GlassCard key={f.title} delay={i * 0.05}>
              <Link to={f.to} className="block">
                <span className="bg-brand-gradient flex h-11 w-11 items-center justify-center rounded-xl text-eco-foreground">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
                <span className="mt-3 inline-flex items-center text-sm font-medium text-primary">
                  Explore <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </span>
              </Link>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {[
            { to: 1248, suffix: "", label: "Smart bins connected" },
            { to: 38650, suffix: "", label: "Citizen reports resolved" },
            { to: 32, suffix: "%", label: "Fuel saved per route" },
            { to: 91400, suffix: " kg", label: "CO₂ emissions avoided" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-gradient text-4xl font-bold">
                <Counter to={s.to} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionTitle eyebrow="How it works" title="Four steps to a cleaner street" />
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {steps.map((s, i) => (
            <GlassCard key={s.title} delay={i * 0.08}>
              <span className="text-xs font-bold text-muted-foreground">STEP {i + 1}</span>
              <span className="bg-brand-gradient mt-3 flex h-11 w-11 items-center justify-center rounded-xl text-eco-foreground">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </GlassCard>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link to="/how-it-works">Read the full walkthrough</Link>
          </Button>
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle eyebrow="Testimonials" title="Trusted across the city" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <GlassCard key={t.name} delay={i * 0.08}>
                <p className="text-sm leading-relaxed">“{t.quote}”</p>
                <div className="mt-5">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <SectionTitle eyebrow="FAQ" title="Questions, answered" />
        <Accordion type="single" collapsible className="glass mt-8 rounded-2xl px-5">
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-6 text-center">
          <Button asChild variant="outline">
            <Link to="/faq">See all questions</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <div className="glass overflow-hidden rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to clean up your city?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Join citizens, crews and municipal teams already running on EcoSense.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-brand-gradient text-eco-foreground hover:opacity-90">
              <Link to="/login">Create your account</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Talk to our team</Link>
            </Button>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
