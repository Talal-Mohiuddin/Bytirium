'use client';

import React from "react";
import Image from "next/image";
import VisionSection from "@/components/visionsection";
import SvgBack from "@/components/svgback"

const services = [
  "Website Design & Development",
  "Custom Web Applications",
  "E-Commerce Solutions",
  "Headless CMS & Content Platforms",
  "Progressive Web Apps (PWAs)",
  "Frontend Engineering",
  "Maintenance & Growth",
];

export default function ServicesPage(): React.JSX.Element {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#121212] text-white">
      <div className="relative flex flex-col items-center px-0 py-12 md:py-16 lg:py-20 w-full">
        {/* replace inline SVG with shared background component */}
        <SvgBack className="pointer-events-none absolute inset-0 z-0" />

        {/* Hero content above background */}
        <div className="relative z-10 flex flex-col items-center w-full px-6 md:px-10 lg:px-16 xl:px-24">
          <h1 className="text-xl md:text-2xl font-semibold tracking-wide mb-12">SERVICES</h1>

          <div
            className="
              grid w-full gap-10 lg:gap-16 xl:gap-24
              grid-cols-1 lg:grid-cols-[1fr_auto_1fr]
              items-center
            "
          >
            {/* Left copy column: slightly wider for readability */}
            <div className="w-full max-w-lg text-left space-y-3">
              <h2 className="text-2xl md:text-3xl font-semibold">Web Development</h2>
              <p className="text-sm md:text-base text-gray-200">Build Faster, Look Sharper, Convert Better</p>
              <p className="text-xs md:text-sm leading-relaxed text-gray-300">
                We Design and develop high-<br />
                performing websites and web apps<br />
                that feel effortless to use and easy to<br />
                grow. From a clean marketing site to a<br />
                complex product with user dashboards<br />
                and integrations. We focus on speed,<br />
                security, accessibility and measurable<br />
                business outcomes like more leads,<br />
                higher conversion rates and lower<br />
                maintenance overhead.
              </p>
            </div>

            {/* Center logo: centered and larger */}
            <div className="relative mx-auto w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
              <Image
                src="/image.png"
                alt="Bytirium Logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 512px"
              />
            </div>

            {/* Right buttons column: keep compact and aligned */}
            <div className="w-full max-w-[20rem] space-y-2 justify-self-end lg:justify-self-start">
              {services.map((item) => (
                <button
                  key={item}
                  className="
                    relative w-full overflow-hidden rounded-full
                    border border-white/8
                    bg-gradient-to-b from-white/6 to-white/0
                    backdrop-blur-2xl backdrop-saturate-150
                    px-5 py-2 text-[11px] md:text-sm text-gray-100
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.22),inset_0_-1px_0_rgba(255,255,255,0.08)]
                    transition-all duration-300
                    hover:border-purple-500/40 hover:shadow-[0_0_22px_rgba(125,28,144,0.35)]
                    before:content-[''] before:absolute before:inset-x-3 before:top-[10%]
                    before:h-2 before:rounded-full
                    before:bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.35)_50%,rgba(255,255,255,0)_100%)]
                    before:opacity-60
                    after:content-[''] after:absolute after:inset-0
                    after:bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.06)_35%,rgba(0,0,0,0)_60%,rgba(255,255,255,0.07)_100%)]
                    after:pointer-events-none
                  "
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 md:mt-14">
            <button className="rounded-full bg-[#7d1c90] px-8 md:px-10 py-2 text-xs md:text-sm font-semibold tracking-wide shadow-lg shadow-[#7d1c90]/30 hover:bg-[#8b23a0] transition">
              LET&apos;S TALK ↗
            </button>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <VisionSection />
    </div>
  );
}
