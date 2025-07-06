// src/components/FaqItem.js
"use client";

import { useState } from "react";


export default function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
 
    <div className="border-b border-gray-300">
      <button
        className={`w-full flex justify-between items-center text-left py-6 px-2 sm:px-4 transition-colors duration-300 ${
          isOpen ? "bg-muted-teal/20" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span
          className={`text-lg transition-colors duration-300 ${
            isOpen ? "font-semibold text-dark-teal" : "text-gray-800"
          }`}
        >
          {question}
        </span>

        <span>
         
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-dark-teal"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          ) : (
           
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          )}
        </span>
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-gray-700 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-6 pt-0 bg-muted-teal/20 leading-relaxed">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}
