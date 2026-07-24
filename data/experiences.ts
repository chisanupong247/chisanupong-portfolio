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
  },
];
