import React from 'react'
import About from "./components/About";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import ProjectCard from './components/ProjectCard';
import Contact from './components/contact';
import Footer from './components/Footer';
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <ProjectCard />
      <Contact />
      <Footer />
    </div>
  )
}
export default App
