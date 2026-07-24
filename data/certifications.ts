export type Certification = {
  id: number;
  title: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
};

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Cybersecurity Foundation Course",
    image: "/certifications/cybersecurity-foundation-course.png",
    imageAlt:
      "Cybersecurity Foundation Course certificate awarded to Chisanupong Inlin",
    imageWidth: 2339,
    imageHeight: 1654,
  },
  {
    id: 2,
    title: "AI Governace & Ethics",
    image: "/certifications/ai-governace-and-ethics.png",
    imageAlt:
      "AI Governance and Ethics certificate awarded to Chisanupong Inlin",
    imageWidth: 2206,
    imageHeight: 3120,
  },
];
