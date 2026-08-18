import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  nexride,
  chattrix,
  aerox,
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
    title: "Backend Developer",
    icon: backend,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Backend Engineer",
    company_name: "Node.js & Cloud Architecture",
    icon: nodejs,
    iconBg: "#339933",
    points: [
      "Designing and maintaining scalable RESTful APIs and microservices using Node.js and Express.js.",
      "Architecting robust database schemas and query optimizations across MongoDB Atlas and PostgreSQL instances.",
      "Integrating real-time bidirectional messaging infrastructure using Socket.io and secure authentication with Google OAuth.",
      "Containerizing application services using Docker Compose and managing continuous deployment configurations.",
    ],
  },
  {
    title: "Database & API Specialist",
    company_name: "Relational & NoSQL Systems",
    icon: mongodb, // or postgresql / database icon
    iconBg: "#47A248",
    points: [
      "Designing normalized relational schemas and high-performance NoSQL structures using SQL Server, PostgreSQL, and MongoDB.",
      "Implementing type-safe ORM configurations with Drizzle ORM and robust request validation using Zod schemas.",
      "Building third-party service integrations including Stripe webhooks for e-commerce payment workflows.",
      "Optimizing query performance using 2DSphere geospatial indexes, connection pooling, and aggregation pipelines.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Web Applications & Real-Time Workspaces",
    icon: reactjs, // or web / fullstack icon
    iconBg: "#1F2937",
    points: [
      "Developing end-to-end web applications combining responsive frontend interfaces with high-performance Node.js backends.",
      "Building interactive live tools, e-commerce systems, and workspace platforms featuring real-time state synchronization.",
      "Executing Git team branching workflows, commit rebasing strategies, and repository management on GitHub.",
      "Enforcing clean architecture principles, modular code organization, and thorough end-to-end system testing.",
    ],
  },
];

const projects = [
  {
    name: "Chattrix",
    description:
      "A real-time workspace and messaging platform featuring live bidirectional communication, active user presence tracking, dynamic channel management, and secure Google OAuth authentication.",
    tags: [
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: chattrix, // replace with your imported image variable
    preview_link: "https://real-time-chat-app-r5ca.onrender.com/",
  },
  {
    name: "AeroX",
    description:
      "An e-commerce backend platform built for high-performance gaming hardware sales, integrated with Stripe webhooks for automated payment processing and secure user session management.",
    tags: [
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: aerox, // replace with your imported image variable
    preview_link: "https://aerox-x1gj.onrender.com/",
  },
  {
    name: "NexRide",
    description:
      "A ride-hailing backend service featuring geospatial location indexing for driver-rider matching, dynamic trip fare calculation, and high-concurrency MongoDB database architecture.",
    tags: [
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: nexride, // replace with your imported image variable
    preview_link: "https://nexride-kxka.onrender.com",
  },
];

export { services, technologies, experiences, projects };
