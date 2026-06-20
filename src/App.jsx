import useReveal from "./hooks/useReveal";
import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Work from "./components/Work";
import About from "./components/About";
import Education from "./components/Education";
import Process from "./components/Process";
import Contact from "./components/Contact";

function App() {
  useReveal();

  return (
    <div className="min-h-screen">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <About />
        <Education />
        <Process />
        <Contact />
      </main>
    </div>
  );
}

export default App;
