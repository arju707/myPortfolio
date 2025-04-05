import React from 'react'
import AppleProject from "/AppleProject.png"
import SneakersProject from "/sneakerProject.png"
import BmiProject from "/BmiCalculator.png"
import { motion } from "framer-motion"

const Projects = () => {

  const projectData = [
    {
      image: SneakersProject,
      title: "SNEAKER",
      discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore laborum, eligendi possimus cum culpa harum fugit nemo iure atque magni! Quo nobis quae deserunt neque ratione molestias harum dicta labore!",
      technologies: ["HTML", "CSS", "Js"]
    },
    {
      image: BmiProject,
      title: "BMI CALCULATOR",
      discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore laborum, eligendi possimus cum culpa harum fugit nemo iure atque magni! Quo nobis quae deserunt neque ratione molestias harum dicta labore!",
      technologies: ["HTML", "CSS", "Js"]
    },
    {
      image: AppleProject,
      title: "APPLE CLONE",
      discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore laborum, eligendi possimus cum culpa harum fugit nemo iure atque magni! Quo nobis quae deserunt neque ratione molestias harum dicta labore!",
      technologies: ["HTML", "CSS"]
    }
  ];

  const ScrollReveal = ({ children, delay = 0 }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }} // 👈 Animation will happen every time it's in view
        transition={{ duration: 0.8, delay }}
      >
        {children}
      </motion.div>
    );
  };

  const ProjectCard = ({ project, delay }) => {
    return (
      <ScrollReveal delay={delay}>
        <div className='flex flex-col items-center gap-8 md:flex-row md:gap-24'>
          <img
            src={project.image}
            alt={project.title}
            className='w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]'
          />
          <div className='flex flex-col gap-5'>
            <div>
              <div className='text-xl font-semibold'>{project.title}</div>
              <p className='text-gray-400'>{project.discription}</p>
            </div>
            <div className='flex flex-wrap gap-5'>
              {project.technologies.map((tech, index) => (
                <span key={index} className='rounded-lg bg-black p-3'>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    );
  };

  return (
    <div className='flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24' id='projects'>
      <ScrollReveal>
        <h1 className='text-4xl font-light text-white md:text-6xl'>My Projects</h1>
      </ScrollReveal>
      <div className='flex w-full max-w-[1000px] flex-col gap-16 text-white'>
        {
          projectData.map((project, index) => (
            <ProjectCard key={index} project={project} delay={index * 0.2} />
          ))
        }
      </div>
    </div>
  );
};

export default Projects;
