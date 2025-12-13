import React from "react";

export default function VisionSection(): React.JSX.Element {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <svg 
          className="w-full h-full object-cover opacity-60" 
          viewBox="0 0 1920 805" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <g filter="url(#filter0_f_vision)">
            <path d="M-2 165C222.589 289.837 569.814 369.918 959.5 369.918C1349.19 369.918 1696.41 289.838 1921 165.001V639.999C1696.41 515.162 1349.19 435.082 959.5 435.082C569.814 435.082 222.589 515.163 -2 640V165Z" fill="#5E0E69"/>
          </g>
          <g filter="url(#filter1_f_vision)">
            <path d="M1921 604.643C1752.37 494.761 1385.25 418.594 959.5 418.594C533.754 418.594 166.628 494.761 -2 604.643V201.34C166.628 311.222 533.754 387.39 959.5 387.39C1385.25 387.39 1752.37 311.222 1921 201.34V604.643Z" fill="#5E0E69"/>
          </g>
          <g filter="url(#filter2_f_vision)">
            <path d="M1921 562.966C1754.11 471.131 1386.12 407.332 958.981 407.332C532.727 407.332 165.376 470.868 -2 562.396V259.366C171.073 347.065 530.345 407.332 945.49 407.332C1384.54 407.332 1761.1 339.924 1921 243.949V562.966Z" fill="white"/>
          </g>
          <defs>
            <filter id="filter0_f_vision" x="-167" y="0" width="2253" height="805" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="82.5" result="effect1_foregroundBlur_vision"/>
            </filter>
            <filter id="filter1_f_vision" x="-67" y="136.34" width="2053" height="533.303" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="32.5" result="effect1_foregroundBlur_vision"/>
            </filter>
            <filter id="filter2_f_vision" x="-102" y="143.949" width="2123" height="519.016" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_vision"/>
            </filter>
          </defs>
        </svg>
      </div>
      
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
