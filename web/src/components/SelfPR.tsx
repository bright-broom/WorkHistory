"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Section } from "./Section";
import { Lightbulb, Rocket, Target } from "lucide-react";

export function SelfPR() {
  const icons = [
    <Target key="target" className="text-blue-400 mb-4" size={32} />,
    <Rocket key="rocket" className="text-emerald-400 mb-4" size={32} />,
    <Lightbulb key="lightbulb" className="text-indigo-400 mb-4" size={32} />,
  ];

  return (
    <Section id="self-pr" title="Why Me? (Self PR)">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {resumeData.selfPR.map((pr, idx) => {
          // Extract the title without the leading number for cleaner display
          const displayTitle = pr.title.replace(/^\d\.\s/, "");
          
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="group relative flex flex-col rounded-3xl bg-gradient-to-b from-white/10 to-transparent p-8 shadow-2xl ring-1 ring-white/10 hover:ring-white/20 transition-all overflow-hidden"
            >
              {/* Background Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-b from-blue-600 to-emerald-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-1000 group-hover:duration-200" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between">
                  {icons[idx % icons.length]}
                  <span className="text-5xl font-black text-white/5 group-hover:text-white/10 transition-colors">
                    0{idx + 1}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-6 leading-tight group-hover:text-blue-300 transition-colors">
                  {displayTitle}
                </h3>
                
                <div className="prose prose-invert text-slate-400 text-sm leading-relaxed mt-auto flex-grow flex flex-col">
                  {pr.content.split('\n').map((paragraph, pIdx) => (
                    <p key={pIdx} className="mb-3 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
