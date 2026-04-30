"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section
      className="relative min-h-screen text-white overflow-hidden"
      aria-label="About Scorpio Digitizing Embroidery Services"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/background.jpg"
          alt="Embroidery digitizing background design"
          fill
          priority
          className="object-cover blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* HEADER */}
        <header className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-300">
            About Scorpio Digitizing
          </h1>

          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Scorpio Digitizing is a trusted provider of embroidery digitizing
            services in the USA. We specialize in logo digitizing, cap
            embroidery, jacket back designs, and vector art conversion with
            premium quality and fast turnaround.
          </p>
        </header>

        {/* MAIN SECTION */}
        <div className="flex flex-wrap items-center gap-y-10">
          {/* IMAGE
          <div className="w-full lg:w-1/2 px-4">
            <Link href="/logo.jpg" target="_blank">
              <Image
                src="/logo.png"
                target="_blank"
                width={500}
                height={500}
                alt="Scorpio Digitizing embroidery company logo"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </Link>
          </div> */}

          {/* IMAGE */}
          <div className="w-full lg:w-1/2 px-4">
            <a href="/logo.png" target="_blank" rel="noopener noreferrer ">
              <Image
                src="/logo.png"
                width={500}
                height={500}
                alt="Scorpio Digitizing embroidery company logo"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover cursor-pointer"
              />
            </a>
          </div>

          {/* CONTENT */}
          <div className="w-full lg:w-1/2 px-4">
            <h2 className="text-2xl font-semibold text-indigo-300 mb-4">
              Our Story
            </h2>
            <p className="text-gray-200 mb-4 leading-relaxed">
              Scorpio Digitizing is a professional embroidery digitizing company
              providing high-quality digitizing services for logos, artwork, and
              custom designs. We convert designs into clean, stitch-ready
              embroidery files compatible with all machines.
            </p>

            <p className="text-gray-200 mb-6 leading-relaxed">
              Our experienced digitizers focus on accuracy, stitch density, and
              smooth finishes to ensure perfect embroidery results on caps,
              jackets, and garments.
            </p>

            <h2 className="text-2xl font-semibold text-indigo-300 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Our mission is to deliver high-quality embroidery digitizing
              services with fast turnaround, affordable pricing, and excellent
              customer support. We aim to build long-term relationships with
              clients across the USA and worldwide.
            </p>

            <h2 className="text-2xl font-semibold text-indigo-300 mb-4">
              Freestanding Lace Digitizing
            </h2>
            <p className="text-gray-200 leading-relaxed">
              We create detailed freestanding lace (FSL) designs that are clean,
              durable, and ideal for patches, decorative embroidery, and custom
              artwork.
            </p>
          </div>
        </div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-indigo-300 mb-2">
              High Quality Digitizing
            </h3>
            <p className="text-gray-300">
              Clean stitching, perfect density, and professional embroidery
              results every time.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-indigo-300 mb-2">
              24 Hour Turnaround
            </h3>
            <p className="text-gray-300">
              Fast delivery for urgent projects without compromising quality.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-indigo-300 mb-2">
              Unlimited Revisions
            </h3>
            <p className="text-gray-300">
              We revise your design until you are 100% satisfied.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
