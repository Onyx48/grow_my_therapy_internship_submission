// src/components/StickyNav.js
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function StickyNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const isContactPage = pathname === "/contact";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-muted-teal shadow-lg"
            : isHomePage
            ? "bg-white/10 backdrop-blur-md"
            : "bg-light-greenish-teal"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-2"
            >
              <Image
                src="/logo.jpg"
                alt="Dr. Serena Blake Logo"
                width={40}
                height={40}
                // The fix is ensuring `h-auto` is present here
                className="rounded-full h-auto"
              />
              <div>
                <div
                  className={`text-lg font-bold transition-colors duration-300 ${
                    isScrolled
                      ? "text-white"
                      : isHomePage
                      ? "text-white text-shadow-sm"
                      : "text-dark-teal"
                  }`}
                >
                  Dr. Serena Blake
                </div>
                <span
                  className={`block text-xs font-normal tracking-widest uppercase ${
                    isScrolled
                      ? "text-white/80"
                      : isHomePage
                      ? "text-white/70"
                      : "text-gray-600"
                  }`}
                >
                  Clinical Psychologist
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-6 text-sm font-medium">
              <Link
                href={isHomePage ? "#about" : "/#about"}
                className={`transform transition-all duration-300 hover:scale-110 ${
                  isScrolled
                    ? "text-white/80 hover:text-white"
                    : isHomePage && !isScrolled
                    ? "text-white/80 hover:text-white text-shadow-sm"
                    : "text-gray-700 hover:text-dark-teal"
                }`}
              >
                About
              </Link>
              <Link
                href={isHomePage ? "#testimonials" : "/#testimonials"}
                className={`transform transition-all duration-300 hover:scale-110 ${
                  isScrolled
                    ? "text-white/80 hover:text-white"
                    : isHomePage && !isScrolled
                    ? "text-white/80 hover:text-white text-shadow-sm"
                    : "text-gray-700 hover:text-dark-teal"
                }`}
              >
                Testimonials
              </Link>
              <Link
                href={isHomePage ? "#faq" : "/#faq"}
                className={`transform transition-all duration-300 hover:scale-110 ${
                  isScrolled
                    ? "text-white/80 hover:text-white"
                    : isHomePage && !isScrolled
                    ? "text-white/80 hover:text-white text-shadow-sm"
                    : "text-gray-700 hover:text-dark-teal"
                }`}
              >
                Rates & FAQs
              </Link>
              <Link
                href={isHomePage ? "#focus-areas" : "/#focus-areas"}
                className={`transform transition-all duration-300 hover:scale-110 ${
                  isScrolled
                    ? "text-white/80 hover:text-white"
                    : isHomePage && !isScrolled
                    ? "text-white/80 hover:text-white text-shadow-sm"
                    : "text-gray-700 hover:text-dark-teal"
                }`}
              >
                Focus Areas
              </Link>
              <Link
                href={isHomePage ? "#contact" : "/#contact"}
                className={`transform transition-all duration-300 hover:scale-110 ${
                  isScrolled
                    ? "text-white/80 hover:text-white"
                    : isHomePage && !isScrolled
                    ? "text-white/80 hover:text-white text-shadow-sm"
                    : "text-gray-700 hover:text-dark-teal"
                }`}
              >
                Contact
              </Link>
            </div>

            <div className="hidden lg:block">
              <Link
                href={isHomePage ? "#contact" : "/#contact"}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg border font-semibold text-sm transform transition-all duration-300 hover:scale-105 ${
                  isContactPage
                    ? "bg-dark-teal text-white border-dark-teal"
                    : isScrolled
                    ? "text-white border-white/80 hover:bg-white hover:text-muted-teal"
                    : isHomePage
                    ? "text-white border-white/50 hover:bg-white hover:text-teal-600"
                    : "text-dark-teal border-dark-teal hover:bg-dark-teal hover:text-white"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <span>Get Started</span>
              </Link>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                className="p-2 rounded-md transition-colors duration-300 z-50 relative"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-7 h-7 ${
                    isScrolled
                      ? "text-white"
                      : isHomePage
                      ? "text-white"
                      : "text-dark-teal"
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" y1="12" x2="20" y2="12"></line>
                  <line x1="4" y1="6" x2="20" y2="6"></line>
                  <line x1="4" y1="18" x2="20" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/60" onClick={closeMenu}></div>
        <div
          className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white p-8 transition-transform duration-300 ease-in-out ${
            isMenuOpen
              ? "transform translate-x-0"
              : "transform translate-x-full"
          }`}
        >
          <div className="absolute top-5 right-5">
            <button
              onClick={closeMenu}
              aria-label="Close menu"
              className="p-2 text-gray-500 hover:text-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-start space-y-6 pt-8">
            <div className="pb-4 border-b border-gray-200 w-full">
              <h2 className="text-xl font-bold text-teal-600">
                Dr. Serena Blake
              </h2>
              <p className="text-sm text-gray-500">PsyD</p>
            </div>
            <Link
              onClick={closeMenu}
              href={isHomePage ? "#about" : "/#about"}
              className="text-gray-800 text-lg font-semibold py-2 w-full"
            >
              About
            </Link>
            <Link
              onClick={closeMenu}
              href={isHomePage ? "#testimonials" : "/#testimonials"}
              className="text-gray-800 text-lg font-semibold py-2 w-full"
            >
              Testimonials
            </Link>
            <Link
              onClick={closeMenu}
              href={isHomePage ? "#faq" : "/#faq"}
              className="text-gray-800 text-lg font-semibold py-2 w-full"
            >
              Rates & FAQs
            </Link>
            <Link
              onClick={closeMenu}
              href={isHomePage ? "#focus-areas" : "/#focus-areas"}
              className="text-gray-800 text-lg font-semibold py-2 w-full"
            >
              Focus Areas
            </Link>
            <Link
              onClick={closeMenu}
              href={isHomePage ? "#contact" : "/#contact"}
              className={`text-gray-800 text-lg font-semibold py-2 w-full ${
                isContactPage ? "text-dark-teal" : ""
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
