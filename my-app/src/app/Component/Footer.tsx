"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              width={70}
              height={70}
              alt="Scorpio Digitizing Logo"
              className="rounded-full"
              priority
            />
            <h2 className="text-xl md:text-2xl font-bold tracking-wide">
              SCORPIO DIGITIZING
            </h2>
          </div>

          {/* COPYRIGHT */}
          <div className="text-center text-sm">
            <p>© 2026 Scorpio Digitizing. All Rights Reserved.</p>
            <Link
              href="/PrivacyPage"
              className="text-gray-200 hover:text-white underline block mt-1"
            >
              Privacy Policy
            </Link>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 text-xl">
            <a
              href="https://www.facebook.com/profile.php?id=61572015778492"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-400 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/scorpiodigitizing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-300 transition"
            >
              <IoLogoInstagram />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-300 transition"
            >
              <IoLogoLinkedin />
            </a>
          </div>
        </div>

        {/* PAYMENT */}
        <div className="mt-10 flex justify-center gap-6 flex-wrap">
       
          <Image
            src="/downloadvisa.png"
            alt="Visa Payment"
              width={90}
            height={10}
          />
          <Image
            src="/amex.png"
            alt="American Express Payment"
             width={90}
            height={10}
          />
          <Image
            src="/mastercard.png"
            alt="Mastercard Payment"
            width={90}
            height={10}
          />
          <Image
            src="/payoneer.png"
            alt="Mastercard Payment"
            width={90}
            height={10}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
