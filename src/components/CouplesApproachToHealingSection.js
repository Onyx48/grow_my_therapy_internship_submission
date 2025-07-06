// src/components/CouplesApproachToHealingSection.js

import Image from "next/image";
import Link from "next/link";

export default function CouplesApproachToHealingSection() {
  const problemPoints = [
    {
      title: "Endless 'Repeater Arguments'",
      description:
        "You find yourselves stuck on the same issue, unable to truly resolve it. This cycle erodes intimacy and trust.",
    },
    {
      title: "Communication Breakdown",
      description:
        "Words wound more than intended. You long to speak and be heard with kindness, but frustration keeps you apart.",
    },
    {
      title: "Loss of Intimacy & Connection",
      description:
        "Physical or emotional distance grows. You miss the closeness you once had and wonder if it can be restored.",
    },
    {
      title: "Spiritual Misalignment",
      description:
        "Although you both follow Christ, you feel out of sync in prayer life, purpose, or church involvement, causing tension.",
    },
  ];

  const iconStyle = "w-4 h-4 text-yellow-400";
  const iconStrokeStyle = "currentColor";

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
      
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
          
          <div className="flex flex-col">
            <span className="inline-block bg-muted-teal/20 text-dark-teal text-sm px-3 py-1 rounded-full mb-6 font-medium">
              Christian Couples Therapy Pain Points | Richmond, VA
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-relaxed text-gray-900 mb-6">
              Stuck in the Same Argument? <br />
              Feeling Distant or Unheard?
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-10">
              Marriage is meant to reflect Christ's love. Counseling can remove
              the barriers that keep you from unity and joy.
            </p>
            <div className="space-y-4">
              {problemPoints.map((point, index) => (
                <div
                  key={index}
                  className="bg-white border-l-4 border-teal-500 rounded-lg p-5"
                >
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">
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
                Reignite Your Marriage
              </Link>
              <Link
                href="#"
                className="inline-flex justify-center items-center border border-dark-teal text-dark-teal font-semibold px-6 py-3 rounded-lg hover:bg-dark-teal hover:text-white transition-colors shadow-sm"
              >
                Learn About Ellie's Approach
              </Link>
            </div>
          </div>

         
          <div className="relative rounded-xl overflow-hidden shadow-xl w-full aspect-[3/2]">
            <Image
              src="/couple-struggling-content.jpg"
              alt="A couple experiencing a difficult moment in their living room"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/90 to-transparent text-white p-5 pt-10">
              <h3 className="font-bold text-xl mb-4">
                Let God's Love Rekindle Your Union
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-center gap-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={iconStyle}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={iconStrokeStyle}
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
                  <span>40+ Years of Experience with Couples</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={iconStyle}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={iconStrokeStyle}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5z"></path>
                  </svg>
                  <span>Scripture-Based Conflict Resolution</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={iconStyle}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={iconStrokeStyle}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 12V4H4v8a2 2 0 0 0 2 2h2v4h4v-4h2a2 2 0 0 0 2-2z"></path>
                  </svg>
                  <span>Focus on Forgiveness & Trust</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={iconStyle}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={iconStrokeStyle}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <span>Safe & Non-Judgmental Environment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
