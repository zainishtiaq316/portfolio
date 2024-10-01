import {
  mobile,
  attend,
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
    name: "Attend Easy App",
    description:
      "Developed Attend-Easy, an intuitive app for students and administrators to streamline attendance tracking. The app allows users to manage profiles, handle leave requests, and offers support channels.",
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
        name: "firebase",
        color: "yellow-text-gradient",
      },
      
    ],
    image: attend,
    source_code_link: "https://drive.google.com/file/d/12V45yqptVVq2Q5z0IBDVu2Ocvp7p0xHp/view?usp=sharing",
    view_code_link: "https://drive.google.com/drive/folders/1EJ7iuVxRvc7R2Y9Z3codVRRqKWBJub1b?usp=sharing",
  },

  {
    name: "Property Yar App",
    description:
      "Collaborated on a real estate app, designing intuitive UI elements, integrating Firebase for real-time data and authentication, and ensuring mobile-responsive design for smooth user experience.",
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
        name: "Api Integration",
        color: "yellow-text-gradient",
      },
      {
        name: "firebase",
        color: "yellow-text-gradient",
      },
     
    ],
    image: ui,
    source_code_link: "https://github.com/zainishtiaq316/property-yar",
    view_code_link: "https://play.google.com/store/apps/details?id=com.propertyyar.realestate&hl=en",
  },
  {
    name: "E Broker App",
    description:
      "Collaborated on designing and managing the user interface for an intuitive property app, ensuring user-friendly UI and seamless navigation, along with effective backend integration.",
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
        name: "Api Integration",
        color: "yellow-text-gradient",
      },
      {
        name: "firebase",
        color: "yellow-text-gradient",
      },
      
    ],
    image: portfolio,
    source_code_link: "https://github.com/zainishtiaq316/ebroker/",
    view_code_link: "https://drive.google.com/drive/folders/1Y0wXrgJ695XkMWvpqd8JuxwHd91ykrBa?usp=sharing",
  },


  {
    name: "Wheel IT App",
    description:
      "Developed a user-friendly travel app for Pakistan, enabling users to explore destinations, book trips, and manage plans, with admin features for handling trip requests, bookings, and notifications. ",
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
        name: "firebase",
        color: "yellow-text-gradient",
      },
      
    ],
    image: food,
    source_code_link: "https://github.com/zainishtiaq316/wheelit",
    view_code_link: "https://drive.google.com/drive/folders/1i64ZE5vhlEC8_tsQWKxVlSkswjWeAUlV?usp=sharing",
  },

];

export { services, technologies, experiences, testimonials, projects };
