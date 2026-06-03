import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { X, Check } from "lucide-react";

const withoutItems = [
  "Generic template that looks like everyone else",
  "Slow, clunky mobile experience",
  "Customers don't trust your brand",
  "Low conversions, high bounce rate",
  "Looks unprofessional & unestablished",
  "Losing sales to competitors daily",
];

const withItems = [
  "Custom design that screams premium brand",
  "Butter-smooth mobile shopping experience",
  "Instant trust from the first second",
  "High conversions, loyal customers",
  "Looks established & worth buying from",
  "Winning customers from competitors",
];

export default function Comparison() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const leftX = useTransform(scrollYProgress, [0, 0.8], [-120, 0]);
  const rightX = useTransform(scrollYProgress, [0, 0.8], [120, 0]);
  const leftOpacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
  const rightOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const headingScale = useTransform(scrollYProgress, [0, 0.4], [0.85, 1]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          style={{ scale: headingScale, opacity: headingOpacity }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
            The Difference
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Generic Website vs{" "}
            <span className="gradient-text font-playfair italic">Starterkart</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Without — slides in from left */}
          <motion.div
            style={{ x: leftX, opacity: leftOpacity }}
            className="bg-dark-card border border-red-500/20 rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                <X className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-red-400">
                Without Starterkart
              </h3>
            </div>
            <ul className="space-y-4">
              {withoutItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3 text-sm text-gray-400"
                >
                  <X className="w-4 h-4 mt-0.5 text-red-500/60 shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* With — slides in from right */}
          <motion.div
            style={{ x: rightX, opacity: rightOpacity }}
            className="bg-dark-card border border-gold/30 rounded-2xl p-6 md:p-8 glow-gold"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                <Check className="w-5 h-5 text-gold" />
              </div>
              <h3 className="text-lg font-bold text-gold-light">
                With Starterkart
              </h3>
            </div>
            <ul className="space-y-4">
              {withItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3 text-sm text-gray-300"
                >
                  <Check className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
