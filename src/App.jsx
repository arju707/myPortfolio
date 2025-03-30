import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tech from './components/Tech';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from './Background';

export default function App() {
  return (

    
    <div className='flex flex-col items-center px-4 md:px-8'>
      <Background />
      <Navbar />
      <Hero />
      <Tech />
      <Projects />
      <Contact />
    </div>
  )
}
  