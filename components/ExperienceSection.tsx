import {
  activities,
  type Experience,
  workExperiences,
} from "@/data/experiences";
import { BriefcaseBusiness, Trophy } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-space bg-ink text-white">
      <div className="container-shell">
        <SectionHeading
          eyebrow="05 / The journey so far"
          title="Experience & activities"
          description="Academic work and hands-on activities where I practiced ownership, collaboration, and communicating decisions."
          dark
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <TimelineColumn
            title="Project experience"
            icon={BriefcaseBusiness}
            items={workExperiences}
          />
          <TimelineColumn
            title="Activities & competitions"
            icon={Trophy}
            items={activities}
          />
        </div>
      </div>
    </section>
  );
}

function TimelineColumn({
  title,
  icon: Icon,
  items,
}: {
  title: string;
  icon: typeof BriefcaseBusiness;
  items: Experience[];
}) {
  return (
    <div>
      <div className="mb-8 flex items-center gap-3">
        <span className="grid size-11 place-items-center rounded-2xl bg-white/10 text-cyan">
          <Icon size={20} />
        </span>
        <h3 className="text-xl font-black">{title}</h3>
      </div>

      <div className="relative space-y-8 border-l border-white/15 pl-7">
        {items.map((item) => (
          <article key={`${item.title}-${item.period}`} className="relative">
            <span className="absolute -left-[2.15rem] top-1.5 size-3 rounded-full border-[3px] border-ink bg-cyan ring-4 ring-cyan/20" />
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-cyan/10 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-cyan">
                {item.type}
              </span>
              <span className="text-xs font-semibold text-white/45">
                {item.period}
              </span>
            </div>
            <h4 className="text-lg font-extrabold leading-7 text-white">
              {item.title}
            </h4>
            <p className="mt-1 text-sm font-semibold text-cyan">
              {item.organization}
            </p>
            <p className="mt-4 text-sm leading-7 text-white/60">
              {item.detail}
            </p>
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-[10px] font-black uppercase tracking-wider text-white/35">
                Key outcome
              </p>
              <p className="mt-1.5 text-xs leading-5 text-white/75">
                {item.highlight}
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-bold text-white/55"
                >
                  {tool}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs italic leading-5 text-white/40">
              Learned: {item.learned}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
