import React, { useState } from "react";
import { BentoCard } from "./ui/BentoCard";
import { MailIcon, ArrowUpRightIcon } from "lucide-react";
import emailjs from "emailjs-com";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_zy5vn59", // Replace with your EmailJS service ID
        "template_9e7miln", // Replace with your EmailJS template ID
        formData,
        "FctDVyedCIkyv12Ju", // Replace with your EmailJS public key
      )
      .then(
        () => {
          alert("Message sent!");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error(error);
          alert("Failed to send message. Try again.");
          setLoading(false);
        },
      );
  };

  return (
    <section className="py-16" id="contact">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-2 h-2 rounded-full bg-blue-500" />
        <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest">
          Get in Touch
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Left Side: Heading + Subheading */}
        <div className="flex flex-col justify-center gap-4">
          <h3 className="text-4xl md:text-5xl font-bold text-white">
            Let's Build Something Together
          </h3>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
            Whether you have a project idea, want to collaborate, or just want
            to say hi, feel free to drop a message. I usually reply within 24
            hours.
          </p>
        </div>

        {/* Right Side: Contact Form */}
        <BentoCard className="p-6 md:p-10 bg-gradient-to-br from-[#111113] to-[#16161a]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required/>

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required/>

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required/>

            <button
              type="submit"
              disabled={loading}
              className={`flex items-center justify-center gap-2 px-6 py-3 mt-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}>
              {loading ? "Sending..." : "Send Message"}
              <ArrowUpRightIcon size={18} />
            </button>
          </form>

          <div className="mt-6 flex items-center gap-2 text-zinc-400">
            <MailIcon size={18} />
            <a href="mailto:md.sayemhossain.25@gmail.com"
              className="hover:text-white transition-colors">
              md.sayemhossain.25@gmail.com
            </a>
          </div>
        </BentoCard>
      </div>
    </section>
  );
}
