'use client';

import React, { useState, FormEvent, ChangeEvent } from "react";
import { Instagram, Facebook, Twitter, Youtube, Linkedin, Mail } from "lucide-react";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  interest: string[];
  message: string;
}

export default function ContactPage(): React.JSX.Element {
  const [form, setForm] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: [],
    message: "",
  });

  const interests: string[] = ["UI/UX", "Web Development", "App Development", "ERP-Solutions"];

  const toggleInterest = (item: string): void => {
    setForm((prev) => ({
      ...prev,
      interest: prev.interest.includes(item)
        ? prev.interest.filter((i) => i !== item)
        : [...prev.interest, item],
    }));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("submit", form);
    alert("Form submitted (check console).\nImplement API route to send data.");
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#05000b] flex items-center justify-center p-6 md:p-10">
      {/* vignette + ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_45%,rgba(140,45,210,0.55)_0%,rgba(30,6,52,0.55)_38%,rgba(5,0,11,0.95)_78%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[#7d21c9]/35 blur-[90px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[#1a0030]/60 blur-[110px]"
      />

      <div className="relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 rounded-[26px] border border-white/10 px-10 py-12 md:px-14 md:py-14 shadow-[0_24px_90px_rgba(0,0,0,0.65)] bg-[radial-gradient(circle_at_0%_50%,rgba(122,28,194,0.55)_0%,rgba(60,12,94,0.35)_34%,rgba(12,2,22,0.70)_78%)]">
        {/* LEFT SECTION */}
        <div className="text-white flex flex-col justify-between">
          <div className="space-y-6">
            <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-white/70">
              <span className="text-white/85">•</span> Connect with us!
            </p>

            <h1 className="text-[34px] md:text-[40px] font-light leading-[1.12]">
              Turn Your Vision Into
              <br /> an Experience That
              <br /> Lasts
            </h1>

            <div className="h-px w-24 bg-white/20" />

            <a
              href="mailto:info@bytirium.com"
              className="inline-flex items-center gap-2 text-xs text-white/80 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              info@bytirium.com
            </a>
          </div>

          <div className="flex gap-2 pt-10 text-white/80">
            {/*
              keep existing hrefs; only refine sizing/styling to match the screenshot
            */}
            <a href="#" className="w-7 h-7 rounded-full border border-white/25 flex items-center justify-center hover:border-white/55 hover:bg-white/10 transition-all" aria-label="Instagram">
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="w-7 h-7 rounded-full border border-white/25 flex items-center justify-center hover:border-white/55 hover:bg-white/10 transition-all" aria-label="Facebook">
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="w-7 h-7 rounded-full border border-white/25 flex items-center justify-center hover:border-white/55 hover:bg-white/10 transition-all" aria-label="Twitter">
              <Twitter className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="w-7 h-7 rounded-full border border-white/25 flex items-center justify-center hover:border-white/55 hover:bg-white/10 transition-all" aria-label="YouTube">
              <Youtube className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="w-7 h-7 rounded-full border border-white/25 flex items-center justify-center hover:border-white/55 hover:bg-white/10 transition-all" aria-label="LinkedIn">
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center justify-center">
          <form className="w-full max-w-md text-white" onSubmit={handleSubmit}>
            <h2 className="text-center text-lg font-medium tracking-wide">Let&apos;s talk</h2>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
              <div>
                <label htmlFor="name" className="block text-[10px] text-white/45">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  className="mt-2 w-full bg-transparent border-0 border-b border-white/35 focus:outline-none focus:border-white/75 h-7 text-xs text-white/90"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-[10px] text-white/45">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  autoComplete="organization"
                  className="mt-2 w-full bg-transparent border-0 border-b border-white/35 focus:outline-none focus:border-white/75 h-7 text-xs text-white/90"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[10px] text-white/45">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  className="mt-2 w-full bg-transparent border-0 border-b border-white/35 focus:outline-none focus:border-white/75 h-7 text-xs text-white/90"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-[10px] text-white/45">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  className="mt-2 w-full bg-transparent border-0 border-b border-white/35 focus:outline-none focus:border-white/75 h-7 text-xs text-white/90"
                />
              </div>
            </div>

            <div className="mt-5">
              <p className="text-[10px] text-white/45">I&apos;m interested on</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {interests.map((item) => {
                  const active = form.interest.includes(item);
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleInterest(item)}
                      className={`px-3 py-1 rounded-full text-[10px] border transition-colors ${
                        active
                          ? "bg-white text-black border-white"
                          : "bg-transparent text-white/80 border-white/25 hover:border-white/55 hover:text-white"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-5">
              <p className="text-[10px] text-white/45">Tell us more about your project!</p>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="mt-2 w-full bg-transparent border-0 border-b border-white/35 focus:outline-none focus:border-white/75 min-h-[86px] resize-none text-xs text-white/90"
              />
            </div>

            <div className="mt-6 h-px w-full bg-white/22" />

            <button
              className="mt-6 w-full rounded-full bg-white text-black text-xs font-medium py-2.5 hover:bg-white/90 transition"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
