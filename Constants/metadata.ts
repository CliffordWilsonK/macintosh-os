export const metadata = {
    title: "CliffordWilsonK | Developer Portfolio",
    description: "Portfolio of CliffordWilsonK - A passionate developer creating innovative web experiences. Built with Next.js and inspired by classic Macintosh design.",
    keywords: [
      "CliffordWilsonK",
      "Clifford Wilson",
      "Frontend Developer",
      "Backend Developer",
      "Full-Stack Developer",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Web Developer",
      "Software Engineer",
      "Macintosh OS",
      "Classic Mac",
      "Mac OS",
      "Operating System",
      "Retro Computing",
      "Progressive Web App",
      "PWA",
      "Browser OS",
      "Desktop Experience",
      "Vintage Mac",
      "System 7",
      "Classic Computing"
    ],
    authors: [{ name: "CliffordWilsonK", url: "https://github.com/CliffordWilsonK" }],
    creator: "CliffordWilsonK",
    publisher: "CliffordWilsonK",
    icons: {
      icon: '/favicons/android-chrome-192x192.png',
      shortcut: '/favicons/android-chrome-512x512.png',
      apple: '/favicons/android-chrome-512x512.png',
      other: {
          rel: '/favicons/favicon.ico',
          url: '/favicons/favicon.ico',
      },
  },
    manifest: "/manifest.json",
    appleWebApp: {
      capable: true,
      statusBarStyle: "default" as const,
      title: "CliffordWilsonK Portfolio | Macintosh OS",
    },
    openGraph: {
      title: "CliffordWilsonK | Developer Portfolio",
      description: "Explore my projects and contributions in this interactive Macintosh-inspired portfolio. Built with modern web technologies.",
      url: "https://cliffordwilsonk.github.io/macintosh-os/",
      siteName: "CliffordWilsonK Portfolio",
      images: [
        {
          url: "https://pickholder.sirv.com/Images/og-image.png", 
          width: 1200,
          height: 630,
          alt: "CliffordWilsonK Portfolio Preview"
        }
      ],
      locale: "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: "CliffordWilsonK | Developer Portfolio",
      description: "An interactive portfolio showcasing my projects and skills. Built with Next.js and inspired by classic Macintosh design.",
      creator: "@CliffordWilsonK", 
      images: ["https://pickholder.sirv.com/Images/og-image.png"] 
    },
    metadataBase: new URL("https://cliffordwilsonk.github.io/macintosh-os/")
  };