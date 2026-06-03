import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Who is Starterkart for?",
    a: "Starterkart is built exclusively for clothing brands, fashion startups, and Instagram-based businesses in India. If you sell fashion products and want a premium online presence, we're for you.",
  },
  {
    q: "How fast will my website be ready?",
    a: "Depending on your plan, your website can be ready in as fast as 3 days (Premium Plan). Basic Plan delivers in 4 days and Growth Plan in 5 days.",
  },
  {
    q: "Will my website work on mobile?",
    a: "Absolutely! Every website we build is mobile-first. Since 90%+ of Indian shoppers browse on mobile, we ensure a flawless mobile experience across all devices.",
  },
  {
    q: "Can I request changes after delivery?",
    a: "Yes! Every plan includes requested changes — from 10 changes in Basic to 25 in Premium. We want you to be 100% satisfied with your website.",
  },
  {
    q: "Do you handle product uploading?",
    a: "Yes, we upload your products with proper images, descriptions, and pricing. Product upload support ranges from 20-40 products (Basic) to 70-120 products (Premium).",
  },
  {
    q: "Is there ongoing support after launch?",
    a: "Our Premium Plan includes 3 months of post-launch support. For other plans, we offer continued support packages that you can add on.",
  },
  {
    q: "What makes Starterkart different from other web designers?",
    a: "We specialize exclusively in fashion brands. Every design decision is made to maximize trust and conversions for clothing businesses — not generic templates.",
  },
  {
    q: "Can I get a custom quotation?",
    a: "Absolutely! If you have specific requirements beyond our standard plans, reach out to us and we'll create a custom quotation tailored to your needs.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Got{" "}
            <span className="gradient-text font-playfair italic">Questions?</span>
          </h2>
          <p className="text-dark-muted text-base sm:text-lg max-w-2xl mx-auto">
            Everything you need to know about working with Starterkart.
          </p>
        </motion.div>

        {/* FAQ items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                layout
                className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-gold/30 bg-dark-card glow-gold"
                    : "border-dark-border bg-dark-card/50 hover:border-dark-muted/30"
                }`}
              >
                <motion.button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  whileTap={{ scale: 0.995 }}
                >
                  <span className="font-semibold text-sm sm:text-base pr-4">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-gold" />
                    ) : (
                      <Plus className="w-5 h-5 text-dark-muted" />
                    )}
                  </motion.div>
                </motion.button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <p className="px-6 pb-5 text-dark-muted text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
