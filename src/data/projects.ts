import mavlead from "../assets/projects/mavlead.png";
import cloudSync from "../assets/projects/cloudSync.png";
import documind from "../assets/projects/documind.png";

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
    id: "documind",
    title: "DocuMind",
    description:
      "A full-stack AI-powered document chat application that allows users to upload PDFs and interact with them through a conversational interface with source-backed responses.",

    image: documind, // your image reference

    tags: [
      "React",
      "TypeScript",
      "FastAPI",
      "LangChain",
      "ChromaDB",
      "PostgreSQL",
      "RAG",
    ],

    liveUrl: "https://documind-delta.vercel.app",
    codeUrl: "https://github.com/Hemant837/documind",

    caseStudy: {
      overview:
        "DocuMind is a Retrieval-Augmented Generation (RAG) based application designed to help users extract insights from documents. Users can upload PDFs and query them via a chat interface, receiving context-aware answers with inline source citations.",

      challenge:
        "The main challenge was to build an accurate and scalable system that could process large PDF documents, retrieve relevant context efficiently, and generate grounded responses while maintaining performance and multi-user data isolation.",

      solution:
        "I implemented a complete RAG pipeline using LangChain for orchestration, ChromaDB for vector storage, and FastAPI for backend services. The system processes PDFs through chunking and embeddings, retrieves relevant context using semantic search, and generates responses using an LLM with real-time streaming.",

      features: [
        {
          title: "PDF Upload & Processing",
          description:
            "Users can upload PDF documents which are parsed, chunked, and converted into embeddings for semantic search.",
        },
        {
          title: "AI Chat Interface",
          description:
            "Interactive chat interface that allows users to query documents and receive context-aware responses with inline citations.",
        },
        {
          title: "Real-time Streaming",
          description:
            "Implemented token-by-token streaming of LLM responses using Server-Sent Events (SSE) for improved user experience.",
        },
        {
          title: "Multi-tenant Architecture",
          description:
            "Ensured data isolation by scoping all database queries and vector searches using user IDs.",
        },
        {
          title: "Authentication System",
          description:
            "Integrated JWT-based authentication with email/password and Google OAuth for secure access.",
        },
      ],

      technologies: [
        {
          name: "React + TypeScript",
          description:
            "Frontend for building a responsive and interactive chat interface.",
          icon: "⚛️",
        },
        {
          name: "FastAPI",
          description:
            "Async backend framework for handling APIs, streaming, and request processing.",
          icon: "⚡",
        },
        {
          name: "LangChain",
          description:
            "Used for orchestrating the RAG pipeline and managing LLM workflows.",
          icon: "🔗",
        },
        {
          name: "ChromaDB",
          description:
            "Vector database for storing embeddings and performing semantic search.",
          icon: "🧠",
        },
        {
          name: "PostgreSQL",
          description:
            "Used for storing user data, chat history, and metadata.",
          icon: "🗄️",
        },
      ],

      process: [
        {
          title: "Document Ingestion",
          description:
            "Parsed PDFs, applied semantic chunking, and generated embeddings for efficient retrieval.",
        },
        {
          title: "Retrieval Pipeline",
          description:
            "Implemented vector similarity search to fetch relevant document chunks based on user queries.",
        },
        {
          title: "Response Generation",
          description:
            "Used LLMs to generate context-aware responses grounded in retrieved data.",
        },
        {
          title: "Streaming & UI",
          description:
            "Integrated SSE for real-time streaming and built a responsive chat UI in React.",
        },
      ],

      outcomes:
        "Successfully built a production-ready AI application capable of handling multi-user document queries with real-time responses, improving usability and enabling efficient knowledge extraction from unstructured data.",

      nextSteps:
        "Planned improvements include hybrid search (keyword + vector), LangGraph-based decision routing, and evaluation pipelines to measure response accuracy.",
    },
  },
  {
    id: "mavlead",
    title: "Mavlead",
    description:
      "A responsive lead generation and marketing platform built with React, Tailwind CSS, and Express.js. Designed to highlight services in Salesforce, CRM, AI, and digital marketing with optimized performance and user-friendly navigation.",
    image: mavlead,
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
    id: "cloudsync",
    title: "Cloud Sync",
    description:
      "A modern SaaS landing page built with React and Tailwind CSS, designed to showcase cloud-based file synchronization services. The page focuses on responsive design, clean UI, and optimized performance for high lead conversion.",
    image: cloudSync,
    tags: [
      "React",
      "Tailwind CSS",
      "Landing Page",
      "SaaS",
      "Responsive Design",
    ],
    liveUrl: "https://cloud-sync-six.vercel.app/",
    codeUrl: "https://github.com/Hemant837/saas-landing-page",
    caseStudy: {
      overview:
        "Cloud Sync is a sleek SaaS landing page tailored for a file synchronization product. It was designed to deliver a strong first impression, convert visitors into leads, and demonstrate the product’s core value proposition with clarity.",
      challenge:
        "The goal was to create a visually appealing and conversion-focused landing page that communicates the value of cloud synchronization while being responsive and fast across all devices.",
      solution:
        "I designed and developed a clean, responsive landing page using React and Tailwind CSS. The design emphasizes readability, visual hierarchy, and optimized performance, ensuring smooth user experience across devices.",
      features: [
        {
          title: "Responsive Design",
          description:
            "Crafted a fully responsive layout that adapts seamlessly to mobile, tablet, and desktop devices.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Responsive&font=montserrat",
        },
        {
          title: "Optimized Performance",
          description:
            "Implemented best practices for fast load times and smooth interactions, boosting lead conversion rates.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Performance&font=montserrat",
        },
        {
          title: "Clean UI/UX",
          description:
            "Designed a minimal, modern interface that highlights the product’s features and encourages user engagement.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=CleanUI&font=montserrat",
        },
        {
          title: "Scalable Components",
          description:
            "Built reusable React components styled with Tailwind, making future updates and expansions seamless.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Scalable&font=montserrat",
        },
      ],
      technologies: [
        {
          name: "React",
          description: "Developed component-based UI for better scalability.",
          icon: "⚛️",
        },
        {
          name: "Tailwind CSS",
          description:
            "Created responsive, utility-first designs with a consistent theme.",
          icon: "🎨",
        },
        {
          name: "Vercel",
          description:
            "Deployed the landing page with optimized performance and fast global delivery.",
          icon: "▲",
        },
      ],
      process: [
        {
          title: "Planning & Wireframing",
          description:
            "Outlined page structure and lead conversion strategy through initial wireframes.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Planning&font=montserrat",
        },
        {
          title: "UI/UX Design",
          description:
            "Created a clean, minimal design with strong CTAs and optimized layout for conversions.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Design&font=montserrat",
        },
        {
          title: "Development",
          description:
            "Implemented React components styled with Tailwind CSS, ensuring responsiveness and performance.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Development&font=montserrat",
        },
        {
          title: "Testing & Launch",
          description:
            "Tested across devices and browsers to ensure smooth, bug-free user experience before deployment.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Testing&font=montserrat",
        },
      ],
      outcomes:
        "The Cloud Sync landing page successfully highlights the product’s benefits, improves brand credibility, and enhances lead generation through optimized UI/UX and performance.",
      testimonial: {
        quote:
          "The landing page was exactly what we needed — fast, clean, and built for conversions. It effectively communicates our product value.",
        author: "Cloud Sync Team",
        role: "Client",
      },
      nextSteps:
        "Planned enhancements include adding more UI sections, making additional links functional, and expanding the design with new pages to showcase advanced UI development skills.",
    },
  },
  {
    id: "realigno",
    title: "Realigno",
    description:
      "A multi-tenant SaaS dashboard built with React and Tailwind CSS, designed to help organizations manage operations across multiple clients. Focused on scalability, role-based access, and delivering a seamless data-driven user experience.",
    image:
      "https://placehold.co/600x400/e9ecef/5d63fd?text=Realigno&font=montserrat",
    tags: ["React", "TypeScript", "Tailwind CSS", "Express.js", "Multi-Tenant"],
    liveUrl: "https://realigno.com/",
    codeUrl: "#",
    caseStudy: {
      overview:
        "Realigno is a multi-tenant SaaS platform that provides dashboards and role-based workflows for client organizations. The platform was designed to simplify management, enhance collaboration, and scale efficiently for multiple customers.",
      challenge:
        "The client required a robust dashboard system that could handle multiple organizations (multi-tenancy), provide role-based access, and deliver a clear UI to manage different workflows without compromising performance.",
      solution:
        "I implemented Figma-to-UI components with React + TypeScript, styled with Tailwind CSS for responsiveness and design consistency. A multi-tenant architecture was set up with role-based workflows, ensuring that each client organization had secure, isolated access.",
      features: [
        {
          title: "Multi-Tenant Architecture",
          description:
            "Developed a structure that supports multiple organizations under one platform, with isolated data and workflows for each client.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=MultiTenant&font=montserrat",
        },
        {
          title: "Role-Based Workflows",
          description:
            "Implemented dynamic role-based permissions, allowing managers, admins, and users to access features relevant to their responsibilities.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=RBAC&font=montserrat",
        },
        {
          title: "Figma-to-UI Conversion",
          description:
            "Translated high-fidelity Figma designs into pixel-perfect, reusable UI components with React and Tailwind CSS.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=FigmaUI&font=montserrat",
        },
        {
          title: "Scalability",
          description:
            "Ensured the system could onboard multiple client organizations smoothly, without affecting performance or security.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Scalability&font=montserrat",
        },
      ],
      technologies: [
        {
          name: "React + TypeScript",
          description:
            "Built modular and reusable UI components with strict typing for maintainability.",
          icon: "⚛️",
        },
        {
          name: "Tailwind CSS",
          description:
            "Ensured consistent and responsive UI design across desktop and mobile devices.",
          icon: "🎨",
        },
        {
          name: "Express.js",
          description:
            "Backend APIs to support multi-tenant workflows and secure data management.",
          icon: "⚡",
        },
        {
          name: "RBAC",
          description:
            "Dynamic role-based access system for admins, managers, and users.",
          icon: "🔐",
        },
      ],
      process: [
        {
          title: "Requirement Gathering",
          description:
            "Collaborated with the client to define multi-tenant requirements and role-specific workflows.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Planning&font=montserrat",
        },
        {
          title: "UI/UX Design Conversion",
          description:
            "Translated Figma wireframes and high-fidelity designs into a scalable, component-driven UI.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Design&font=montserrat",
        },
        {
          title: "Development",
          description:
            "Built React + TypeScript frontend and Express.js backend APIs with multi-tenant handling.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Development&font=montserrat",
        },
        {
          title: "Testing & Iteration",
          description:
            "Conducted QA testing to ensure secure tenant isolation and smooth performance across clients.",
          image:
            "https://placehold.co/600x400/e9ecef/5d63fd?text=Testing&font=montserrat",
        },
      ],
      outcomes:
        "The Realigno platform enabled the client to manage multiple organizations under one dashboard, improving efficiency and scalability. Role-based workflows enhanced collaboration while maintaining data security.",
      testimonial: {
        quote:
          "The dashboard streamlined operations across multiple clients and gave us the flexibility we needed. Great work on the multi-tenant system!",
        author: "Realigno Team",
        role: "Client",
      },
      nextSteps:
        "Planned enhancements include advanced analytics dashboards, integrations with third-party tools, and further automation of workflows.",
    },
  },
];
