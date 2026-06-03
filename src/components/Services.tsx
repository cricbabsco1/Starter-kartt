import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ShoppingBag,
  Paintbrush,
  MonitorSmartphone,
  Headphones,
  Package,
  MessageSquare,
} from "lucide-react";

const services = [
  {
    icon: <ShoppingBag className="w-7 h-7" />,
    title: "E-Commerce Website Design",
    desc: "Custom-built online stores optimized for fashion brands with product catalogs, smooth browsing, and trust-building layouts.",
  },
  {
    icon: <Paintbrush className="w-7 h-7" />,
    title: "Premium Brand Identity",
    desc: "We craft a visual identity through your website that positions your brand as premium and established in the market.",
  },
  {
    icon: <MonitorSmartphone className="w-7 h-7" />,
    title: "Mobile Optimization",
    desc: "Every website is built mobile-first — fast loading, thumb-friendly, and designed for the way Indian consumers actually shop.",
  },
  {
    icon: <Package className="w-7 h-7" />,
    title: "Product Upload & Setup",
    desc: "We handle uploading your products with clean presentation — images, pricing, descriptions, and categorization included.",
  },
  {
    icon: <MessageSquare className="w-7 h-7" />,
    title: "WhatsApp Integration",
    desc: "Direct WhatsApp ordering and contact integration so your customers can reach you instantly — boosting conversions.",
  },
  {
    icon: <Headphones className="w-7 h-7" />,
    title: "Ongoing Support",
    desc: "Post-launch support with requested changes, updates, and guidance to keep your website performing at its best.",
  },
];

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 70, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden bg-dark-card border border-dark-border rounded-2xl p-6 md:p-8 hover:border-gold/30 transition-colors duration-500"
    >
      {/* Animated glow blob on hover */}
      <motion.div
        className="absolute -top-12 -right-12 w-40 h-40 bg-gold/8 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: hovered ? 1.5 : 0.5, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />

      <div className="relative z-10">
        <motion.div
          animate={{ rotate: hovered ? 10 : 0, scale: hovered ? 1.1 : 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-gold mb-5"
        >
          {service.icon}
        </motion.div>
        <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
        <p className="text-dark-muted text-sm leading-relaxed">
          {service.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section id="services" ref={sectionRef} className="py-20 md:py-32 bg-dark-surface relative overflow-hidden">
      <motion.div className="absolute inset-0 grid-pattern" style={{ y: bgY }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Everything Your Brand Needs
            <br />
            <span className="gradient-text font-playfair italic">To Win Online</span>
          </h2>
          <p className="text-dark-muted text-base sm:text-lg max-w-2xl mx-auto">
            From design to deployment, we handle everything so you can focus on what matters — your fashion brand.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
