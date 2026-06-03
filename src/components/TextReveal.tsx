import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const sentence =
  "Perception changes buying behavior. A customer should visit your website and instantly feel your brand is serious, modern, and worth buying from.";

export default function TextReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.4"],
  });

  const words = sentence.split(" ");

  return (
    <section ref={containerRef} className="py-24 md:py-40 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gold text-sm font-semibold tracking-widest uppercase mb-8 text-center"
        >
          Our Core Belief
        </motion.p>

        {/* Word-by-word scroll reveal */}
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-center flex flex-wrap justify-center gap-x-[0.35em] gap-y-1">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </section>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [8, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className="inline-block transition-colors duration-200"
    >
      {children}
    </motion.span>
  );
}
