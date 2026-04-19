import { motion } from "framer-motion";
import AnimatedSkillBar from "./AnimatedSkillBar";
import MotionSection from "./MotionSection";

const Skills = () => {
  const skills = [
    {
      name: "React",
      icon: "⚛️",
      level: 80,
    },
    {
      name: "TypeScript",
      icon: "📘",
      level: 75,
    },
    {
      name: "JavaScript (ES6+)",
      icon: "🟨",
      level: 80,
    },
    {
      name: "Tailwind CSS",
      icon: "🎨",
      level: 75,
    },
    {
      name: "Redux Toolkit / TanStack Query",
      icon: "🗂️",
      level: 75,
    },
    {
      name: "Express.js / REST APIs",
      icon: "⚡",
      level: 70,
    },
    {
      name: "SQL Server / Databases",
      icon: "🗄️",
      level: 65,
    },
    { name: "Python", icon: "🐍", level: 65 },
    {
      name: "GenAI (RAG, LangChain, Chroma)",
      icon: "🧠",
      level: 65,
    },
    {
      name: "FastAPI",
      icon: "🚀",
      level: 65,
    },
    {
      name: "API Integration",
      icon: "🔗",
      level: 80,
    },
    {
      name: "Git & GitHub",
      icon: "📊",
      level: 75,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <MotionSection
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            role="list"
            aria-label="Primary skills with proficiency levels"
          >
            {skills.map((skill, index) => (
              <AnimatedSkillBar
                key={index}
                name={skill.name}
                icon={skill.icon}
                level={skill.level}
              />
            ))}
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Other Skills
            </h3>
            <div
              className="flex flex-wrap justify-center gap-3"
              role="list"
              aria-label="Additional skills"
            >
              {["MongoDB", "Firebase", "PostgreSQL", "Neon"].map(
                (item, index) => (
                  <motion.span
                    key={index}
                    className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100 px-4 py-2 rounded-full text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                    role="listitem"
                    aria-label={item}
                  >
                    {item}
                  </motion.span>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </MotionSection>
  );
};

export default Skills;
