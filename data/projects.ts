export type ProjectMediaType = "image" | "video";

export type Project = {
  id: number;
  title: string;
  descriptionLead?: string;
  description: string;
  tools: string[];
  mediaType: ProjectMediaType;
  mediaSrc: string;
  mediaAlt: string;
  videoPoster?: string;
  gallery?: {
    src: string;
    alt: string;
  }[];
};

/*
 * Project template
 *
 * Image:
 *   mediaType: "image"
 *   mediaSrc: "/projects/your-image.jpg"
 *
 * Video:
 *   mediaType: "video"
 *   mediaSrc: "/projects/your-video.mp4"
 *   videoPoster: "/projects/your-video-cover.jpg" // optional
 *
 * Place media files inside public/projects/.
 */
export const projects: Project[] = [
  {
    id: 1,
    title: "AI RAG AGENT WORKFLOW AUTOMATION",
    descriptionLead: "AI Workflow Automation",
    description:
      "is a system that integrates artificial intelligence into business workflows to automate complex processes. It enables AI to analyze data, make decisions, and execute tasks efficiently, resulting in faster operations, improved accuracy, and optimized outcomes.",
    tools: ["n8n", "LINE Official Account"],
    mediaType: "image",
    mediaSrc: "/projects/AI_workflow.png",
    mediaAlt:
      "AI RAG agent workflow automation built with n8n and connected to a LINE chat interface",
  },
  {
    id: 2,
    title: "Weight-based Inventory",
    descriptionLead: "Weight-based Inventory",
    description:
      "is an IoT-based inventory monitoring system using an ESP32 and a weight sensor placed beneath a product container. The system converts the measured weight into the number of remaining items, enabling accurate and real-time stock monitoring.",
    tools: ["Arduino IDE", "ESP32"],
    mediaType: "video",
    mediaSrc: "/projects/dashboard.mp4",
    mediaAlt: "Demonstration of the Weight-based Inventory system",
  },
  {
    id: 3,
    title: "Fishy App",
    descriptionLead: "Fishy App",
    description:
      "is a mobile party game designed for social gatherings where players are randomly assigned hidden roles and divided into two opposing teams. Each player must communicate, analyze, and collaborate with teammates to identify who is telling the truth and who is deceiving others. The game emphasizes strategic thinking, teamwork, communication, and social deduction to create an engaging multiplayer experience.",
    tools: [".NET MAUI"],
    mediaType: "image",
    mediaSrc: "/projects/fishy-homepage.png",
    mediaAlt: "Fishy App mobile game homepage",
    gallery: [
      {
        src: "/projects/fishy-homepage.png",
        alt: "Fishy App homepage showing the three player roles",
      },
      {
        src: "/projects/fishy-how-to-play.png",
        alt: "Fishy App instructions explaining roles, gameplay, and scoring",
      },
      {
        src: "/projects/fishy-play-page.png",
        alt: "Fishy App play screen ready to begin a game",
      },
    ],
  },
  {
    id: 4,
    title: "AI E-commerse Review Analyzer",
    descriptionLead: "AI E-Commerce Review Analyzer",
    description:
      "is a web application that uses AI and NLP to automatically analyze customer reviews and comments. The system categorizes feedback into compliments, complaints, and suggestions, then presents the results as interactive charts and concise text summaries. This helps businesses gain actionable insights without manually reading large volumes of customer feedback.",
    tools: ["Python"],
    mediaType: "video",
    mediaSrc: "/projects/aiecommerse.mp4",
    mediaAlt: "Demonstration of the AI E-Commerce Review Analyzer",
  },
  {
    id: 5,
    title: "Stock Management System",
    descriptionLead: "Stock Management System",
    description:
      "is an inventory management application designed to efficiently manage warehouse operations. The system allows users to add, edit, delete, and monitor product records and stock quantities, helping reduce manual errors and improve the efficiency of inventory control.",
    tools: ["Java"],
    mediaType: "video",
    mediaSrc: "/projects/stockclip.mp4",
    mediaAlt: "Demonstration of the Stock Management System",
  },
];
