import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  useEffect(() => {
    // Close mobile menu on route change
    setIsMenuOpen(false);

    // Determine active section from the hash or pathname
    if (location.pathname === "/") {
      const hash = location.hash.slice(1); // Remove the #
      setActiveSection(hash || "home");
    } else if (location.pathname.startsWith("/project/")) {
      setActiveSection("projects");
    }
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle section navigation and scrolling
  const handleSectionClick = (sectionId: string) => {
    if (location.pathname !== "/") {
      // If we're not on the homepage, navigate to homepage with hash
      return;
    }

    // If already on homepage, scroll to the section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(sectionId);
  };

  const navItems = [
    { id: "about", label: "About", path: "/#about" },
    { id: "skills", label: "Skills", path: "/#skills" },
    { id: "projects", label: "Projects", path: "/#projects" },
    { id: "contact", label: "Contact", path: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 transition-colors duration-300"
          aria-label="Home"
        >
          Hemant Verma
        </Link>

        <div className="flex items-center space-x-4">
          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Main menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex space-x-8"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={(e) => {
                  if (
                    location.pathname === "/" &&
                    document.getElementById(item.id)
                  ) {
                    e.preventDefault();
                    handleSectionClick(item.id);
                  }
                }}
                className={`relative px-2 py-1 transition duration-300 ${
                  activeSection === item.id
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 dark:bg-indigo-400"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        id="mobile-menu"
        className={`md:hidden bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-300`}
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <nav
          className="flex flex-col space-y-3 p-4"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={(e) => {
                if (
                  location.pathname === "/" &&
                  document.getElementById(item.id)
                ) {
                  e.preventDefault();
                  handleSectionClick(item.id);
                }
                setIsMenuOpen(false);
              }}
              className={`py-2 px-4 rounded-md transition duration-300 ${
                activeSection === item.id
                  ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
