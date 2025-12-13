import VisionSection from "@/components/visionsection";
import SvgBack from "@/components/svgback";

export default function BlogPage() {
  // posts data (clean and centralized)
  const posts = [
    {
      id: 1,
      category: "Tech Trends",
      title: "Why Small Businesses Can't Ignore Cybersecurity in 2025",
      excerpt:
        "Cybercrime is rising at an alarming rate. Hackers no longer target only big corporations—small businesses are often more vulnerable because ...",
      date: "April 27, 2025",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: 2,
      category: "Digital Marketing",
      title: "How Great Design Boosts Your Brand’s Online Presence",
      excerpt:
        "In today's digital-first world, design is more than just looks—it's how customers experience your brand. From your website’s layout to ...",
      date: "April 27, 2025",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: 3,
      category: "Product Design",
      title: "Design Systems: Build Faster with Consistency",
      excerpt:
        "A robust design system accelerates shipping and keeps your UI consistent. Learn how tokens, components, and documentation unlock scale ...",
      date: "May 2, 2025",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: 4,
      category: "Web Development",
      title: "From MVP to Scale: Modern Web Stack That Works",
      excerpt:
        "Picking the right stack for your MVP sets the foundation for growth. We compare Next.js, serverless, edge caching, and pragmatic tooling ...",
      date: "May 3, 2025",
      image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#121212] text-white">
      {/* Hero Section with Background */}
      <section className="relative w-full h-64 md:h-80 flex items-start justify-center overflow-hidden pt-12 md:pt-16">
        {/* replace inline SVG with shared background */}
        <SvgBack className="absolute inset-0 z-0" />
        <h1 className="relative z-10 text-5xl md:text-7xl font-semibold tracking-tight">
          BLOGS
        </h1>
      </section>

      {/* Blog Grid (refined UI) */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="flex flex-col gap-14">
          {posts.map((post, idx) => {
            const imageFirst = idx % 2 === 0;
            return (
              <article key={post.id} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Image card with grid pattern + corner glow */}
                <div className={`${imageFirst ? "md:order-1" : "md:order-2"} order-1`}>
                  <div className="relative rounded-2xl border border-white/15 bg-gradient-to-br from-white/8 to-white/4 shadow-[0_20px_60px_-20px_rgba(147,51,234,0.25)] p-3">
                    {/* subtle corner glow top-right */}
                    <div className="pointer-events-none absolute -top-6 -right-6 w-40 h-40 rounded-full bg-purple-500/25 blur-2xl" />
                    {/* grid pattern backdrop */}
                    <div className="relative rounded-xl overflow-hidden h-64 md:h-[320px]">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)]" />
                      <div
                        aria-hidden
                        className="absolute inset-0 opacity-[0.15]"
                        style={{
                          backgroundImage:
                            "linear-gradient(transparent 23px, rgba(255,255,255,0.08) 24px), linear-gradient(90deg, transparent 23px, rgba(255,255,255,0.08) 24px)",
                          backgroundSize: "24px 24px",
                        }}
                      />
                      <img
                        src={post.image}
                        alt={post.title}
                        className="relative z-10 w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Text card (fixed background to match reference) */}
                <div className={`${imageFirst ? "md:order-2" : "md:order-1"} order-2 flex`}>
                  <div className="relative rounded-2xl border border-white/15 bg-[#0E0E0E]/95 shadow-[0_20px_60px_-20px_rgba(147,51,234,0.25)] p-6 md:p-8 w-full">
                    {/* soft corner glow */}
                    <div className="pointer-events-none absolute -top-6 -right-6 w-40 h-40 rounded-full bg-purple-500/20 blur-2xl" />

                    <span className="text-xs md:text-sm text-gray-400 tracking-wide">
                      {post.category}
                    </span>
                    <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-gray-300">
                      {post.excerpt}
                    </p>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-sm text-gray-400">{post.date}</span>
                      <button className="px-5 py-2 rounded-full text-sm font-medium bg-purple-600 hover:bg-purple-500 transition-colors inline-flex items-center gap-2">
                        READ MORE
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Vision Section */}
      <VisionSection />
    </div>
  );
}