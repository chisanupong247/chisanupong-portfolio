import type { Project } from "@/data/projects";
import { ArrowUpRight, Github, Layers3 } from "lucide-react";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
  onOpen: (project: Project) => void;
};

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1.5 hover:border-blue/30 hover:shadow-soft">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <Image
          src={project.image}
          alt={`${project.title} project cover`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-black text-ink shadow-sm backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-black tracking-[-0.03em] text-ink">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{project.summary}</p>

        <div className="mt-5 rounded-2xl bg-mist p-4">
          <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
            The challenge
          </p>
          <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-slate-600">
            {project.problem}
          </p>
        </div>

        <div className="mt-5">
          <div className="mb-2 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
            <Layers3 size={13} /> Key deliverables
          </div>
          <div className="flex flex-wrap gap-2">
            {project.deliverables.slice(0, 3).map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 px-2.5 py-1 text-[10px] font-bold text-navy"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-7">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="inline-flex min-h-10 items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-bold text-white transition hover:bg-blue focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2"
          >
            View details <ArrowUpRight size={14} />
          </button>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`GitHub repository for ${project.title}`}
            className="grid size-10 place-items-center rounded-full border border-slate-200 text-ink transition hover:border-blue hover:text-blue"
          >
            <Github size={16} />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-10 items-center rounded-full border border-slate-200 px-4 py-2 text-xs font-bold text-ink transition hover:border-blue hover:text-blue"
          >
            {project.demoLabel}
          </a>
        </div>
      </div>
    </article>
  );
}
