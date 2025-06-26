import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";               // React icon
import { TbBrandNextjs } from "react-icons/tb";               // Next.js icon
import {
  SiMongodb,
  SiPython,
  SiSpringboot,
  SiTensorflow,
  SiAndroidstudio,
  SiDotnet,
} from "react-icons/si";                                      // MongoDB, Python, etc.
import { FaNodeJs, FaMicrosoft, FaFileExcel } from "react-icons/fa"; // Node.js, Microsoft, Excel
import { DiRedis, DiJava, DiCode } from "react-icons/di";     // Redis, Java, Code icon
import { BiLogoPostgresql } from "react-icons/bi";            // PostgreSQL
import { RiCodeBoxLine } from "react-icons/ri";               // Using as alternative for RStudio
import RStudioIcon from "../RStudioIcon";
import PropTypes from "prop-types";

// Technology stack including new tools and frameworks
const techStack = [
  { icon: <RiReactjsLine />, color: "text-cyan-400" },
  { icon: <TbBrandNextjs />, color: "text-white" },
  { icon: <SiMongodb />, color: "text-green-500" },
  { icon: <FaNodeJs />, color: "text-green-600" },
  { icon: <DiRedis />, color: "text-red-500" },
  { icon: <BiLogoPostgresql />, color: "text-sky-700" },
  { icon: <FaMicrosoft />, color: "text-blue-600" },
  { icon: <SiPython />, color: "text-yellow-400" },
  { icon: <DiJava />, color: "text-orange-600" },
  { icon: <DiCode />, color: "text-violet-500" },
  { icon: <SiTensorflow />, color: "text-orange-400" },
  { icon: <SiSpringboot />, color: "text-green-700" },

  // Newly added technologies
  { icon: <SiAndroidstudio />, color: "text-green-500" },       // Android Studio
  { icon: <FaFileExcel />, color: "text-green-600" },            // Excel (FontAwesome)
  { icon: <RiCodeBoxLine />, color: "text-blue-400" },          // R Studio alternative
  { icon: <SiDotnet />, color: "text-indigo-500" },             // C# ASP.NET
  { icon: <SiPython />, color: "text-pink-500" },               // ML (reuse Python icon)
  { icon: <SiTensorflow />, color: "text-yellow-500" },         // DL (reuse TensorFlow icon)
  { icon: <DiCode />, color: "text-blue-300" },                 // Model Prediction (generic code icon)
  { icon: <RStudioIcon className="w-12 h-12" />, color: "text-blue-400" },
];

// Animated icon card component
const IconCard = ({ icon, color }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useTransform(mouseX, (v) => v / 10 - 10);
  const y = useTransform(mouseY, (v) => v / 10 - 10);

  const handleMouseLeave = () => {
    animate(mouseX, 0, { type: "spring", stiffness: 100 });
    animate(mouseY, 0, { type: "spring", stiffness: 100 });
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;
    mouseX.set(relX - rect.width / 2);
    mouseY.set(relY - rect.height / 2);
  };

  return (
    <motion.div
      className="group cursor-pointer rounded-2xl border-4 border-neutral-800 bg-neutral-900/50 p-6 shadow-lg transition-all duration-300 hover:shadow-cyan-500/50"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.15, rotate: 3 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 400 }}
    >
      <motion.div style={{ x, y }} className="will-change-transform">
        <div
          className={`text-6xl transition-transform duration-300 ${color} drop-shadow-lg`}
        >
          {icon}
        </div>
      </motion.div>
    </motion.div>
  );
};

IconCard.propTypes = {
  icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
};

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-bold text-white"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-6 px-4"
      >
        {techStack.map((tech, index) => (
          <IconCard key={index} icon={tech.icon} color={tech.color} />
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;