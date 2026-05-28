"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";

const mapConditions = [
  {
    id: 1,
    name: "Spaceport",
    condition: "Electromagnetic Storm",
    time: "13:38",
    status: "active",
  },
  {
    id: 2,
    name: "The Blue Gate",
    condition: "Uncovered Caches",
    time: "13:38",
    status: "active",
  },
  {
    id: 3,
    name: "Rust Belt",
    condition: "ARC Surge",
    time: "08:15",
    status: "warning",
  },
  {
    id: 4,
    name: "Toledo Outskirts",
    condition: "Clear Skies",
    time: "22:45",
    status: "safe",
  },
];

const statusColors: Record<string, string> = {
  active: "bg-accent-arc",
  warning: "bg-accent-warning",
  safe: "bg-accent-success",
};

const statusText: Record<string, string> = {
  active: "⚡",
  warning: "⚠",
  safe: "✓",
};

export default function MapConditions() {
  const t = useTranslations("maps");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-4 bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
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

        {/* Map conditions grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mapConditions.map((map, index) => (
            <motion.div
              key={map.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 group hover:border-accent-arc/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Status indicator */}
                  <div className={`w-3 h-3 rounded-full ${statusColors[map.status]} threat-bar`} />

                  {/* Map info */}
                  <div>
                    <h3 className="font-display font-bold text-lg group-hover:text-accent-arc transition-colors">
                      {map.name}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {map.condition}
                    </p>
                  </div>
                </div>

                {/* Time + status */}
                <div className="text-right">
                  <div className="font-display font-mono text-2xl text-accent-arc">
                    {map.time}
                  </div>
                  <div className="text-xs text-text-secondary uppercase tracking-wider">
                    {t("active")}
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-4 h-1 bg-bg-primary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${60 + index * 10}%` } : {}}
                  transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                  className={`h-full ${statusColors[map.status]} rounded-full opacity-60`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center gap-2 mt-8 text-text-secondary/60"
        >
          <span className="w-2 h-2 rounded-full bg-accent-success threat-bar" />
          <span className="text-xs uppercase tracking-widest">
            Transmisión en vivo — Speranza Network
          </span>
        </motion.div>
      </div>
    </section>
  );
}
