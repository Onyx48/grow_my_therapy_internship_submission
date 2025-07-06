// src/components/TestimonialsSection.js
import Image from 'next/image';
import Link from 'next/link';
import ReviewCarousel from './ReviewCarousel';

export default function TestimonialsSection({ id }) { 
  const featuredLogos = [
    { src: "/psychology-today-verified.png", alt: "Verified by Psychology Today", width: 120, height: 40 },
    { src: "/theravive-logo.jpg", alt: "Theravive Logo", width: 100, height: 40 },
    { src: "/christian-counselor-directory-logo.png", alt: "Christian Counselor Directory Logo", width: 150, height: 40 },
    { src: "/therapist-com-logo.png", alt: "Therapist.com Logo", width: 120, height: 40 },
  ];

  return (
    <section id={id} className="bg-sky-50 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center lg:text-left mb-20">
          <span className="inline-block bg-yellow-100 text-yellow-900 text-sm px-3 py-1 rounded-full mb-4 font-medium">
            Client Experiences | Los Angeles, CA
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            What Former Clients Say
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 max-w-2xl mx-auto lg:mx-0">
            Real experiences from individuals who have found healing and growth through
            our work together.
          </p>
        </div>

        <div className="mb-20">
          <ReviewCarousel />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center mb-20">
          <div className="flex justify-center lg:justify-start">
           
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-teal-500">
              <Image
                src="/headshot.jpg"
                alt="Dr. Serena Blake, PsyD"
                fill
                
                sizes="(max-width: 640px) 288px, 320px"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-dark-teal/90 text-white p-4">
                <p className="font-semibold text-lg">Dr. Serena Blake</p>
                <p className="text-sm text-white/80">PsyD</p>
                <div className="flex items-center gap-2 text-xs mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  <span>Top Rated | 8+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="inline-block bg-yellow-100 text-yellow-900 text-sm px-3 py-1 rounded-full mb-4 font-medium">
              Psychologist for Individuals in Los Angeles, CA
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Your Journey to Inner Peace Starts Here
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              I'm <strong className="font-semibold text-gray-900">Dr. Serena Blake, PsyD.</strong> I blend evidence-based approaches like CBT and mindfulness with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              I believe your story matters. And I believe that healing is not only possible, but achievable. I would be honored to walk with you on this journey.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-dark-teal text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2s-5 2-8 5-2 8 0 10 7 2 10 0 5-7 5-10-2-8-5-10z"></path></svg>
              <span>Start Counseling Today</span>
            </Link>
          </div>
        </div>

        <div className="text-center pt-20 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-8">Featured In</h3>
          <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-16">
            {featuredLogos.map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}