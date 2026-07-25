import { Compass, GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";

const infoCards = [
  {
    icon: GraduationCap,
    label: "Education",
    value:
      "2020 - 2023\nThammasat Khlongluang Wittayakom School - GPA 3.30\n2024 - present\nInformation Technology at Bangkok University with GPA 3.57",
  },
  {
    icon: Compass,
    label: "Career interest",
    value: "BA, SA & Data Analytics",
  },
];

const strengths = [
  "Leadership",
  "Presentation",
  "Problem Solving",
  "Analytical Thinking",
];

export default function AboutSection() {
  return (
    <section id="about" className="section-space bg-white">
      <div className="container-shell">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="02 / About me"
              title="A curious analyst who likes making things clear."
              description="I am an Information Technology student interested in how organizations solve real problems with better processes, well-designed systems, and trustworthy data."
            />
            <p className="text-[15px] leading-7 text-slate-600">
              At{" "}
              <strong className="font-bold text-ink">Bangkok University</strong>,
              I have explored the full path from stakeholder interviews and
              process mapping to prototypes, dashboards, and working technical
              proofs of concept.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-mist/60 p-7 pb-10 sm:p-9 sm:pb-12">
            <section className="pl-3 sm:pl-4">
              <h3 className="text-xl font-black text-ink">Languages</h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {["Thai (Native)", "English (Intermediate)"].map((language) => (
                  <div
                    key={language}
                    className="rounded-2xl border border-slate-200 bg-white py-4 pl-8 pr-5 text-sm font-bold text-navy"
                  >
                    {language}
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-8 border-t border-slate-200 pt-8">
              <h3 className="text-xl font-black text-ink">
                Soft Skills
              </h3>
              <div className="mb-2 mt-6 grid gap-3 sm:grid-cols-2">
                {strengths.map((skill) => (
                  <div
                    key={skill}
                    className="flex min-h-16 items-center rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-navy"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {infoCards.map(({ icon: Icon, label, value }, index) => (
            <article
              key={label}
              className="group rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue/30 hover:shadow-soft"
            >
              <div className="flex items-start justify-between">
                <span className="grid size-11 place-items-center rounded-2xl bg-blue/10 text-blue">
                  <Icon size={21} />
                </span>
                <span className="text-xs font-black text-slate-300">
                  0{index + 1}
                </span>
              </div>
              <p className="mt-7 text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                {label}
              </p>
              <p className="mt-2 whitespace-pre-line font-extrabold leading-6 text-ink">
                {value}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
