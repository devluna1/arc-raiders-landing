"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useTranslations } from "next-intl";

const machineKeys = ["drone", "titan", "turbine", "scout"] as const;

const threatColors: Record<string, string> = {
  BAJA: "text-accent-success",
  MEDIA: "text-yellow-400",
  ALTA: "text-accent-warning",
  CRÍTICA: "text-red-500",
  LOW: "text-accent-success",
  MEDIUM: "text-yellow-400",
  HIGH: "text-accent-warning",
  CRITICAL: "text-red-500",
};

const machineIcons: Record<string, React.ReactNode> = {
  drone: (
    <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      <circle cx="12" cy="10" r="3" strokeWidth={1.5} />
    </svg>
  ),
  titan: (
    <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  turbine: (
    <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  scout: (
    <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
};

export default function MachineGallery() {
  const t = useTranslations("machines");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeMachine, setActiveMachine] = useState<string>("titan");

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-4 bg-bg-secondary hud-grid">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            {t("title")}
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Machine selector tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {machineKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActiveMachine(key)}
              className={`px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider rounded transition-all duration-300 ${
                activeMachine === key
                  ? "bg-accent-arc text-bg-primary shadow-[0_0_20px_rgba(0,212,255,0.4)]"
                  : "bg-bg-card border border-border-glow text-text-secondary hover:text-accent-arc hover:border-accent-arc/40"
              }`}
            >
              {t(`list.${key}.name`)}
            </button>
          ))}
        </motion.div>

        {/* Active machine display */}
        <motion.div
          key={activeMachine}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-2xl p-8 md:p-12 scanline-overlay"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Machine icon + visual */}
            <div className="flex flex-col items-center gap-6">
              <div className="relative">
                <div className="absolute inset-0 bg-accent-arc/20 rounded-full blur-3xl" />
                <div className="relative text-accent-arc">
                  {machineIcons[activeMachine]}
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                  {t(`list.${activeMachine}.name`)}
                </h3>
                <p className="text-text-secondary max-w-sm">
                  {t(`list.${activeMachine}.description`)}
                </p>
              </div>
            </div>

            {/* Threat analysis panel */}
            <div className="space-y-6">
              <div className="border-b border-border-glow pb-4">
                <div className="text-xs uppercase tracking-widest text-text-secondary mb-2">
                  {t("analysis")}
                </div>
                <div className="font-display text-lg font-bold text-accent-arc">
                  ARC-{activeMachine.toUpperCase()}
                </div>
              </div>

              {/* Threat level */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase tracking-widest text-text-secondary">
                    {t("threat")}
                  </span>
                  <span
                    className={`font-display font-bold text-sm ${
                      threatColors[t(`list.${activeMachine}.threat`)] || "text-text-primary"
                    }`}
                  >
                    {t(`list.${activeMachine}.threat`)}
                  </span>
                </div>
                <div className="h-2 bg-bg-primary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width:
                        t(`list.${activeMachine}.threat`) === "BAJA" || t(`list.${activeMachine}.threat`) === "LOW"
                          ? "25%"
                          : t(`list.${activeMachine}.threat`) === "MEDIA" || t(`list.${activeMachine}.threat`) === "MEDIUM"
                          ? "50%"
                          : t(`list.${activeMachine}.threat`) === "ALTA" || t(`list.${activeMachine}.threat`) === "HIGH"
                          ? "75%"
                          : "95%",
                    }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className={`h-full rounded-full threat-bar ${
                      t(`list.${activeMachine}.threat`) === "BAJA" || t(`list.${activeMachine}.threat`) === "LOW"
                        ? "bg-accent-success"
                        : t(`list.${activeMachine}.threat`) === "MEDIA" || t(`list.${activeMachine}.threat`) === "MEDIUM"
                        ? "bg-yellow-400"
                        : t(`list.${activeMachine}.threat`) === "ALTA" || t(`list.${activeMachine}.threat`) === "HIGH"
                        ? "bg-accent-warning"
                        : "bg-red-500"
                    }`}
                  />
                </div>
              </div>

              {/* Weakness */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase tracking-widest text-text-secondary">
                    {t("weakness")}
                  </span>
                  <span className="font-semibold text-text-primary text-sm">
                    {t(`list.${activeMachine}.weakness`)}
                  </span>
                </div>
                <div className="h-1 bg-bg-primary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "60%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-accent-arc/50 rounded-full"
                  />
                </div>
              </div>

              {/* Status indicators */}
              <div className="grid grid-cols-3 gap-3 pt-4">
                {["VELOCIDAD", "ATAQUE", "DEFENSA"].map((stat, i) => (
                  <div key={stat} className="text-center">
                    <div className="text-xs text-text-secondary mb-1">{stat}</div>
                    <div className="flex justify-center gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <div
                          key={j}
                          className={`w-1.5 h-4 rounded-sm ${
                            j < 2 + i ? "bg-accent-arc" : "bg-bg-primary"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
