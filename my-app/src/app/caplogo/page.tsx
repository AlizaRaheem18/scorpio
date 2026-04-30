"use client";
import React, { useState } from "react";
import Image from "next/image";

const Caplogo = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);

  const items = [
    { img: "/fish.JPG" },
    { img: "/hhh.JPG" },
    { img: "/Roughneck.JPG" },
    { img: "/Tiger Face.JPG" },
    { img: "/scroogr.jpg" },
    { img: "/HayloftSEW.jpg" },
    { img: "/Monkssew.jpg" },
    { img: "/skulljBsew.JPG" },
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
    <section className="text-gray-200 body-font">
      <div className="container px-5 py-24 mx-auto">
       
        <div className="flex flex-wrap -m-4">

          {items.map((item, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              
              <div className="relative h-48 rounded overflow-hidden group cursor-pointer">
                <Image
                  alt="Embroidery digitizing design"
                  src={item.img}
                  width={400}
                  height={300}
                  className="object-cover object-center w-full h-full transition-transform duration-300 group-hover:scale-110"
                />

                {/* HOVER BUTTON */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
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
            {/* CLOSE BUTTON */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 z-50 bg-white text-black w-10 h-10 rounded-full text-xl font-bold hover:bg-gray-200"
            >
              ✕
            </button>

            {/* ZOOM IMAGE */}
            <div onClick={toggleZoom} className="cursor-zoom-in">
              <Image
                src={selectedImage}
                alt="Embroidery design preview"
                width={800}
                height={400}
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

export default Caplogo;