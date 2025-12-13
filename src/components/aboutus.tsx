export default function AboutUs() {
  return (
    <section className="relative min-h-[640px] bg-[#0d0d0d] overflow-hidden flex items-center justify-center py-20">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="absolute rounded-full"
          style={{
            width: "520px",
            height: "520px",
            background: "radial-gradient(circle, #1a1a1a 0%, #0f0f0f 70%, #0d0d0d 100%)",
            boxShadow: "inset 0 0 60px rgba(0,0,0,0.8)",
          }}
        />
        <div
          className="absolute"
          style={{
            width: "540px",
            height: "540px",
            borderRadius: "50%",
            background:
              "conic-gradient(from 300deg, transparent 0deg, transparent 20deg, rgba(138,43,226,0.6) 70deg, rgba(148,0,211,0.8) 120deg, rgba(138,43,226,0.5) 180deg, transparent 220deg, transparent 360deg)",
            filter: "blur(28px)",
          }}
        />
        <div
          className="absolute"
          style={{
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "conic-gradient(from 120deg, transparent 0deg, transparent 30deg, rgba(128,0,128,0.3) 90deg, rgba(148,0,211,0.4) 140deg, rgba(128,0,128,0.2) 180deg, transparent 210deg, transparent 360deg)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-2xl px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-[42px] text-white mb-6 leading-tight tracking-wide">
          <span className="font-bold">DRIVEN</span>
          <span className="font-light"> BY </span>
          <span className="font-light">INNOVATION</span>
          <br />
          <span className="font-light">DEFINED BY </span>
          <span className="font-bold">EXCELLENCE</span>
        </h2>

        <p className="text-gray-400 text-sm mb-8 leading-relaxed font-light max-w-md mx-auto">
          Bytirium is a modern software agency dedicated to creating innovative digital solutions that help businesses
          grow and evolve. We blend design, technology, and strategy to build products that are not only functional but
          also meaningful.
        </p>

        <a
          href="#about"
          className="inline-flex items-center gap-2 text-white text-[10px] uppercase tracking-[0.2em] px-5 py-2.5 rounded-full border border-white/30 hover:border-white/50 transition-colors"
        >
          ABOUT US
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>
      </div>
    </section>
  );
}

