import React from 'react'
import AppleProject from "/AppleProject.png"
import SneakersProject from "/sneakerProject.png"
import BmiProject from "/BmiCalculator.png"
import {motion} from "framer-motion"
import { div } from 'framer-motion/client'

const Projects = () => {

const projectData=[{
  image:SneakersProject,
  title:"SNEAKER",
  discription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit Inventore laborum, eligendi possimus cum culpa harum fugit nemo iure atque magni! Quo nobis quae deserunt neque ratione molestias harum dicta labore!",
  technologies:["HTML","CSS","Js"]
},
{
  image:BmiProject,
  title:"BMI CALCULATOR",
  discription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit Inventore laborum, eligendi possimus cum culpa harum fugit nemo iure atque magni! Quo nobis quae deserunt neque ratione molestias harum dicta labore!",
  technologies:["HTML","CSS","Js"]
},
{
  image:AppleProject,
  title:"APPLE CLONE",
  discription:"Lorem ipsum dolor sit amet consectetur, adipisicing elit Inventore laborum, eligendi possimus cum culpa harum fugit nemo iure atque magni! Quo nobis quae deserunt neque ratione molestias harum dicta labore!",
  technologies:["HTML","CSS"]
}]


const projectCard=({Projects})=>{
  return(
    <div className='flex flex-col items-center gap-8 md:flex-row md:gap-24'>
      <img src={Projects.image} alt=""  className='w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]'/>
      <div className='flex flex-row gap-5'>
           <div>
                <div className='text-xl font-semibold'>{Projects.title}</div>
                 <p className='text-gray-400'>{Projects.discription}</p>
           </div>
           <div className='flex flex-wrap gap-5'>
            {
                Projects.technologies.map((tech, index)=>(
                  <span key={index} className='rounded-lg bg-black p-3'>{tech}</span>
                ))
            }
            </div>
      </div>
    </div>
  )
}

  return (
    <div className='flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24' id='projects'>
      <h1 className='text-4xl font-light text-white md:text-6xl'>My Projects</h1>
      <div className='flex w-full max-w[1000px] flex-col gap-16 text-white'>
        {
          projectData.map((Projects, index)=>(
            <projectCard key={index} project={Projects} />
          ))
        }
      </div>
    </div>
  )
}

export default Projects