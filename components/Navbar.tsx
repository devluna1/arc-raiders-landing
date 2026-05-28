"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const t = useTranslations("nav");
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.95]);
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.15]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3"
      style={{
        backgroundColor: `rgba(10, 14, 20, ${bgOpacity.get()})`,
        borderBottom: `1px solid rgba(0, 212, 255, ${borderOpacity.get()})`,
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-accent-arc/20 border border-accent-arc/40 flex items-center justify-center group-hover:bg-accent-arc/30 transition-colors">
            <span className="font-display text-sm font-black text-accent-arc">A</span>
          </div>
          <span className="font-display text-sm font-bold uppercase tracking-wider hidden sm:block">
            ARC Raiders
          </span>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-sm text-text-secondary hover:text-accent-arc transition-colors font-semibold">
            {t("about")}
          </a>
          <a href="#news" className="text-sm text-text-secondary hover:text-accent-arc transition-colors font-semibold">
            {t("news")}
          </a>
          <a href="#community" className="text-sm text-text-secondary hover:text-accent-arc transition-colors font-semibold">
            {t("community")}
          </a>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <LanguageToggle />
          <a
            href="#purchase"
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-accent-arc text-bg-primary text-sm font-display font-bold uppercase tracking-wider rounded hover:bg-accent-arc/90 transition-colors"
          >
            {t("buy")}
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
