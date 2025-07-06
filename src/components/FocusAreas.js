// src/components/FocusAreas.js

import Image from "next/image";

export default function FocusAreas({ id }) {
  
  const focusItems = [
    {
      title: "Anxiety & Stress Management",
      description:
        "Learn effective, evidence-based strategies to manage anxiety, reduce stress, and reclaim a sense of calm and control in your daily life.",
      imageUrl: "/placeholder-1.jpg",
      alt: "A calm and serene nature scene representing peace.",
    },
    {
      title: "Relationship Counseling",
      description:
        "Strengthen communication, deepen intimacy, and navigate conflict constructively. For couples and individuals seeking healthier connections.",
      imageUrl: "/placeholder-2.jpg",
      alt: "Two hands clasped together, symbolizing connection.",
    },
    {
      title: "Trauma Recovery",
      description:
        "A safe and compassionate space to process past traumatic experiences, heal emotional wounds, and move forward with resilience and strength.",
      imageUrl: "/placeholder-3.jpg",
      alt: "A single plant growing, symbolizing resilience.",
    },
  ];

  return (
    <section id={id} className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-black tracking-wide text-gray-900">
            Services & Specialties
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          {focusItems.map((item) => (
            <div key={item.title} className="text-center">
              <div className="mx-auto h-48 w-48 relative">
                <Image
                  src={item.imageUrl}
                  alt={item.alt}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="mt-8 text-lg font-semibold leading-7 text-gray-900">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-gray-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
