import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "../hooks/useInView";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView(0.3);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 150, suffix: "+", label: "Brands Served" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 3, suffix: " Days", label: "Avg. Delivery Time" },
  { value: 2, suffix: "x", label: "Avg. Sales Boost" },
];

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const dividerWidth = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark-surface to-dark" />

      {/* Animated top divider */}
      <motion.div
        className="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        style={{ width: dividerWidth }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, type: "spring", stiffness: 120 }}
              className="text-center"
            >
              <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold gradient-text mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-dark-muted text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated bottom divider */}
      <motion.div
        className="absolute bottom-0 right-0 h-[1px] bg-gradient-to-l from-transparent via-gold/40 to-transparent"
        style={{ width: dividerWidth }}
      />
    </section>
  );
}
