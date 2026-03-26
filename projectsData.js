// src/data/projectsData.js

const projectsData = [
  {
    id: 1,
    title: "AI Analytics ",
    description:
      "A ChatGPT-like AI platform where users can interact with AI using natural language.",
    image: "/AI_Analytics.png",
    tech: ["React", "Django", "PostgreSQL", "OpenAI API"],
    github: "/",
    live: "/",
    case: "DEV",
  },

  {
    id: 2,
    title: "Suatainable Shopping Assistant",
    description:
      "A web platform that helps users find eco-friendly and sustainable products.",
    image: "/shopping_UI.jpeg",
    tech: ["React", "Django", "GraphQL", "PostgreSQL"],
    github: "https://github.com/INDRASHEKHARSINGH/Sustainable-Shopping-Assistant.git",
    live: "/",
    case: "DEV",
  },

  {
    id: 3,
    title: "Product Management API",
    description:
      "A real-time messaging platform similar to WhatsApp using WebSockets.",
    image: "/product_management.png",
    tech: ["React", "FastAPI", "PostgreSQL"],
    github: "https://github.com/INDRASHEKHARSINGH/Product_Management.git",
    live: "https://github.com/INDRASHEKHARSINGH/Product_Management.git",
    case: "LIVE",
  },
];

export default projectsData;