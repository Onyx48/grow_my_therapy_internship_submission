// src/components/TherapyApproachItem.js
"use client";

import { useState } from "react";
import Link from "next/link";

export default function TherapyApproachItem({
  title,
  description,
  iconElement,
  buttonText,
  buttonLink,
  initialOpen = false,
}) {
  const [isOpen, setIsOpen] = useState(initialOpen);

  return (
    <div className="border border-muted-teal/50 rounded-lg overflow-hidden">
      <button
        className={`w-full flex items-center justify-between text-left py-4 px-4 sm:px-6 transition-colors duration-300 ${
          isOpen ? "bg-muted-teal/20" : "bg-white hover:bg-gray-50"
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          {iconElement && iconElement}
          <span
            className={`text-lg font-semibold transition-colors duration-300 ${
              isOpen ? "text-dark-teal" : "text-gray-800"
            }`}
          >
            {title}
          </span>
        </div>
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
          <div className="p-4 pt-0 sm:px-6 sm:pt-0 bg-muted-teal/20 leading-relaxed">
            <p className="mb-4">{description}</p>
            {buttonText && buttonLink && (
              <Link
                href={buttonLink}
                className="inline-block bg-dark-teal text-white font-semibold px-5 py-2 rounded-md hover:bg-teal-700 transition-colors shadow-sm"
              >
                {buttonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
