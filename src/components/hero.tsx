import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black">
      <div className="absolute inset-0 hero-left-glow" aria-hidden="true" />
      <div className="absolute inset-0 hero-right-glow" aria-hidden="true" />
      <div className="scanlines" />

      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
              <span className="block">TURNING VISION</span>
              <span className="block bg-gradient-to-r from-purple-500 to-fuchsia-400 bg-clip-text text-transparent">
                INTO SCALABLE
              </span>
              <span className="block bg-gradient-to-r from-purple-500 to-fuchsia-400 bg-clip-text text-transparent">
                REALITY.
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-zinc-300">
              We design and build digital products that drive innovation and business growth.
            </p>

            <div className="mt-10 flex items-center gap-4">
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
