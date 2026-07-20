"use client";

import {
  projectCategories,
  projects,
  type Project,
} from "@/data/projects";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import SectionHeading from "./SectionHeading";

export default function ProjectsSection() {
  const [filter, setFilter] =
    useState<(typeof projectCategories)[number]>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const visible =
    filter === "All"
      ? projects
      : projects.filter((project) => project.categories.includes(filter));

  return (
    <section id="projects" className="section-space bg-mist">
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="03 / Selected work"
            title="Featured projects"
            description="Five case studies across business analysis, system design, data, AI, and connected devices—each framed around a problem, not only a technology."
          />
          <p className="mb-10 text-sm font-semibold text-slate-500">
            Showing {visible.length} of {projects.length} projects
          </p>
        </div>

        <div
          className="mb-10 flex gap-2 overflow-x-auto pb-2"
          role="group"
          aria-label="Filter projects by category"
        >
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={filter === category}
              onClick={() => setFilter(category)}
              className={`min-h-11 shrink-0 rounded-full px-4 py-2 text-xs font-bold transition ${
                filter === category
                  ? "bg-ink text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-blue hover:text-blue"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setSelected}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
