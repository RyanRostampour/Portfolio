import "./App.css";
import Nav from "./sections/Nav/Nav";
import ScrollProgress from "./common/ScrollProgress";
import NeuralBackground from "./common/NeuralBackground";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Stats from "./sections/Stats/Stats";
import Experience from "./sections/Experience/Experience";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <ScrollProgress />
      <NeuralBackground />
      <Hero />
      <About />
      <Projects />
      <Stats />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
