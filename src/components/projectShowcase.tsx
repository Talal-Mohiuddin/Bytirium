"use client"

import { useMemo, useState } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

type Project = {
  title: string
  subtitle: string
  category: string
  image: string
}

const categories = ["All", "UX UI", "Web Development", "App Development", "ERP-Solutions", "Machine Learning"]

const projects: Project[] = [
  {
    title: "TechNite",
    subtitle: "UI/UX / DEVELOPMENT",
    category: "UX UI",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "TechNite4U",
    subtitle: "WEB DEVELOPMENT",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Development",
    subtitle: "APP DEVELOPMENT",
    category: "App Development",
    image: "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "ERP",
    subtitle: "ERP-SOLUTIONS",
    category: "ERP-Solutions",
    image: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=1400&q=80",
  },
]

export default function ProjectShowcase() {
  const [active, setActive] = useState<string>("All")
  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  )

  return (
    <section className="relative bg-[#0a0a0a] px-5 py-20 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-wider text-zinc-100">OUR CRAFT, YOUR EXPRESSION.</h2>
        </div>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
          {categories.map((cat) => {
            const selected = active === cat
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors duration-300 ${
                  selected
                    ? "border-purple-500 bg-purple-500/10 text-purple-300"
                    : "border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-zinc-700 hover:text-zinc-100"
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
          {filtered.map((project) => (
            <Link href="#" key={project.title} className="group block">
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="px-1">
                <p className="mb-1 text-xs font-medium uppercase tracking-widest text-zinc-500">
                  {project.subtitle}
                </p>
                <div className="inline-flex items-center gap-2 text-lg font-semibold text-zinc-100">
                  <span>{project.title}</span>
                  <ArrowRight className="size-4 translate-y-px transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-zinc-400 transition-colors hover:text-white"
          >
            VIEW ALL PROJECTS
            <span className="grid h-8 w-8 place-items-center rounded-full bg-zinc-800 transition-colors group-hover:bg-purple-600">
              <ArrowRight className="size-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
