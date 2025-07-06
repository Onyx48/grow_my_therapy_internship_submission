// src/components/EngagementModal.js
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function EngagementModal() {
  const [isOpen, setIsOpen] = useState(false);
  const idleTimeoutRef = useRef(null); // Ref for idle timeout
  const hasLoadedBeforeRef = useRef(false); // Ref to track if modal has shown on this session/load

  // Function to open the modal
  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  // Reset idle timer (any user activity)
  const resetIdleTimer = () => {
    if (idleTimeoutRef.current) {
      clearTimeout(idleTimeoutRef.current);
    }
    idleTimeoutRef.current = setTimeout(openModal, 30000); // 30 seconds idle
  };

  useEffect(() => {
    // 1. Show immediately on first load (if not shown before in this session)
    // Using sessionStorage to persist state across reloads within the same session
    if (!sessionStorage.getItem("modalShownThisSession")) {
      // Set a small timeout to ensure page content loads first
      const loadTimer = setTimeout(() => {
        openModal();
        sessionStorage.setItem("modalShownThisSession", "true");
      }, 500);

      return () => clearTimeout(loadTimer);
    }

    resetIdleTimer();

    window.addEventListener("mousemove", resetIdleTimer);
    window.addEventListener("keypress", resetIdleTimer);
    window.addEventListener("scroll", resetIdleTimer);
    window.addEventListener("click", resetIdleTimer);

    return () => {
      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current);
      }
      window.removeEventListener("mousemove", resetIdleTimer);
      window.removeEventListener("keypress", resetIdleTimer);
      window.removeEventListener("scroll", resetIdleTimer);
      window.removeEventListener("click", resetIdleTimer);
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={closeModal}
    >
      <div
        className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
          aria-label="Close modal"
        >
          ×
        </button>

        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Rebuild Your Marriage on God's Foundation
        </h3>

        <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
          <div className="relative w-24 h-24 flex-shrink-0">
            <Image
              src="/headshot.jpg"
              alt="Ellie Shumaker"
              fill
              className="rounded-full object-cover shadow-md"
            />
          </div>
          <p className="text-gray-700 leading-relaxed text-base">
            Together, discover tools rooted in Scripture to resolve conflict,
            deepen intimacy, and honor God in your relationship.
          </p>
        </div>

        <div className="flex items-center justify-center space-x-4 text-xs text-gray-600 mb-8">
          <div className="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-yellow-500"
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
          <span
            className="text-blue-600 underline cursor-pointer hover:no-underline"
            onClick={closeModal}
          >
            40+ Years Experience
          </span>
          <span>•</span>
          <span
            className="text-blue-600 underline cursor-pointer hover:no-underline"
            onClick={closeModal}
          >
            Media Mentions
          </span>
        </div>

        <div className="flex gap-4">
          <button
            onClick={closeModal}
            className="flex-1 border border-gray-300 text-gray-800 font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Close
          </button>
          <Link
            href="/services/couples"
            onClick={closeModal}
            className="flex-1 text-center bg-dark-teal text-white font-semibold py-3 px-4 rounded-lg hover:bg-teal-700 transition-colors"
          >
            Book a Couples Session
          </Link>
        </div>
      </div>
    </div>
  );
}
