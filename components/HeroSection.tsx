import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/chisanupong247", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/chisanupong-inlin", icon: Linkedin },
  { label: "Email", href: "mailto:chisanupong2427@gmail.com", icon: Mail },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-mist pt-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_22%,rgba(6,182,212,.13),transparent_28%),radial-gradient(circle_at_12%_72%,rgba(37,99,235,.08),transparent_26%)]" />
      <div className="container-shell relative grid min-h-[calc(100vh-5rem)] items-center gap-14 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
        <div className="reveal">
          <div className="mb-8 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1.5 text-xs font-bold text-navy">
              <span className="size-2 rounded-full bg-cyan" />
              Open to internship
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue/15 bg-white px-3 py-1.5 text-xs font-bold text-navy">
              <Sparkles size={14} className="text-blue" />
              Information Technology Student
            </span>
          </div>

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-blue">
            Hello, I&apos;m
          </p>
          <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-ink sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Chisanupong
            <span className="block text-blue">Inlin.</span>
          </h1>
          <p className="mt-7 text-base font-bold text-navy sm:text-lg">
            Business Analyst <span className="text-cyan">/</span> System Analyst{" "}
            <span className="text-cyan">/</span> Data Analyst
          </p>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            I connect business needs, thoughtful system design, and data to turn
            complex problems into clear, testable solutions. Currently looking
            for opportunities to learn with a product-minded team.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="btn-primary">
              View my projects <ArrowRight size={17} />
            </a>
            <a href="/resume-placeholder.txt" download className="btn-secondary">
              <Download size={17} /> Download résumé
            </a>
          </div>

          <div className="mt-9 flex items-center gap-3">
            <span className="mr-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              Connect
            </span>
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="grid size-11 place-items-center rounded-full border border-slate-200 bg-white text-navy transition hover:-translate-y-1 hover:border-blue hover:text-blue"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
          <div className="relative ml-auto aspect-[4/5] w-[88%] overflow-hidden rounded-[2rem] bg-navy shadow-[0_35px_90px_rgba(15,42,86,.22)] sm:rounded-[3rem]">
            <Image
              src="/images/myprofile.jpg"
              alt="Portrait of Chisanupong Inlin"
              fill
              priority
              sizes="(max-width: 1024px) 88vw, 42vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-7 pt-28 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan">
                Build with purpose
              </p>
              <p className="mt-2 max-w-xs text-sm leading-6 text-white/80">
                Curious about the space where people, process, technology, and
                evidence meet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
