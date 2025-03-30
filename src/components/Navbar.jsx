import React, { useState } from "react";
import { BsGithub, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";


const Navbar = () => {


    const [isOpen,setIsOpen]=useState(false);






  return (
    <nav className="text-white  fixed z-10 flex w-full items-center justify-between border-b-gray-700 bg-black-70 px-16 py-6 backdrop-blur-md md:justify-evenly ">
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        Arjun
      </a>

      <ul className="hidden md:flex gap-10">
        <a
          href="#home"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
            <li>Home</li>

        </a>

        <a
          href="#Tech"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
            <li>Tech</li>
            
        </a>

        <a
          href="#Projects"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
            <li>Projects</li>
            
        </a>

        <a
          href="#Contact"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
            <li>Contact</li>
            
        </a>


      </ul>
<ul  className="hidden md:flex gap-5">


    <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100"><BsLinkedin/>  </li>

    <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100"><BsGithub/>  </li>
    <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100"><BsYoutube/>  </li>
    <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100"><BsTwitterX/>  </li>


    



</ul>

    </nav>
  );
};

export default Navbar;
