import React from "react";
import SvgBack from "@/components/svgback";

export default function VisionSection(): React.JSX.Element {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* use shared background */}
      <SvgBack className="absolute inset-0 z-0" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 flex flex-col items-center justify-center h-full">
        <h2 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight leading-tight text-white">
          Turn Your Vision Into an <br />
          Experience That Lasts
        </h2>
        <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto font-light tracking-wide">
          You have a story worth sharing — we help you tell it in a way <br className="hidden md:block" />
          that's impossible to ignore.
        </p>
      </div>
    </section>
  );
}
