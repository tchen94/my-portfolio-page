import type { LinkArray, PhotoArray } from "@/types/types";

export const NAVLINKS: LinkArray = [
  { href: "/about", label: "About Me" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export const PHOTOS: PhotoArray = [
  {
    className: "rounded-lg max-h-[500px] object-cover",
    src: "/bongo_profile.jpg",
    alt: "Bongo",
    width: 400,
    height: 400,
  },
  {
    className: "rounded-lg max-h-[500px] object-cover",
    src: "/monsgeek.jpg",
    alt: "Keeb",
    width: 700,
    height: 400,
  },
  {
    className: "rounded-lg max-h-[500px] object-cover",
    src: "/mochi.jpg",
    alt: "Mochi",
    width: 400,
    height: 400,
  },
];

export const FRONTENDTECHTOP: PhotoArray = [
  {
    className: "animate-float mr-5 size-12 md:size-16 md:mr-5 hover:animate-pulse ",
    src: "/icons/react.png",
    alt: "React",
    width: 75,
    height: 75,
  },
  {
    className: "animate-float mr-5 md:mr-5 md:size-16 hover:animate-pulse size-12",
    src: "/icons/nextjs.png",
    alt: "NextJS",
    width: 75,
    height: 75,
  },
  {
    className: "animate-float mr-5 md:mr-5 md:size-16 hover:animate-pulse size-12",
    src: "/icons/tailwindcss.png",
    alt: "Tailwind CSS",
    width: 75,
    height: 75,
  },
  {
    className: "animate-float mr-5 md:mr-5 md:size-16 hover:animate-pulse size-12",
    src: "/icons/typescript.png",
    alt: "TypeScript",
    width: 75,
    height: 75,
  },
  {
    className: "animate-float mr-5 md:size-16 hover:animate-pulse size-12",
    src: "/icons/javascript.png",
    alt: "JavaScript",
    width: 75,
    height: 75,
  },
];
export const FRONTENDTECHBOTTOM: PhotoArray = [
  {
    className: "animate-float mr-5 mt-5 hover:animate-pulse md:size-16 size-12",
    src: "/icons/html5.png",
    alt: "HTML",
    width: 75,
    height: 75,
  },
  {
    className: "animate-float mr-5 mt-5 hover:animate-pulse md:size-16 size-12",
    src: "/icons/css3.png",
    alt: "CSS",
    width: 75,
    height: 75,
  },
  {
    className: "animate-float mr-5 mt-5 hover:animate-pulse md:size-16 size-12",
    src: "/icons/sass.png",
    alt: "SASS",
    width: 75,
    height: 75,
  },
  {
    className: "animate-float mr-5 mt-5 hover:animate-pulse md:size-16 size-12",
    src: "/icons/redux.png",
    alt: "Redux & Redux Toolkit",
    width: 75,
    height: 75,
  },
  {
    className: "animate-float mr-5 mt-5 hover:animate-pulse md:size-16 size-12",
    src: "/icons/nodejs.png",
    alt: "NodeJS",
    width: 75,
    height: 75,
  },
];

export const OTHERTECHSONE: PhotoArray = [
  {
    className: "animate-float mr-5 mt-5 hover:animate-pulse md:size-16 size-12",
    src: "/icons/java.png",
    alt: "Java",
    width: 75,
    height: 75,
  },
  {
    className: "animate-float mr-5 mt-5 hover:animate-pulse md:size-16 size-12",
    src: "/icons/python.png",
    alt: "Python",
    width: 75,
    height: 75,
  },
  {
    className: "animate-float mr-5 mt-5 hover:animate-pulse md:size-16 size-12",
    src: "/icons/spring.png",
    alt: "Spring",
    width: 75,
    height: 75,
  },
  {
    className: "animate-float mr-5 mt-5 hover:animate-pulse md:size-16 size-12",
    src: "/icons/aws.png",
    alt: "AWS",
    width: 75,
    height: 75,
  },
  {
    className: "animate-float mr-5 mt-5 hover:animate-pulse md:size-16 size-12",
    src: "/icons/jenkins.png",
    alt: "Jenkins",
    width: 75,
    height: 75,
  },
];
export const OTHERTECHSTWO: PhotoArray = [
  {
    className: "animate-float mr-5 mt-5 hover:animate-pulse md:size-16 size-12",
    src: "/icons/postgresql.png",
    alt: "PostgreSQL",
    width: 75,
    height: 75,
  },
  {
    className: "animate-float mr-5 mt-5 hover:animate-pulse md:size-16 size-12",
    src: "/icons/mysql.png",
    alt: "MySQL",
    width: 75,
    height: 75,
  },
  {
    className: "animate-float mr-5 mt-5 hover:animate-pulse md:size-16 size-12",
    src: "/icons/aws-rds.png",
    alt: "AWS RDS",
    width: 75,
    height: 75,
  },
  {
    className: "animate-float mr-5 mt-5 hover:animate-pulse md:size-16 size-12",
    src: "/icons/git.png",
    alt: "Git",
    width: 75,
    height: 75,
  },
  {
    className: "animate-float mr-5 mt-5 hover:animate-pulse md:size-20 size-12",
    src: "/icons/docker.png",
    alt: "Docker",
    width: 75,
    height: 75,
  },
];

export const HEARTVIEW_TECH_STACK: PhotoArray = [
  { 
    src: "/icons/react.png",
    alt: "React",
    width: 60,
    height: 50,
    className: "ml-2 mr-2 mt-2 size-12"
  },
  {
    src: "/icons/nodejs.png",
    alt: "NodeJS",
    width: 60,
    height:50,
    className: "mr-2 mt-2 size-12"
  },
  {
    src: "/icons/sass.png",
    alt: "Sass",
    width: 60,
    height: 50,
    className: "mr-2 mt-2 size-12"
  }
]
export const PORTFOLIO_TECH_STACK: PhotoArray = [
  { 
    src: "/icons/react.png",
    alt: "React",
    width: 60,
    height: 50,
    className: "ml-2 mr-2 mt-4 size-12"
  },
  {
    src: "/icons/nextjs.png",
    alt: "Next.js",
    width: 60,
    height:50,
    className: "mr-2 mt-4 size-12"
  },
  {
    src: "/icons/tailwindcss.png",
    alt: "Tailwind CSS",
    width: 60,
    height: 50,
    className: "mr-2 mt-4 size-12"
  }
]