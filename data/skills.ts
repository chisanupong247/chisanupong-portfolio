import {
  BarChart3,
  Boxes,
  Code2,
  GitBranch,
  type LucideIcon,
} from "lucide-react";

export type SkillLevel = "Basic" | "Intermediate" | "Advanced";

export type SkillGroup = {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: { name: string; level: SkillLevel }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Business & System Analysis",
    description: "From ambiguous needs to testable, shared understanding.",
    icon: GitBranch,
    skills: [
      { name: "Requirement Gathering", level: "Advanced" },
      { name: "Business Process Analysis", level: "Intermediate" },
      { name: "Use Case Diagram", level: "Advanced" },
      { name: "Flowchart", level: "Advanced" },
      { name: "BPMN", level: "Intermediate" },
      { name: "Wireframing", level: "Intermediate" },
    ],
  },
  {
    title: "Data & Analytics",
    description: "Turning raw information into a useful decision narrative.",
    icon: BarChart3,
    skills: [
      { name: "Python", level: "Intermediate" },
      { name: "SQL", level: "Intermediate" },
      { name: "Power BI", level: "Advanced" },
      { name: "Pandas", level: "Intermediate" },
      { name: "Data Visualization", level: "Advanced" },
      { name: "Machine Learning", level: "Intermediate" },
    ],
  },
  {
    title: "Development",
    description: "Building clear prototypes to make ideas testable.",
    icon: Code2,
    skills: [
      { name: "Next.js", level: "Intermediate" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Intermediate" },
      { name: ".NET MAUI", level: "Basic" },
      { name: "REST API", level: "Intermediate" },
    ],
  },
  {
    title: "Tools & Technologies",
    description: "A practical toolkit for analysis, delivery, and automation.",
    icon: Boxes,
    skills: [
      { name: "Figma", level: "Intermediate" },
      { name: "GitHub", level: "Intermediate" },
      { name: "VS Code", level: "Advanced" },
      { name: "MongoDB", level: "Basic" },
      { name: "RapidMiner", level: "Intermediate" },
      { name: "n8n", level: "Intermediate" },
      { name: "Gemini API", level: "Intermediate" },
      { name: "ESP32", level: "Intermediate" },
    ],
  },
];
