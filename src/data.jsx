import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpg';


import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Zain',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Ishtiaq',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '22 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Pakistani',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Pakistan',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+923028163676',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'zainishtiaq.7866@gmail.com',
  },

  {
    id: 9,
    title: 'Skype : ',
    description: 'Zain.Ishtiaq316',
  },

  {
    id: 10,
    title: 'Languages : ',
    description: 'Urdu, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '1',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '3',
    title: 'Completed <br /> Projects',
  },

  

  {
    id: 4,
    no: '3',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023',
    title: 'Flutter Developer <span>  Digi-Markiz </span>',
    desc: "I completed my Flutter internship at Digimarkiz in July 2023. During my internship, I learned the fundamentals of Flutter development, including state management, Firebase, and widgets.",
  },
  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023 - Present',
    title: 'Flutter Developer <span>  Techons </span>',
    desc: "I currently hold the position of Flutter Developer at Techons, where I actively contribute to the team's success. Proficient in working with Restful APIs, Committed to delivering seamless and visually appealing user experiences.",
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019-2023',
    title: "Bachelor's Degree <span> University of the Punjab </span>",
    desc: "Bachelor's in Computer Science",
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2017-2019',
    title: 'Intermediate Degree <span> F.G inter College </span>',
    desc: 'Intermediate in ICS',
  },

];

export const skills = [
  {
    id: 1,
    title: 'Flutter',
    percentage: '70',
  },

  {
    id: 2,
    title: 'Dart',
    percentage: '75',
  },

  {
    id: 3,
    title: 'C++',
    percentage: '70',
  },

  {
    id: 4,
    title: 'Sql',
    percentage: '60',
  },

  {
    id: 5,
    title: 'Html',
    percentage: '50',
  },

  {
    id: 6,
    title: 'Css',
    percentage: '50',
  },

  {
    id: 7,
    title: 'Asp.net',
    percentage: '55',
  },

  {
    id: 8,
    title: 'ReactJs',
    percentage: '45',
  },
  {
    id: 9,
    title: 'Provider',
    percentage: '60',
  },
  {
    id: 10,
    title: 'Rest Api',
    percentage: '60',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Photo Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo Editing',
      },
      {
        icon: <FaCode />,
        title: 'Tool : ',
        desc: 'Canva',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Flutter App Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Flutter Applications',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Flutter',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video Editing',
      },
      {
        icon: <FaCode />,
        title: 'Tool : ',
        desc: 'Adobe Premiere',
      },
    ],
  },


];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
