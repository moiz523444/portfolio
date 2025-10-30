"use client";
import { useState } from "react";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const result = await res.json();
    setLoading(false);

    if (result.success) {
      alert("✅ Email sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("❌ Email failed to send!");
    }
  };

  return (
    <section id="contact" className="xsm:pb-32 pb-16 scroll-mt-10 mt-28">
      <div className="container flex justify-center">
        <div className="w-full max-w-2xl bg-[#b9e1ff] text-center rounded-[0.9375rem] md:py-20 xsm:pt-8 xsm:pb-16 xsm:px-14 px-5 pt-3 pb-4">
          <h3 className="sm:text-h3 xsm:text-h4 text-h5 font-bold text-black mb-24">
            Get in Touch
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <label className="relative custom_label mt-3">
              <input
                type="text"
                name="name"
                className="w-full bg-input xsm:h-16 h-12 rounded-[13px] outline-none px-4 mt-5"
                value={form.name}
                onChange={handleChange}
                required
              />
              <span className="absolute z-10 font-medium">Name</span>
            </label>

            <label className="relative custom_label">
              <input
                type="email"
                name="email"
                className="w-full bg-input xsm:h-16 h-12 rounded-[13px] outline-none px-4 mt-5"
                value={form.email}
                onChange={handleChange}
                required
              />
              <span className="absolute z-10 font-medium">Email</span>
            </label>

            <label className="relative custom_label">
              <textarea
                name="message"
                className="w-full bg-input rounded-[13px] h-[9.375rem] resize-none outline-none px-4 pt-4 mt-5"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
              <span className="absolute z-10 font-medium">Message</span>
            </label>

            <button
              type="submit"
              disabled={loading}
              className="xsm:h-[4.0625rem] h-12 rounded-[13px] flex items-center justify-center text-lg bg-gradient-to-r from-[#4FACFE] to-[#00F2FE] btn-gradeint animate-pulse"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
