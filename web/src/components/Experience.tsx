"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Section } from "./Section";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  return (
    <Section id="experience" title="Work Experience">
      <div className="relative border-l border-white/10 ml-4 md:ml-6 mt-8">
        {resumeData.experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="mb-12 ml-8 md:ml-12 relative group"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full border-4 border-[var(--color-background)] bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-transform group-hover:scale-125" />

            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
              <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {exp.company}
              </h3>
              <div className="flex items-center text-sm font-medium text-slate-400 mt-1 md:mt-0 gap-1.5">
                <Calendar size={14} className="text-slate-500" />
                <span>{exp.period}</span>
              </div>
            </div>
            
            <div className="flex items-center text-blue-300 font-medium mb-4 gap-2">
              <Briefcase size={16} />
              <span>{exp.role}</span>
            </div>
            
            <div className="prose prose-invert max-w-none text-slate-300 mb-4 whitespace-pre-wrap leading-relaxed text-sm md:text-base">
              {exp.description}
            </div>
            
            <div className="bg-white/5 border border-white/5 rounded-lg p-4 mb-4">
              <h4 className="text-emerald-400 text-sm font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                Key Achievements
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                {exp.achievements}
              </p>
            </div>

            {exp.reason && (
              <div className="text-sm text-slate-400 italic border-l-2 border-slate-700 pl-4 py-1">
                {exp.reason}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
