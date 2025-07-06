// src/components/IndividualServiceContent.js
import Image from "next/image";
import Link from "next/link";

export default function IndividualServiceContent() {
  const problemPoints = [
    {
      title: "Feelings of Unworthiness",
      description:
        "You know what the Bible says, but still feel like you're not enough. Shame and guilt cloud your self-image and make it hard to believe you're truly loved.",
    },
    {
      title: "Persistent Anxiety or Sadness",
      description:
        "You're stuck in worry, fear, or emotional heaviness that keeps you from living freely. You want faith to speak louder than fear.",
    },
    {
      title: "Feeling Distant From God",
      description:
        "Your faith feels dry or confused. You're not sure how to hear God clearly anymore or what His plan is for your life.",
    },
    {
      title: "Wounds From the Past",
      description:
        "Old hurts continue to affect your thoughts, habits, and relationships. You're ready for healing — not just coping.",
    },
  ];

  
  const iconStyle = "w-4 h-4 text-yellow-400";
  const plusIconStyle = "w-3 h-3 text-yellow-400 -ml-1";

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-start">
        
          <div className="flex flex-col">
            <span className="inline-block bg-muted-teal/20 text-dark-teal text-sm px-3 py-1 rounded-full mb-6 font-medium">
              Christian Therapy for Personal Struggles | Richmond, VA
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-relaxed text-gray-900 mb-6">
              Struggling With Anxiety, Unworthiness, or Spiritual Confusion?
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 mb-10">
              You were created in the image of God — but life's wounds can
              obscure that truth. Counseling helps you rediscover who you are in
              Christ.
            </p>

            <div className="space-y-4">
              {problemPoints.map((point, index) => (
                <div
                  key={index}
                  className="bg-muted-teal/10 border border-muted-teal rounded-lg p-5"
                >
                  <h3 className="font-semibold text-dark-teal text-lg mb-2">
                    {point.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                href="/contact"
                className="inline-flex justify-center items-center bg-dark-teal text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors shadow-md"
              >
                Find Healing Through Christ
              </Link>
              <Link
                href="#"
                className="inline-flex justify-center items-center border border-dark-teal text-dark-teal font-semibold px-6 py-3 rounded-lg hover:bg-dark-teal hover:text-white transition-colors shadow-sm"
              >
                See How I Work
              </Link>
            </div>
          </div>

          <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-xl aspect-[4/5] lg:h-full lg:aspect-auto">
            <Image
              src="/praying-male-content.jpg"
              alt="Man in prayer or quiet reflection"
              fill
              className="object-contain"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-teal/90 to-transparent text-white p-5 pt-10">
              <h3 className="font-bold text-xl mb-4">
                You Are God's Masterpiece — Let's Uncover That Truth
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={iconStyle}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87L16 14"></path>
                    <path d="M5 10V7a4 4 0 0 1 4-4h.5"></path>
                    <path d="M19 10V7a4 4 0 0 0-4-4h-.5"></path>
                  </svg>
                  <span>Personalized, Christ-Centered Care</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={iconStyle}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 12V4H4v8a2 2 0 0 0 2 2h2v4h4v-4h2a2 2 0 0 0 2-2z"></path>
                  </svg>
                  <span>Compassionate, Non-Judgmental Space</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={iconStyle}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>Over 40 Years of Experience</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={iconStyle}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={plusIconStyle}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  <span>Faith + Therapy = Healing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
