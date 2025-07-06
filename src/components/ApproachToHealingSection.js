// src/components/ApproachToHealingSection.js
import Image from 'next/image';
import TherapyApproachItem from './TherapyApproachItem';


export default function ApproachToHealingSection() {
  const approaches = [
    {
      title: "Christian Cognitive Behavioral Therapy (CBT)",
      description: "Identify and replace unhealthy thinking patterns using CBT techniques infused with biblical truths to restore clarity, hope, and peace.",
      iconElement: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-dark-teal flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>,
      buttonText: "Learn More About Faith-Integrated CBT",
      buttonLink: "#",
      initialOpen: true,
    },
    {
      title: "Healing Prayer & Identity Work",
      description: "Invite God into your story. Through prayer and Scripture, we'll uncover and replace the lies that cloud your view of yourself with His truth.",
      iconElement: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-dark-teal flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>,
      buttonText: "Learn More About This Approach",
      buttonLink: "#",
    },
    {
      title: "Creative Spiritual Exploration",
      description: "Using art, journaling, poetry, and biblical storytelling, Ellie helps you uncover the spiritual meaning woven into your life's challenges.",
      iconElement: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-dark-teal flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>,
      buttonText: "Learn More About This Approach",
      buttonLink: "#",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <span className="inline-block bg-muted-teal/20 text-dark-teal text-sm px-3 py-1 rounded-full mb-6 font-medium">
          Christian Counseling for Individuals | Richmond, VA
        </span>

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
          A Faith-Based Path Toward Wholeness
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 mb-12 max-w-2xl">
          Through biblical wisdom and proven techniques, Ellie helps you overcome inner
          struggles and reconnect with your true identity in Christ.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-start">
          
          {/* Accordion List Column */}
          <div className="space-y-4 lg:order-1">
            {approaches.map((approach, index) => (
              <TherapyApproachItem
                key={index}
                title={approach.title}
                description={approach.description}
                iconElement={approach.iconElement}
                buttonText={approach.buttonText}
                buttonLink={approach.buttonLink}
                initialOpen={approach.initialOpen}
              />
            ))}
          </div>

          {/* Image Column */}
          <div className="relative w-full aspect-square md:aspect-[2/3] lg:max-h-[500px] rounded-xl overflow-hidden shadow-xl lg:order-2">
            <Image
              src="/hand-reaching-sky.jpg"
              alt="Hand reaching towards a sunrise/sunset sky"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}