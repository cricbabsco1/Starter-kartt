import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Eye,
  Smartphone,
  Palette,
  Rocket,
  Heart,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Perception = Sales",
    desc: "Customers buy from brands that look premium. We make your brand feel serious, modern, and trustworthy from the very first second.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile-First Always",
    desc: "90%+ of Indian fashion shoppers browse on mobile. Every pixel is designed for thumb-friendly, seamless mobile shopping.",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Fashion-Specific Design",
    desc: "We don't build generic websites. Every design element is tailored for fashion, clothing, and lifestyle brands.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Lightning Fast Delivery",
    desc: "Get your premium website ready in as fast as 3 days. No delays, no excuses — just results.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Built for Indian Brands",
    desc: "We understand Indian fashion consumers, Instagram shopping culture, and what makes them click 'Buy Now'.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Conversion Focused",
    desc: "Every layout, button, and section is designed to maximize trust and conversions — not just look pretty.",
  },
];

function TiltCard({ feature, index }: { feature: (typeof features)[0]; index: number }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setRotateX((y - 0.5) * -12);
    setRotateY((x - 0.5) * 12);
    setGlarePos({ x: x * 100, y: y * 100 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos({ x: 50, y: 50 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="perspective-container"
    >
      <motion.div
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group relative bg-dark-card border border-dark-border rounded-2xl p-6 md:p-8 hover:border-gold/30 transition-colors duration-500 overflow-hidden"
      >
        {/* Glare effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(201,168,108,0.08) 0%, transparent 60%)`,
          }}
        />

        <div className="relative z-10">
          <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-5 group-hover:bg-gold/20 transition-colors duration-300">
            {feature.icon}
          </div>
          <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
          <p className="text-dark-muted text-sm leading-relaxed">
            {feature.desc}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const headingY = useTransform(scrollYProgress, [0, 0.4], [60, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section id="why-us" ref={sectionRef} className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with scroll parallax */}
        <motion.div
          style={{ y: headingY, opacity: headingOpacity }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
            Why Starterkart
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            We Don't Build Websites.
            <br />
            <span className="gradient-text font-playfair italic">We Build Brands.</span>
          </h2>
          <p className="text-dark-muted text-base sm:text-lg max-w-2xl mx-auto">
            A customer should visit your website and instantly feel your brand is
            serious, modern, and worth buying from.
          </p>
        </motion.div>

        {/* Features grid with 3D tilt */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <TiltCard key={i} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
