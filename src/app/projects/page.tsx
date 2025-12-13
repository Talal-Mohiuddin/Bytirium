'use client';

import React, { useState } from "react";
import Image from "next/image";
import VisionSection from "@/components/VisionSection";

const categories = [
  "ALL",
  "UI/UX",
  "WEB DEVELOPMENT",
  "APP DEVELOPMENT",
  "ERP SOLUTIONS",
  "MACHINE LEARNING"
];

const projects = [
  {
    id: 1,
    title: "TechNile",
    category: "APP DEVELOPMENT",
    image: "/project1.jpg",
  },
  {
    id: 2,
    title: "TechNeedy",
    category: "WEB DEVELOPMENT",
    image: "/project2.jpg",
  },
  {
    id: 3,
    title: "Development",
    category: "WEB DEVELOPMENT",
    image: "/project3.jpg",
  },
  {
    id: 4,
    title: "ERP",
    category: "ERP SOLUTIONS",
    image: "/project4.jpg",
  },
  {
    id: 5,
    title: "Development",
    category: "APP DEVELOPMENT",
    image: "/project5.jpg",
  },
  {
    id: 6,
    title: "ERP",
    category: "ERP SOLUTIONS",
    image: "/project6.jpg",
  },
  {
    id: 7,
    title: "UI Design",
    category: "UI/UX",
    image: "/project7.jpg",
  },
  {
    id: 8,
    title: "ML Project",
    category: "MACHINE LEARNING",
    image: "/project8.jpg",
  },
  {
    id: 9,
    title: "Web App",
    category: "WEB DEVELOPMENT",
    image: "/project9.jpg",
  },
  {
    id: 10,
    title: "Mobile App",
    category: "APP DEVELOPMENT",
    image: "/project10.jpg",
  },
];

export default function ProjectsPage(): React.JSX.Element {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProjects = activeCategory === "ALL" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const loadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <div className="min-h-screen w-full bg-[#121212] text-white">
      {/* Hero Section with Background */}
      <section className="relative w-full h-64 md:h-80 flex items-start justify-center overflow-hidden pt-12 md:pt-16">
        <div className="absolute inset-0 z-0">
          <svg 
            className="w-full h-full object-cover opacity-80" 
            viewBox="0 0 1920 805" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <g filter="url(#filter0_f_281_738)">
              <path d="M-2 165C222.589 289.837 569.814 369.918 959.5 369.918C1349.19 369.918 1696.41 289.838 1921 165.001V639.999C1696.41 515.162 1349.19 435.082 959.5 435.082C569.814 435.082 222.589 515.163 -2 640V165Z" fill="#5E0E69"/>
            </g>
            <g filter="url(#filter1_f_281_738)">
              <path d="M1921 604.643C1752.37 494.761 1385.25 418.594 959.5 418.594C533.754 418.594 166.628 494.761 -2 604.643V201.34C166.628 311.222 533.754 387.39 959.5 387.39C1385.25 387.39 1752.37 311.222 1921 201.34V604.643Z" fill="#5E0E69"/>
            </g>
            <g filter="url(#filter2_f_281_738)">
              <path d="M1921 562.966C1754.11 471.131 1386.12 407.332 958.981 407.332C532.727 407.332 165.376 470.868 -2 562.396V259.366C171.073 347.065 530.345 407.332 945.49 407.332C1384.54 407.332 1761.1 339.924 1921 243.949V562.966Z" fill="white"/>
            </g>
            <defs>
              <filter id="filter0_f_281_738" x="-167" y="0" width="2253" height="805" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="82.5" result="effect1_foregroundBlur_281_738"/>
              </filter>
              <filter id="filter1_f_281_738" x="-67" y="136.34" width="2053" height="533.303" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="32.5" result="effect1_foregroundBlur_281_738"/>
              </filter>
              <filter id="filter2_f_281_738" x="-102" y="143.949" width="2123" height="519.016" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_281_738"/>
              </filter>
            </defs>
          </svg>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#121212]" />
        </div>
        <h1 className="relative z-10 text-5xl md:text-7xl font-semibold tracking-tight">
          PROJECTS
        </h1>
      </section>

      {/* Category Filter */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-purple-600 text-white"
                  : "bg-transparent border border-gray-600 text-gray-400 hover:border-purple-500 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="relative h-64 md:h-72 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
                <h3 className="text-xl md:text-2xl font-semibold">
                  {project.title}
                </h3>
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center group-hover:bg-purple-500 transition-colors">
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Load More Button */}
      {hasMore && (
        <div className="flex justify-center py-12">
          <button
            onClick={loadMore}
            className="px-8 py-3 bg-transparent border border-gray-600 text-gray-300 rounded-full font-medium hover:border-purple-500 hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            LOAD MORE
            <svg
              className="w-5 h-5 animate-spin-slow"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Vision Section */}
      <VisionSection />
    </div>
  );
}
