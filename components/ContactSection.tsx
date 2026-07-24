import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "chisanupong2427@gmail.com",
    href: "mailto:chisanupong2427@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "0616851098",
    href: "tel:+66616851098",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pathum Thani, Thailand",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/chisanupong247",
    href: "https://github.com/chisanupong247",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/chisanupong-inlin",
    href: "https://www.linkedin.com/in/chisanupong-inlin",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-space bg-white">
      <div className="container-shell">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-ink text-white sm:rounded-[2.5rem]">
          <div className="absolute -left-20 -top-20 size-72 rounded-full bg-blue/20 blur-3xl" />
          <div className="absolute -bottom-32 -right-20 size-80 rounded-full bg-cyan/10 blur-3xl" />

          <div className="relative p-8 sm:p-12 lg:p-16">
            <div className="max-w-2xl">
              <SectionHeading
                eyebrow="07 / Contact"
                title="Let’s work together."
                description="Have an internship, project, or problem that could use a thoughtful analyst? I would love to learn more."
                dark
              />
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {contactItems.map(({ icon: Icon, label, value, href }, index) => {
                const content = (
                  <>
                    <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white/10 text-cyan">
                      <Icon size={19} />
                    </span>
                    <span className="min-w-0 flex-1 overflow-hidden">
                      <span className="block text-[10px] font-black uppercase tracking-wider text-white/40">
                        {label}
                      </span>
                      <span className="mt-1 block break-all text-sm font-semibold leading-6 text-white/80 sm:break-words">
                        {value}
                      </span>
                    </span>
                  </>
                );

                const classes = `flex min-h-24 w-full items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan/40 hover:bg-white/[0.07] ${
                  index === contactItems.length - 1
                    ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.5rem)]"
                    : ""
                }`;

                return href ? (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className={classes}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={label} className={classes}>
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
