import { Hero } from "@/components/home/hero";
import { AboutMe } from "@/components/home/about-me";
import { Projects } from "@/components/home/projects";
import { UofTWebring } from "@/components/uoftwebring";

import "./App.css";
import useWindowDimensions from "@/utils/use-window-dimensions";

function App() {
    const { width } = useWindowDimensions();
    const mobileBreakpoint = 480

    return (
        <main>
            <Hero />
            { width > mobileBreakpoint && <AboutMe /> }
            <Projects />
            <div className="hidden">
                <UofTWebring />
            </div>
            { width <= mobileBreakpoint && <AboutMe /> }
        </main>
    );
}

export default App;
