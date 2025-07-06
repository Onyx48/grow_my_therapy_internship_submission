// src/app/services/individual/page.js

import ServiceHero from "../../../components/ServiceHero";
import IndividualServiceContent from "../../../components/IndividualServiceContent";
import ApproachToHealingSection from "../../../components/ApproachToHealingSection";
import TestimonialsSection from "../../../components/TestimonialsSection";
export const metadata = {
  title: "Christian Individual Counseling - Ellie Shumaker",
  description:
    "Faith-Based Therapy for Anxiety, Identity & Inner Healing in Richmond, VA. Discover peace, purpose, and God's truth.",
};

export default function IndividualServicesPage() {
  return (
    <main>
      <ServiceHero
        smallText="Christian Individual Counseling in Richmond, VA"
        title="Faith-Based Therapy for Anxiety, Identity & Inner Healing in Richmond, VA"
        subtitle="Discover Peace, Purpose, and God's Truth in Richmond, VA."
        backgroundImage="/individual-counseling.jpg"
      />
      <IndividualServiceContent />
      <ApproachToHealingSection />
      <TestimonialsSection />
    </main>
  );
}
