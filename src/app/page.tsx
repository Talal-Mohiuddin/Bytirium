import Hero from "@/components/hero";
import AboutUs from "@/components/aboutus";
import SuccessStories from "@/components/successstories";
import ProjectShowcase from "@/components/projectShowcase";
import RecentBlogs from "@/components/recentBlogs";
import Contact from "@/app/contact/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <AboutUs />
      <SuccessStories />
      <ProjectShowcase />
      <RecentBlogs />
      <Contact />
    </main>
  );
}
