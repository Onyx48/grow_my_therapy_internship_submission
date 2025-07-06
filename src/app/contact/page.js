import Image from "next/image";
import Link from "next/link";

import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Contact - Ellie Shumaker, LCSW",
  description:
    "Get in touch with Ellie Shumaker for a free consultation. Fill out the contact form or call now to begin your journey towards healing.",
};

export default function ContactPage() {
  return (
   
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
      
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16">
         
          <div className="flex flex-col">
            <div className="relative w-32 h-32 mb-8">
              <Image
                src="/headshot.jpg"
                alt="Professional headshot of Ellie Shumaker"
                fill
                className="rounded-2xl object-cover shadow-lg"
              />
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Hi, I'm Ellie Shumaker, LCSW
            </h1>

          
            <p className="mt-6 text-lg leading-8 text-gray-700">
              With over{" "}
              <strong className="font-semibold text-gray-900">
                40 years of dedicated experience
              </strong>{" "}
              in individual and couples therapy, I truly enjoy working with a
              wide variety of people of different ages, capacities, backgrounds,
              and presenting problems. My goal is to help you build credibility
              in your own journey and educate you on pathways to healing.
            </p>

          
            <div className="mt-auto pt-10">
              <Link
                href="/testimonials"
                className="inline-block bg-yellow-100 text-yellow-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-200 transition-colors shadow-sm"
              >
                Client Success Stories & Testimonials
              </Link>
            </div>
          </div>

          <div>
            <a
              href="tel:757-474-5262"
              className="w-full mb-6 flex items-center justify-center gap-2.5 bg-muted-teal/20 text-dark-teal font-semibold px-8 py-3.5 rounded-lg shadow-sm transition-colors hover:bg-muted-teal/40"
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
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.7-6.7A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4.08 2h3a2 2 0 0 1 2 1.74 17.65 17.65 0 0 0 .16 1.8c-.07.25-.13.5-.18.75s-.08.5-.08.75a1 1 0 0 0 .5 1.05l.38.19c.4.2.8.38 1.22.54a1 1 0 0 0 1.05.5h.75c.25-.05.5-.1.75-.16a17.65 17.65 0 0 0 1.8.16 2 2 0 0 1 1.74 2z"></path>
              </svg>
              <span>Call Now</span>
            </a>

        
            <div className="relative mb-6">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-3 text-sm font-medium text-gray-500">
                  OR
                </span>
              </div>
            </div>

         
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
