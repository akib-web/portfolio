import { useEffect, useState } from 'react'
// import './App.css'
import '../src/assets/css/style.css'
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from './components/Nav';
import Skills from './components/Skills';
import Services from './components/Services';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  // const [count, setCount] = useState(0)
  //useEffect
  useEffect(() => {
    AOS.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
    // AOS.refresh();
  }, []);

  return (
    <div className="">
      <Nav />
      <Hero />
      <About/>
      <Skills/>
      <Services />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
