"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";

export default function LoreSection() {
  const t = useTranslations("lore");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);

  return (
    <section
      ref={ref}
      className="relative py-32 md:py-48 px-4 overflow-hidden bg-bg-primary"
    >
      {/* Parallax background layers */}
      <div className="absolute inset-0 z-0">
        {/* Layer 1: Deep ruins */}
        <motion.div
          style={{ y: y1 }}
          className="absolute inset-0 opacity-20"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-arc/5 to-transparent" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(45deg, transparent 40%, rgba(0,212,255,0.03) 50%, transparent 60%),
                linear-gradient(-45deg, transparent 40%, rgba(0,212,255,0.03) 50%, transparent 60%)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </motion.div>

        {/* Layer 2: Mid ruins */}
        <motion.div
          style={{ y: y2 }}
          className="absolute inset-0 opacity-30"
        >
          <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-arc/20 to-transparent" />
          <div className="absolute top-2/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-arc/15 to-transparent" />
          <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-arc/10 to-transparent" />
        </motion.div>

        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, rgba(0,212,255,0.4) 0%, transparent 70%)" }}
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Year badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="inline-block font-display text-6xl md:text-8xl font-black text-accent-arc/20">
            {t("title")}
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-2xl md:text-4xl font-bold mb-8"
        >
          {t("subtitle")}
        </motion.h2>

        {/* Story text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-text-secondary leading-relaxed mb-12 max-w-3xl mx-auto"
        >
          {t("story")}
        </motion.p>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative py-8 px-6 md:px-12 mb-12"
        >
          <div className="absolute top-0 left-0 text-6xl text-accent-arc/20 font-display">&ldquo;</div>
          <p className="text-xl md:text-2xl font-display font-semibold text-accent-arc italic">
            {t("quote")}
          </p>
          <div className="absolute bottom-0 right-0 text-6xl text-accent-arc/20 font-display">&rdquo;</div>
        </motion.blockquote>

        {/* Hint text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-sm uppercase tracking-widest text-text-secondary/60"
        >
          {t("hint")}
        </motion.p>
      </motion.div>
    </section>
  );
}
