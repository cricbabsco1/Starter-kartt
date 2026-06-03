import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { MessageCircle, Palette, Code, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Share Your Vision",
    desc: "Tell us about your brand, products, style preferences, and goals. We'll understand your brand DNA.",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    num: "02",
    icon: <Palette className="w-6 h-6" />,
    title: "We Design & Build",
    desc: "Our team creates a conversion-focused, mobile-first website tailored specifically for your fashion brand.",
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    num: "03",
    icon: <Code className="w-6 h-6" />,
    title: "Review & Refine",
    desc: "You review the website and request changes. We refine until you're 100% satisfied with every detail.",
    color: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    num: "04",
    icon: <Rocket className="w-6 h-6" />,
    title: "Launch & Grow",
    desc: "Your premium website goes live. Start converting visitors into buyers and watch your brand grow online.",
    color: "from-gold/20 to-gold/5",
  },
];

function StepDot({ scrollYProgress, index }: { scrollYProgress: MotionValue<number>; index: number }) {
  const dotActive = useTransform(
    scrollYProgress,
    [0.15 + index * 0.14, 0.22 + index * 0.14],
    [0.3, 1]
  );
  const dotScale = useTransform(
    scrollYProgress,
    [0.15 + index * 0.14, 0.22 + index * 0.14],
    [0.8, 1]
  );
  return (
    <motion.div
      style={{ opacity: dotActive, scale: dotScale }}
      className="w-4 h-4 rounded-full bg-gold border-2 border-dark-surface"
    />
  );
}

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Progress line that fills as you scroll
  const lineWidth = useTransform(scrollYProgress, [0.15, 0.7], ["0%", "100%"]);

  return (
    <section className="py-20 md:py-32 bg-dark-surface relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div ref={containerRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            From Idea to{" "}
            <span className="gradient-text font-playfair italic">Launch</span>
            <br />
            in 4 Simple Steps
          </h2>
          <p className="text-dark-muted text-base sm:text-lg max-w-2xl mx-auto">
            A streamlined process designed to get your premium website live as fast as possible.
          </p>
        </motion.div>

        {/* Scroll-driven progress line (desktop only) */}
        <div className="hidden lg:block relative mb-12">
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-dark-border -translate-y-1/2" />
          <motion.div
            className="absolute top-1/2 left-0 h-[2px] bg-gradient-to-r from-gold to-gold-light -translate-y-1/2 rounded-full"
            style={{ width: lineWidth }}
          />
          {/* Step dots */}
          <div className="relative flex justify-between">
            {steps.map((_, i) => (
              <StepDot key={i} scrollYProgress={scrollYProgress} index={i} />
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div className="bg-dark-card border border-dark-border rounded-2xl p-6 md:p-8 h-full hover:border-gold/20 transition-colors duration-500 overflow-hidden">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Step number */}
                  <span className="text-5xl font-black text-dark-border group-hover:text-gold/20 transition-colors duration-500 block mb-4">
                    {step.num}
                  </span>

                  <div className="text-gold mb-4">{step.icon}</div>
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-dark-muted text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
