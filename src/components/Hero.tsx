import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Star, Zap, Shield, ChevronDown } from "lucide-react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms — everything reacts to scroll
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.6, 0]);
  const mockupY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const mockupRotate = useTransform(scrollYProgress, [0, 0.5], [0, -5]);
  const mockupScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 0.9]);
  const orbOneX = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const orbTwoX = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const badgeScale = useSpring(useTransform(scrollYProgress, [0, 0.2], [1, 0.9]), { stiffness: 100 });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale }}>
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/80 to-dark" />
        <div className="absolute inset-0 grid-pattern" />
      </motion.div>

      {/* Parallax floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl animate-float"
        style={{ x: orbOneX }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/3 rounded-full blur-3xl animate-float"
        style={{ x: orbTwoX, animationDelay: "3s" }}
      />

      {/* Content with scroll-linked fade & translate */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              style={{ scale: badgeScale }}
              className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm text-gold-light font-medium">
                India's #1 Fashion Website Builder
              </span>
            </motion.div>

            {/* Headline — letter-staggered entrance */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
            >
              {["Your Brand", ""].map((line, li) => (
                <motion.span
                  key={li}
                  className="block"
                  initial={{ opacity: 0, y: 40, rotateX: -20 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 + li * 0.12 }}
                >
                  {line}
                </motion.span>
              ))}
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
              >
                Deserves a{" "}
                <span className="gradient-text font-playfair italic">Premium</span>
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.47 }}
              >
                Website.
              </motion.span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base sm:text-lg text-dark-muted max-w-lg mb-8 leading-relaxed"
            >
              We build conversion-focused, mobile-first online stores that make
              small Indian fashion brands look{" "}
              <span className="text-white font-medium">established</span>,{" "}
              <span className="text-white font-medium">trustworthy</span>, and{" "}
              <span className="text-white font-medium">premium</span> — from the first second.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <motion.a
                href="https://wa.me/919818082449?text=Hi%20Starterkart!%20I%20want%20a%20premium%20website%20for%20my%20brand."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(201,168,108,0.3)" }}
                whileTap={{ scale: 0.97 }}
                className="shimmer-btn text-dark font-bold text-base px-8 py-4 rounded-full flex items-center justify-center gap-2 glow-gold"
              >
                Start Your Website — ₹2,999
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.05, borderColor: "rgba(201,168,108,0.5)" }}
                whileTap={{ scale: 0.97 }}
                className="border border-dark-border text-white font-semibold text-base px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300"
              >
                View Plans
              </motion.a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-wrap gap-6"
            >
              {[
                { icon: <Zap className="w-4 h-4" />, text: "3-Day Delivery" },
                { icon: <Shield className="w-4 h-4" />, text: "100% Mobile Optimized" },
                { icon: <Star className="w-4 h-4" />, text: "Premium Designs Only" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 text-xs sm:text-sm text-dark-muted"
                >
                  <span className="text-gold">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right content — Phone Mockup with parallax */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            style={{ y: mockupY, rotateZ: mockupRotate, scale: mockupScale }}
            className="hidden lg:flex justify-center items-center perspective-container"
          >
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-gold/20 via-transparent to-gold/10 rounded-3xl blur-3xl" />
              <img
                src="/images/mockup-phone.png"
                alt="Premium fashion website mockup"
                className="relative w-full max-w-md rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator — fades out on scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{ opacity: scrollIndicatorOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-dark-muted tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-gold" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
    </section>
  );
}
