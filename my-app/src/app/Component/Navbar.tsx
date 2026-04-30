"use client";

import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Pricing", path: "/pricing" },
    { name: "Portfolio", path: "/project" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/70 shadow-lg">
      <nav className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-5 py-4">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 text-white">
            <Image
              src="/logo.png"
              alt="Scorpio Digitizing Logo"
              width={60}
              height={60}
              className="rounded-full"
              priority
            />
            <span className="text-lg md:text-xl font-bold tracking-wide">
              SCORPIO DIGITIZING
            </span>
          </Link>

          {/* DESKTOP */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-12 text-white font-medium">
            {navLinks.map((link, i) => (
              <li key={i} className="relative group">
                <Link
                  href={link.path}
                  className={`transition duration-300 ${
                    pathname === link.path
                      ? "text-pink-400"
                      : "hover:text-pink-300"
                  }`}
                >
                  {link.name}
                </Link>

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-pink-400 transition-all duration-300
                  ${pathname === link.path ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </li>
            ))}

            <Link href="/quote">
              <button className="ml-4 px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 font-semibold hover:scale-105 hover:shadow-lg transition duration-300">
                Get A Free Quote
              </button>
            </Link>
          </ul>

          {/* MOBILE ICON */}
          <div
            className="md:hidden text-white cursor-pointer"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <ul className="md:hidden flex flex-col items-center gap-4 py-6 bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 text-white font-medium">

            {navLinks.map((link, i) => (
              <li key={i} className="w-full px-6">
                <Link
                  href={link.path}
                  onClick={toggleMenu}
                  className={`block w-full text-center py-3 rounded-lg transition duration-300
                  ${
                    pathname === link.path
                      ? "bg-pink-500 text-white"
                      : "bg-white/10 hover:bg-white/20 active:bg-white/30"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* CTA */}
            <li className="w-full px-6">
              <Link href="/quote" onClick={toggleMenu}>
                <button className="w-full mt-3 py-3 rounded-full bg-white text-purple-700 font-semibold active:scale-95 transition">
                  Get A Free Quote
                </button>
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;