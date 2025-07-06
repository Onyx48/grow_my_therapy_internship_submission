// src/components/CouplesServiceContent.js
import Image from "next/image";
import TherapyApproachItem from "./TherapyApproachItem";

export default function CouplesServiceContent() {
  const approaches = [
    {
      title: "Effective Communication Strategies",
      description:
        "Learn to truly listen and express yourselves in a way that builds understanding and avoids conflict, grounded in biblical communication principles.",
      iconElement: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-dark-teal flex-shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        </svg>
      ),
      buttonText: "Improve Your Communication",
      buttonLink: "#",
      initialOpen: true,
    },
    {
      title: "Strengthening Intimacy and Trust",
      description:
        "Rebuild emotional and spiritual closeness, fostering a bond rooted in trust, vulnerability, and mutual respect, guided by God's plan for unity.",
      iconElement: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-dark-teal flex-shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
      ),
      buttonText: "Rebuild Connection",
      buttonLink: "#",
    },
    {
      title: "Spiritual Alignment and Growth",
      description:
        "Explore ways to align your spiritual journeys as a couple, growing closer to God together and seeking His wisdom for your relationship challenges.",
      iconElement: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-dark-teal flex-shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ),
      buttonText: "Grow Spiritually Together",
      buttonLink: "#",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <span className="inline-block bg-muted-teal/20 text-dark-teal text-sm px-3 py-1 rounded-full mb-6 font-medium">
          Christian Couples Counseling | Richmond, VA
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
          Building a Resilient, Christ-Centered Partnership
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-12 max-w-2xl">
          Ellie utilizes biblical principles and proven therapeutic techniques
          to help couples overcome challenges and cultivate a deeply connected,
          faith-filled marriage.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
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

          <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-xl lg:order-2">
            <Image
              src="/couple-healing-content.jpg"
              alt="Hands of a couple joined together in comfort or prayer"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
