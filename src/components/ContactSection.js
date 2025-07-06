import ContactForm from "./ContactForm";

export default function ContactSection({ id }) {
  return (
    <section id={id} className="bg-muted-teal py-20 sm:py-24 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold">Our Office</h3>
              <p className="mt-4 leading-relaxed">
                1287 Maplewood Drive
                <br />
                Los Angeles, CA 90026
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=1287%20Maplewood%20Drive%2C%20Los%20Angeles%2C%20CA%2090026"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-gray-700 text-white font-semibold px-5 py-2 rounded-md hover:bg-gray-800 transition-colors"
              >
                Google Maps
              </a>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Hours</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <strong>In-person:</strong> Tue & Thu, 10 AM – 6 PM
                </li>
                <li>
                  <strong>Virtual (Zoom):</strong> Mon, Wed & Fri, 1 PM – 5 PM
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Contact</h3>
              <a
                href="tel:323-555-0192"
                className="mt-4 flex items-center gap-2 hover:text-white transition-colors"
              >
                {/* Corrected SVG Path */}
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
                <span>(323) 555-0192</span>
              </a>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
