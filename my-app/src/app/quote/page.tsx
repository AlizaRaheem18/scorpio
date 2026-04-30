"use client";

import React, { useState } from "react";

const QuotePage = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const form = e.target;

    const fileInput = form.file.files[0];

    let base64File = "";

    if (fileInput) {
      base64File = await toBase64(fileInput);
    }

    const data = {
      name: form.name.value,
      email: form.email.value,
      service: form.service.value,
      message: form.message.value,
      file: base64File,
      fileName: fileInput ? fileInput.name : "",
      fileType: fileInput ? fileInput.type : "",
    };

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbxjISmAMIsnjLDCZEmyqAklu4RT6U9RtYe7RfMabWyEJetdX6PowuTJtPI7cH5nexr8ng/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      const result = await res.text();

      if (result === "Success") {
        setSuccess(true);
        form.reset();
      } else {
        console.log(result);
      }
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  const toBase64 = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-3xl bg-gray-900 p-8 rounded-xl">
        <h1 className="text-3xl text-center text-white mb-6">
          Get A Free Quote
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input name="name" placeholder="Name" required className="w-full p-3" />
          <input name="email" type="email" placeholder="Email" required className="w-full p-3" />

          <select name="service" className="w-full p-3">
            <option>Embroidery Digitizing</option>
            <option>Vector Art</option>
            <option>Jacket Back Digitizing</option>
            <option>Cap Logo Digitizing</option>
            <option>3D puf</option>
          </select>

          <input type="file" name="file" className="w-full p-3" />

          <textarea name="message" placeholder="Message" required className="w-full p-3"></textarea>

          <button className="w-full bg-purple-600 text-white p-3">
            {loading ? "Submitting..." : "Submit"}
          </button>

          {success && <p className="text-green-400">Submitted Successfully</p>}
        </form>
      </div>
    </div>
  );
};

export default QuotePage;