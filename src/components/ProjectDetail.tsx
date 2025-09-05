import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projects, ProjectData } from "../data/projects";
import MotionSection from "./MotionSection";

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<ProjectData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>("overview");

  useEffect(() => {
    // Find the project with the matching ID
    const foundProject = projects.find((p) => p.id === projectId);

    if (foundProject) {
      setProject(foundProject);
      // Update document title
      document.title = `${foundProject.title} | Case Study`;
    } else {
      // If no project is found, redirect to home page
      navigate("/");
    }

    setLoading(false);
  }, [projectId, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white dark:bg-gray-800">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!project) {
    return null;
  }

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "challenge", label: "Challenge" },
    { id: "solution", label: "Solution" },
    { id: "features", label: "Features" },
    { id: "technologies", label: "Tech Stack" },
    { id: "process", label: "Process" },
    { id: "results", label: "Results" },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div className="bg-white dark:bg-gray-800 transition-colors duration-300">
      {/* Hero section */}
      <div className="w-full h-80 md:h-96 lg:h-[500px] relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-900/30 z-10"></div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <Link
                to="/#projects"
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
                aria-label="Back to projects"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Projects
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="sticky top-0 bg-white dark:bg-gray-800 shadow-sm z-30 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto">
            <div className="flex py-4 space-x-8 min-w-max">
              {sections.map((section) => (
                <button
                  key={section.id}
                  className={`text-sm font-medium px-1 py-2 border-b-2 transition-colors ${
                    activeSection === section.id
                      ? "border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400"
                      : "border-transparent text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  }`}
                  onClick={() => setActiveSection(section.id)}
                  aria-label={`View ${section.label} section`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Overview section */}
          {activeSection === "overview" && (
            <MotionSection>
              <motion.h2
                className="text-3xl font-bold text-gray-800 dark:text-white mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Project Overview
              </motion.h2>
              <motion.div
                className="prose prose-lg dark:prose-invert max-w-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p>{project.caseStudy.overview}</p>
              </motion.div>
            </MotionSection>
          )}

          {/* Challenge section */}
          {activeSection === "challenge" && (
            <MotionSection>
              <motion.h2
                className="text-3xl font-bold text-gray-800 dark:text-white mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                The Challenge
              </motion.h2>
              <motion.div
                className="prose prose-lg dark:prose-invert max-w-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p>{project.caseStudy.challenge}</p>
              </motion.div>
            </MotionSection>
          )}

          {/* Solution section */}
          {activeSection === "solution" && (
            <MotionSection>
              <motion.h2
                className="text-3xl font-bold text-gray-800 dark:text-white mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                The Solution
              </motion.h2>
              <motion.div
                className="prose prose-lg dark:prose-invert max-w-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p>{project.caseStudy.solution}</p>
              </motion.div>
            </MotionSection>
          )}

          {/* Features section */}
          {activeSection === "features" && (
            <MotionSection>
              <motion.h2
                className="text-3xl font-bold text-gray-800 dark:text-white mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Key Features
              </motion.h2>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {project.caseStudy.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md"
                  >
                    {feature.image && (
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </MotionSection>
          )}

          {/* Technologies section */}
          {activeSection === "technologies" && (
            <MotionSection>
              <motion.h2
                className="text-3xl font-bold text-gray-800 dark:text-white mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Technologies Used
              </motion.h2>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {project.caseStudy.technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg"
                  >
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{tech.icon}</span>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                        {tech.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {tech.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </MotionSection>
          )}

          {/* Process section */}
          {activeSection === "process" && (
            <MotionSection>
              <motion.h2
                className="text-3xl font-bold text-gray-800 dark:text-white mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Development Process
              </motion.h2>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="space-y-12"
              >
                {project.caseStudy.process.map((step, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex flex-col md:flex-row md:items-center gap-8"
                  >
                    <div className="md:w-1/2 order-2 md:order-1">
                      <div className="flex items-center mb-4">
                        <div className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">
                          {index + 1}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        {step.description}
                      </p>
                    </div>
                    {step.image && (
                      <div className="md:w-1/2 order-1 md:order-2">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="rounded-lg shadow-md w-full h-auto"
                        />
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </MotionSection>
          )}

          {/* Results section */}
          {activeSection === "results" && (
            <MotionSection>
              <motion.h2
                className="text-3xl font-bold text-gray-800 dark:text-white mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Outcomes & Results
              </motion.h2>
              <motion.div
                className="space-y-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p>{project.caseStudy.outcomes}</p>
                </div>

                {project.caseStudy.testimonial && (
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-8 rounded-lg">
                    <div className="flex flex-col items-center text-center">
                      <svg
                        className="w-12 h-12 text-indigo-400 mb-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <blockquote className="text-lg text-gray-700 dark:text-gray-300 italic mb-4">
                        "{project.caseStudy.testimonial.quote}"
                      </blockquote>
                      <div>
                        <cite className="font-bold text-gray-900 dark:text-white not-italic">
                          {project.caseStudy.testimonial.author}
                        </cite>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {project.caseStudy.testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {project.caseStudy.nextSteps && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                      Future Development
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {project.caseStudy.nextSteps}
                    </p>
                  </div>
                )}
              </motion.div>
            </MotionSection>
          )}

          {/* Project links */}
          <div className="mt-16 flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href={project.liveUrl}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-center font-medium flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Visit live demo of ${project.title}`}
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Visit Live Project
            </motion.a>
            <motion.a
              href={project.codeUrl}
              className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-6 py-3 rounded-lg text-center font-medium flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`View source code of ${project.title}`}
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              View Source Code
            </motion.a>
          </div>
        </div>
      </div>

      {/* Next/Prev project navigation */}
      <div className="bg-gray-50 dark:bg-gray-700 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
              Explore More Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects
                .filter((p) => p.id !== project.id)
                .slice(0, 2)
                .map((relatedProject, index) => (
                  <Link
                    key={index}
                    to={`/project/${relatedProject.id}`}
                    className="group"
                  >
                    <motion.div
                      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={relatedProject.image}
                          alt={relatedProject.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {relatedProject.title}
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {relatedProject.tags
                            .slice(0, 3)
                            .map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                          {relatedProject.description}
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                ))}
            </div>
            <div className="text-center mt-10">
              <Link
                to="/#projects"
                className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
