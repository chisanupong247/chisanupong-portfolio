"use client";

import { certifications, type Certification } from "@/data/certifications";
import { ArrowUpRight, Award, BadgeCheck } from "lucide-react";
import { useState } from "react";
import CertificateModal from "./CertificateModal";
import SectionHeading from "./SectionHeading";

export default function CertificationsSection() {
  const [selected, setSelected] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="section-space bg-mist">
      <div className="container-shell">
        <SectionHeading
          eyebrow="06 / Continuous learning"
          title="Certifications"
          description="Courses and credentials that support my development across analytics, cloud, and business analysis."
          align="center"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {certifications.map((certificate) => (
            <article
              key={certificate.id}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-7"
            >
              <span
                className="absolute inset-y-0 left-0 w-1.5"
                style={{ backgroundColor: certificate.color }}
              />
              <div className="flex items-start justify-between gap-5">
                <div
                  className="grid size-14 shrink-0 place-items-center rounded-2xl"
                  style={{
                    color: certificate.color,
                    backgroundColor: `${certificate.color}14`,
                  }}
                >
                  <Award size={27} />
                </div>
                <span className="rounded-full bg-mist px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-slate-500">
                  {certificate.category}
                </span>
              </div>
              <h3 className="mt-7 text-xl font-black tracking-[-0.03em] text-ink">
                {certificate.title}
              </h3>
              <p className="mt-2 text-sm font-semibold text-slate-500">
                {certificate.issuer} · {certificate.date}
              </p>
              <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-navy">
                <BadgeCheck size={16} className="text-blue" />
                {certificate.credential}
              </div>
              <div className="mt-7 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setSelected(certificate)}
                  className="inline-flex min-h-10 items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-bold text-white transition hover:bg-blue"
                >
                  View certificate <ArrowUpRight size={14} />
                </button>
                {certificate.verify && (
                  <a
                    href={certificate.verify}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-10 items-center rounded-full border border-slate-200 px-4 py-2 text-xs font-bold text-ink transition hover:border-blue hover:text-blue"
                  >
                    Verify credential
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
      <CertificateModal
        certificate={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
