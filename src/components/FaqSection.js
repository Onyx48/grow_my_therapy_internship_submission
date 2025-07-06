// src/components/FaqSection.js

import FaqItem from "./FaqItem";

export default function FaqSection({ id }) {
  
  const faqs = [
    {
      question: "Do you accept insurance?",
      answer:
        "No, I do not accept insurance directly. I am an out-of-network provider. However, upon request, I can provide you with a superbill (a detailed invoice) which you can submit to your insurance for potential reimbursement.",
    },
    {
      question: "Are online sessions available?",
      answer:
        "Yes, all virtual sessions are conducted via a secure, HIPAA-compliant Zoom platform, offering you comfort and confidentiality from your own space.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "A 24-hour notice is required for all cancellations. Sessions cancelled with less than 24 hours notice will be charged the full session fee.",
    },
  ];

  return (
    <section id={id} className="bg-white py-20 sm:py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="border-t border-gray-300">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
