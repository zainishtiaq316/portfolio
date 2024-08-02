import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  ui,
  dart,
  html,
  css,
  nodejs,
  jawanpk,
  panaverse,
  food,
  portfolio,
  flutter,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Flutter Developer",
    icon: web,
  },
  {
    title: "Dart Developer",
    icon: mobile,
  },
  {
    title: "JavaScript & Typescript Developer",
    icon: backend,
  },
  {
    title: "Node Js & Firebase",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Flutter",
    icon: flutter,
  },  
  {
    name: "Dart",
    icon: dart,
  },  
];

const experiences = [
  {
    title: "JavaScript , TypeScript & NodeJs",
    company_name: "Piaic , Panaverse",
    icon: panaverse,
    iconBg: "#383E56",
    date: "Sept 2022 - April 2023",
    points: [
      "As a JavaScript, TypeScript, and Node.js developer," , 
      "I specialize in programming with JavaScript, TypeScript, and Node.js.",
      "Implementing efficient and scalable code for various projects." ,
       "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Flutter & Dart Developer",
    company_name: "Jawan Pakistan",
    icon: jawanpk,
    iconBg: "#E6DEDD",
    date: "March 2023 - July 2023",
    "points": [
      "Developing and maintaining mobile applications using Flutter, Dart, and Firebase.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-platform compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a apps as beautiful as our product, but Abdul Hannan proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a app developer who truly cares about their clients' success like Abdul Hannan does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Abdul Hannan optimized our apps, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Food Delivery App",
    description:
      "App-based platform that allows users to browse, order, and manage food deliveries from multiple restaurants, providing a convenient and efficient solution for satisfying their hunger cravings.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "Laravel",
        color: "pink-text-gradient",
      },
    ],
    image: food,
    source_code_link: "https://github.com/",
  },
  {
    name: "Flutter Web Portfolio",
    description:
      "A web-based portfolio application developed using Flutter & Dart , showcase of my skills, projects, and experiences using Flutter for interactive and visually appealing presentation.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/techcoder01/protfolio",
  },
  {
    name: "Flutter Animation & UI's",
    description:
      "Experience mesmerizing animations and beautiful UI designs using Flutter & Dart . Unleash your creativity with Flutter's powerful toolkit and explore an immersive development journey. ",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
    ],
    image: ui,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
