import { motion } from "motion/react";
import { bins as allBins, statusOf, type Bin } from "@/lib/eco-data";
import { cn } from "@/lib/utils";

const fillColor: Record<string, string> = {
  empty: "bg-eco",
  half: "bg-warn",
  full: "bg-danger",
};

export function CityMap({
  bins = allBins,
  onSelect,
  selectedId,
  showRoute = false,
  className,
}: {
  bins?: Bin[];
  onSelect?: (bin: Bin) => void;
  selectedId?: string;
  showRoute?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-secondary/60",
        className,
      )}
    >
      {/* street grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "8% 12%",
        }}
      />
      <div className="surface-hero absolute inset-0" />

      {showRoute && (
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.polyline
            points="18,22 30,62 42,30 63,76 88,68"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="0.7"
            strokeDasharray="3 2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      )}

      {bins.map((bin, i) => {
        const status = statusOf(bin.fill);
        const active = selectedId === bin.id;
        return (
          <button
            key={bin.id}
            type="button"
            onClick={() => onSelect?.(bin)}
            aria-label={`${bin.name}, ${bin.fill}% full`}
            className="absolute -translate-x-1/2 -translate-y-1/2 focus-visible:outline-none"
            style={{ left: `${bin.x}%`, top: `${bin.y}%` }}
          >
            <span className="relative flex h-5 w-5 items-center justify-center">
              <span
                className={cn("pulse-ring absolute inline-flex h-full w-full rounded-full", fillColor[status])}
                style={{ animationDelay: `${i * 0.25}s` }}
              />
              <span
                className={cn(
                  "relative inline-flex h-3.5 w-3.5 rounded-full ring-2 ring-background transition-transform",
                  fillColor[status],
                  active && "scale-150 ring-4",
                )}
              />
            </span>
          </button>
        );
      })}

      <div className="glass absolute bottom-3 left-3 flex items-center gap-3 rounded-xl px-3 py-2 text-xs font-medium">
        <span className="flex items-center gap-1.5">
          <i className="h-2.5 w-2.5 rounded-full bg-eco" /> Empty
        </span>
        <span className="flex items-center gap-1.5">
          <i className="h-2.5 w-2.5 rounded-full bg-warn" /> Half full
        </span>
        <span className="flex items-center gap-1.5">
          <i className="h-2.5 w-2.5 rounded-full bg-danger" /> Full
        </span>
      </div>
    </div>
  );
}
