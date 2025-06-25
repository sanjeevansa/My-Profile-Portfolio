import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-5xl font-bold text-white"
      >
        Contact
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="text-center tracking-tight text-white text-xl"
      >
        <p className="my-4">
          Email:{" "}
          <a
            href="mailto:sanjeevans904@gmail.com"
            className="text-cyan-400 underline hover:text-cyan-300 transition-colors"
          >
            sanjeevans904@gmail.com
          </a>
        </p>

        <p className="my-4">
          Phone:{" "}
          <a
            href="tel:0752590685"
            className="text-cyan-400 underline hover:text-cyan-300 transition-colors"
          >
            0752590685
          </a>
        </p>

        <p className="my-4">
          WhatsApp:{" "}
          <a
            href="https://wa.me/94752590685"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 underline hover:text-cyan-300 transition-colors"
          >
            Chat on WhatsApp
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Contact;
