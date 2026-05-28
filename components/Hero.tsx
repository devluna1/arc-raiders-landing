"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        {/* Dark gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e14] via-[#0d1520] to-[#0a0e14]" />

        {/* Grid overlay */}
        <div className="absolute inset-0 hud-grid opacity-30" />

        {/* Radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(0,212,255,0.3) 0%, transparent 70%)",
          }}
        />

        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" aria-hidden="true">
          {[...Array(5)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${20 + i * 15}%`}
              y1="0"
              x2={`${10 + i * 15}%`}
              y2="100%"
              stroke="#00d4ff"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "linear",
              }}
            />
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* DICE Award badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-2 text-xs font-semibold tracking-widest uppercase border border-accent-arc/30 text-accent-arc bg-accent-arc/10 rounded">
            🏆 Best Multiplayer — The Game Awards 2025
          </span>
        </motion.div>

        {/* Main title with glitch */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="glitch-text font-display text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6"
          data-text={t("title")}
        >
          {t("title")}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t("subtitle")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="neon-button px-10 py-4 bg-accent-arc text-bg-primary font-display font-bold text-lg uppercase tracking-wider rounded hover:bg-accent-arc/90 transition-colors">
            {t("cta")}
          </button>
          <button className="px-10 py-4 border border-text-secondary/30 text-text-primary font-display font-semibold text-lg uppercase tracking-wider rounded hover:border-accent-arc/50 hover:text-accent-arc transition-all duration-300">
            {t("cta_secondary")}
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="scroll-indicator flex flex-col items-center gap-2 text-text-secondary/60">
          <span className="text-xs uppercase tracking-widest">{t("scroll")}</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent z-10" />
    </section>
  );
}
