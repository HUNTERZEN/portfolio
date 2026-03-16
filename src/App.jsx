import React from 'react';
import { Navbar } from './components/Navbar.jsx';
import { Hero } from './components/Hero.jsx';
import { About } from './components/About.jsx';
import { Skills } from './components/Skills.jsx';
import { Projects } from './components/Projects.jsx';
import { Footer } from './components/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden">
      <Navbar />
      <main className="flex flex-col items-center">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
