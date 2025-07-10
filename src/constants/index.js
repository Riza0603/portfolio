import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  php,
  java,
  android,
} from "../assets";

import ganglia from "../assets/company/ganglia.png"; // Placeholder for Ganglia logo

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "education", title: "Education" },
  { id : "resume", title: "Resume" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Full-Stack Developer", icon: web },
  { title: "Frontend Developer", icon: mobile },
  { title: "Backend Developer", icon: backend },
  { title: "UI/UX Designer", icon: creator },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "PHP", icon: php },
  { name: "JAVA", icon: java },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Express Js", icon: express },
  { name: "MongoDB", icon: mongodb },
  { name: "MySQL", icon: mysql },
  { name: "Android", icon: android },
  { name: "AWS", icon: aws },
  { name: "Git", icon: git },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Ganglia Technologies",
    icon: ganglia,
    iconBg: "#383E56",
    date: "Jan 2025 - May 2025",
    points: [
      "Designed and developed web applications using the MERN stack.",
      "Enhanced performance and reliability through backend optimization.",
      "Built responsive UI components with improved mobile experience.",
      "Used Git for version control with proper branching and merging.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Riza is a dependable and driven developer who quickly adapts to new challenges and technologies.",
    name: "Mentor",
    designation: "Team Lead",
    company: "Ganglia Technologies",
    
  },
  {
    testimonial:
      "Riza played a key role in improving the performance of our web applications during his internship.",
    name: "Colleague",
    designation: "Software Engineer Intern",
    company: "Ganglia Technologies",
    
  },
  {
    testimonial:
      "He is committed, a quick learner, and great at collaborating with cross-functional teams.",
    name: "Professor",
    designation: "MCA Department",
    company: "Manipal Institute of Technology",
    
  },
];

import mitIcon from "../assets/education/mit.png";
import bascIcon from "../assets/education/bck.png";
import vivekaIcon from "../assets/education/vjc.png";
import bearysIcon from "../assets/education/bearys.png";

const educations = [
  {
    title: "Master of Computer Applications (MCA)",
    institution: "Manipal Institute of Technology",
    icon: mitIcon, // Replace with actual import if available
    iconBg: "#915EFF",
    date: "Aug 2023 - July 2025",
    points: ["CGPA: 8.83"],
  },
  {
    title: "Bachelor of Computer Applications (BCA)",
    institution: "Bhandarkars Arts and Science College",
    icon: bascIcon,
    iconBg: "#383E56",
    date: "Aug 2020 - June 2023",
    points: ["CGPA: 9.13"],
  },
  {
    title: "Pre-University (PU)",
    institution: "Viveka PU College",
    icon: vivekaIcon,
    iconBg: "#1D1836",
    date: "June 2018 - Mar 2019",
    points: ["Score: 91.50%"],
  },
  {
    title: "SSLC",
    institution: "Bearys Seaside Public School, Kodi",
    icon: bearysIcon,
    iconBg: "#2D2E32",
    date: "June 2016 - Mar 2017",
    points: ["Score: 95.36%"],
  },
];

const projects = [
  {
    name: "Sprintly",
    description:
      "A project management tool for task tracking, team collaboration, and document uploads built using the MERN stack.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "node", color: "green-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "express", color: "white-text-gradient" },
    ],
    image: project2,
    source_code_link: "https://github.com/Riza0603/Sprintly/", // Update with actual link if available
  },
  {
    name: "Vehicle Rental App",
    description:
      "Android app developed with Firebase to browse, book, and manage rentals for bikes, cars, and EVs.",
    tags: [
      { name: "android", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/Riza0603/", // Update with actual link if available
  },
  {
    name: "Hospital Management System",
    description:
      "Web app to manage appointments, doctors, and patients using PHP, HTML, CSS, and JavaScript.",
    tags: [
      { name: "php", color: "blue-text-gradient" },
      { name: "html", color: "white-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
      { name: "javascript", color: "yellow-text-gradient" },
    ],
    image: project3,
    source_code_link: "https://github.com/Riza0603/Hospital-Management-System/", // Update with actual link if available
  },
];

export {
  services,
  technologies,
  experiences,
  educations,
  testimonials,
  projects,
};
