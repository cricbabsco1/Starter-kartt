import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Stats from "./components/Stats";
import TextReveal from "./components/TextReveal";
import WhyUs from "./components/WhyUs";
import Comparison from "./components/Comparison";
import Services from "./components/Services";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-white font-inter overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Marquee />
      <Stats />
      <TextReveal />
      <WhyUs />
      <Comparison />
      <Services />
      <Process />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
