export type Experience = {
  type: string;
  title: string;
  organization: string;
  period: string;
  detail: string;
  highlight: string;
  tools: string[];
  learned: string;
};

export const workExperiences: Experience[] = [
  {
    type: "Academic Project",
    title: "Business & System Analyst — Campus Service Platform",
    organization: "Faculty of Information Technology",
    period: "Jan 2026 — May 2026",
    detail:
      "Led requirement discovery for a 4-person team and translated interview findings into prioritized user stories and acceptance criteria.",
    highlight:
      "Delivered the end-to-end future-state workflow and an interactive prototype for usability testing.",
    tools: ["Figma", "BPMN", "Use Cases"],
    learned: "How to align different stakeholder expectations around one testable scope.",
  },
  {
    type: "Group Project",
    title: "Data Analyst — Retail Performance Study",
    organization: "Data Analytics Course",
    period: "Aug 2025 — Dec 2025",
    detail:
      "Cleaned multi-source sales data, defined performance metrics, and coordinated dashboard reviews with the project team.",
    highlight:
      "Identified two underperforming product segments and presented possible operational causes.",
    tools: ["Power BI", "SQL", "Excel"],
    learned: "How metric definitions shape the decisions a dashboard can support.",
  },
];

export const activities: Experience[] = [
  {
    type: "Hackathon",
    title: "AI for Better Campus Experience",
    organization: "University Innovation Lab",
    period: "Feb 2026",
    detail:
      "Worked in a cross-functional team to prototype a student-service assistant within a 36-hour sprint.",
    highlight:
      "Selected as one of the final five teams for a practical solution and clear problem framing.",
    tools: ["n8n", "Gemini API", "Figma"],
    learned: "Fast delivery still benefits from sharp assumptions and early user validation.",
  },
  {
    type: "Technology Workshop",
    title: "Business Intelligence Storytelling",
    organization: "Data Community Thailand",
    period: "Oct 2025",
    detail:
      "Completed a hands-on workshop focused on dashboard hierarchy, KPI context, and executive communication.",
    highlight: "Reworked a dense report into a focused one-page decision view.",
    tools: ["Power BI", "DAX"],
    learned: "A clear visual hierarchy is part of analysis, not decoration.",
  },
  {
    type: "Student Competition",
    title: "Smart Solutions Challenge",
    organization: "Engineering & IT Student Council",
    period: "Jul 2025",
    detail:
      "Presented an IoT inventory concept combining low-cost sensors with proactive replenishment alerts.",
    highlight: "Received a merit award for feasibility and presentation.",
    tools: ["ESP32", "HX711", "Canva"],
    learned: "How to balance technical possibility, user value, and cost in a proposal.",
  },
];
