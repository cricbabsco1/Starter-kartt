import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Marquee() {
  const items = [
    "CONVERSION-FOCUSED",
    "MOBILE-FIRST",
    "PREMIUM DESIGN",
    "FASHION BRANDS",
    "INSTAGRAM STORES",
    "CLOTHING BRANDS",
    "FAST DELIVERY",
    "TRUSTED BY BRANDS",
  ];

  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // First row moves right based on scroll, second row moves left
  const x1 = useTransform(scrollYProgress, [0, 1], ["-10%", "5%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["5%", "-10%"]);

  return (
    <section ref={ref} className="py-8 border-y border-dark-border bg-dark-surface overflow-hidden">
      {/* Row 1 — scrolls right */}
      <motion.div
        style={{ x: x1 }}
        className="flex whitespace-nowrap mb-4"
      >
        <div className="flex animate-ticker">
          {[...items, ...items, ...items].map((item, i) => (
            <span
              key={`a-${i}`}
              className="mx-8 text-sm font-medium tracking-widest text-dark-muted uppercase flex items-center gap-4"
            >
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Row 2 — scrolls left (reverse) */}
      <motion.div
        style={{ x: x2 }}
        className="flex whitespace-nowrap"
      >
        <div className="flex animate-ticker" style={{ animationDirection: "reverse", animationDuration: "40s" }}>
          {[...items.reverse(), ...items, ...items].map((item, i) => (
            <span
              key={`b-${i}`}
              className="mx-8 text-xs font-medium tracking-widest text-dark-border uppercase flex items-center gap-4"
            >
              <span className="w-1 h-1 bg-gold/30 rounded-full" />
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
