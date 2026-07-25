import { activities } from "@/data/experiences";
import { Trophy } from "lucide-react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-space bg-ink text-white">
      <div className="container-shell">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="05 / Activities"
            title="Activities"
            description="Activities, competitions, and learning experiences beyond the classroom."
            dark
          />

          <div className="space-y-8">
            {activities.map((activity) => (
              <article
                key={activity.id}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]"
              >
                <div className="overflow-hidden bg-white/5">
                  <Image
                    src={activity.image}
                    alt={activity.imageAlt}
                    width={activity.imageWidth}
                    height={activity.imageHeight}
                    sizes="(max-width: 1024px) 100vw, 896px"
                    className="h-auto w-full object-contain"
                  />
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-2xl bg-cyan/10 text-cyan">
                      <Trophy size={20} />
                    </span>
                    <h3 className="text-2xl font-black tracking-[-0.03em] text-white">
                      {activity.title}
                    </h3>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
                    {activity.description ? (
                      <>
                        {activity.descriptionLead && (
                          <>
                            {activity.descriptionPrefix}
                            <strong className="font-extrabold text-white">
                              {activity.descriptionLead}
                            </strong>
                          </>
                        )}
                        {activity.description}
                      </>
                    ) : (
                      "Add a description of this activity, your role, and what you learned."
                    )}
                  </p>
                  {activity.date && (
                    <time
                      dateTime={activity.dateTime}
                      className="mt-6 block text-right text-xs font-bold uppercase tracking-wider text-cyan"
                    >
                      {activity.date}
                    </time>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
