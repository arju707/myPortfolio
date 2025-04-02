import React from 'react'
import { motion } from 'framer-motion'
import profilepic from "/profilepic.png"

const Hero = () => {
  return (
    <div id='home' className='text-white px16 
     flex min-h-scree  items-center py-28 md:px-32'>
      <div className='flex flex-col items-center gap-10 text-white'>
    <motion.div
    initial={{y:-50, opacity:0}}
    animate={{y:0 , opacity:1}}
    transition={{ duration:0.8, delay:0.2}}>
      <img  className='rounded-2xl cursor-pointer w-[270px] h-[280px] shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-1-5 hover:shadow-2xl hover:shadow-indigo-600 ' src={profilepic} alt="" />
    </motion.div>

    <motion.div className='flex max-w-[600px] flex-col items-center gap-3 text-center '
    
    initial={{y: 50, opacity:0}}
    animate={{y:0 , opacity:1}}
    transition={{ duration:0.8, delay:0.2}}
    >
      <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl h-20"  >Arjun Vinod</h1>
      <h3   className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl font-light md:text-3xl" >Web Developer</h3>
      <p className='md:text-base text-pretty text-sm text-gray-400'> I'm a passionate Web Developer skilled in React, Next.js, and Tailwind CSS, dedicated to building fast, responsive, and user-friendly web applications. With a strong focus on performance and clean code, I create seamless digital experiences that blend functionality with modern design. Always eager to learn and innovate, I thrive on solving complex problems and bringing ideas to life through code.</p>
    </motion.div>
      </div>
     </div>
  )
}

export default Hero