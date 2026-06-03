import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

const links = [
  { label: "Why Us", href: "#why-us" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();

  // Auto-hide navbar on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 50);
    if (latest > prev && latest > 300 && !mobileOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Track active section
  const handleScroll = useCallback(() => {
    const sections = links.map((l) => l.href.replace("#", ""));
    let current = "";
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 200) current = id;
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-dark/80 backdrop-blur-xl border-b border-dark-border shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center"
              >
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-dark" />
              </motion.div>
              <span className="text-lg md:text-xl font-bold tracking-tight">
                Starter<span className="gradient-text">kart</span>
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {links.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`text-sm relative group transition-colors duration-300 ${
                      isActive ? "text-gold" : "text-dark-muted hover:text-gold"
                    }`}
                  >
                    {link.label}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-[2px] bg-gold rounded-full"
                      initial={false}
                      animate={{ width: isActive ? "100%" : "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                );
              })}
            </div>

            {/* CTA */}
            <div className="hidden lg:block">
              <motion.a
                href="https://wa.me/919818082449?text=Hi%20Starterkart!%20I%20want%20a%20premium%20website%20for%20my%20brand."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="shimmer-btn text-dark font-semibold text-sm px-6 py-2.5 rounded-full inline-block"
              >
                Get Started →
              </motion.a>
            </div>

            {/* Mobile Toggle */}
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.9 }}
              className="lg:hidden p-2 text-white"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark/95 backdrop-blur-xl pt-20 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="text-2xl font-semibold text-white hover:text-gold transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="https://wa.me/919818082449?text=Hi%20Starterkart!%20I%20want%20a%20premium%20website%20for%20my%20brand."
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="shimmer-btn text-dark font-semibold text-lg px-8 py-4 rounded-full text-center mt-4 inline-block"
              >
                Get Started on WhatsApp →
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
