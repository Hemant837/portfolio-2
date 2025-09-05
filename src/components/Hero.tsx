import { motion } from "framer-motion";

import MotionSection from "./MotionSection";

const Hero = () => {
  return (
    <MotionSection className="bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-700 dark:to-purple-900 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-3/5 text-center md:text-left mb-10 md:mb-0">
          <motion.h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm{" "}
            <motion.span
              className="text-yellow-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Hemant Verma
            </motion.span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Frontend Developer
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            Frontend Developer building scalable, responsive, and user-friendly
            applications with React, TypeScript, and Tailwind CSS.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <motion.a
              href="#contact"
              className="bg-white text-indigo-600 hover:bg-gray-100 py-3 px-6 rounded-full font-semibold shadow-lg transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Contact me to discuss your project"
            >
              Contact Me
            </motion.a>
            <motion.a
              href="#projects"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-indigo-600 py-3 px-6 rounded-full font-semibold transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="View my portfolio projects"
            >
              View Projects
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="md:w-2/5"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="rounded-full bg-white/10 p-3 shadow-2xl mx-auto w-56 h-56 md:w-72 md:h-72 flex items-center justify-center"
            whileHover={{ rotate: 5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 100 }}
            aria-hidden="true"
          >
            <img
              src="/profile.jpg"
              alt="Hemant Verma - Frontend Developer"
              className="rounded-full w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </MotionSection>
  );
};

export default Hero;
