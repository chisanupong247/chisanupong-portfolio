"use client";

import type { Project } from "@/data/projects";
import { Check, Github, X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[80] grid place-items-center bg-ink/70 p-3 backdrop-blur-sm sm:p-6"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white shadow-2xl sm:rounded-[2rem]"
      >
        <button
          type="button"
          onClick={onClose}
          autoFocus
          aria-label="Close project details"
          className="sticky right-5 top-5 z-10 float-right mr-5 mt-5 grid size-11 place-items-center rounded-full bg-white text-ink shadow-lg transition hover:bg-slate-100"
        >
          <X size={20} />
        </button>

        <div className="grid lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative min-h-72 overflow-hidden rounded-t-3xl bg-slate-100 lg:sticky lg:top-0 lg:h-[92vh] lg:rounded-l-[2rem] lg:rounded-tr-none">
            <Image
              src={project.image}
              alt={`${project.title} project visual`}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/85 to-transparent p-7 pt-28 text-white">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan">
                {project.category}
              </p>
              <h2
                id="project-modal-title"
                className="mt-3 text-3xl font-black tracking-[-0.04em]"
              >
                {project.title}
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-bold backdrop-blur"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 pt-16 sm:p-10 sm:pt-16">
            <DetailBlock title="Project overview" text={project.summary} />
            <div className="grid gap-5 sm:grid-cols-2">
              <DetailBlock title="Problem" text={project.problem} />
              <DetailBlock title="Objective" text={project.objective} />
            </div>
            <DetailBlock title="My role" text={project.role} />

            <section className="mb-8">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.16em] text-blue">
                Process
              </p>
              <div className="space-y-3">
                {project.process.map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-blue/10 text-xs font-black text-blue">
                      {index + 1}
                    </span>
                    <p className="text-sm text-slate-600">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-8 rounded-3xl bg-mist p-6">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.16em] text-blue">
                Deliverables
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {project.deliverables.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm font-semibold text-navy"
                  >
                    <Check size={15} className="text-cyan" /> {item}
                  </div>
                ))}
              </div>
            </section>

            <div className="grid gap-5 sm:grid-cols-2">
              <DetailBlock title="Result" text={project.result} />
              <DetailBlock title="What I learned" text={project.learned} />
            </div>

            <section className="mb-8">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-blue">
                Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-slate-200 px-3 py-2 text-xs font-bold text-navy"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-blue">
                Screenshot gallery
              </p>
              <div className="grid grid-cols-3 gap-2">
                {[0, 1, 2].map((item) => (
                  <div
                    key={item}
                    className="relative aspect-[4/3] overflow-hidden rounded-xl bg-mist"
                  >
                    <Image
                      src={project.image}
                      alt={`${project.shortTitle} project screenshot ${item + 1}`}
                      fill
                      sizes="(max-width: 1024px) 30vw, 16vw"
                      className={`object-cover ${
                        item === 1
                          ? "scale-125 object-left"
                          : item === 2
                            ? "scale-125 object-right"
                            : ""
                      }`}
                    />
                  </div>
                ))}
              </div>
            </section>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <Github size={17} /> Explore on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailBlock({ title, text }: { title: string; text: string }) {
  return (
    <section className="mb-8">
      <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-blue">
        {title}
      </p>
      <p className="text-sm leading-7 text-slate-600">{text}</p>
    </section>
  );
}
