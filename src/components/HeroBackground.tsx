export default function SvgBack({ className }: { className?: string }) {
  return (
    <div className={className ?? "absolute inset-0 z-0"}>
      <svg
        className="w-full h-full object-cover opacity-80"
        viewBox="0 0 1920 805"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* purple shade layer */}
        <g filter="url(#filter0_f_258_1215)">
          <path d="M1943 623.999C1718.41 503.367 1371.19 425.983 981.5 425.983C591.814 425.983 244.589 503.367 20 623.999V165C244.589 285.633 591.814 363.017 981.5 363.017C1371.19 363.017 1718.41 285.632 1943 165V623.999Z" fill="#5E0E69"/>
        </g>
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
          <filter id="filter0_f_258_1215" x="-145" y="0" width="2253" height="789" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="82.5" result="effect1_foregroundBlur_258_1215"/>
          </filter>
        </defs>
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#121212]" />
    </div>
  )
}
