import { skillGroups, type SkillLevel } from "@/data/skills";
import SectionHeading from "./SectionHeading";

const levelStyles: Record<SkillLevel, string> = {
  Basic: "bg-slate-100 text-slate-500",
  Intermediate: "bg-blue/10 text-blue",
  Advanced: "bg-cyan/10 text-navy",
};

export default function SkillsSection() {
  return (
    <section id="skills" className="section-space bg-white">
      <div className="container-shell">
        <SectionHeading
          eyebrow="04 / Capability"
          title="Skills built around the work"
          description="A growing toolkit for understanding the problem, shaping the solution, and communicating what the evidence says."
          align="center"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map(({ title, description, icon: Icon, skills }) => (
            <article key={title} className="card p-6 sm:p-8">
              <div className="flex gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-ink text-cyan">
                  <Icon size={22} />
                </span>
                <div>
                  <h3 className="text-xl font-black tracking-[-0.03em] text-ink">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {description}
                  </p>
                </div>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex min-h-14 items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-mist/60 px-4 py-3"
                  >
                    <span className="text-xs font-bold text-navy">
                      {skill.name}
                    </span>
                    <span
                      className={`rounded-full px-2 py-1 text-[9px] font-black uppercase tracking-wide ${levelStyles[skill.level]}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
