// src/components/CtaSection.js

import Image from "next/image";

export default function CtaSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center items-center">
            <Image
              src="/animation.gif"
              alt="An abstract, calming animation"
              width={100}
              height={100}
              unoptimized={true}
              className="w-36 h-36"
            />
          </div>

          <div className="text-center lg:text-left">
            <blockquote className="font-handwriting text-4xl md:text-5xl text-dark-teal leading-relaxed">
              <p>
                "I am not what happened to me, I am what I choose to become."
              </p>
            </blockquote>
            <cite className="mt-6 block font-serif text-lg text-gray-600 not-italic">
              — Carl Jung
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}
