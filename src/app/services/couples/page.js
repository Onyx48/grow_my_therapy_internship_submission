// src/app/services/couples/page.js

import ServiceHero from "../../../components/ServiceHero";
import CouplesApproachToHealingSection from "../../../components/CouplesApproachToHealingSection"; 
import TestimonialsSection from "../../../components/TestimonialsSection";
import CouplesServiceContent from "../../../components/CouplesServiceContent";

export const metadata = {
  title: "Christian Couples Counseling - Ellie Shumaker",
  description:
    "Strengthen your bond and grow closer to God through Christian couples counseling in Richmond, VA.",
};

export default function CouplesServicesPage() {
  return (
    <main>
      
      <ServiceHero
        smallText="Christian Couples Counseling in Richmond, VA"
        title="Strengthen Your Marriage & Faith in Richmond, VA"
        subtitle="Heal Your Relationship, Grow Closer to God Together in Richmond."
        backgroundImage="/couples-counseling.jpg" 
      />

      
      <CouplesApproachToHealingSection />
      <CouplesServiceContent />

     
      <TestimonialsSection />
    </main>
  );
}
