import Link from "next/link";
import { Hero } from "@/components/home/hero";
import { AboutMe } from "@/components/home/about-me";
import { Projects } from "@/components/home/projects";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutMe />
      {/* <Projects /> */}
    </main>
  );
}
