import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QueryProvider from "@/lib/query-provider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sundarban Greenland Tourism | Best Sundarban Tour Packages 2026",
    template: "%s | Sundarban Greenland Tourism",
  },
  description:
    "Book the best Sundarban tour packages. Expert-guided jungle safaris, boat rides, tiger tracking, and authentic Bengali cuisine. 1-day trips to 4-day expeditions available.",
  keywords: [
    "Sundarban tour packages",
    "Best Sundarban trip",
    "Sundarban jungle safari",
    "Sundarban boat safari",
    "Royal Bengal Tiger tour",
    "Sundarban eco-tourism",
    "Sundarban wildlife photography",
    "Kolkata to Sundarban trip",
  ],
  authors: [{ name: "Sundarban Greenland Tourism" }],
  openGraph: {
    title: "Sundarban Greenland Tourism | Best Sundarban Tour Packages",
    description: "Discover the mystique of the Sundarbans with expert-guided tours. Book now for unforgettable jungle safaris and wildlife encounters.",
    url: "https://sundarbanwildexplorers.com",
    siteName: "Sundarban Greenland Tourism",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" id="top" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-sans)]">
        <QueryProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}

