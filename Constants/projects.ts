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
      src: "https://techcosmocrat.sirv.com/Images/macos_portfolio.png",
      alt: "Macintosh OS portfolio",
      url: "https://techcosmocrat-macos.vercel.app",
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
      id: "project-paradise-nursery",
      name: "Paradise Nursery",
      type: "Personal Project",
      src: "https://techcosmocrat.sirv.com/Images/plant_nursery.png",
      alt: "Paradise Nursery",
      url: "https://cliffordwilsonk.github.io/e-plantShopping/",
      description: "A complete e-commerce website for a plant nursery, featuring product browsing, a shopping cart, and checkout process. Built to practice front-end development and user experience design.",
      technologies: ["React.js", "Redux", "JavaScript"],
      category: "E-commerce App",
      year: "2025",
      features: [
        "Product catalog with search and filters",
        "Shopping cart and checkout process",
        "User reviews and ratings",
        "Responsive design for all devices"
      ],
      isFavorite: false
    },
    {
      id: "project-1",
      name: "EcstaticLearn",
      type: "Personal Project",
      src: "https://techcosmocrat.sirv.com/Images/ecstatic.png",
      alt: "EcstaticLearn",
      url: "https://ecstaticlearn.netlify.app/",
      description: "A flashcard and quiz app generated from pdfs and other documents. Built to help students study and retain information more effectively through active recall and spaced repetition techniques.",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "pdf.js"],
      category: "Study Tool",
      year: "2025",
      features: [
        "PDF import and parsing",
        "Flashcard generation",
        "Interactive UI",
        "Lightweight and responsive"
      ],
      isFavorite: true
    },
    {
      id: "project-americare",
      name: "Techcosmocrat BootCamp Website",
      type: "Web App",
      src: "https://techcosmocrat.sirv.com/Images/techcosmo_camp.png",
      alt: "Techcosmocrat BootCamp Website",
      url: "https://techcosmo-camp.vercel.app/",
      description: "A comprehensive platform for Techcosmocrat's bootcamp programs, featuring course listings, instructor profiles, and student testimonials.",
      technologies: ["React.js", "Firebase", "Tailwind CSS"],
      category: "Platform",
      year: "2025",
      features: [
        "Course catalog with detailed descriptions",
        "Instructor bios and ratings",
        "Student testimonials and success stories",
        "Responsive design"
      ],
      isFavorite: false
    },
    {
      id: "project-renteasy",
      name: "RentEasy Platform",
      type: "Personal Project",
      src: "https://techcosmocrat.sirv.com/Images/Screenshot%202025-11-04%20222823.png",
      alt: "RentEasy Platform",
      url: "https://renteasy.gt.tc/",
      description: "A rental management platform that simplifies the process of listing, searching, and managing rental properties for landlords and tenants.",
      technologies: ["Php", "MySQL", "JavaScript", "Bootstrap"],
      category: "Rental Management",
      year: "2025",
      features: [
        "User account creation & login",
        "Property listing & search",
        "Landlord & tenant dashboards"
      ],
      isFavorite: false
    }
  ];
  
