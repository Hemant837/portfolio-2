import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiOpenai,
  SiLangchain,
  SiGithub,
  SiVercel,
} from "react-icons/si";
import {
  TbBrowser,
  TbServer,
  TbBrain,
  TbTools,
  TbApi,
  TbDatabase,
  TbVector,
  TbBinaryTree,
  TbSearch,
  TbCloud,
} from "react-icons/tb";
import MotionSection from "./MotionSection";

interface Skill {
  name: string;
  Icon: IconType;
  color?: string; // brand color; omitted icons render in a neutral gray
}

interface SkillGroup {
  category: string;
  CatIcon: IconType;
  accent: {
    border: string;
    chipBg: string;
    chipText: string;
  };
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    CatIcon: TbBrowser,
    accent: {
      border: "border-t-indigo-500",
      chipBg: "bg-indigo-100 dark:bg-indigo-900/40",
      chipText: "text-indigo-600 dark:text-indigo-400",
    },
    skills: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript (ES6+)", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Redux Toolkit", Icon: SiRedux, color: "#764ABC" },
    ],
  },
  {
    category: "Backend",
    CatIcon: TbServer,
    accent: {
      border: "border-t-emerald-500",
      chipBg: "bg-emerald-100 dark:bg-emerald-900/40",
      chipText: "text-emerald-600 dark:text-emerald-400",
    },
    skills: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", Icon: SiExpress },
      { name: "REST APIs", Icon: TbApi },
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
      { name: "SQL Server", Icon: TbDatabase },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "Neon", Icon: TbDatabase },
    ],
  },
  {
    category: "AI / GenAI",
    CatIcon: TbBrain,
    accent: {
      border: "border-t-violet-500",
      chipBg: "bg-violet-100 dark:bg-violet-900/40",
      chipText: "text-violet-600 dark:text-violet-400",
    },
    skills: [
      { name: "LangChain", Icon: SiLangchain },
      { name: "LangGraph", Icon: TbBinaryTree },
      { name: "OpenAI", Icon: SiOpenai, color: "#10A37F" },
      { name: "RAG", Icon: TbSearch },
      { name: "PG Vector", Icon: TbVector },
    ],
  },
  {
    category: "Tools & Cloud",
    CatIcon: TbTools,
    accent: {
      border: "border-t-amber-500",
      chipBg: "bg-amber-100 dark:bg-amber-900/40",
      chipText: "text-amber-600 dark:text-amber-400",
    },
    skills: [
      { name: "Git & GitHub", Icon: SiGithub },
      { name: "Azure Blob Storage", Icon: TbCloud },
      { name: "Vercel", Icon: SiVercel },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

const Skills = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-md border-t-4 ${group.accent.border} p-6 transition-colors duration-300`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-5">
                <span
                  className={`inline-flex items-center justify-center w-9 h-9 rounded-lg mr-3 ${group.accent.chipBg} ${group.accent.chipText}`}
                  aria-hidden="true"
                >
                  <group.CatIcon className="text-xl" />
                </span>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {group.category}
                </h3>
              </div>

              <motion.div
                className="flex flex-wrap gap-2.5"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                role="list"
                aria-label={`${group.category} skills`}
              >
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3.5 py-2 rounded-full text-sm font-medium"
                    variants={item}
                    whileHover={{ y: -4 }}
                    role="listitem"
                  >
                    <skill.Icon
                      className={`text-lg ${
                        skill.color ? "" : "text-gray-500 dark:text-gray-400"
                      }`}
                      style={skill.color ? { color: skill.color } : undefined}
                      aria-hidden="true"
                    />
                    {skill.name}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
};

export default Skills;
