import { motion } from "framer-motion";

interface AnimatedSkillBarProps {
  name: string;
  icon: string;
  level: number;
}

const AnimatedSkillBar = ({ name, icon, level }: AnimatedSkillBarProps) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      role="listitem"
    >
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-3" aria-hidden="true">
          {icon}
        </span>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          {name}
        </h3>
      </div>
      <div
        className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5"
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name} skill level: ${level}%`}
      >
        <motion.div
          className="bg-indigo-600 h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        />
      </div>
      <p className="text-right text-sm text-gray-600 dark:text-gray-300 mt-1">
        {level}%
      </p>
    </motion.div>
  );
};

export default AnimatedSkillBar;
