"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    title: "Cap / Left Chest Logo Digitizing",
    price: "$5-10",
    img: "/Capmain.JPG",
    link: "/caplogo",
  },
  {
    title: "Jacket Back Digitizing",
    price: "$25 - $50",
    img: "/boozersJBsew.JPG",
    link: "/Jacketback",
  },
  {
    title: "Freestanding Lace Digitizing",
    price: "$5 - $10",
    img: "/lacer.JPG",
    link: "/Lace",
  },
  {
    title: "Vector Art Conversion",
    price: "$20 - $100",
    img: "/vectormain.png",
    link: "/Vector",
  },
];

const loopCards = [...data, ...data, ...data];

export default function Pricing() {
  const cardWidth = 406;
  const startIndex = data.length;

  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [transition, setTransition] = useState(true);

  // AUTO SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => prev + 1);
  const prevSlide = () => setCurrentIndex((prev) => prev - 1);

  // LOOP FIX
  useEffect(() => {
    if (currentIndex >= data.length * 2 || currentIndex <= 0) {
      const reset = setTimeout(() => {
        setTransition(false);
        setCurrentIndex(startIndex);
      }, 700);

      const enable = setTimeout(() => setTransition(true), 750);

      return () => {
        clearTimeout(reset);
        clearTimeout(enable);
      };
    }
  }, [currentIndex, startIndex]);

  return (
    <section
      className="py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden"
      aria-label="Embroidery Digitizing Pricing Plans"
    >
      {/* HEADER */}
      <header className="text-center mb-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
         Scorpio Digitizing Pricing Plans
        </h1>

        <p className="max-w-2xl mx-auto text-gray-200">
          Affordable embroidery digitizing, vector art conversion, jacket back
          digitizing, and cap logo digitizing services with fast turnaround and
          premium stitch quality.
        </p>
      </header>

      {/* SLIDER */}
      <div className="relative max-w-7xl mx-auto overflow-hidden px-4">

        {/* LEFT BUTTON */}
        <button
          onClick={prevSlide}
          aria-label="Previous pricing plan"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full transition"
        >
          &lt;
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={nextSlide}
          aria-label="Next pricing plan"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full transition"
        >
          &gt;
        </button>

        {/* SLIDER TRACK */}
        <div
          className={`flex gap-6 ${
            transition ? "transition-transform duration-700 ease-in-out" : ""
          }`}
          style={{
            transform: `translateX(-${currentIndex * cardWidth}px)`,
          }}
        >
          {loopCards.map((item, index) => (
            <article
              key={index}
              className="min-w-[380px] max-w-[380px] bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)] hover:scale-105 transition duration-300"
            >
              <h2 className="text-center text-xl font-semibold mb-2">
                {item.title}
              </h2>

              <p className="text-center text-3xl font-bold text-pink-300 mb-4">
                {item.price}
              </p>

              <div className="flex justify-center mb-6">
                <Image
                  src={item.img}
                  width={300}
                  height={300}
                  alt={`${item.title} embroidery digitizing service example`}
                  className="rounded-full object-cover w-[220px] h-[220px]"
                />
              </div>

              <p className="text-sm text-gray-200 text-center mb-2">
                Free revisions & edits included
              </p>

              <p className="text-xs text-gray-300 text-center mb-6">
                Pricing depends on stitch count and design complexity
              </p>

              <div className="flex justify-center">
                <Link
                  href={item.link}
                  aria-label={`View details for ${item.title}`}
                  className="bg-indigo-500 hover:bg-indigo-600 px-6 py-2 rounded-lg text-white transition"
                >
                  Learn More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}