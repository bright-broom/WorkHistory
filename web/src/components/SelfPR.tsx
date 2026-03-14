import { resumeData } from "@/data/resume";

export function SelfPR() {
  return (
    <section className="mb-12">
      <h2 className="text-[18px] font-bold border-b-2 border-[var(--color-border-dark)] pb-2 mb-6">
        自己PR
      </h2>

      <div className="space-y-6">
        {resumeData.selfPR.map((pr, idx) => (
          <article key={idx}>
            <h3 className="text-[14px] font-bold text-[var(--color-text)] mb-3">
              {pr.title}
            </h3>
            <p className="text-[14px] text-[var(--color-text)] leading-[1.9] whitespace-pre-wrap">
              {pr.content}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
