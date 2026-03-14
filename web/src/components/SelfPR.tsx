import { resumeData } from "@/data/resume";
import { Section } from "./Section";

export function SelfPR() {
  return (
    <Section title="自己PR">
      <div className="space-y-6 sm:space-y-8">
        {resumeData.selfPR.map((pr, idx) => (
          <article key={idx}>
            <h3 className="font-bold text-[var(--color-text)] mb-2 sm:mb-3 leading-snug">
              {pr.title}
            </h3>
            <p className="text-[var(--color-text)] leading-[1.85] sm:leading-[1.95] whitespace-pre-wrap">
              {pr.content}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
