import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-surface border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-dark" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                Starter<span className="gradient-text">kart</span>
              </span>
            </a>
            <p className="text-dark-muted text-sm leading-relaxed max-w-sm mb-6">
              Premium website design service built exclusively for clothing
              brands, fashion startups, and Instagram-based businesses in India.
            </p>
            <p className="text-dark-muted text-sm">
              Clean, premium, conversion-focused websites only.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Why Us", href: "#why-us" },
                { label: "Services", href: "#services" },
                { label: "Pricing", href: "#pricing" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-dark-muted text-sm hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-3 text-dark-muted text-sm">
              <li>
                <a
                  href="https://wa.me/919818082449"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  WhatsApp: +91 98180 82449
                </a>
              </li>
              <li>
                <a
                  href="mailto:starterkartt@gmail.com"
                  className="hover:text-gold transition-colors"
                >
                  starterkartt@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/starterkartt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  @starterkartt
                </a>
              </li>
              <li>
                <a
                  href="tel:+919818082449"
                  className="hover:text-gold transition-colors"
                >
                  +91 98180 82449
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-dark-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-dark-muted text-xs">
            © {new Date().getFullYear()} Starterkart. All rights reserved.
          </p>
          <p className="text-dark-muted text-xs flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for
            Indian Fashion Brands
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
