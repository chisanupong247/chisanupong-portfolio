export type Activity = {
  id: number;
  title: string;
  descriptionPrefix?: string;
  descriptionLead?: string;
  description: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  date?: string;
  dateTime?: string;
};

export const activities: Activity[] = [
  {
    id: 1,
    title: "BU mini Hackathon",
    description:
      'Participated in the BU Mini Hackathon, under the theme "Operational Security in the Digital Age."',
    image: "/activities/buminihackaton.png",
    imageAlt: "BU Mini Hackathon event presentation",
    imageWidth: 4000,
    imageHeight: 2252,
    date: "28 September 2025",
    dateTime: "2025-09-28",
  },
  {
    id: 2,
    title: "Cybersecurity and IT Empowering Day",
    descriptionPrefix: "Participated in the ",
    descriptionLead: "Cybersecurity and IT Empowering Day",
    description:
      ", attending expert talks from leading technology companies and exploring innovative cybersecurity and IT projects showcased by senior students.",
    image: "/activities/cybersecurity.png",
    imageAlt:
      "Attending the Cybersecurity and IT Empowering Day event at Bangkok University",
    imageWidth: 2046,
    imageHeight: 2558,
    date: "9 May 2025",
    dateTime: "2025-05-09",
  },
  {
    id: 3,
    title: "IT Empowering Day: in the Era of AI",
    descriptionPrefix: "Served as a project exhibitor at ",
    descriptionLead: "IT Empowering Day: In the Era of AI",
    description:
      ", presenting our team's project through an interactive exhibition booth.",
    image: "/activities/industrydriven.png",
    imageAlt:
      "Project team exhibiting an AI Workflow Automation project at IT Empowering Day",
    imageWidth: 3024,
    imageHeight: 1701,
    date: "21 May 2026",
    dateTime: "2026-05-21",
  },
  {
    id: 4,
    title: "BU Cyber Fortress Challenge & Career Expo",
    descriptionPrefix: "Participated in the ",
    descriptionLead: "BU Cyber Fortress Challenge & Career Expo",
    description:
      ", taking part in a cybersecurity hackathon and exploring internship opportunities through career booths hosted by leading technology companies.",
    image: "/activities/cyberfortress.png",
    imageAlt:
      "Attending the BU Cyber Fortress Challenge and Career Expo at Bangkok University",
    imageWidth: 1774,
    imageHeight: 1246,
    date: "10 February 2026",
    dateTime: "2026-02-10",
  },
];
