"use client";
import { useEffect, useRef } from "react";

export default function Solutions() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const play = async () => {
      try {
        await v.play();
        v.playbackRate = 0.5; // slow down
      } catch {
        // ignore autoplay errors
      }
    };
    play();
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Full background video */}
      <video
        ref={videoRef}
        src="/circle.mp4"
        className="absolute inset-0 h-full w-full object-cover" // no opacity/filters
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Content */}
      <div className="relative mx-auto flex h-screen max-w-7xl items-center justify-center px-6">
        {/* Centered text */}
        <div className="relative z-10 flex items-center justify-center px-6 text-center">
          <div className="max-w-md">
            <h1 className="text-white text-[28px] sm:text-[32px] md:text-[36px] font-semibold leading-tight tracking-wide">
              DIGITAL{" "}
              <span className="text-purple-400">SOLUTIONS</span>
              <br />
              DESIGNED FOR GROWTH
            </h1>
            <p className="mt-4 text-[12px] sm:text-[13px] md:text-[14px] text-gray-200 leading-relaxed">
              From startups to enterprises, we help organizations design, build,
              and scale digital experiences that drive measurable success.
            </p>
          </div>
        </div>

        {/* Pill labels */}
        <div className="pointer-events-none z-10">
          {/* Left side */}
          <div className="absolute left-16 top-[34%]">
            <span className="relative inline-block rounded-full bg-gradient-to-b from-[#5A1D92] to-[#2B0C4F] px-6 py-2 text-sm text-white font-medium tracking-wide ring-1 ring-purple-400/40 shadow-[0_8px_24px_-8px_rgba(86,24,150,0.6)]">
              {/* inner shine */}
              <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.22),transparent_60%)]" />
              <span className="relative">Machine Learning</span>
            </span>
          </div>
          <div className="absolute left-20 bottom-[18%]">
            <span className="relative inline-block rounded-full bg-gradient-to-b from-[#5A1D92] to-[#2B0C4F] px-6 py-2 text-sm text-white font-medium tracking-wide ring-1 ring-purple-400/40 shadow-[0_8px_24px_-8px_rgba(86,24,150,0.6)]">
              <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.22),transparent_60%)]" />
              <span className="relative">App Development</span>
            </span>
          </div>

          {/* Right side */}
          <div className="absolute right-24 top-[26%]">
            <span className="relative inline-block rounded-full bg-gradient-to-b from-[#5A1D92] to-[#2B0C4F] px-6 py-2 text-sm text-white font-medium tracking-wide ring-1 ring-purple-400/40 shadow-[0_8px_24px_-8px_rgba(86,24,150,0.6)]">
              <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.22),transparent_60%)]" />
              <span className="relative">UX UI</span>
            </span>
          </div>
          <div className="absolute right-16 top-[48%]">
            <span className="relative inline-block rounded-full bg-gradient-to-b from-[#5A1D92] to-[#2B0C4F] px-6 py-2 text-sm text-white font-medium tracking-wide ring-1 ring-purple-400/40 shadow-[0_8px_24px_-8px_rgba(86,24,150,0.6)]">
              <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.22),transparent_60%)]" />
              <span className="relative">ERP- Solution</span>
            </span>
          </div>
          <div className="absolute right-20 bottom-[14%]">
            <span className="relative inline-block rounded-full bg-gradient-to-b from-[#5A1D92] to-[#2B0C4F] px-6 py-2 text-sm text-white font-medium tracking-wide ring-1 ring-purple-400/40 shadow-[0_8px_24px_-8px_rgba(86,24,150,0.6)]">
              <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.22),transparent_60%)]" />
              <span className="relative">Web Development</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
