import { Github, Globe } from "lucide-react";

export const ProjectData = [
  {
    title: 'Admin Dashboard UI',
    technologies: [
      "React.js",
      "TailwindCSS",
      "Recharts",
      "MaterialUI",
      "Firebase",
    ],
    description:
      'With the demand for an interface that enhances efficient data management and dynamic visualizations, I decided to build a responsive admin dashboard with React featuring secured login.',
    image: "https://i.postimg.cc/ZK1qpPtW/admin.jpg",
    imageL: "https://i.postimg.cc/hvpyKmZ1/Screen-Shot-Tool-20240808141315.png",
    link: 'https://odyssey-admin-teal.vercel.app/',
    linkIcon: <Globe className="p-1 bg-transparent text-slate-900 text-md" />,
    githubIcon: <Github className="p-1 bg-transparent text-slate-900 text-md" />,
    github: 'https://github.com/Oyawe/odysseyAdmin',

  },
  {
    title: 'Premium Thrift Shop',
    technologies: [
      "React.js",
      "TailwindCSS",
      "Fake Store API",
    ],
    description:
      'This is an eCommerce shopping app. Features ip-1 nclude product listings, detailed product pages and a shopping cart providing a visually appealing shopping experience.',
    image: 'https://i.postimg.cc/SK6DLGnV/Screenshot-2024-08-08-at-5-09-18-PM.jpg',
    link: 'https://e-commerce-web-app-flame.vercel.app/',
    linkIcon: <Globe className="p-1 bg-transparent text-slate-900 text-md" />,
    githubIcon: <Github className="p-1 bg-transparent text-slate-900 text-md" />,
    github: 'https://github.com/Oyawe/E-commerce-web-app',
  },
  {
    title: 'VirtualE Landing Page',
    technologies: [
      "React.js",
      "TailwindCSS",
      "Framer Motion",
    ],
    description:
      'A virtual reality landing page built with React and Framer Motion showcasing immersive animations and a modern UI',
    image: 'https://i.postimg.cc/50pgTNqC/Screenshot-2024-08-08-at-5-59-32-PM.jpg',
    link: 'https://virtual-e-gules.vercel.app/',
    linkIcon: <Globe className="p-1 bg-transparent text-slate-900 text-md" />,
    githubIcon: <Github className="p-1 bg-transparent text-slate-900 text-md" />,
    github: 'https://github.com/Oyawe/virtualE',
  },
  {
    title: 'IMDb Clone',
    technologies: [
      "Next.js",
      "TailwindCSS",
      "TMDB API",
    ],
    description:
      'Another movie app clone but this time with seamless routing powered by the latest version of Next.js.',
    image: 'https://i.postimg.cc/d316YP4S/Screen-Shot-Tool-20240808143845-1.jpg',
    imageL: 'https://i.postimg.cc/wx4jBjyw/Screen-Shot-Tool-20240808144029.png',
    link: 'https://movie-app-eosin-seven.vercel.app/',
    linkIcon: <Globe className="p-1 bg-transparent text-slate-900 text-md" />,
    githubIcon: <Github className="p-1 bg-transparent text-slate-900 text-md" />,
    github: 'https://github.com/Oyawe/movie-app',
  },
];
