"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded border border-border-glow text-text-secondary text-sm font-display font-semibold uppercase tracking-wider hover:border-accent-arc/40 hover:text-accent-arc transition-all duration-300"
        aria-label="Toggle language"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
        <span>{locale === "es" ? "ES" : "EN"}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 z-50 glass-card rounded-lg overflow-hidden min-w-[100px]">
            <button
              onClick={() => toggleLanguage("es")}
              className={`w-full px-4 py-2 text-left text-sm font-semibold transition-colors hover:bg-accent-arc/10 ${
                locale === "es" ? "text-accent-arc bg-accent-arc/5" : "text-text-secondary"
              }`}
            >
              🇪🇸 Español
            </button>
            <button
              onClick={() => toggleLanguage("en")}
              className={`w-full px-4 py-2 text-left text-sm font-semibold transition-colors hover:bg-accent-arc/10 ${
                locale === "en" ? "text-accent-arc bg-accent-arc/5" : "text-text-secondary"
              }`}
            >
              🇬🇧 English
            </button>
          </div>
        </>
      )}
    </div>
  );
}
