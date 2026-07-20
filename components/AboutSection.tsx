import {
  BookOpen,
  Compass,
  Focus,
  GraduationCap,
  Lightbulb,
  Users,
} from "lucide-react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

const infoCards = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "B.Sc. Information Technology",
  },
  {
    icon: Compass,
    label: "Career interest",
    value: "BA, SA & Data Analytics",
  },
  {
    icon: Focus,
    label: "Current focus",
    value: "Requirements & data storytelling",
  },
];

const strengths = [
  { icon: Lightbulb, label: "Problem solving" },
  { icon: Users, label: "Communication" },
  { icon: BookOpen, label: "Analytical thinking" },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-space bg-white">
      <div className="container-shell">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-slate-100">
              <Image
                src="/images/workspace.png"
                alt="Organized analyst workspace with a dashboard, flowchart notebook, and planning notes"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 max-w-[15rem] rounded-2xl bg-ink p-5 text-white shadow-soft sm:right-8">
              <p className="text-3xl font-black text-cyan">Why?</p>
              <p className="mt-1 text-sm leading-6 text-white/75">
                My favorite question—because good solutions start before the
                first screen is designed.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="02 / About me"
              title="A curious analyst who likes making things clear."
              description="I am an Information Technology student interested in how organizations solve real problems with better processes, well-designed systems, and trustworthy data."
            />
            <div className="space-y-5 text-[15px] leading-7 text-slate-600">
              <p>
                At <strong className="font-bold text-ink">Example University</strong>,
                I have explored the full path from stakeholder interviews and
                process mapping to prototypes, dashboards, and working technical
                proofs of concept.
              </p>
              <p>
                My career goal is to grow into an analyst who can bridge
                conversations between users and technical teams—asking the right
                questions, documenting decisions, and helping teams build what
                truly matters.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              {strengths.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full bg-mist px-4 py-2 text-xs font-bold text-navy"
                >
                  <Icon size={15} className="text-blue" /> {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-3">
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
              <p className="mt-2 font-extrabold leading-6 text-ink">{value}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
