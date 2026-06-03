import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Mail,
  Phone,
  AtSign,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      <motion.div className="absolute inset-0 grid-pattern pointer-events-none" style={{ y: bgY }} />

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
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Let's Build Your{" "}
            <span className="gradient-text font-playfair italic">Dream Store</span>
          </h2>
          <p className="text-dark-muted text-base sm:text-lg max-w-2xl mx-auto">
            Reach out to us through any channel. We typically respond within 30 minutes during business hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Contact cards */}
          <div className="space-y-4">
            {[
              {
                icon: <MessageCircle className="w-6 h-6" />,
                label: "WhatsApp (Fastest)",
                value: "+91 98180 82449",
                href: "https://wa.me/919818082449?text=Hi%20Starterkart!%20I%20want%20a%20premium%20website%20for%20my%20brand.",
                highlight: true,
              },
              {
                icon: <AtSign className="w-6 h-6" />,
                label: "Instagram",
                value: "@starterkartt",
                href: "https://instagram.com/starterkartt",
                highlight: false,
              },
              {
                icon: <Mail className="w-6 h-6" />,
                label: "Email",
                value: "starterkartt@gmail.com",
                href: "mailto:starterkartt@gmail.com",
                highlight: false,
              },
              {
                icon: <Phone className="w-6 h-6" />,
                label: "Phone",
                value: "+91 98180 82449",
                href: "tel:+919818082449",
                highlight: false,
              },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className={`flex items-center gap-4 p-5 rounded-xl border transition-all duration-300 group ${
                  item.highlight
                    ? "bg-gold/10 border-gold/30 hover:bg-gold/15 hover:border-gold/50"
                    : "bg-dark-card border-dark-border hover:border-gold/20"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                    item.highlight
                      ? "bg-gold/20 text-gold"
                      : "bg-dark-surface text-dark-muted group-hover:text-gold"
                  } transition-colors duration-300`}
                >
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-dark-muted uppercase tracking-wider mb-0.5">
                    {item.label}
                  </p>
                  <p className="font-semibold truncate">{item.value}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-dark-muted group-hover:text-gold group-hover:translate-x-1 transition-all duration-300 shrink-0" />
              </motion.a>
            ))}
          </div>

          {/* Quick enquiry form */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: -5 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-dark-card border border-dark-border rounded-2xl p-6 md:p-8 perspective-container"
          >
            <h3 className="text-xl font-bold mb-6">Quick Enquiry</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                const brand = (form.elements.namedItem("brand") as HTMLInputElement).value;
                const plan = (form.elements.namedItem("plan") as HTMLSelectElement).value;
                const msg = `Hi Starterkart! I'm ${name} from ${brand}. I'm interested in the ${plan}. Let's discuss!`;
                window.open(
                  `https://wa.me/919818082449?text=${encodeURIComponent(msg)}`,
                  "_blank"
                );
              }}
              className="space-y-4"
            >
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label className="text-xs text-dark-muted uppercase tracking-wider mb-1.5 block">
                  Your Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Priya Sharma"
                  className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 text-sm text-white placeholder:text-dark-muted/50 focus:border-gold/50 focus:outline-none transition-colors"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label className="text-xs text-dark-muted uppercase tracking-wider mb-1.5 block">
                  Brand Name
                </label>
                <input
                  name="brand"
                  type="text"
                  required
                  placeholder="e.g. UrbanThreads"
                  className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 text-sm text-white placeholder:text-dark-muted/50 focus:border-gold/50 focus:outline-none transition-colors"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label className="text-xs text-dark-muted uppercase tracking-wider mb-1.5 block">
                  Interested Plan
                </label>
                <select
                  name="plan"
                  className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 text-sm text-white focus:border-gold/50 focus:outline-none transition-colors"
                >
                  <option value="Basic Plan (₹2,999)">Basic Plan — ₹2,999</option>
                  <option value="Growth Plan (₹5,499)">Growth Plan — ₹5,499</option>
                  <option value="Premium Plan (₹6,999)">
                    Premium Plan — ₹6,999
                  </option>
                  <option value="Custom Plan">Custom Requirements</option>
                </select>
              </motion.div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="w-full shimmer-btn text-dark font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 mt-2"
              >
                <MessageCircle className="w-5 h-5" />
                Send via WhatsApp
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
