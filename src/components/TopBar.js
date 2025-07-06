export default function TopBar() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-sm text-gray-700">
        <div className="flex items-center gap-2">
          {/* Corrected SVG path */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.7-6.7A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4.08 2h3a2 2 0 0 1 2 1.74 17.65 17.65 0 0 0 .16 1.8c-.07.25-.13.5-.18.75s-.08.5-.08.75a1 1 0 0 0 .5 1.05l.38.19c.4.2.8.38 1.22.54a1 1 0 0 0 1.05.5h.75c.25-.05.5-.1.75-.16a17.65 17.65 0 0 0 1.8.16 2 2 0 0 1 1.74 2z"></path></svg>
          <span>(323) 555-0192</span>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <span>1287 Maplewood Drive, Los Angeles, CA 90026</span>
        </div>
      </div>
    </div>
  );
}