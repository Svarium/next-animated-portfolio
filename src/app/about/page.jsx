"use client"

import {motion} from "framer-motion";

const AboutPage = () => {
    return (

        <motion.div 
        className="h-full" 
        initial={{y:"-200vh"}}
        animate={{y:"0%"}}
        transition={{duration:1}}
        >
        {/* CONTAINER */}

            <div className="">

                {/* TEXT CONTAINER */}
                <div className="p-4 sm:p-8 md:p-12 lg:p-20 l:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
                    {/* BIO */}
                    <div className="flex flex-col gap-12 justify-center">

                        <h1 className="font-bold text-2xl">Biography</h1>
                        <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consequatur, unde eum fugit aliquam repudiandae dolorum id necessitatibus eaque ea, laudantium eos. Beatae officiis explicabo, iste asperiores quis omnis dolores.</p>
                        <span className="italic">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                        <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
                    </div>
                    {/* SKILLS */}
                    <div className="">SKILLS</div>
                    {/* EXPERIENCE */}
                    <div className="">EXPERIENCE</div>
                </div>

                {/* SVG CONTAINER */}
                <div className="hidden"></div>         
        </div>
        </motion.div>
    )
}

export default AboutPage