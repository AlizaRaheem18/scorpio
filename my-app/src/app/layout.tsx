

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Scorpio Digitizing | Embroidery Digitizing & Vector Art Services",
    template: "%s | Scorpio Digitizing",
  },
  description:
    "Scorpio Digitizing provides professional embroidery digitizing, cap logo digitizing, jacket back digitizing, and vector art services with fast turnaround and premium quality worldwide.",

  keywords: [
    "embroidery digitizing",
    "vector art services",
    "logo digitizing",
    "cap digitizing",
    "jacket back digitizing",
    "custom embroidery designs",
  ],

  authors: [{ name: "Scorpio Digitizing" }],

  creator: "Scorpio Digitizing",
  publisher: "Scorpio Digitizing",

  metadataBase: new URL("https://yourdomain.com"), // ⚠️ apna domain yahan daalo

  openGraph: {
    title: "Scorpio Digitizing - Embroidery Digitizing Services",
    description:
      "High-quality embroidery digitizing and vector art services with fast turnaround and premium results.",
    url: "https://yourdomain.com",
    siteName: "Scorpio Digitizing",
    images: [
      {
        url: "/og-image.jpg", // ⚠️ ek image public folder me daalo
        width: 1200,
        height: 630,
        alt: "Scorpio Digitizing Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Scorpio Digitizing",
    description:
      "Professional embroidery digitizing & vector art services.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>

        {/* Navbar */}
        <div className="sticky top-0 z-50 bg-white/70 backdrop-blur-md">
          <Navbar />
        </div>

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}