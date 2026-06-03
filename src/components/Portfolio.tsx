import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    img: "/images/portfolio-1.jpg",
    title: "Luxury Streetwear Brand",
    category: "Premium E-Commerce",
  },
  {
    img: "/images/portfolio-2.jpg",
    title: "Modern Fashion Label",
    category: "Brand Website",
  },
  {
    img: "/images/portfolio-3.jpg",
    title: "Ethnic Wear Collection",
    category: "Online Store",
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Subtle horizontal shift on cards based on scroll
  const card1X = useTransform(scrollYProgress, [0, 1], [60, -30]);
  const card2X = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const card3X = useTransform(scrollYProgress, [0, 1], [-60, 30]);
  const cardXValues = [card1X, card2X, card3X];

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 md:py-32 bg-dark-surface relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
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
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Designs That{" "}
            <span className="gradient-text font-playfair italic">Convert</span>
          </h2>
          <p className="text-dark-muted text-base sm:text-lg max-w-2xl mx-auto">
            Every website we build is a conversion machine — designed to make your
            brand look established and drive real sales.
          </p>
        </motion.div>

        {/* Portfolio grid with parallax offset */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              style={{ x: cardXValues[i] }}
              initial={{ opacity: 0, y: 80, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="group relative rounded-2xl overflow-hidden border border-dark-border hover:border-gold/30 transition-colors duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <motion.img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.7 }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-gold text-xs font-semibold tracking-wider uppercase mb-2 block"
                >
                  {project.category}
                </motion.span>
                <h3 className="text-lg font-bold mb-3">{project.title}</h3>
                <div className="flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
