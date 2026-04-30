"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const images = [
  "/BaseballCartoon.JPG",
  "/Baseballstarsew.jpg",
  "/Batavia.JPG",
  "/bobcat.JPG",
  "/bulldog.JPG",
  "/FIGHTINGMEXICAN.jpg",
  "/LionandEagle.JPG.jpeg",
  "/VitalePumpingJB.JPG.jpeg",
  "/LiveInkLogo.JPG",
  "/Monkssew.jpg",
  "/TigerFace.jpg",
];

export default function Project() {
  const [selected, setSelected] = useState<string | null>(null);
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);

  const startX = useRef(0);
  const endX = useRef(0);

  // AUTO SLIDE
  useEffect(() => {
    if (hovered) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 1800);

    return () => clearInterval(interval);
  }, [hovered, active]);

  const prevSlide = () => {
    setActive((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % images.length);
  };

  // SWIPE
  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (startX.current - endX.current > 50) nextSlide();
    if (endX.current - startX.current > 50) prevSlide();
  };

  return (
    <>
      <section className="py-24 bg-gradient-to-r from-[#0b0b2b] via-[#0a0a23] to-[#2b0b2b] text-white">
        
        {/* HEADER */}
        <header className="text-center mb-14 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Portfolio
          </h1>

          <p className="max-w-3xl mx-auto text-gray-300 text-sm md:text-base leading-relaxed">
            Explore our embroidery digitizing portfolio including cap logo digitizing,
            jacket back designs, custom patches, and high-quality artwork.
          </p>
        </header>

        {/* SLIDER */}
        <div
          className="relative max-w-5xl mx-auto px-4 h-[500px] flex items-center justify-center overflow-hidden"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* LEFT BUTTON */}
          <button
            onClick={prevSlide}
            className="absolute left-2 z-30 bg-white/20 hover:bg-white/40 p-3 rounded-full backdrop-blur-md"
          >
            &#10094;
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={nextSlide}
            className="absolute right-2 z-30 bg-white/20 hover:bg-white/40 p-3 rounded-full backdrop-blur-md"
          >
            &#10095;
          </button>

          {/* SLIDES */}
          {images.map((img, index) => {
            const isActive = index === active;

            return (
              <div
                key={index}
                className={`absolute transition-all duration-400 ease-out
                ${isActive ? "opacity-100 scale-100 z-20" : "opacity-0 scale-95 z-10"}`}
              >
                <div
                  onClick={() => setSelected(img)}
                  className="relative cursor-pointer rounded-2xl overflow-hidden bg-black/40 p-2"
                >
                  <Image
                    src={img}
                    alt="Embroidery Design"
                    width={600}
                    height={500}
                    className="w-[320px] md:w-[520px] h-[420px] object-contain rounded-xl animate-[pop_0.4s_ease]"
                  />

                  {/* subtle overlay */}
                  <div className="absolute inset-0 bg-black/10 rounded-xl"></div>

                  {/* glow border */}
                  <div className="absolute inset-0 ring-4 ring-purple-500/40 rounded-xl"></div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-white text-3xl font-bold"
          >
            ✕
          </button>

          <div className="w-[90%] md:w-[70%]">
            <Image
              src={selected}
              alt="Preview"
              width={1600}
              height={1000}
              className="w-full h-auto object-contain rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}