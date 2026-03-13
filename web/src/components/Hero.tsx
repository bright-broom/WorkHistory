"use client";

import { motion } from "framer-motion";
import { Github, FileText, ArrowDown } from "lucide-react";
import { resumeData } from "@/data/resume";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center py-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center space-x-2 rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 mb-6 border border-blue-500/20">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span>Available for new opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 leading-tight">
            {resumeData.header.name}
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-slate-400 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 inline-block">
            {resumeData.header.title}
          </h2>
          
          <div className="prose prose-invert prose-lg text-slate-300 mb-10 leading-relaxed font-sans max-w-none">
            {resumeData.summary.split('\n').map((paragraph, idx) => (
              <p key={idx} className="mb-4">{paragraph}</p>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 gap-2 shadow-lg shadow-blue-500/20"
            >
              <FileText size={18} />
              <span>Contact Me</span>
            </a>
            <a 
              href={resumeData.header.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-slate-800 border border-slate-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-700 hover:border-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 gap-2"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer flex flex-col items-center text-slate-500 hover:text-slate-300 transition-colors"
        onClick={() => {
          document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
