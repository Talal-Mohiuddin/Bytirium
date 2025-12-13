'use client';

import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs(): React.JSX.Element {
  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: "rgb(19, 18, 19)" }}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 md:gap-10 items-start">
          {/* Left: Heading */}
          <div className="pt-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              BUILD FASTER
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              LOOK SHARPER
            </h3>
            <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              style={{ color: "rgb(168, 85, 247)" }}>
              CONVERT BETTER
            </h4>
          </div>

          {/* Right: Narrow cards aligned to heading top */}
          <div className="flex flex-wrap lg:flex-nowrap items-start gap-4">
            {/* Card 1 (narrow) */}
            <div className="relative w-[280px] md:w-[300px] rounded-2xl overflow-hidden bg-[#2a2a2a] p-4 md:p-5">
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="relative h-24 md:h-28 rounded-lg overflow-hidden mb-3">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600&auto=format&fit=crop"
                  alt="Tech Blog"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="inline-block px-2.5 py-1 rounded-full bg-white/10 text-white text-[11px] font-medium">
                Tech Blog
              </div>
            </div>

            {/* Card 2 (narrow) */}
            <div className="relative w-[280px] md:w-[300px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900 to-purple-900 p-4 md:p-5">
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="relative h-24 md:h-28 rounded-lg overflow-hidden mb-3 bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/20" />
                </div>
              </div>
              <div className="inline-block px-2.5 py-1 rounded-full bg-white/10 text-white text-[11px] font-medium">
                Tech Blog
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section (image, description, stats, CTA) */}
        <div className="mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-[520px_1fr] gap-8 md:gap-10 items-start">
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600&auto=format&fit=crop"
              alt="Team working"
              className="w-full h-[320px] md:h-[360px] lg:h-[380px] object-cover"
            />
          </div>
          <div>
            <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-8">
              We Design And Develop High-Performing Websites And Web Apps That Feel Effortless To Use And Easy To Grow.
              From A Clean Marketing Site To A Complex Product With User Dashboards And Integrations, We Focus On Speed,
              Security, Accessibility, And Measurable Business Outcomes—Like More Leads, Higher Conversion Rates, And
              Lower Maintenance Overhead.
            </p>
            <div className="grid grid-cols-3 gap-6 md:gap-8 mb-10">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">100+</div>
                <p className="text-gray-400 text-xs md:text-sm mt-1">Completed Projects</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">1k+</div>
                <p className="text-gray-400 text-xs md:text-sm mt-1">Satisfied Customers</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white">30+</div>
                <p className="text-gray-400 text-xs md:text-sm mt-1">Worldwide Honors</p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-all"
            >
              <span className="uppercase tracking-wider text-sm">LET&apos;S TALK</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
