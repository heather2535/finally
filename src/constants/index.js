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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "User Experience Research",
    icon: backend,
  },
  {
    title: "Product Designer",
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
    title: "Lead User Experience Designer",
    company_name: "Talentora",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "September 2024 - Current",
    points: [
      "Led all design decision-making for team of five developers and two designers, creating a groundbreaking app that leverages conversational AI assessments to streamline the first-round hiring process, enabling recruiters to find the perfect candidates faster.",
      "Designed brand/marketing identity and user interface, creating 15 unique assets including logos, promotional media, and icons, resulting in an increased brand recognition.",
      "Modeled and linked over 50+ screens with a final understanding presentation to facilitate clean design handoff.",
      "Worked closely with developers to create a working pilot and current beta release.",
    ],
    
  },
  {
    title: "UI/UX Designer",
    company_name: "Boston University – AI Task Force Policy Dashboard",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Novmeber 2023 - April 2024",
    points: [
      "Designed an intuitive, data-driven dashboard for analysing ethical AI practices, providing more than 100 leading resources, a semantic graph, and topic models.",
      "Integrated tools such as ShadCN and MUI for front-end, CMS for organization of resource filtering , and node.js and react for data visualization.",
      "Partnered with developers to design and integrate interactive tools for over 400 researchers and faculty to analyze ethical AI use.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "UX Design Intern",
    company_name: "Cervera",
    icon: shopify,
    iconBg: "#383E56",
    date: "June 2024 - August 2024",
    points: [
      "Crafted impactful real estate marketing campaigns across landing pages, organic assets, and print materials, leading to a $15,000 quarterly increase in agent sales.",
      "Developed nationwide branding materials, building a unified outlook across diverse brand guidelines and effectively managing multiple projects simultaneously across cross-functional teams.",
      "Accomplished an increase in user engagement, as measured by improved click-through rates and session durations, by utilizing a command of visual design, typography, color theory, and visual storytelling to create compelling and cohesive user interfaces.",
    ],
  },
  {
    title: "Lead User Experience Designer",
    company_name: "Boston Children's Hospital",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Completed a comprehensive competitor analysis, measuring market share across 10 key competitors and identifying a 15% gap in feature differentiation. This positioned our product for an increase in market penetration",
      "Communicated interaction and design ideas to prospective shareholders through the development of critical mockups, detailed storyboards, and prototypes that address user stories.",
      "Crafted intuitive user interfaces for 2 major projects based on close collaboration with the client, resulting in a 30% improvement in end-user satisfaction and usability.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },

  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
