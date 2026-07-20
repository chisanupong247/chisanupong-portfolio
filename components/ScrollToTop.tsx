"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#home"
      aria-label="Scroll back to top"
      className="fixed bottom-5 right-5 z-40 grid size-12 place-items-center rounded-full bg-blue text-white shadow-xl transition hover:-translate-y-1 hover:bg-ink"
    >
      <ArrowUp size={19} />
    </a>
  );
}
