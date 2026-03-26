import "./App.css";

import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import Services from "./components/Services.jsx"
import Projects from "./components/Projects.jsx"
import Expereince from "./components/Experience.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"

function App(){
  return (
    <>
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Expereince />
      <Contact />
      <Footer />
    </div>
    </>
  )
}

export default App;
