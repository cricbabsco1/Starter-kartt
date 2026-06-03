import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Founder, UrbanThreads",
    text: "Starterkart completely transformed our online presence. Our customers now trust us more and our sales literally doubled in the first month. The website looks SO premium!",
    stars: 5,
  },
  {
    name: "Arjun Mehta",
    role: "Co-founder, DesiDrip",
    text: "We were running from Instagram DMs. Starterkart gave us a professional store in 3 days. The design quality is insane for this price point. Highly recommend!",
    stars: 5,
  },
  {
    name: "Sneha Reddy",
    role: "Owner, EthnicVibes",
    text: "I was skeptical at first but the results blew me away. The mobile experience is butter smooth and my customers keep complimenting how professional my brand looks now.",
    stars: 5,
  },
  {
    name: "Rahul Verma",
    role: "Founder, StreetKulture",
    text: "Best investment I made for my clothing brand. The team understood exactly what a fashion brand needs. The premium feel of my site makes customers confident to buy.",
    stars: 5,
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax orb
  const orbY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background accent with parallax */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full blur-3xl pointer-events-none"
        style={{ y: orbY }}
      />

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
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Brands That{" "}
            <span className="gradient-text font-playfair italic">Trust Us</span>
          </h2>
          <p className="text-dark-muted text-base sm:text-lg max-w-2xl mx-auto">
            Real feedback from fashion brands who chose Starterkart to build their online presence.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(201,168,108,0.08)", transition: { duration: 0.3 } }}
              className="bg-dark-card border border-dark-border rounded-2xl p-6 md:p-8 hover:border-gold/20 transition-colors duration-500 relative"
            >
              <Quote className="w-8 h-8 text-gold/20 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <motion.div
                    key={si}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + si * 0.08, type: "spring", stiffness: 300 }}
                  >
                    <Star className="w-4 h-4 text-gold fill-gold" />
                  </motion.div>
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-dark font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-dark-muted text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
