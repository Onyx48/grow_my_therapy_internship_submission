// src/components/QuoteSection.js

export default function QuoteSection() {
  return (
    <section className="bg-natural-beige py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <h2 className="font-serif text-4xl md:text-5xl text-gray-800 tracking-tight">
          "I am not what happened to me,
          <br className="hidden sm:block" /> I am what I choose to become."
        </h2>
      
        <cite className="mt-6 block font-serif text-lg text-gray-600 not-italic">
          — Carl Jung
        </cite>
       
        <p className="mt-8 max-w-2xl mx-auto text-lg leading-8 text-gray-600">
          Your past has shaped you, but it doesn't have to define your future.
          Therapy is a collaborative process where we explore your story,
          understand its impact, and empower you to make conscious choices. It's
          about building the skills and self-awareness needed to create a more
          fulfilling and intentional life, on your own terms.
        </p>
        <div className="mt-16 border-b border-gray-400/50 max-w-sm mx-auto"></div>
      </div>
    </section>
  );
}
