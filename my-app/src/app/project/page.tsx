"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/BaseballCartoon.JPG",
  "/Baseballstarsew.jpg",
  "/Batavia.JPG",
  "/bobcat.JPG",
  "/bulldog.JPG",
  "/FIGHTINGMEXICAN.jpg",
  "/girl3sew.JPG",
  "/fish.JPG",
  "/LiveInkLogo.JPG",
  "/manbikingsew.jpg",
  "/TigerFace.jpg",
];

// loop
const loopImages = [...images, ...images];

export default function Project() {
  const [selected, setSelected] = useState<string | null>(null);
  const [scrollX, setScrollX] = useState(0);

  const slideWidth = 440; // better alignment

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollX((prev) => {
        if (prev >= images.length * slideWidth) return 0;
        return prev + slideWidth;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // CONTROLS
  const slideLeft = () => {
    setScrollX((prev) =>
      prev <= 0 ? images.length * slideWidth - slideWidth : prev - slideWidth
    );
  };

  const slideRight = () => {
    setScrollX((prev) =>
      prev >= images.length * slideWidth ? 0 : prev + slideWidth
    );
  };

  return (
    <>
      <section
        className="py-24 bg-gradient-to-r from-[#0b0b2b] via-[#0a0a23] to-[#2b0b2b] text-white"
        aria-label="Embroidery Digitizing Portfolio"
      >
        {/* HEADING (SEO OPTIMIZED) */}
        <div className="text-center mb-14 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 ">
            Our Projects
          </h1>

          <p className="max-w-3xl mx-auto text-gray-300 text-sm md:text-base leading-relaxed">
            Explore our embroidery digitizing and vector art portfolio featuring
            premium cap logos, jacket back digitizing, custom patches, and
            high-quality stitch-ready designs delivered worldwide.
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative max-w-7xl mx-auto px-4">
          {/* LEFT */}
          <button
            onClick={slideLeft}
            aria-label="Previous projects"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 
            bg-white/20 hover:bg-white/40 backdrop-blur-md 
            p-3 rounded-full"
          >
            &#10094;
          </button>

          {/* RIGHT */}
          <button
            onClick={slideRight}
            aria-label="Next projects"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 
            bg-white/20 hover:bg-white/40 backdrop-blur-md 
            p-3 rounded-full"
          >
            &#10095;
          </button>

          {/* TRACK */}
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${scrollX}px)` }}
            >
              {loopImages.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setSelected(img)}
                  className="relative min-w-[320px] md:min-w-[420px] h-[360px] 
                  md:h-[380px] cursor-pointer rounded-2xl overflow-hidden 
                  group bg-white/10 backdrop-blur-lg
                  shadow-[0_25px_60px_rgba(0,0,0,0.6)]
                  hover:scale-105 transition"
                >
                  <Image
                    src={img}
                    alt={`embroidery digitizing project ${index}`}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover 
                    group-hover:scale-110 transition duration-500"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>
                </div>
              ))}
            </div>
          </div>
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
              alt="Embroidery project preview"
              width={1600}
              height={1000}
              className="w-full h-auto object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}