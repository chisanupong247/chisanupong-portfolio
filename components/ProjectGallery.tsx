"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

export default function ProjectGallery({
  images,
}: {
  images: GalleryImage[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <div
      className="relative aspect-[9/16] overflow-hidden bg-slate-950 sm:aspect-[4/3] lg:aspect-video"
      aria-roledescription="carousel"
      aria-label="Project image gallery"
    >
      <Image
        key={activeImage.src}
        src={activeImage.src}
        alt={activeImage.alt}
        fill
        sizes="(max-width: 1024px) 100vw, 896px"
        className="object-contain"
        priority={activeIndex === 0}
      />

      <button
        type="button"
        onClick={showPrevious}
        aria-label="Show previous project image"
        className="absolute left-4 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink shadow-lg transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue"
      >
        <ChevronLeft size={21} />
      </button>
      <button
        type="button"
        onClick={showNext}
        aria-label="Show next project image"
        className="absolute right-4 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink shadow-lg transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue"
      >
        <ChevronRight size={21} />
      </button>

      <span className="absolute right-4 top-4 rounded-full bg-ink/75 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">
        {activeIndex + 1} / {images.length}
      </span>

      <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show project image ${index + 1}`}
            aria-current={index === activeIndex}
            className={`size-2.5 rounded-full border border-white transition ${
              index === activeIndex ? "bg-white" : "bg-white/35"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
