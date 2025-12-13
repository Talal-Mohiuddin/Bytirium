'use client';

import React from "react";
import Image from "next/image";
import VisionSection from "@/components/VisionSection";

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
      {/* Hero wrapper becomes relative; inject centered SVG as background */}
      <div className="relative flex flex-col items-center px-0 py-12 md:py-16 lg:py-20 w-full">
        {/* Hero background SVG centered */}
        <div
          className="
            pointer-events-none absolute z-0
            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-screen max-w-none
          "
        >
          <svg
            className="w-full h-auto opacity-80"
            viewBox="0 0 1920 805"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <g filter="url(#filter0_f_services)">
              <path d="M-2 165C222.589 289.837 569.814 369.918 959.5 369.918C1349.19 369.918 1696.41 289.838 1921 165.001V639.999C1696.41 515.162 1349.19 435.082 959.5 435.082C569.814 435.082 222.589 515.163 -2 640V165Z" fill="#5E0E69"/>
            </g>
            <g filter="url(#filter1_f_services)">
              <path d="M1921 604.643C1752.37 494.761 1385.25 418.594 959.5 418.594C533.754 418.594 166.628 494.761 -2 604.643V201.34C166.628 311.222 533.754 387.39 959.5 387.39C1385.25 387.39 1752.37 311.222 1921 201.34V604.643Z" fill="#5E0E69"/>
            </g>
            <g filter="url(#filter2_f_services)">
              <path d="M1921 562.966C1754.11 471.131 1386.12 407.332 958.981 407.332C532.727 407.332 165.376 470.868 -2 562.396V259.366C171.073 347.065 530.345 407.332 945.49 407.332C1384.54 407.332 1761.1 339.924 1921 243.949V562.966Z" fill="white"/>
            </g>
            <defs>
              <filter id="filter0_f_services" x="-167" y="0" width="2253" height="805" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="82.5" result="effect1_foregroundBlur_services"/>
              </filter>
              <filter id="filter1_f_services" x="-67" y="136.34" width="2053" height="533.303" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="32.5" result="effect1_foregroundBlur_services"/>
              </filter>
              <filter id="filter2_f_services" x="-102" y="143.949" width="2123" height="519.016" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_services"/>
              </filter>
            </defs>
          </svg>
        </div>

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
