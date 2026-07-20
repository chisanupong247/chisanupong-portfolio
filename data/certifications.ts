export type Certification = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  category: string;
  credential: string;
  verify?: string;
  color: string;
};

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Microsoft Power BI Data Analyst",
    issuer: "Microsoft Learn",
    date: "May 2026",
    category: "Power BI",
    credential: "PL-300 learning path completion",
    verify: "https://learn.microsoft.com/",
    color: "#FBBF24",
  },
  {
    id: 2,
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    date: "March 2026",
    category: "AWS",
    credential: "Training completion certificate",
    verify: "https://aws.amazon.com/training/",
    color: "#F97316",
  },
  {
    id: 3,
    title: "Data Analytics with Python",
    issuer: "University Online Learning",
    date: "December 2025",
    category: "Data Analytics",
    credential: "Certificate of completion",
    color: "#2563EB",
  },
  {
    id: 4,
    title: "Business Analysis Foundations",
    issuer: "Open Learning Academy",
    date: "September 2025",
    category: "Business Analysis",
    credential: "Certificate of completion",
    color: "#7C3AED",
  },
];
