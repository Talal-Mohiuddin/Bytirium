'use client';

import React, { useState } from "react";
import WhyChooseUs from "@/components/whychooseus";
import VisionSection from "@/components/visionsection";
import SvgBack from "@/components/svgback";

export default function AboutPage(): React.JSX.Element {
  const [activeSection, setActiveSection] = useState<"mission" | "vision" | "core-values">("mission");

  const team = [
    { id: "01", name: "Julia", role: "Marketing Manager", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop" },
    { id: "02", name: "Robert", role: "Backend Developer" },
    { id: "03", name: "Sara", role: "Frontend Developer" },
    { id: "04", name: "Steve", role: "UX/UI Designer" },
    { id: "05", name: "Lara", role: "Data Scientist" },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#121212] text-white">
      {/* Hero Section with Background (modeled after Projects page hero) */}
      <section className="relative w-full h-64 md:h-80 flex items-center justify-center overflow-hidden">
        {/* replace inline SVG with shared background */}
        <SvgBack className="pointer-events-none absolute inset-0 z-0" />

        {/* Centered title, nudged upwards */}
        <h1 className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -translate-y-4 md:-translate-y-8 text-4xl md:text-6xl font-semibold tracking-tight">
          ABOUT US
        </h1>
      </section>

      {/* Exact UI section */}
      <WhyChooseUs />

      {/* Mission / Vision / Core Values Section (inserted from your snippet) */}
      <section className="relative w-full overflow-hidden bg-[#0a0a0f] h-screen">
        {/* Top vignette */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
        {/* Purple glow band */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 800px 400px at 50% 50%, rgba(139, 35, 180, 0.25) 0%, rgba(88, 28, 135, 0.18) 30%, rgba(45, 15, 70, 0.12) 50%, rgba(10, 10, 15, 0) 70%)",
          }}
        />
        {/* Bottom vignette */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        {/* Mission content */}
        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10 lg:px-12 h-full">
          {/* Add more top spacing here */}
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 md:gap-20 items-start pt-24 md:pt-32">
            {/* Left: title stack */}
            <div className="select-none text-left space-y-3">
              <button
                onClick={() => setActiveSection("mission")}
                className={`text-left text-3xl md:text-4xl font-semibold transition-all duration-300 ${
                  activeSection === "mission" ? "text-white" : "text-white/40 hover:text-white/70"
                }`}
              >
                Our Mission
              </button>
              <button
                onClick={() => setActiveSection("vision")}
                className={`block text-left text-2xl md:text-3xl font-medium transition-all duration-300 ${
                  activeSection === "vision" ? "text-[#a78bbd]" : "text-[#a78bbd]/40 hover:text-[#a78bbd]/70"
                }`}
              >
                Vision
              </button>
              <button
                onClick={() => setActiveSection("core-values")}
                className={`block text-left text-2xl md:text-3xl font-medium transition-all duration-300 ${
                  activeSection === "core-values" ? "text-[#8a6d9e]" : "text-[#8a6d9e]/40 hover:text-[#8a6d9e]/70"
                }`}
              >
                Core Values
              </button>
            </div>

            {/* Right: content with icon and paragraphs */}
            <div className="max-w-2xl text-left space-y-6 pt-2">
              <div className="flex items-start gap-4">
                <span className="mt-1 flex-shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/8 border border-white/20">
                  <svg width="16" height="16" viewBox="0 0 24 24" className="text-white/80" fill="currentColor">
                    <path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z" />
                  </svg>
                </span>
                <p className="text-[15px] md:text-base leading-relaxed text-white/90">
                  {(
                    {
                      mission: "At Bytirium, our mission is to empower businesses through innovative digital solutions that inspire growth and efficiency.",
                      vision: "Our vision is to become a global leader in digital innovation, recognized for transforming how businesses operate in the digital age.",
                      "core-values": "Innovation drives everything we do. We constantly push boundaries to discover new possibilities and create groundbreaking solutions.",
                    } as const
                  )[activeSection]}
                </p>
              </div>

              <p className="text-[15px] md:text-base leading-relaxed text-white/90 pl-12">
                {(
                  {
                    mission:
                      "We aim to simplify complex challenges with smart design and powerful technology — creating products that are functional, scalable, and built for the future.",
                    vision:
                      "We envision a future where technology seamlessly integrates with business needs, creating solutions that are intuitive, powerful, and accessible to all.",
                    "core-values":
                      "Integrity is at our core. We build trust through transparency, honesty, and delivering on our promises every single time.",
                  } as const
                )[activeSection]}
              </p>

              <p className="text-[15px] md:text-base leading-relaxed text-white/75 pl-12">
                {(
                  {
                    mission:
                      "Every project we take on is driven by passion, precision, and a commitment to excellence — because we believe true innovation begins with purpose.",
                    vision:
                      "Through continuous innovation and dedication to excellence, we aim to set new standards in the digital landscape.",
                    "core-values":
                      "Excellence is our standard. We are committed to delivering quality in every project, ensuring our work exceeds expectations.",
                  } as const
                )[activeSection]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team – exact UI clone */}
      <section className="relative w-full bg-[#121212]">
        <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-12 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr_320px] gap-10 lg:gap-14 items-start">
            {/* Left column: title, copy, CTA */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-wide">OUR TEAM</h2>
              <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-[280px]">
                We&apos;re 120+ Individuals From Across The World Driven By Bold ideas.
              </p>
              <button className="inline-flex items-center gap-2 rounded-full bg-[#7d1c90] px-5 py-2 text-sm font-semibold text-white hover:bg-[#8b23a0] transition">
                LET&apos;S TALK ↗
              </button>
            </div>

            {/* Middle column: list */}
            <div className="relative">
              {/* Active top row (purple id + name + role + arrow) */}
              <div className="flex items-center justify-between pb-4">
                <div className="flex items-center gap-6">
                  <span className="text-[#7d1c90] font-medium tracking-wide">01</span>
                  <span className="text-[#7d1c90] font-medium">Julia</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-white/70 text-sm">Marketing Manager</span>
                  <span className="text-white/80">↗</span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-white/15" />

              {/* List rows */}
              <div className="mt-2">
                {team.slice(1).map((member, idx) => (
                  <div key={member.id} className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-6">
                      <span className="text-white/70 text-sm">{member.id}</span>
                      <span className="text-white font-semibold">{member.name}</span>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="text-white/60 text-sm">{member.role}</span>
                      <span className="text-white/80">↗</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom divider */}
              <div className="h-px w-full bg-white/15 mt-2" />
            </div>

            {/* Right column: round image */}
            <div className="flex items-start justify-center lg:justify-end">
              <div className="size-48 md:size-56 lg:size-64 rounded-full overflow-hidden">
                <img
                  src={team[0].image}
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision section at the end */}
      <VisionSection />
    </div>
  );
}