import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { SelfPR } from "@/components/SelfPR";
import { Certifications } from "@/components/Certifications";
import { Languages } from "@/components/Languages";

export default function Home() {
  return (
    <main className="
      w-full
      max-w-[800px]
      mx-auto
      px-5 sm:px-8 lg:px-10
      py-8 sm:py-10 lg:py-12
      bg-white
    ">
      <Hero />
      <Skills />
      <Experience />
      <SelfPR />
      <Certifications />
      <Languages />

      {/* 以上 - 右寄せ */}
      <footer className="text-right pt-6 sm:pt-8 mt-12 sm:mt-16">
        <p>以上</p>
      </footer>
    </main>
  );
}
