import type { MetaFunction } from "@remix-run/node";
import { Hero } from "@/components/home/hero";
import { AboutMe } from "@/components/home/about-me";
import { Projects } from "@/components/home/projects";

export const meta: MetaFunction = () => {
  return [
    { title: "Kyaw Thiha" },
    { name: "description", content: "Welcome to my portfolio website!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Hero />
      <AboutMe />
      <Projects />
    </div>
  );
}
