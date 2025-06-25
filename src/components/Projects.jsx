import { useRef } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import "../index.css";

const Projects = () => {
  const imageContainerRefs = useRef([]);
  const textContainerRefs = useRef([]);

  const handleImageMouseMove = (e, index) => {
    const container = imageContainerRefs.current[index];
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    container.style.setProperty("--x", `${x}px`);
    container.style.setProperty("--y", `${y}px`);
  };

  const handleTextMouseMove = (e, index) => {
    const container = textContainerRefs.current[index];
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    container.style.setProperty("--tx", `${x}px`);
    container.style.setProperty("--ty", `${y}px`);
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      rotate: index => (index % 2 === 0 ? -2 : 2),
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.01,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-4 relative">
      {/* Main vertical center line - hidden on small screens */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-blue-500 to-transparent transform -translate-x-1/2 z-0 cursor-pointer"></div>
      
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-12 md:my-20 text-center text-3xl md:text-5xl font-bold text-white relative z-10"
      >
        Projects
      </motion.h1>

      <div className="relative z-10 space-y-16 md:space-y-32">
        {PROJECTS.map((project, index) => (
          <div key={project.title || index} className="relative cursor-pointer">
            {/* Mobile layout - stacked */}
            <div className="md:hidden flex flex-col items-center gap-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={imageVariants}
                custom={index}
                className="w-full flex justify-center relative"
              >
                <div
                  ref={(el) => (imageContainerRefs.current[index] = el)}
                  onMouseMove={(e) => handleImageMouseMove(e, index)}
                  className="relative w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-xl image-light-container border border-blue-500/20 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300"
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-xl cursor-pointer"
                    whileHover="hover"
                  />
                  <div className="image-light-overlay pointer-events-none absolute inset-0 rounded-xl"></div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={textVariants}
                className="w-full relative text-light-container bg-neutral-900/50 p-4 rounded-xl border border-blue-500/20 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300 backdrop-blur-sm"
                ref={(el) => (textContainerRefs.current[index] = el)}
                onMouseMove={(e) => handleTextMouseMove(e, index)}
              >
                <div className="text-light-overlay pointer-events-none absolute inset-0 rounded-xl"></div>
                <motion.h2
                  className="mb-3 text-2xl font-bold text-white animate-text-glow"
                >
                  {project.title}
                </motion.h2>
                <p className="mb-3 text-base text-neutral-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      whileHover={{ scale: 1.05 }}
                      className="cursor-pointer inline-block rounded-full bg-blue-900/80 px-2 py-1 text-xs md:text-sm font-semibold text-white hover:bg-blue-800 transition-all duration-200"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Desktop layout - alternating */}
            <div className={`hidden md:flex flex-wrap justify-center items-center gap-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={imageVariants}
                custom={index}
                className="w-full lg:w-2/5 flex justify-center relative"
              >
                <div
                  ref={(el) => (imageContainerRefs.current[index] = el)}
                  onMouseMove={(e) => handleImageMouseMove(e, index)}
                  className="relative w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-xl image-light-container border border-blue-500/20 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300"
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-xl cursor-pointer"
                    whileHover="hover"
                  />
                  <div className="image-light-overlay pointer-events-none absolute inset-0 rounded-xl"></div>
                </div>

                {/* Horizontal connector line */}
                <div className={`absolute top-1/2 h-0.5 w-1/4 bg-gradient-to-r ${index % 2 === 0 ? 'right-0 from-blue-500 to-transparent' : 'left-0 from-transparent to-blue-500'}`}></div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariants}
                className="w-full lg:w-2/5 relative text-light-container bg-neutral-900/50 p-6 rounded-xl border border-blue-500/20 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300 backdrop-blur-sm"
                ref={(el) => (textContainerRefs.current[index] = el)}
                onMouseMove={(e) => handleTextMouseMove(e, index)}
                whileHover="hover"
              >
                <div className="text-light-overlay pointer-events-none absolute inset-0 rounded-xl"></div>
                <motion.h2
                  className="mb-4 text-2xl md:text-3xl font-bold text-white animate-text-glow"
                >
                  {project.title}
                </motion.h2>
                <p className="mb-4 text-base md:text-xl text-neutral-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      whileHover={{ scale: 1.05 }}
                      className="cursor-pointer inline-block rounded-full bg-blue-900/80 px-3 py-1 text-sm font-semibold text-white hover:bg-blue-800 transition-all duration-200"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Vertical connector line (except last item) */}
            {index < PROJECTS.length - 1 && (
              <div className="hidden md:block absolute left-1/2 top-full h-16 w-0.5 bg-gradient-to-b from-blue-500 to-blue-500 transform -translate-x-1/2"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;