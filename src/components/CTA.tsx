import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const orbScale = useTransform(scrollYProgress, [0, 1], [0.5, 1.2]);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-dark-surface relative overflow-hidden">
      {/* Background effects with scroll parallax */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
        style={{ scale: orbScale }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/3 rounded-full blur-3xl"
        style={{ scale: orbScale }}
      />
      <div className="absolute inset-0 grid-pattern" />

      <motion.div
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ scale, opacity }}
      >
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-8"
          >
            <MessageCircle className="w-4 h-4 text-gold" />
            <span className="text-sm text-gold-light font-medium">
              Ready to Transform Your Brand?
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Stop Losing Customers
            <br />
            to a{" "}
            <span className="gradient-text font-playfair italic">Bad Website</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-dark-muted text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Every day without a premium website, your brand is losing potential
            customers to competitors who look more professional. Let's change that
            today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="https://wa.me/919818082449?text=Hi%20Starterkart!%20I%20want%20a%20premium%20website%20for%20my%20fashion%20brand.%20Let's%20discuss!"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(201,168,108,0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="shimmer-btn text-dark font-bold text-base px-10 py-4 rounded-full flex items-center justify-center gap-2 glow-gold"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </motion.a>
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="border border-dark-border text-white font-semibold text-base px-10 py-4 rounded-full flex items-center justify-center gap-2 hover:border-gold/50 hover:bg-gold/5 transition-all duration-300"
            >
              View Pricing
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Urgency */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-sm text-dark-muted"
          >
            ⚡ Limited slots available this month — Get started before they fill up
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
