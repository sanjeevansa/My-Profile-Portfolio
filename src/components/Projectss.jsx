import { useRef, useCallback } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import "../index.css";

const Projects = () => {
  const imageContainerRefs = useRef([]);
  const textContainerRefs = useRef([]);

  const handleImageMouseMove = useCallback((e, index) => {
    const container = imageContainerRefs.current[index];
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    container.style.setProperty("--x", `${x}px`);
    container.style.setProperty("--y", `${y}px`);
  }, []);

  const handleTextMouseMove = useCallback((e, index) => {
    const container = textContainerRefs.current[index];
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    container.style.setProperty("--tx", `${x}px`);
    container.style.setProperty("--ty", `${y}px`);
  }, []);

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      rotate: (index) => (index % 2 === 0 ? -2 : 2),
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.01,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="border-b border-neutral-900 pb-4 relative">
      {/* Center vertical line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-blue-500 to-transparent transform -translate-x-1/2 z-0" />

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
          <article key={project.title} className="relative">
            {/* Mobile View */}
            <div className="md:hidden flex flex-col items-center gap-6 px-4">
              <img
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                className="w-full max-w-sm rounded-xl border border-blue-500/20"
              />
              <div className="text-white text-center">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-neutral-300 mb-2">{project.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {project.technologies.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block rounded-full bg-blue-900/80 px-3 py-1 text-sm font-semibold text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop View */}
            <div
              className={`hidden md:flex justify-center items-center gap-6 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Image */}
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
                  className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-xl overflow-hidden image-light-container border border-blue-500/20 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300"
                >
                  <motion.img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    className="w-full h-full object-cover rounded-xl cursor-pointer"
                    whileHover="hover"
                    loading="lazy"
                  />
                  <div className="image-light-overlay pointer-events-none absolute inset-0 rounded-xl" />
                </div>

                {/* Line from image to center */}
                <div
                  className={`hidden md:block absolute top-1/2 w-[calc(50%+1px)] h-0.5 bg-blue-500 z-[-1] ${
                    index % 2 === 0 ? "right-0 rounded-l" : "left-0 rounded-r"
                  }`}
                />
              </motion.div>

              {/* Text Box */}
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
                <div className="text-light-overlay pointer-events-none absolute inset-0 rounded-xl" />
                <motion.h2 className="mb-4 text-2xl md:text-3xl font-bold text-white animate-text-glow">
                  {project.title}
                </motion.h2>
                <p className="mb-4 text-base md:text-xl text-neutral-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.05 }}
                      className="cursor-pointer inline-block rounded-full bg-blue-900/80 px-3 py-1 text-sm font-semibold text-white hover:bg-blue-800 transition-all duration-200"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Line from center to text (FIXED position to avoid crossing) */}
                <div
                  className={`hidden md:block absolute -bottom-[40px] w-[calc(50%+1px)] h-0.5 bg-blue-500 z-[-1] ${
                    index % 2 === 0 ? "left-0 rounded-r" : "right-0 rounded-l"
                  }`}
                />
              </motion.div>
            </div>

            {/* Vertical line down to next item */}
            {index < PROJECTS.length - 1 && (
              <div className="hidden md:block absolute left-1/2 top-full h-16 w-0.5 bg-gradient-to-b from-blue-500 to-blue-500 transform -translate-x-1/2" />
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
