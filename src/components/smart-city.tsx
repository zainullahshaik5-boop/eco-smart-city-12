import { motion } from "motion/react";

const buildings = [
  { x: 10, w: 46, h: 120, delay: 0 },
  { x: 64, w: 58, h: 180, delay: 0.1 },
  { x: 130, w: 40, h: 96, delay: 0.2 },
  { x: 178, w: 66, h: 210, delay: 0.15 },
  { x: 252, w: 44, h: 140, delay: 0.25 },
  { x: 304, w: 54, h: 170, delay: 0.3 },
];

export function SmartCity() {
  return (
    <div className="relative w-full">
      <svg viewBox="0 0 380 280" className="h-auto w-full" role="img" aria-label="Animated smart city illustration">
        <defs>
          <linearGradient id="eco-b" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.85" />
            <stop offset="100%" stopColor="var(--color-eco)" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="eco-g" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--color-eco)" />
            <stop offset="100%" stopColor="var(--color-accent)" />
          </linearGradient>
        </defs>

        {buildings.map((b) => (
          <motion.rect
            key={b.x}
            x={b.x}
            width={b.w}
            rx="6"
            initial={{ height: 0, y: 230 }}
            animate={{ height: b.h, y: 230 - b.h }}
            transition={{ duration: 1, delay: b.delay, ease: "easeOut" }}
            fill="url(#eco-b)"
          />
        ))}

        {buildings.map((b) =>
          Array.from({ length: 4 }).map((_, r) => (
            <motion.circle
              key={`${b.x}-${r}`}
              cx={b.x + b.w / 2}
              cy={230 - b.h + 22 + r * 26}
              r="3"
              fill="var(--color-background)"
              initial={{ opacity: 0.2 }}
              animate={{ opacity: [0.2, 1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: (b.delay + r) * 0.4 }}
            />
          )),
        )}

        <rect x="0" y="230" width="380" height="8" rx="4" fill="url(#eco-g)" opacity="0.5" />

        <motion.g
          initial={{ x: -60 }}
          animate={{ x: 320 }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        >
          <rect x="0" y="244" width="46" height="20" rx="5" fill="url(#eco-g)" />
          <circle cx="12" cy="266" r="5" fill="var(--color-foreground)" opacity="0.7" />
          <circle cx="36" cy="266" r="5" fill="var(--color-foreground)" opacity="0.7" />
        </motion.g>

        {[
          { cx: 40, cy: 218, c: "var(--color-eco)" },
          { cx: 160, cy: 218, c: "var(--color-warn)" },
          { cx: 290, cy: 218, c: "var(--color-danger)" },
        ].map((bin, i) => (
          <g key={bin.cx}>
            <motion.circle
              cx={bin.cx}
              cy={bin.cy}
              r="10"
              fill={bin.c}
              opacity="0.35"
              animate={{ r: [8, 20], opacity: [0.4, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.6 }}
            />
            <rect x={bin.cx - 7} y={bin.cy - 9} width="14" height="18" rx="3" fill={bin.c} />
          </g>
        ))}
      </svg>
    </div>
  );
}
