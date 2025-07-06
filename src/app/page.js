// src/app/page.js

import HeroSection from "../components/HeroSection";
import StatsBar from "../components/StatsBar";
import HowIHelpSection from "../components/HowIHelpSection";
import AboutSection from "../components/AboutSection";
import QuoteSection from "../components/QuoteSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FocusAreas from "../components/FocusAreas";
import RatesSection from "../components/RatesSection";
import FaqSection from "../components/FaqSection";
import ContactSection from "../components/ContactSection";
import CtaSection from "../components/CtaSection";
import EngagementModal from "../components/EngagementModal";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsBar />
      <HowIHelpSection />
      <AboutSection id="about" />
      <QuoteSection />
      <TestimonialsSection id="testimonials" />
      <FocusAreas id="focus-areas" /> 
      <RatesSection />
      <FaqSection id="faq" />
      <ContactSection id="contact" />
      <CtaSection />
      <EngagementModal />
    </main>
  );
}