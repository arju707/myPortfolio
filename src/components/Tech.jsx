import React from 'react'
import { BiLogoDocker, BiLogoJavascript, BiLogoNodejs, BiLogoPostgresql, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi'
import { motion } from 'framer-motion'

const Tech = () => {
  return (
    <div id='Tech' className='flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32'>
      <motion.h1
      // variants={variants}
      // initial="hidden"
      // whileInView={visible}
      // transition={{duration:0.5}}
      
      className='text-4xl font-light text-white md:text-6xl'>Technologies</motion.h1>


      <div className='flex flex-wrap items-center justify-center gap-10 p-5'>
       <div>
          <BiLogoTypescript className='cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </div>

     <div>
          <BiLogoJavascript className='cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]'/>

        </div>

        <div>
          <BiLogoDocker className='cursor-pointer text-[80px] text-sky-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </div>

        <div>
          <BiLogoTailwindCss className='cursor-pointer text-[80px] text-sky-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </div>

        <div>
          <BiLogoNodejs className='cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </div>

        <div>
          <BiLogoPostgresql className='cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]'/>
        </div>

      </div>
    </div>
  )
}

export default Tech