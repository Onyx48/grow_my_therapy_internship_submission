// src/components/SiteFooter.js
import Link from "next/link";
import Image from "next/image";

export default function SiteFooter() {
  const links = {
    general: [
      { name: "Get In Touch", href: "/#contact" },
      { name: "Testimonials", href: "/#testimonials" },
      { name: "About Me", href: "/#about" },
      { name: "Focus Areas", href: "/#focus-areas" },
      { name: "FAQ's", href: "/#faq" },
      { name: "Blogs", href: "/blog" },
    ],

    areasServed: [
      { name: "Los Angeles, CA", href: "#" },
      { name: "Beverly Hills, CA", href: "#" },
      { name: "Santa Monica, CA", href: "#" },
      { name: "Pasadena, CA", href: "#" },
      { name: "Burbank, CA", href: "#" },
      { name: "Glendale, CA", href: "#" },
    ],

    services: [
      { name: "Individual Counseling", href: "/services/individual" },
      { name: "Couples Counseling", href: "/services/couples" },
      { name: "Anxiety & Stress Management", href: "/#focus-areas" },
      { name: "Trauma Recovery", href: "/#focus-areas" },
    ],
  };

  return (
    <footer className="bg-dark-teal text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.jpg"
                  alt="Dr. Serena Blake Logo"
                  width={48}
                  height={48}
                  className="rounded-full h-auto"
                />
                <div>
                  <span className="text-white font-bold text-lg">
                    Dr. Serena Blake
                  </span>
                  <span className="block text-sm uppercase tracking-wider text-white/60">
                    Clinical Psychologist
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-sm pt-2">
              1287 Maplewood Drive,
              <br />
              Los Angeles, CA 90026
            </p>
            <a
              href="tel:323-555-0192"
              className="flex items-center gap-2 text-sm hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.7-6.7A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4.08 2h3a2 2 0 0 1 2 1.74 17.65 17.65 0 0 0 .16 1.8c-.07.25-.13.5-.18.75s-.08.5-.08.75a1 1 0 0 0 .5 1.05l.38.19c.4.2.8.38 1.22.54a1 1 0 0 0 1.05.5h.75c.25-.05.5-.1.75-.16a17.65 17.65 0 0 0 1.8.16 2 2 0 0 1 1.74 2z"></path>
              </svg>
              <span>(323) 555-0192</span>
            </a>
            <div className="mt-4">
              <Image
                src="/psychology-today-badge.png"
                alt="Psychology Today Verified"
                width={150}
                height={50}
                className="h-auto"
              />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Links
            </h3>
            <ul className="mt-4 space-y-2">
              {links.general.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Areas Served
            </h3>
            <ul className="mt-4 space-y-2">
              {links.areasServed.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {links.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/20 text-center text-xs text-white/60">
          <p>
            © {new Date().getFullYear()} Dr. Serena Blake. All Rights Reserved.
          </p>
          <p className="mt-2">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <span className="mx-2">|</span>
            <Link href="/terms-of-service" className="hover:text-white">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
