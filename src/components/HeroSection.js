import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative z-10 -mt-20 flex items-center justify-center text-white text-center px-4 h-[60vh] lg:min-h-screen">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/background-image.jpg')`,
            filter: "brightness(1.2) contrast(1.1)",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-4xl">
        <p className="text-xs md:text-sm uppercase tracking-widest text-white/80 mb-4 text-shadow-sm">
          Psychology Services in Los Angeles, CA
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shadow-md">
          Evidence-Based Therapy for Healing and Growth
        </h1>

        <p className="max-w-2xl mx-auto text-base md:text-lg text-white/90 mb-8 text-shadow-sm">
          Begin your journey towards overcoming anxiety, strengthening
          relationships,
          <br className="hidden sm:block" />
          and finding lasting inner peace.
        </p>

        <div className="flex items-center justify-center space-x-4 text-xs text-white/70 mb-10 text-shadow-sm">
          <div className="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span>Top Rated</span>
          </div>
          <span>•</span>
          <span>8 Years of Practice</span>
          <span>•</span>
          <span>500+ Client Sessions</span>
        </div>

        <Link
          href="/#contact"
          className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-8 py-3 rounded-lg shadow-lg transition-transform hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="20" x2="12" y2="10"></line>
            <line x1="18" y1="20" x2="18" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="16"></line>
          </svg>
          <span>Start Healing Today</span>
        </Link>
      </div>
    </div>
  );
}
