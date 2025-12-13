"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full sticky top-0 z-50 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/image.png" alt="Logo" width={28} height={28} className="rounded" />
          <span className="sr-only">Home</span>
        </Link>

        <nav className="hidden items-center justify-center gap-10 text-sm md:flex">
          <Link href="/" className="text-zinc-300 transition-colors hover:text-white">
            Home
          </Link>
          <Link href="/services" className="text-zinc-300 transition-colors hover:text-white">
            Services
          </Link>
          <Link href="/projects" className="text-zinc-300 transition-colors hover:text-white">
            Projects
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="group hidden items-center gap-1 text-sm text-white underline-offset-4 hover:underline md:inline-flex"
          >
            <span>Let's talk</span>
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <div className="hidden h-5 w-px bg-white/30 md:block" />
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex flex-col items-end gap-1.5">
            <span className="h-0.5 w-4 rounded-full bg-white"></span>
            <span className="h-0.5 w-6 rounded-full bg-white"></span>
          </button>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/80 backdrop-blur-lg transition-all duration-300 md:hidden",
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <div className="mx-auto flex h-full max-w-7xl flex-col px-6">
          <div className="flex h-[72px] items-center justify-end">
            <button onClick={() => setIsMenuOpen(false)}>
              <X className="size-7 text-white" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <nav className="flex flex-1 flex-col items-center justify-center gap-8 text-center">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl text-zinc-300 transition-colors hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl text-zinc-300 transition-colors hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/projects"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl text-zinc-300 transition-colors hover:text-white"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="group mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-lg text-white"
            >
              <span>Let's talk</span>
              <ArrowUpRight className="size-5" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
