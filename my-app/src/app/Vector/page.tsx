"use client";
import React, { useState } from "react";
import Image from "next/image";

const Vector = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);

  const items = [
    { img: "/vectorart.jpg" },
    { img: "/vector.jpg" },
    { img: "/vectoraer.jpg" },
  ];

  const openModal = (img: string) => {
    setSelectedImage(img);
    setZoom(1);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setZoom(1);
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (e.deltaY < 0) {
      setZoom((prev) => Math.min(prev + 0.2, 5));
    } else {
      setZoom((prev) => Math.max(prev - 0.2, 1));
    }
  };

  const toggleZoom = () => {
    setZoom((prev) => (prev === 1 ? 2 : 1));
  };

  return (
    <section
      className="text-gray-200 body-font"
      aria-label="Vector Art Conversion Portfolio"
    >
      <div className="container px-5 py-24 mx-auto mt-16">
    
        <div className="flex flex-wrap ">
          {items.map((item, index) => (
            <div key={index} className="lg:w-1/3 md:w-1/2 p-4 w-full">
              <div className="relative h-48 rounded overflow-hidden group cursor-pointer">
                <Image
                  src={item.img}
                  width={300}
                  height={300}
                  alt="Vector art conversion design"
                  className="object-cover w-full h-full group-hover:scale-110 transition duration-300"
                />

                {/* HOVER BUTTON */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                  <button
                    onClick={() => openModal(item.img)}
                    className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
                  >
                    View Design
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative overflow-hidden max-w-[90vw] max-h-[90vh]"
            onWheel={handleWheel}
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 z-50 bg-white text-black w-10 h-10 rounded-full text-xl font-bold hover:bg-gray-200"
            >
              ✕
            </button>

            {/* ZOOM */}
            <div onClick={toggleZoom} className="cursor-zoom-in">
              <Image
                src={selectedImage}
                alt="Vector design preview"
                width={1000}
                height={800}
                className="rounded-lg transition-transform duration-300"
                style={{
                  transform: `scale(${zoom})`,
                  transformOrigin: "center center",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Vector;
