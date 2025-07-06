import ContactForm from "./ContactForm";

export default function Footer() {
  return (
    <footer className="bg-muted-teal text-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold">Our Office</h3>
              <p className="mt-4 leading-relaxed">
                4913 Fitzhugh Avenue
                <br />
                Suite 102
                <br />
                Richmond, VA 23230
              </p>
              <a
                href="#"
                className="mt-4 inline-block bg-gray-700 text-white font-semibold px-5 py-2 rounded-md hover:bg-gray-800 transition-colors"
              >
                Google Maps
              </a>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Hours</h3>
              <ul className="mt-4 space-y-2">
                <li>Monday: 12:00 PM - 8:00 PM</li>
                <li>Tuesday: 12:00 PM - 8:00 PM</li>
                <li>Wednesday: 9:00 AM - 6:00 PM</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Contact</h3>
              <a
                href="tel:757-474-5262"
                className="mt-4 flex items-center gap-2 hover:text-white transition-colors"
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
                <span>(757) 474-5262</span>
              </a>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-start gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-red-500 mt-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <div>
              <h4 className="font-bold text-red-600">Please Note:</h4>
              <p className="text-sm text-gray-600">
                I do not take insurance directly. However, I can provide you
                with a billing sheet with the necessary facts and codes so you
                can file for{" "}
                <strong className="font-semibold text-gray-800">
                  out-of-network benefits
                </strong>{" "}
                with your insurance company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
