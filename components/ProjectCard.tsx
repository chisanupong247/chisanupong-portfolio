import type { Project } from "@/data/projects";
import { ImagePlus, Video } from "lucide-react";
import Image from "next/image";
import ProjectGallery from "./ProjectGallery";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasMedia = project.mediaSrc.trim().length > 0;

  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {project.gallery && project.gallery.length > 0 ? (
        <ProjectGallery images={project.gallery} />
      ) : (
      <div className="relative aspect-video overflow-hidden bg-slate-100">
        {hasMedia && project.mediaType === "image" && (
          <Image
            src={project.mediaSrc}
            alt={project.mediaAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        )}

        {hasMedia && project.mediaType === "video" && (
          <video
            className="size-full object-cover"
            controls
            playsInline
            preload="metadata"
            poster={project.videoPoster}
            aria-label={project.mediaAlt}
          >
            <source src={project.mediaSrc} />
            Your browser does not support the video element.
          </video>
        )}

        {!hasMedia && (
          <div className="absolute inset-0 grid place-items-center border-b border-dashed border-slate-300 bg-[radial-gradient(circle_at_center,rgba(37,99,235,.08),transparent_55%)]">
            <div className="text-center">
              <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-white text-blue shadow-sm">
                {project.mediaType === "video" ? (
                  <Video size={24} />
                ) : (
                  <ImagePlus size={24} />
                )}
              </span>
              <p className="mt-4 text-sm font-bold text-navy">
                Add a project image or video
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Place the file in public/projects
              </p>
            </div>
          </div>
        )}
      </div>
      )}

      <div className="p-6 sm:p-8">
        <h3 className="text-2xl font-black tracking-[-0.03em] text-ink">
          {project.title || "Project title"}
        </h3>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
          {project.description ? (
            <>
              {project.descriptionLead && (
                <strong className="font-extrabold text-ink">
                  {project.descriptionLead}{" "}
                </strong>
              )}
              {project.description}
            </>
          ) : (
            "Add a clear project description explaining the problem, your approach, and the result."
          )}
        </p>

        {project.tools.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2" aria-label="Project tools">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-blue/15 bg-blue/5 px-3 py-1.5 text-xs font-bold text-blue"
              >
                {tool}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
