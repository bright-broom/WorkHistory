import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { SelfPR } from "@/components/SelfPR";
import { resumeData } from "@/data/resume";

export default function Home() {
  return (
    <main className="max-w-[800px] mx-auto px-8 py-12 bg-white">
      <Hero />
      <Skills />
      <Experience />
      <SelfPR />

      {/* 資格・免許 - 見出しは左寄せ */}
      <section className="mb-12">
        <h2 className="text-[18px] font-bold border-b-2 border-[var(--color-border-dark)] pb-2 mb-6 text-left">
          資格・免許
        </h2>
        <table className="w-full">
          <tbody>
            {resumeData.certifications.map((cert, idx) => (
              <tr
                key={idx}
                className={idx !== resumeData.certifications.length - 1 ? "border-b border-[var(--color-border)]" : ""}
              >
                <td className="text-[14px] py-3 w-[140px] text-[var(--color-text-muted)] text-left">
                  {cert.date}
                </td>
                <td className="text-[14px] py-3 text-[var(--color-text)] text-left">
                  {cert.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* 語学 - 見出しは左寄せ */}
      <section className="mb-12">
        <h2 className="text-[18px] font-bold border-b-2 border-[var(--color-border-dark)] pb-2 mb-6 text-left">
          語学
        </h2>
        <table className="w-full">
          <tbody>
            {resumeData.languages.map((lang, idx) => (
              <tr
                key={idx}
                className={idx !== resumeData.languages.length - 1 ? "border-b border-[var(--color-border)]" : ""}
              >
                <td className="text-[14px] font-bold py-3 w-[140px] text-[var(--color-text)] text-left">
                  {lang.language}
                </td>
                <td className="text-[14px] py-3 text-[var(--color-text)] text-left">
                  {lang.level}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* 以上 - 右寄せ */}
      <footer className="text-[14px] text-[var(--color-text)] text-right pt-8 mt-16">
        <p>以上</p>
      </footer>
    </main>
  );
}
