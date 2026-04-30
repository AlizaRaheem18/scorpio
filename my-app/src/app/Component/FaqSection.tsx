"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "What are your embroidery digitizing service charges?",
    a: "Our embroidery digitizing pricing depends on design complexity, stitch count, and turnaround time. We offer affordable and customized quotes for cap logos, jacket back digitizing, and vector art services.",
  },
  {
    q: "How long does embroidery digitizing take?",
    a: "Most embroidery digitizing orders are completed within 12 to 24 hours. Complex designs such as jacket back digitizing may take slightly longer depending on details.",
  },
  {
    q: "Do you offer bulk discounts for digitizing services?",
    a: "Yes, we provide special discounts for bulk embroidery digitizing orders and long-term clients. Contact us to get a custom quote.",
  },
  {
    q: "What file formats do you provide?",
    a: "We provide embroidery files in DST, PES, JEF, EXP, and other formats based on your machine requirements. Vector files are delivered in AI, EPS, PDF, or SVG formats.",
  },
  {
    q: "Do you offer free revisions?",
    a: "Yes, we offer unlimited free revisions to ensure your embroidery design stitches out perfectly with premium quality.",
  },
];

export default function FaqSection() {
  const [active, setActive] = useState<number | null>(0);

  const toggle = (i: number) => {
    setActive(active === i ? null : i);
  };

  return (
    <section
      className="py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900"
      aria-labelledby="faq-heading"
    >
      {/* SEO STRUCTURED DATA (VERY IMPORTANT) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        
        {/* LEFT SIDE */}
        <div className="text-white">
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Embroidery Digitizing FAQs
          </h2>

          <p className="text-gray-200 mb-6 leading-relaxed text-sm md:text-base">
            Find answers to common questions about our embroidery digitizing,
            vector art conversion, pricing, turnaround time, and file formats.
            We provide high-quality, stitch-ready designs with fast delivery.
          </p>

          <Link
            href="/quote"
            className="inline-block bg-white bg-gradient-to-r from-purple-500 to-pink-500 px-7 py-3 rounded-full font-semibold shadow-md hover:scale-105 hover:shadow-lg transition duration-300"
            aria-label="Get a free quote for embroidery digitizing services"
          >
            Get Free Quote
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur rounded-xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-5 py-4 font-medium text-gray-800 hover:bg-gray-100 transition"
                aria-expanded={active === index}
                aria-controls={`faq-${index}`}
              >
                {item.q}
                <span className="text-xl font-bold text-purple-500">
                  {active === index ? "−" : "+"}
                </span>
              </button>

              <div
                id={`faq-${index}`}
                className={`px-5 text-sm text-gray-600 transition-all duration-300 ${
                  active === index
                    ? "max-h-40 py-3 opacity-100"
                    : "max-h-0 overflow-hidden opacity-0"
                }`}
              >
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}