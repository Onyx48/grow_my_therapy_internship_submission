import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";
import TopBar from "../components/TopBar";
import StickyNav from "../components/StickyNav";
import SiteFooter from "../components/SiteFooter";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancing-script",
});

export const metadata = {
  title: "Dr. Serena Blake, PsyD | Clinical Psychologist in Los Angeles, CA",
  description:
    "Dr. Serena Blake offers compassionate, evidence-based psychology services in Los Angeles, CA, to help you overcome anxiety, strengthen relationships, and heal from trauma.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${dancing.variable}`}
    >
      <body className="font-sans bg-sky-50">
        <TopBar />
        <StickyNav />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
