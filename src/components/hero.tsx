import Image from "next/image"
import { ArrowRight } from "lucide-react"
import SvgBack from "@/components/svgback"

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black h-screen">
      <SvgBack className="absolute inset-0 z-0" />
      <div className="scanlines" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-6 md:pt-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <div className="relative z-10 md:max-w-[520px]">
            {/* purple glow stripe behind heading */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 w-[160%] h-36 md:h-48 rounded-full bg-[radial-gradient(closest-side,rgba(147,51,234,0.45),transparent)] blur-3xl"
            />
            <h1 className="text-3xl md:text-4xl font-semibold leading-[1.05] text-white uppercase tracking-wide">
              <span className="block">TURNING VISION</span>
              <span className="block">INTO SCALABLE</span>
              <span className="block">REALITY.</span>
            </h1>
            <p className="mt-4 md:mt-5 text-white/80">
              We design and build digital products that drive innovation and business growth.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-5 py-3 text-sm font-semibold text-white hover:bg-purple-500 transition-colors btn-glow"
              >
                LET’S TALK
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>

          <div className="relative h-[360px] md:h-[460px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image src="/image.png" alt="Brand" width={420} height={420} className="opacity-95" priority />
            </div>
          </div>

          <div className="relative z-10">
            <p className="text-zinc-300">
              We design and build digital products that drive innovation and business growth.
            </p>
            <p className="mt-3 text-zinc-400">We design and build digital products that drive innovation.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="inline-flex rounded-full border border-white/15 px-4 py-2 text-sm text-white/90">
                UX UI
              </span>
              <span className="inline-flex rounded-full border border-white/15 px-4 py-2 text-sm text-white/90">
                Web Development
              </span>
              <span className="inline-flex rounded-full border border-white/15 px-4 py-2 text-sm text-white/90">
                Digital Marketing
              </span>
              <a
                href="#services"
                className="inline-flex items-center justify-center size-10 rounded-full border border-white/20 text-white/90 hover:bg-white/10"
              >
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
