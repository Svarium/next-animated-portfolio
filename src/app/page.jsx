"use client"

import Image from "next/image";
import {motion} from "framer-motion";

const Homepage = () => {
  return (
    <motion.div 
    className="h-full" 
    initial={{y:"-200vh"}}
    animate={{y:"0%"}}
    transition={{duration:1}}
    >     
  <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:p-48x">
    {/* IMAGE CONTAINER */}

    <div className="h-1/2 lg:h-full lg:w-1/2 relative">
    <Image  src="/hero.png" alt="" fill className="object-contain"/>
    </div>

    {/* TEXT CONTAINER */}

    <div className="h1-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
      {/* TITLE */}
      <h1 className="text-4xl md:text-6xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
      {/* DESCRIPTION */}
      <p className="md:text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus excepturi, laudantium placeat ipsa harum vel modi porro mollitia odit. Ratione qui voluptatem aperiam quas delectus eos iure placeat quasi sed.</p>
      {/* BUTTONS */}
      <div className="w-full flex gap-4">
        <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View my Work</button>
        <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
      </div>
    </div>

  </div>

  </motion.div>
  
  )
};

export default Homepage;
