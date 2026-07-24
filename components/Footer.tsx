import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-shell flex flex-col items-center justify-between gap-6 py-8 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-black tracking-[-0.02em] text-ink">
            Chisanupong Inlin.
          </p>
          <p className="mt-1 text-xs text-slate-400">
            © {new Date().getFullYear()} Built with curiosity and clear intent.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {[
            { label: "GitHub", href: "https://github.com/chisanupong247", icon: Github },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/chisanupong-inlin", icon: Linkedin },
            { label: "Email", href: "mailto:chisanupong2427@gmail.com", icon: Mail },
          ].map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="grid size-10 place-items-center rounded-full border border-slate-200 text-slate-500 transition hover:border-blue hover:text-blue"
            >
              <Icon size={16} />
            </a>
          ))}
          <a
            href="#home"
            aria-label="Back to top"
            className="ml-2 inline-flex min-h-10 items-center gap-2 rounded-full bg-ink px-4 text-xs font-bold text-white transition hover:bg-blue"
          >
            Top <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
