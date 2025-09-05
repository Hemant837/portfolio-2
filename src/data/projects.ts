export interface ProjectData {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  codeUrl: string;
  caseStudy: {
    overview: string;
    challenge: string;
    solution: string;
    features: {
      title: string;
      description: string;
      image?: string;
    }[];
    technologies: {
      name: string;
      description: string;
      icon?: string;
    }[];
    process: {
      title: string;
      description: string;
      image?: string;
    }[];
    outcomes: string;
    testimonial?: {
      quote: string;
      author: string;
      role: string;
    };
    nextSteps?: string;
  };
}

export const projects: ProjectData[] = [
  {
    id: "mavlead",
    title: "Mavlead",
    description:
      "A responsive lead generation and marketing platform built with React, Tailwind CSS, and Express.js. Designed to highlight services in Salesforce, CRM, AI, and digital marketing with optimized performance and user-friendly navigation.",
    image:
      "https://placehold.co/600x400/e9ecef/5d63fd?text=Mavlead&font=montserrat",
    tags: ["React", "TypeScript", "Tailwind CSS", "Express.js", "SQL Server"],
    liveUrl: "https://mavlead.com/",
    codeUrl: "#",
    caseStudy: {
      overview:
        "Mavlead is a data-driven lead generation platform focused on high-growth domains such as Salesforce, CRM, AI, and digital marketing. The platform was designed to showcase services, attract clients, and generate quality leads through a modern, scalable web presence.",
      challenge:
        "The client needed a responsive, SEO-friendly website that could scale with their business and clearly communicate their expertise in enterprise solutions. They wanted a fast, secure, and professional web application capable of handling high-traffic marketing campaigns.",
      solution:
        "I developed the platform with a React + TypeScript frontend for dynamic and reusable components, styled with Tailwind CSS for consistency and responsiveness. On the backend, Express.js and SQL Server were used for managing content, inquiries, and analytics. The site was optimized for fast load times, SEO, and lead capture workflows.",
      features: [
        {
          title: "Responsive Design",
          description:
            "Built fully responsive layouts optimized for desktop, tablet, and mobile devices, ensuring accessibility across all screen sizes.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Responsive&font=montserrat",
        },
        {
          title: "Lead Capture Forms",
          description:
            "Integrated lead capture forms with validation and backend storage to streamline client inquiries and follow-ups.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Forms&font=montserrat",
        },
        {
          title: "Service Showcasing",
          description:
            "Dynamic pages designed to highlight Salesforce, CRM, AI, and digital marketing offerings with clear CTAs for conversions.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Services&font=montserrat",
        },
        {
          title: "Performance Optimization",
          description:
            "Implemented lazy loading, image compression, and SEO-friendly practices to boost search rankings and improve performance.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Performance&font=montserrat",
        },
      ],
      technologies: [
        {
          name: "React + TypeScript",
          description:
            "Developed reusable, scalable UI components with strong typing for better maintainability.",
          icon: "⚛️",
        },
        {
          name: "Tailwind CSS",
          description:
            "Used for building responsive, utility-first designs quickly and consistently.",
          icon: "🎨",
        },
        {
          name: "Express.js",
          description:
            "Backend framework for handling inquiries, data storage, and server-side logic.",
          icon: "⚡",
        },
        {
          name: "SQL Server",
          description:
            "Database used for managing client inquiries, form submissions, and analytics.",
          icon: "🗄️",
        },
        {
          name: "SEO Optimization",
          description:
            "Ensured search engine visibility with semantic HTML, metadata, and optimized load performance.",
          icon: "🔍",
        },
      ],
      process: [
        {
          title: "Discovery & Planning",
          description:
            "Worked closely with stakeholders to identify key offerings and target audiences for lead generation.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Planning&font=montserrat",
        },
        {
          title: "UI/UX Design",
          description:
            "Created wireframes and high-fidelity designs in Figma, focusing on clarity and strong call-to-actions.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Design&font=montserrat",
        },
        {
          title: "Development",
          description:
            "Built the frontend with React + TypeScript and backend APIs with Express.js and SQL Server, ensuring responsiveness and scalability.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Development&font=montserrat",
        },
        {
          title: "Testing & Launch",
          description:
            "Performed manual QA and optimization checks to ensure smooth performance before launch.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Testing&font=montserrat",
        },
      ],
      outcomes:
        "The platform enhanced the client’s online presence, improving lead generation efficiency and brand credibility. Optimizations helped achieve faster load times and higher engagement on service pages.",
      testimonial: {
        quote:
          "The website perfectly reflects our vision. The responsiveness, speed, and professional design have helped us reach more clients effectively.",
        author: "Mavlead Team",
        role: "Client",
      },
      nextSteps:
        "Future enhancements include integrating analytics dashboards, marketing automation workflows, and CRM integrations for seamless lead management.",
    },
  },

  {
    id: "task-management",
    title: "Task Management App",
    description:
      "A Kanban-style task management application with drag-and-drop functionality. Users can create boards, add tasks, set deadlines, and track progress.",
    image:
      "https://placehold.co/600x400/e9ecef/5d63fd?text=Task+Management+App&font=montserrat",
    tags: ["React", "TypeScript", "Redux", "Firebase"],
    liveUrl: "#",
    codeUrl: "#",
    caseStudy: {
      overview:
        "A modern task management application inspired by Kanban methodology, designed to help teams visualize their workflow, limit work in progress, and maximize efficiency. The application features a clean, intuitive interface with real-time updates across all team members.",
      challenge:
        "The client team struggled with project coordination using traditional task management tools. They needed a visual, intuitive system that would provide clear workflow visibility, facilitate better task prioritization, and enable real-time collaboration while being accessible from anywhere.",
      solution:
        "I developed a Kanban-style task management application using React and TypeScript with a Firebase backend for real-time data synchronization. The application implements a drag-and-drop interface for intuitive task management with customizable boards and columns to match any workflow.",
      features: [
        {
          title: "Customizable Boards",
          description:
            "Create multiple boards for different projects with customizable columns representing workflow stages.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Boards&font=montserrat",
        },
        {
          title: "Drag-and-Drop Interface",
          description:
            "Intuitively move tasks between columns with smooth animations to reflect changing status.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=DragDrop&font=montserrat",
        },
        {
          title: "Task Details & Attachments",
          description:
            "Rich task cards with descriptions, checklists, deadlines, assignees, labels, and file attachments.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Tasks&font=montserrat",
        },
        {
          title: "Real-time Collaboration",
          description:
            "Instant updates across all team members with user presence indicators and activity history.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Realtime&font=montserrat",
        },
      ],
      technologies: [
        {
          name: "React",
          description:
            "Used for building the component-based UI with efficient DOM updates.",
          icon: "⚛️",
        },
        {
          name: "TypeScript",
          description:
            "Ensures type safety and improves code quality and maintainability.",
          icon: "📘",
        },
        {
          name: "Redux",
          description:
            "Manages application state with predictable state transitions.",
          icon: "🔄",
        },
        {
          name: "Firebase",
          description:
            "Provides real-time database, authentication, and cloud functions for backend services.",
          icon: "🔥",
        },
        {
          name: "React Beautiful DnD",
          description:
            "Powers the smooth drag-and-drop functionality with accessibility features.",
          icon: "✋",
        },
      ],
      process: [
        {
          title: "Requirement Analysis",
          description:
            "Conducted workshops with the client team to understand their workflow and pain points with existing tools.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Analysis&font=montserrat",
        },
        {
          title: "Prototyping",
          description:
            "Created low and high-fidelity prototypes to validate the UI/UX concepts and gather early feedback.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Prototype&font=montserrat",
        },
        {
          title: "Iterative Development",
          description:
            "Built the application using Agile methodology with regular demos and feedback sessions.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Development&font=montserrat",
        },
        {
          title: "User Testing & Refinement",
          description:
            "Conducted user testing sessions to identify usability issues and implement refinements.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Testing&font=montserrat",
        },
      ],
      outcomes:
        "After implementing the task management application, the client team reported a 35% reduction in time spent on project coordination and a 40% improvement in on-time task completion. The visual workflow provided better transparency into project status, helping identify bottlenecks early and optimize resource allocation.",
      testimonial: {
        quote:
          "This task management tool has revolutionized how our team works. The visual boards give us instant insight into project status, and the drag-and-drop interface makes updates effortless. We've seen remarkable improvements in our productivity and coordination.",
        author: "Michael Johnson",
        role: "Project Manager, Tech Solutions Inc.",
      },
      nextSteps:
        "Future development roadmap includes implementing time tracking features, advanced reporting and analytics, automated workflow triggers, and integration with additional third-party services.",
    },
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "A weather application that displays current weather conditions and forecasts for any location. Features include search by city, saved locations, and detailed weather metrics.",
    image:
      "https://placehold.co/600x400/e9ecef/5d63fd?text=Weather+Dashboard&font=montserrat",
    tags: ["React", "CSS", "Weather API", "Geolocation"],
    liveUrl: "#",
    codeUrl: "#",
    caseStudy: {
      overview:
        "A modern, intuitive weather dashboard that provides users with current conditions and forecasts for any location worldwide. The application features a clean design focused on data visualization and accessibility, with support for location-based weather and saved favorite locations.",
      challenge:
        "The goal was to create a weather application that stands out from typical weather apps by providing a more intuitive user experience, meaningful data visualization, and personalized features while ensuring accurate and up-to-date weather information in a clean, accessible interface.",
      solution:
        "I developed a React-based weather dashboard that combines multiple weather data sources for accuracy, implements intuitive data visualization, and offers personalization through saved locations. The application is fully responsive and provides a seamless experience across all devices with graceful error handling for network issues.",
      features: [
        {
          title: "Location-based Weather",
          description:
            "Automatic weather detection based on user's current location with permission-based geolocation.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Geolocation&font=montserrat",
        },
        {
          title: "Global Search",
          description:
            "Search for weather conditions in any city worldwide with autocomplete suggestions.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Search&font=montserrat",
        },
        {
          title: "Weather Visualization",
          description:
            "Intuitive visual representation of weather data with animated icons and interactive charts.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Charts&font=montserrat",
        },
        {
          title: "Saved Locations",
          description:
            "Save favorite locations for quick access with persistent storage across sessions.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Favorites&font=montserrat",
        },
      ],
      technologies: [
        {
          name: "React",
          description:
            "Powers the user interface with efficient component rendering and state management.",
          icon: "⚛️",
        },
        {
          name: "OpenWeather API",
          description:
            "Provides reliable weather data including current conditions and forecasts.",
          icon: "🌦️",
        },
        {
          name: "Chart.js",
          description:
            "Creates interactive and responsive charts for visualizing temperature and precipitation forecasts.",
          icon: "📊",
        },
        {
          name: "Geolocation API",
          description:
            "Enables location-based weather with user permission and fallback options.",
          icon: "📍",
        },
        {
          name: "LocalStorage API",
          description:
            "Saves user preferences and favorite locations for persistent experience.",
          icon: "💾",
        },
      ],
      process: [
        {
          title: "Research & Planning",
          description:
            "Conducted user research to identify pain points with existing weather apps and opportunities for improvement.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Research&font=montserrat",
        },
        {
          title: "UI/UX Design",
          description:
            "Created a clean, intuitive interface design with accessibility in mind, focusing on clear data presentation.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Design&font=montserrat",
        },
        {
          title: "Weather API Integration",
          description:
            "Implemented and tested connections to weather data providers, ensuring reliable data retrieval and error handling.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=API&font=montserrat",
        },
        {
          title: "Testing & Optimization",
          description:
            "Conducted cross-browser testing, performance optimization, and responsive design adjustments.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Testing&font=montserrat",
        },
      ],
      outcomes:
        "The weather dashboard has attracted over 10,000 active users within three months of launch, with an average session duration of 3.5 minutes and a 60% return visitor rate. Users particularly appreciate the intuitive interface, accurate data, and the ability to quickly check weather across multiple saved locations.",
      testimonial: {
        quote:
          "This is hands down the best weather app I've used. The interface is clean and intuitive, the forecasts are accurate, and I love being able to save my frequent locations. The visual charts make it easy to plan my week around the weather.",
        author: "Lisa Chen",
        role: "Regular User",
      },
      nextSteps:
        "Future development plans include adding severe weather alerts, air quality information, historical weather data comparison, and an option for users to switch between different weather data providers based on their region for maximum accuracy.",
    },
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React and Tailwind CSS. Features a responsive design, animated components, and contact form functionality.",
    image:
      "https://placehold.co/600x400/e9ecef/5d63fd?text=Portfolio+Website&font=montserrat",
    tags: ["React", "Tailwind CSS", "Vite", "TypeScript"],
    liveUrl: "#",
    codeUrl: "#",
    caseStudy: {
      overview:
        "A modern personal portfolio website showcasing my projects, skills, and professional experience. The site features a responsive design with smooth animations, dark/light mode support, and an intuitive user interface that effectively communicates my capabilities to potential clients and employers.",
      challenge:
        "The main challenge was to create a portfolio that stands out in a crowded field, effectively communicates my skills and personality, loads quickly, and provides an exceptional user experience across all devices while being easy to update with new projects and information.",
      solution:
        "I developed a custom portfolio using React and Tailwind CSS, focusing on performance, accessibility, and modern design principles. The website features component-based architecture for easy maintenance, optimized assets for fast loading, and thoughtful micro-interactions to enhance user engagement.",
      features: [
        {
          title: "Responsive Design",
          description:
            "Fully responsive layout that adapts seamlessly to any screen size from mobile devices to large desktop monitors.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Responsive&font=montserrat",
        },
        {
          title: "Dark/Light Mode",
          description:
            "User-toggleable theme preference with automatic detection of system preferences and persistent settings.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Themes&font=montserrat",
        },
        {
          title: "Animated Transitions",
          description:
            "Subtle animations and transitions that enhance the user experience without being distracting.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Animations&font=montserrat",
        },
        {
          title: "Contact Form",
          description:
            "Functional contact form with validation and email notification integration for easy communication.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Contact&font=montserrat",
        },
      ],
      technologies: [
        {
          name: "React",
          description:
            "Powers the component-based UI architecture for a dynamic and interactive experience.",
          icon: "⚛️",
        },
        {
          name: "TypeScript",
          description:
            "Ensures type safety and improves code maintainability and developer experience.",
          icon: "📘",
        },
        {
          name: "Tailwind CSS",
          description:
            "Enables rapid styling with utility classes and consistent design language.",
          icon: "🎨",
        },
        {
          name: "Vite",
          description:
            "Provides fast development server and optimized production builds.",
          icon: "⚡",
        },
        {
          name: "Framer Motion",
          description:
            "Powers smooth animations and transitions throughout the interface.",
          icon: "✨",
        },
      ],
      process: [
        {
          title: "Design & Planning",
          description:
            "Started with wireframes and mood boards to establish the visual direction and user flow through the portfolio.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Design&font=montserrat",
        },
        {
          title: "Component Development",
          description:
            "Built reusable components for consistent UI elements and easier maintenance.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Components&font=montserrat",
        },
        {
          title: "Content Creation",
          description:
            "Developed compelling content that effectively communicates skills, project details, and professional background.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Content&font=montserrat",
        },
        {
          title: "Optimization & Testing",
          description:
            "Conducted performance optimization, accessibility testing, and cross-browser compatibility checks.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Testing&font=montserrat",
        },
      ],
      outcomes:
        "The portfolio has successfully attracted client inquiries and job opportunities, with visitors spending an average of 4.2 minutes on the site. The project showcases both my design sensibilities and technical capabilities in modern web development practices.",
      testimonial: {
        quote:
          "I was immediately impressed by the portfolio's clean design and smooth interactions. It clearly communicated the developer's skills and attention to detail, which gave me confidence in reaching out for our project needs.",
        author: "Alex Rivera",
        role: "Creative Director, Design Studio",
      },
      nextSteps:
        "Future plans include implementing a blog section to share technical insights, adding more interactive project demonstrations, and continually updating with new work samples and skills as they develop.",
    },
  },
];
