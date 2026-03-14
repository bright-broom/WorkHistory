import { resumeData } from "@/data/resume";

export function Experience() {
  return (
    <section className="mb-12">
      <h2 className="text-[18px] font-bold border-b-2 border-[var(--color-border-dark)] pb-2 mb-6">
        職務経歴
      </h2>

      <div className="space-y-8">
        {resumeData.experiences.map((exp) => (
          <article
            key={exp.id}
            className="border border-[var(--color-border)] p-6"
          >
            {/* ヘッダー：会社名・期間 */}
            <header className="mb-5 pb-4 border-b border-[var(--color-border)]">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-[16px] font-bold text-[var(--color-text)] leading-snug mb-1">
                    {exp.company}
                  </h3>
                  <p className="text-[14px] text-[var(--color-text-secondary)]">
                    {exp.role}
                  </p>
                </div>
                <time className="text-[13px] text-[var(--color-text-muted)] whitespace-nowrap flex-shrink-0 pt-0.5">
                  {exp.period}
                </time>
              </div>
            </header>

            {/* 本文 */}
            <div className="space-y-5">
              {/* 業務内容 */}
              <div>
                <h4 className="text-[14px] font-bold text-[var(--color-text)] mb-2">
                  【業務内容】
                </h4>
                <p className="text-[14px] text-[var(--color-text)] leading-[1.9] whitespace-pre-wrap">
                  {exp.description}
                </p>
              </div>

              {/* 実績・成果 */}
              <div>
                <h4 className="text-[14px] font-bold text-[var(--color-text)] mb-2">
                  【実績・成果】
                </h4>
                <p className="text-[14px] text-[var(--color-text)] leading-[1.9]">
                  {exp.achievements}
                </p>
              </div>

              {/* 退職理由（存在する場合） */}
              {exp.reason && (
                <div className="bg-[var(--color-surface)] p-4 mt-4">
                  <p className="text-[13px] text-[var(--color-text-muted)] leading-[1.8]">
                    {exp.reason}
                  </p>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
