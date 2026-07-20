export type ProjectCategory =
  | "Business Analysis"
  | "System Analysis"
  | "Data Analytics"
  | "AI / Machine Learning"
  | "IoT";

export type Project = {
  id: number;
  title: string;
  shortTitle: string;
  category: ProjectCategory;
  categories: ProjectCategory[];
  summary: string;
  problem: string;
  objective: string;
  role: string;
  process: string[];
  tools: string[];
  tags: string[];
  deliverables: string[];
  result: string;
  learned: string;
  image: string;
  accent: string;
  github: string;
  demoLabel: "Live Demo" | "Figma";
  demo: string;
};

export const projectCategories = [
  "All",
  "Business Analysis",
  "System Analysis",
  "Data Analytics",
  "AI / Machine Learning",
  "IoT",
] as const;

export const projects: Project[] = [
  {
    id: 1,
    title: "AI RAG Chatbot using LINE, n8n & Gemini",
    shortTitle: "RAG Chatbot",
    category: "AI / Machine Learning",
    categories: ["AI / Machine Learning", "System Analysis", "Business Analysis"],
    summary:
      "A knowledge assistant that answers student-service questions from verified documents inside LINE.",
    problem:
      "Students waited for repetitive answers while information was scattered across documents and web pages.",
    objective:
      "Design an accessible, traceable support channel that responds quickly without losing source context.",
    role:
      "Business & System Analyst — gathered requirements, mapped the service workflow, designed the solution architecture, and tested responses.",
    process: [
      "Interviewed representative users",
      "Prioritized functional requirements",
      "Mapped current and future workflows",
      "Designed RAG and escalation logic",
      "Ran scenario-based UAT",
    ],
    tools: ["LINE Messaging API", "n8n", "Gemini API", "Vector Store"],
    tags: ["RAG", "Automation", "Conversational AI"],
    deliverables: [
      "Requirement Analysis",
      "Workflow Diagram",
      "Use Case Diagram",
      "System Architecture",
    ],
    result:
      "The prototype answered common scenarios with clear source context and reduced the number of manual response steps.",
    learned:
      "Reliable AI products need carefully designed knowledge boundaries, fallback paths, and measurable acceptance criteria.",
    image: "/projects/rag.svg",
    accent: "#2563EB",
    github: "https://github.com/",
    demoLabel: "Live Demo",
    demo: "https://example.com/",
  },
  {
    id: 2,
    title: "Smart Inventory System with ESP32",
    shortTitle: "Smart Inventory",
    category: "IoT",
    categories: ["IoT", "System Analysis"],
    summary:
      "A connected inventory prototype that tracks stock weight and alerts users when supplies run low.",
    problem:
      "Manual counts were slow and created gaps between physical stock and the recorded balance.",
    objective:
      "Create a low-cost proof of concept for near real-time stock visibility and threshold alerts.",
    role:
      "System Analyst & IoT Developer — defined sensor requirements, designed data flow, assembled the prototype, and validated readings.",
    process: [
      "Mapped inventory events",
      "Calibrated load-cell readings",
      "Designed device-to-dashboard flow",
      "Tested alert thresholds",
    ],
    tools: ["ESP32", "Load Cell", "HX711", "REST API", "Dashboard"],
    tags: ["IoT", "Automation", "Monitoring"],
    deliverables: ["System Architecture", "Workflow Diagram", "Wireframe"],
    result:
      "The prototype detected inventory changes and surfaced low-stock conditions through a simple monitoring dashboard.",
    learned:
      "Physical systems require tolerance handling, calibration, and clear exception flows—not only happy-path logic.",
    image: "/projects/inventory.svg",
    accent: "#06B6D4",
    github: "https://github.com/",
    demoLabel: "Figma",
    demo: "https://figma.com/",
  },
  {
    id: 3,
    title: "Heart Disease Prediction",
    shortTitle: "Heart Prediction",
    category: "AI / Machine Learning",
    categories: ["AI / Machine Learning", "Data Analytics"],
    summary:
      "A machine-learning study comparing classification models for early heart-disease risk screening.",
    problem:
      "Risk factors interact in complex ways, making it difficult to identify patterns through manual review alone.",
    objective:
      "Build an interpretable predictive baseline and communicate model limits responsibly.",
    role:
      "Data Analyst — cleaned data, explored risk patterns, engineered features, compared models, and documented findings.",
    process: [
      "Audited data quality",
      "Performed exploratory analysis",
      "Trained candidate models",
      "Compared recall and precision",
      "Explained limitations",
    ],
    tools: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    tags: ["Classification", "EDA", "Healthcare"],
    deliverables: ["Data Analysis", "Model Evaluation", "Dashboard"],
    result:
      "Produced a reproducible comparison and an easy-to-read report focused on recall, interpretability, and ethical limitations.",
    learned:
      "For high-impact decisions, model performance must be discussed alongside data quality, bias, and real-world workflow.",
    image: "/projects/heart.svg",
    accent: "#F97316",
    github: "https://github.com/",
    demoLabel: "Live Demo",
    demo: "https://example.com/",
  },
  {
    id: 4,
    title: "Power BI Sales Intelligence Dashboard",
    shortTitle: "Sales Dashboard",
    category: "Data Analytics",
    categories: ["Data Analytics", "Business Analysis"],
    summary:
      "An executive dashboard that turns sales data into actionable performance and customer insights.",
    problem:
      "Decision-makers relied on separate spreadsheets and could not quickly explain changes in sales performance.",
    objective:
      "Create a single view of core KPIs with drill-down paths for region, product, and customer segment.",
    role:
      "Business & Data Analyst — translated stakeholder questions into KPIs, modeled the data, and designed the dashboard experience.",
    process: [
      "Defined business questions",
      "Created KPI dictionary",
      "Built star schema",
      "Wrote DAX measures",
      "Validated with users",
    ],
    tools: ["Power BI", "Power Query", "DAX", "Excel"],
    tags: ["BI", "KPI", "Data Storytelling"],
    deliverables: ["Requirement Analysis", "Data Model", "Dashboard"],
    result:
      "Consolidated key indicators into an interactive view that highlighted revenue drivers and underperforming segments.",
    learned:
      "A useful dashboard begins with decisions and questions—not with the available charts.",
    image: "/projects/powerbi.svg",
    accent: "#7C3AED",
    github: "https://github.com/",
    demoLabel: "Live Demo",
    demo: "https://example.com/",
  },
  {
    id: 5,
    title: "Customer Sentiment Analysis System",
    shortTitle: "Voice of Customer",
    category: "Data Analytics",
    categories: ["Data Analytics", "AI / Machine Learning", "Business Analysis"],
    summary:
      "A text-analytics pipeline that groups customer feedback and tracks sentiment by topic over time.",
    problem:
      "Large volumes of unstructured feedback made recurring service issues difficult to detect and prioritize.",
    objective:
      "Transform comments into clear themes and trend indicators for service-improvement decisions.",
    role:
      "Data Analyst — prepared the text pipeline, developed topic rules, evaluated sentiment output, and visualized patterns.",
    process: [
      "Profiled feedback sources",
      "Cleaned and tokenized text",
      "Built sentiment baseline",
      "Grouped recurring topics",
      "Designed insight dashboard",
    ],
    tools: ["Python", "Pandas", "NLP", "Power BI"],
    tags: ["NLP", "Customer Insight", "Analytics"],
    deliverables: ["Requirement Analysis", "Data Pipeline", "Dashboard"],
    result:
      "Made recurring customer issues visible by topic and period, enabling more focused root-cause analysis.",
    learned:
      "Sentiment scores are most useful when paired with business context, themes, and representative examples.",
    image: "/projects/sentiment.svg",
    accent: "#0EA5E9",
    github: "https://github.com/",
    demoLabel: "Figma",
    demo: "https://figma.com/",
  },
];
