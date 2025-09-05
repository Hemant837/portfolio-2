import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import MotionSection from "./MotionSection";

const About = () => {
  const handleDownloadResume = () => {
    // This would be replaced with your actual resume file
    alert(
      "In a real implementation, this would download your actual resume PDF file."
    );
    // Alternatively, you could link directly to the file:
    // window.open('/path-to-your-resume.pdf', '_blank');
  };

  return (
    <MotionSection
      id="about"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Get to know me better
          </p>
        </AnimatedSection>

        <AnimatedSection className="max-w-4xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md p-6 md:p-8">
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              I’m a Frontend Developer with 1.5+ years of professional
              experience working on SaaS products, dashboards, and automation
              platforms. I enjoy solving real-world problems with clean,
              efficient, and maintainable code.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              My core skills include React.js, TypeScript, Tailwind CSS, Redux
              Toolkit, and Express.js, and I’ve built applications ranging from
              learning management systems to invoicing automation tools.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Beyond coding, I value teamwork, collaboration, and scalability,
              and I enjoy translating business requirements into seamless
              digital experiences.
            </p>

            <motion.div
              className="mt-6 flex justify-center md:justify-start"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.button
                onClick={handleDownloadResume}
                className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Download my resume in PDF format"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </motion.button>
            </motion.div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  Education
                </h3>
                <ul className="space-y-2" aria-label="Education history">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-indigo-600 mr-2 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">
                        Bachelor of Technology
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        College of Engineering Roorkee, 2018-2022
                      </p>
                    </div>
                  </li>
                  {/* <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-indigo-600 mr-2 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">Web Development Bootcamp</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Coding Academy, 2020
                      </p>
                    </div>
                  </li> */}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  Experience
                </h3>
                <ul className="space-y-2" aria-label="Work experience">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-indigo-600 mr-2 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">Frontend Developer</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        ST Global Tech, 2023-Present
                      </p>
                    </div>
                  </li>
                  {/* <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-indigo-600 mr-2 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">Frontend Developer</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Web Agency, 2020-2022
                      </p>
                    </div>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </MotionSection>
  );
};

export default About;
