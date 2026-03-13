"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Section } from "./Section";
import { Code2, Server, Shield, Terminal } from "lucide-react";

export function Skills() {
  const icons = [
    <Code2 key="frontend" className="text-blue-400" size={24} />,
    <Server key="backend" className="text-emerald-400" size={24} />,
    <Shield key="cloud" className="text-indigo-400" size={24} />,
    <Terminal key="tools" className="text-slate-400" size={24} />,
  ];

  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resumeData.skills.map((category, idx) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            className="rounded-2xl border border-white/5 bg-white/5 p-6 shadow-xl backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/10"
          >
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
              <div className="p-2 rounded-lg bg-white/5">
                {icons[idx % icons.length]}
              </div>
              <h3 className="text-xl font-semibold">{category.name}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-md bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-300 border border-blue-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
