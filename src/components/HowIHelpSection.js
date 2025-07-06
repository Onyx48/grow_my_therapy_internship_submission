// src/components/HowIHelpSection.js

import Image from "next/image";
import Link from "next/link";

export default function HowIHelpSection() {
  return (
    <section className="relative bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif text-dark-teal tracking-tight mb-16">
          How I Help
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div
            className="border border-muted-teal rounded-xl shadow-lg overflow-hidden bg-muted-teal/10
                        transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
          >
            <div className="relative w-full aspect-video">
              <Image
                src="/individual-counseling.jpg"
                alt="Woman in prayer or quiet reflection"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-dark-teal flex flex-col justify-between h-auto">
              <div>
                <h3 className="text-2xl font-bold mb-3">
                  Christian Individual Counseling in Richmond, VA
                </h3>
                <p className="text-gray-700 text-lg leading-normal mb-6">
                  Discover Peace, Purpose, and God's Truth in Richmond, VA.
                </p>
              </div>
              <Link
                href="/services/individual"
                className="inline-block w-full text-center border border-dark-teal text-dark-teal font-semibold py-3 rounded-md hover:bg-dark-teal hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div
            className="border border-muted-teal rounded-xl shadow-lg overflow-hidden bg-muted-teal/10
                        transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
          >
            <div className="relative w-full aspect-video">
              <Image
                src="/couples-counseling.jpg"
                alt="Couple smiling and talking closely"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-dark-teal flex flex-col justify-between h-auto">
              <div>
                <h3 className="text-2xl font-bold mb-3">
                  Christian Couples Counseling in Richmond, VA
                </h3>
                <p className="text-gray-700 text-lg leading-normal mb-6">
                  Heal Your Relationship, Grow Closer to God Together in
                  Richmond.
                </p>
              </div>
              <Link
                href="/services/couples"
                className="inline-block w-full text-center border border-dark-teal text-dark-teal font-semibold py-3 rounded-md hover:bg-dark-teal hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
