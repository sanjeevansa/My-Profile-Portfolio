import { motion } from "framer-motion";
import { useState } from "react";
import proFilepic from "../assets/WhatsApp Image 2025-06-25 at 20.07.21_881a6c51.jpg";
import { HERO_CONTENT } from "../constants";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const [darkPhoto, setDarkPhoto] = useState(false);

  return (
    <div className="border-b border-neutral-900 p-4 lg:mb-36 relative">
      {/* Dark/Light Toggle Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setDarkPhoto(!darkPhoto)}
          className="p-2 rounded-full bg-gray-800 text-yellow-300 hover:bg-gray-700 transition-colors"
        >
          {darkPhoto ? "☀️ Lighten Photo" : "🌙 Darken Photo"}
        </button>
      </div>

      <div className="flex flex-wrap">
        {/* Left Section - Text Content */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative pb-16 text-6xl font-extrabold tracking-tight lg:mt-16 text-white"
            >
              <span className="relative inline-block bg-gradient-to-r from-white via-cyan-300 to-white bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer">
                R Sanjeevan
              </span>
            </motion.h1>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="bg-gradient-to-t from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent animate-pulse"
            >
              Software Engineering & Data Science
            </motion.span>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
              className="my-2 max-w-xl py-6 text-xl font-bold tracking-tight text-gray-300"
            >
              <TypeAnimation
                sequence={[HERO_CONTENT, 1000]}
                speed={40}
                wrapper="p"
                repeat={Infinity}
              />
            </motion.div>

            <motion.a
              href="/cv.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="my-4 inline-block rounded-md border border-cyan-400 bg-cyan-600 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base text-white font-semibold shadow-md hover:bg-cyan-500 hover:text-white transition-all"
            >
              Download CV
            </motion.a>
          </div>
        </div>

        {/* Right Section - Image with Light Effect */}
        <div className="w-full lg:w-1/2 lg:p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="flex justify-center"
          >
            <img
              className={`z-10 rounded-lg border-4 transition-all duration-300 ease-in-out ${
                darkPhoto
                  ? "border-blue-500 brightness-75 contrast-110 shadow-[0_0_40px_10px_rgba(59,130,246,0.4)]"
                  : "border-blue-500 brightness-100 contrast-100 shadow-lg"
              } hover:shadow-[0_0_60px_15px_rgba(59,130,246,0.5)]`}
              src={proFilepic}
              alt="R Sanjeevan"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
