"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const toBase64 = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const form = e.currentTarget;
    const fileInput = (form.elements.namedItem("file") as HTMLInputElement)
      ?.files?.[0];

    let base64File = "";

    if (fileInput) {
      base64File = await toBase64(fileInput);
    }

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const service = (form.elements.namedItem("service") as HTMLSelectElement)
      .value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    const data = {
      name,
      email,
      service,
      message,
      file: base64File,
      fileName: fileInput ? fileInput.name : "",
      fileType: fileInput ? fileInput.type : "",
    };

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbxjISmAMIsnjLDCZEmyqAklu4RT6U9RtYe7RfMabWyEJetdX6PowuTJtPI7cH5nexr8ng/exec", // 👈 apna URL
        {
          method: "POST",
          body: JSON.stringify(data),
        },
      );

      const result = await res.text();

      if (result === "Success") {
        setSuccess(true);
        form.reset();

        // 🔥 WhatsApp AUTO MESSAGE
        const text = `Hello, I need embroidery digitizing.

Name: ${name}
Email: ${email}
Service: ${service}
Details: ${message}`;

        const isMobile = /iPhone|Android/i.test(navigator.userAgent);

        const url = isMobile
          ? `whatsapp://send?phone=923106467540&text=${encodeURIComponent(text)}`
          : `https://web.whatsapp.com/send?phone=923106467540&text=${encodeURIComponent(text)}`;

        window.open(url, "_blank");
      }
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };
  return (
    <section className="min-h-screen bg-gradient-to-r from-[#0b0b2b] via-[#0a0a23] to-[#2b0b2b] text-white py-20 px-4">
      <header className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact</h1>

        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Get professional embroidery digitizing services. Upload your logo or
          artwork.
        </p>
      </header>

      <div className="max-w-4xl mx-auto bg-[#0f172a]/80 border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl backdrop-blur-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="name"
              required
              placeholder="Full Name"
              className="px-4 py-3 rounded-lg bg-black/40 border border-gray-700"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="px-4 py-3 rounded-lg bg-black/40 border border-gray-700"
            />
          </div>

          <select
            name="service"
            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-700"
          >
            <option>Embroidery Digitizing</option>
            <option>Vector Art</option>
            <option>Jacket Back </option>
            <option>Cap/left chest logo </option>
            <option>3D puff </option>
          </select>

          <input
            type="file"
            name="file"
            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-700"
          />

          <textarea
            name="message"
            required
            rows={5}
            placeholder="Project details..."
            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-700"
          ></textarea>

          <div className="flex gap-4 flex-wrap">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
            >
              {loading ? "Submitting..." : "Place Order"}
            </button>

            <Link
              href="/quote"
              className="px-6 py-3 rounded-full border border-gray-400"
            >
              Get Quote
            </Link>

            {/* ✅ SMART WHATSAPP BUTTON */}
            <button
              type="button"
              onClick={() => {
                const isMobile = /iPhone|Android/i.test(navigator.userAgent);
                const url = isMobile
                  ? "/api/whatsapp?device=mobile"
                  : "/api/whatsapp?device=desktop";

                window.open(url, "_blank");
              }}
              className="px-6 py-3 rounded-full bg-green-500 hover:bg-green-600 font-semibold"
            >
              WhatsApp Us
            </button>
          </div>

          {success && (
            <p className="text-green-400 text-center">
              ✅ Submitted successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
