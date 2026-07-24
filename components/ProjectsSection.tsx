import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-space bg-mist">
      <div className="container-shell">
        <SectionHeading eyebrow="03 / Selected work" title="Projects" />

        <div className="mt-10 max-w-4xl space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
