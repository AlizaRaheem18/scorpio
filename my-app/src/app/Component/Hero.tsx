"use client";

import Image from "next/image";
import Link from "next/link";
import { IoMail } from "react-icons/io5";

export default function Hero() {
  return (
    <section
      className="bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/background.jpg')" }}
      aria-label="Embroidery Digitizing Services"
    >
 {/* EMAIL BAR (Navbar ke neeche) */}
<div className="text-white text-xs md:text-sm py-2 px-5 flex justify-center md:justify-end items-center gap-2">
  
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=scorpiodigitizing@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:opacity-80 transition"
  >
    <IoMail className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
    <span>scorpiodigitizing@gmail.com</span>
  </a>

</div>

      {/* Overlay */}
      <div className="bg-[#05051a]/80">
        <div className="max-w-7xl mx-auto px-5 py-16 md:py-20 flex flex-col md:flex-row items-center gap-8">

          {/* LEFT CONTENT */}
          <div className="md:w-1/2 w-full text-white text-center md:text-left">

            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
              Scorpio Embroidery Digitizing & Vector Art Services
            </h1>

            <h2 className="text-lg md:text-xl text-purple-400 mb-3">
              Fast Turnaround | Premium Quality | Worldwide Service
            </h2>

            <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed max-w-lg">
              Scorpio Digitizing offers high-quality embroidery digitizing,
              cap logo digitizing, jacket back digitizing, vector art
              conversion, applique designs, and custom embroidery solutions.
              We deliver accurate, stitch-ready files with fast turnaround
              and premium results for businesses worldwide.
            </p>

            <div className="flex gap-4 justify-center md:justify-start mb-4">

              <Link
                href="/contact"
                className="px-6 py-3 rounded-full text-white font-semibold 
                bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition"
              >
                Contact
              </Link>

              <Link
                href="/pricing"
                className="px-6 py-3 rounded-full border border-gray-400 text-white hover:border-white transition"
              >
                View Pricing
              </Link>

            </div>

            <ul className="flex gap-4 justify-center md:justify-start text-sm text-gray-300">
              <li>✓ Fast Turnaround</li>
              <li>✓ Premium Quality</li>
            </ul>

          </div>

          {/* RIGHT IMAGE */}
          <div className="md:w-1/2 w-full flex justify-center">

            <Image
              src="/Herologo.png"
              width={900}
              height={700}
              alt="Embroidery digitizing machine creating custom embroidery design"
              className="w-full max-w-xl h-[400px] md:h-[520px] object-cover rounded-lg"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}