import Link from "next/link";
import { Hero } from "../components/home/hero";
import { AboutMe } from "@/components/home/about-me";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutMe />
    </main>
  );
}
