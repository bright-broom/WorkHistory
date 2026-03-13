import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { SelfPR } from "@/components/SelfPR";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pb-24 relative">
      <Hero />
      <SelfPR />
      <Experience />
      <Skills />
      
      {/* Footer / Final CTA */}
      <footer className="w-full max-w-5xl mx-auto px-6 md:px-12 mt-32text-center border-t border-white/10 pt-12 pb-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-6 text-white">Let&apos;s Build Something Great</h2>
        <a 
          href="mailto:example@example.com" 
          className="inline-flex items-center justify-center rounded-full bg-white/10 border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white mb-16"
        >
          Contact Me
        </a>
        
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Toshiki Sakuta. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
