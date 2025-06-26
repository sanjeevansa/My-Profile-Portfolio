import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-10 pt-10">
      {/* Glowing Section Title */}
      <motion.h1
        className="my-20 text-center text-5xl font-bold text-white"
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
      >
        <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(100,255,255,0.6)]">
          Experience
        </span>
      </motion.h1>

      <div className="space-y-16 px-4">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="flex flex-wrap lg:justify-center rounded-xl bg-gradient-to-br from-neutral-900/60 to-neutral-800/60 p-6 backdrop-blur-md border border-cyan-900 shadow-[0_0_30px_rgba(0,255,255,0.05)] transition hover:shadow-cyan-500/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <div className="w-full md:w-1/4 flex items-center justify-start">
              <motion.p
                  className="text-4xl font-bold italic text-transparent bg-clip-text 
                            bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-300 
                            bg-[length:200%_200%] animate-shimmer 
                            px-4 py-2 rounded-md shadow-lg backdrop-blur cursor-pointer"
                  initial={{ x: -10, boxShadow: "0px 0px 0px rgba(255, 255, 0, 0)" }}
                  animate={{
                    x: [ -10, 10, -10 ],
                    boxShadow: [
                      "0px 0px 0px rgba(255, 255, 0, 0)",
                      "0px 0px 15px rgba(255, 255, 0, 0.8)",
                      "0px 0px 0px rgba(255, 255, 0, 0)"
                    ],
                  }}
                  transition={{
                    x: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                    boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }
                  }}
                  whileTap={{
                    scale: 1.2,
                    rotate: 5,
                    boxShadow: "0px 0px 25px rgba(255,255,0,1)",
                  }}
                >
                  {experience.year}
                </motion.p>

            </div>

            <div className="w-full max-w-xl lg:w-3/4 pt-2">
              {/* Role + Company with light effect */}
              <h6 className="mb-2 text-2xl font-semibold text-white">
                {experience.role}
                {" - "}
                <span className="text-base text-cyan-300 font-light">
                  {experience.company}
                </span>
              </h6>

              <p className="mb-6 text-base text-neutral-300 leading-relaxed">
                {experience.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    whileHover={{
                      scale: 1.1,
                      textShadow: "0px 0px 8px rgba(255,255,255,0.7)",
                      boxShadow: "0px 0px 12px rgba(0,255,255,0.5)",
                    }}
                    className="inline-block rounded-full bg-neutral-900 px-3 py-1 text-base font-medium text-cyan-300 border border-cyan-600 transition duration-200 cursor-pointer hover:bg-cyan-900 hover:text-white hover:border-cyan-900"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
