import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const { scrollYProgress } = useScroll();
  // Slightly grow the button as user scrolls deeper into the page
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.3], [0, 0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <motion.a
      href="https://wa.me/919818082449?text=Hi%20Starterkart!%20I%20want%20a%20premium%20website%20for%20my%20brand."
      target="_blank"
      rel="noopener noreferrer"
      style={{ scale, opacity }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />
      
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 bg-dark-card border border-dark-border text-white text-xs font-medium px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us!
      </span>
    </motion.a>
  );
}
