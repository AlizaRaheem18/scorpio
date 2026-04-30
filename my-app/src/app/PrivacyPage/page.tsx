"use client";

import React from "react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-[#0b0b2b] via-[#0a0a23] to-[#2b0b2b] text-white">

      {/* HEADER */}
      <section className="text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Privacy Policy
        </h1>

        <p className="max-w-3xl mx-auto text-gray-300 text-sm md:text-base">
          This Privacy Policy explains how Scorpio Digitizing collects, uses,
          and protects your personal information when you use our website,
          request a quote, place an order, or contact us.
        </p>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 pb-20 space-y-10">

        {/* SECTION */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">
            What Personal Information Do We Collect?
          </h2>

          <p className="text-gray-300 mb-4">
            When you submit a quote request, place an order, or contact Scorpio
            Digitizing, we may collect the following information:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Selected Service Type</li>
            <li>Uploaded Design / Artwork / Embroidery Files</li>
            <li>Project Details / Design Instructions</li>
          </ul>
        </div>

        {/* SECTION */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Information From Other Sources
          </h2>

          <p className="text-gray-300">
            We may receive additional information from communication platforms
            or payment processors when required to complete your order, provide
            support, or process your request efficiently.
          </p>
        </div>

        {/* SECTION */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">
            How Do We Use Your Information?
          </h2>

          <p className="text-gray-300 mb-4">
            Scorpio Digitizing uses your information for the following business
            purposes:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Processing embroidery digitizing and vector art orders</li>
            <li>Preparing custom quotes</li>
            <li>Communicating regarding project updates</li>
            <li>Providing customer support</li>
            <li>Improving service quality and workflow</li>
          </ul>
        </div>

        {/* SECTION */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Security Measures
          </h2>

          <p className="text-gray-300">
            We implement reasonable technical and organizational security
            measures to protect your personal information, uploaded files, and
            project details from unauthorized access, disclosure, misuse, or
            alteration.
          </p>
        </div>

        {/* SECTION */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Confidentiality of Design Files
          </h2>

          <p className="text-gray-300">
            All logos, artwork, embroidery files, design files, and project
            materials submitted to Scorpio Digitizing remain confidential and
            are used solely for fulfilling your requested services.
          </p>
        </div>

        {/* SECTION */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Disclosure of Personal Information
          </h2>

          <p className="text-gray-300">
            Scorpio Digitizing does not sell, rent, or trade your personal
            information or design files to third parties. Information may only
            be shared when legally required or necessary to complete payment
            processing or technical service operations.
          </p>
        </div>

        {/* SECTION */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Policy Updates
          </h2>

          <p className="text-gray-300">
            We may update this Privacy Policy periodically. Any updates will be
            posted on this page with a revised effective date.
          </p>
        </div>

        {/* FOOT NOTE */}
        <div className="border-t border-gray-700 pt-6 text-sm text-gray-400">
          Effective Date: April 16, 2026
        </div>

      </section>
    </main>
  );
}