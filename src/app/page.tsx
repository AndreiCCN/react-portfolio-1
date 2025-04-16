import About from "@/components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skill from "@/components/Skill";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ReactLenis from "lenis/react";

const App = () => {
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Contact />
        <Footer />
      </main>
    </ReactLenis>
  );
};

export default App;
