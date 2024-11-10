import Hero from "./components/hero";
import Skill from "./components/skill";
import Contact from "./components/contact";
import About from "./components/about";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
}