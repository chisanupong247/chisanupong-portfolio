import { certifications } from "@/data/certifications";
import { Award } from "lucide-react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section-space bg-mist">
      <div className="container-shell">
        <SectionHeading
          eyebrow="06 / Continuous learning"
          title="Certifications"
          description="Verified courses and credentials supporting my professional development."
          align="center"
        />

        <div className="mx-auto max-w-4xl space-y-8">
          {certifications.map((certificate) => (
            <article
              key={certificate.id}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <Image
                src={certificate.image}
                alt={certificate.imageAlt}
                width={certificate.imageWidth}
                height={certificate.imageHeight}
                sizes="(max-width: 1024px) 100vw, 896px"
                className="h-auto w-full object-contain"
              />
              <div className="flex items-center gap-4 border-t border-slate-100 p-6 sm:p-8">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-blue/10 text-blue">
                  <Award size={21} />
                </span>
                <h3 className="text-xl font-black tracking-[-0.03em] text-ink sm:text-2xl">
                  {certificate.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
