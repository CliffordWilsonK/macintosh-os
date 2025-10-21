export interface Project {
    id: string;
    name: string;
    type: string;
    src: string;
    alt: string;
    url: string;
    description: string;
    technologies: string[];
    category: string;
    year: string;
    features: string[];
    isFavorite?: boolean;
}

export const projects: Project[] = [
    {
      id: "project-macos",
      name: "Macintosh OS (Portfolio)",
      type: "Personal Project",
      src: "https://pickholder.sirv.com/Images/macos.png",
      alt: "Macintosh OS portfolio",
      url: "https://cliffordwilsonk.github.io/macintosh-os",
      description: "A portfolio site styled like classic Mac OS, designed for interactivity and nostalgia. Projects are presented as draggable apps, folders, and modals on a retro desktop interface.",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
      category: "Portfolio UI",
      year: "2025",
      features: [
        "Fully interactive Mac-style desktop",
        "Custom draggable windows and dock",
        "Responsive and mobile-optimized UI",
        "Smooth transitions and animations"
      ],
      isFavorite: true
    },
    {
      id: "project-climecache",
      name: "Example Project 1",
      type: "Personal Project",
      src: "https://pickholder.sirv.com/Images/weather.png",
      alt: "Example Project",
      url: "https://github.com/CliffordWilsonK",
      description: "Add your own project description here. This is a placeholder for your custom project.",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      category: "Web App",
      year: "2025",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4"
      ],
      isFavorite: true
    },
    {
      id: "project-1",
      name: "Example Project 2",
      type: "Personal Project",
      src: "https://pickholder.sirv.com/Images/thumbnail-main.png",
      alt: "Example Project 2",
      url: "https://github.com/CliffordWilsonK",
      description: "Add your own project description here. This is a placeholder for your custom project.",
      technologies: ["Next.js", "React", "Node.js"],
      category: "Web Application",
      year: "2025",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4"
      ],
      isFavorite: false
    },
    {
      id: "project-americare",
      name: "Example Project 3",
      type: "Personal Project",
      src: "https://pickholder.sirv.com/Images/americare.png",
      alt: "Example Project 3",
      url: "https://github.com/CliffordWilsonK",
      description: "Add your own project description here. This is a placeholder for your custom project.",
      technologies: ["Next.js", "Tailwind CSS", "React Icons"],
      category: "Website",
      year: "2025",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4"
      ],
      isFavorite: false
    },
    {
      id: "project-gh-explorer",
      name: "Example Project 4",
      type: "Personal Project",
      src: "https://pickholder.sirv.com/Images/github.jpg",
      alt: "Example Project 4",
      url: "https://github.com/CliffordWilsonK",
      description: "Add your own project description here. This is a placeholder for your custom project.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      category: "Developer Tool",
      year: "2025",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4"
      ],
      isFavorite: true
    },
    {
      id: "project-linktree",
      name: "Example Project 5",
      type: "Personal Project",
      src: "https://pickholder.sirv.com/Images/my-linktree.png",
      alt: "Example Project 5",
      url: "https://github.com/CliffordWilsonK",
      description: "Add your own project description here. This is a placeholder for your custom project.",
      technologies: ["Next.js", "Tailwind CSS", "Zustand"],
      category: "Web App",
      year: "2025",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4"
      ],
      isFavorite: false
    }
  ];
  
