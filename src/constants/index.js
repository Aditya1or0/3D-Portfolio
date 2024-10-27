import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  bootstrap,
  java,
  mysql,
  express,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  kvlogo,
  aktulogo,
  codealphalogo,
  Kharidari,
  Bgremover,
  Chatapp,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "Bachelor of Technology",
    company_name: "A.P.J Abdul Kalam Technical University Ghaziabad, India",
    icon: aktulogo,
    iconBg: "#E6DEDD",
    date: "October 2020 - August 2024",
    points: ["SGPA: 7.37 / 10.0", "Stream: Computer Science"],
  },
  {
    title: "Web Developer",
    company_name: "CodeAlpha",
    icon: codealphalogo,
    iconBg: "#383E56",
    date: "October 2023 - January 2024",
    points: [
      "Developed and maintained websites utilizing HTML, CSS, and JavaScript.",
      "Collaborated with a team of four, enhancing teamwork and project management skills.",
      "Successfully delivered multiple projects per week on schedule Projects.",
      "Location: Remote Internship",
    ],
    location: "Remote",
  },
  {
    title: "Higher Secondary Certificate (HSC) / 12th Grade",
    company_name: "Kendriya Vidyalaya Kamla Nehru Nagar, Ghaziabad, India",
    icon: kvlogo,
    iconBg: "#383E56",
    date: "April 2019 - June 2020",
    points: ["CGPA: 8.1 / 10.0", "Stream: Science"],
  },
  {
    title: "Secondary School Certificate (SSC) / 10th Grade",
    company_name: "Kendriya Vidyalaya Kamla Nehru Nagar, Ghaziabad, India",
    icon: kvlogo,
    iconBg: "#E6DEDD",
    date: "April 2017 - April 2018",
    points: ["CGPA: 7.7 / 10.0"],
  },
];

const projects = [
  {
    name: "KHARIDARI",
    description:
      "This stylish online store, built with the MERN stack and Tailwind CSS, offers a seamless shopping experience for fashion lovers. Users can easily browse through a wide range of trendy clothing and add items to their cart. The website supports secure payments through Stripe and Razorpay, allowing for smooth transactions with test modes for safe checking.",
    tags: [
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "express-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "nodejs-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Kharidari,
    source_code_link: "https://github.com/Aditya1or0/KHARIDARI",
  },
  {
    name: "BgRemover",
    description:
      "This user-friendly platform, developed using the MERN stack and styled with Tailwind CSS, offers a seamless experience for removing backgrounds from images. Users can easily create accounts with secure login and signup options.AI used for removing backgrounds. Transactions are handled through Razorpay, allowing users to purchase credits for their image processing needs",
    tags: [
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "express-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "nodejs-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "ai",
        color: "ai-text-gradient",
      },
    ],
    image: Bgremover,
    source_code_link: "https://github.com/Aditya1or0/Bg-Remover",
  },
  {
    name: "ChatApp",
    description:
      "This project showcases a dynamic chat application built with React.js and Firebase, offering real-time messaging features. Users can create accounts,  and manage their friend lists, enhancing social connectivity. The app also includes an in-app interface for uploading and sharing images, enriching the chat experience. It serves as a solid foundation for understanding full-stack development and real-time data handling.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "yellow-text-gradient",
      },
      {
        name: "css",
        color: "blue-lite-text-gradient",
      },
    ],
    image: Chatapp,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
