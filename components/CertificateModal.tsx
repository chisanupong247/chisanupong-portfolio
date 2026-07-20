"use client";

import type { Certification } from "@/data/certifications";
import { Award, BadgeCheck, ExternalLink, X } from "lucide-react";
import { useEffect } from "react";

type CertificateModalProps = {
  certificate: Certification | null;
  onClose: () => void;
};

export default function CertificateModal({
  certificate,
  onClose,
}: CertificateModalProps) {
  useEffect(() => {
    if (!certificate) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-[80] grid place-items-center bg-ink/70 p-4 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="certificate-title"
        className="relative w-full max-w-3xl rounded-[2rem] bg-white p-5 shadow-2xl sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          autoFocus
          aria-label="Close certificate"
          className="absolute right-5 top-5 z-10 grid size-10 place-items-center rounded-full bg-white shadow-lg"
        >
          <X size={19} />
        </button>
        <div className="overflow-hidden rounded-3xl border-8 border-mist bg-white px-6 py-14 text-center sm:px-12">
          <div
            className="mx-auto grid size-20 place-items-center rounded-full"
            style={{ backgroundColor: `${certificate.color}18`, color: certificate.color }}
          >
            <Award size={40} />
          </div>
          <p className="mt-8 text-xs font-black uppercase tracking-[0.24em] text-slate-400">
            Certificate of completion
          </p>
          <h2
            id="certificate-title"
            className="mx-auto mt-4 max-w-xl text-3xl font-black tracking-[-0.04em] text-ink sm:text-4xl"
          >
            {certificate.title}
          </h2>
          <p className="mt-4 text-sm text-slate-500">
            Issued by <strong className="text-ink">{certificate.issuer}</strong>{" "}
            · {certificate.date}
          </p>
          <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3 rounded-2xl bg-mist p-4 text-sm font-semibold text-navy">
            <BadgeCheck className="text-blue" size={20} />
            {certificate.credential}
          </div>
          {certificate.verify && (
            <a
              href={certificate.verify}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-8"
            >
              Verify credential <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
