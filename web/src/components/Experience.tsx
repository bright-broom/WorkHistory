import { resumeData } from "@/data/resume";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section title="職務経歴">
      <div className="space-y-6 sm:space-y-8">
        {resumeData.experiences.map((exp) => (
          <article
            key={exp.id}
            className="border border-[var(--color-border)] p-4 sm:p-6 bg-white"
          >
            {/* ヘッダー：会社名・期間 */}
            <header className="mb-4 sm:mb-5 pb-3 sm:pb-4 border-b border-[var(--color-border)]">
              {/* モバイル: 縦並び / タブレット以上: 横並び */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4">
                <div className="flex-1">
                  <h3 className="
                    text-[15px] sm:text-[16px]
                    font-bold
                    text-[var(--color-text)]
                    leading-snug
                    mb-1
                  ">
                    {exp.company}
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    {exp.role}
                  </p>
                </div>
                <time className="
                  text-[var(--color-text-muted)]
                  whitespace-nowrap
                  flex-shrink-0
                  text-[12px] sm:text-[13px]
                  mt-1 sm:mt-0.5
                ">
                  {exp.period}
                </time>
              </div>
            </header>

            {/* 本文 */}
            <div className="space-y-4 sm:space-y-5">
              {/* 業務内容 */}
              <div>
                <h4 className="font-bold text-[var(--color-text)] mb-1.5 sm:mb-2">
                  【業務内容】
                </h4>
                <p className="text-[var(--color-text)] leading-[1.85] sm:leading-[1.9] whitespace-pre-wrap">
                  {exp.description}
                </p>
              </div>

              {/* 実績・成果 */}
              <div>
                <h4 className="font-bold text-[var(--color-text)] mb-1.5 sm:mb-2">
                  【実績・成果】
                </h4>
                <p className="text-[var(--color-text)] leading-[1.85] sm:leading-[1.9]">
                  {exp.achievements}
                </p>
              </div>

              {/* 退職理由（存在する場合） */}
              {exp.reason && (
                <aside className="bg-[var(--color-surface)] p-3 sm:p-4 mt-3 sm:mt-4">
                  <p className="text-[12px] sm:text-[13px] text-[var(--color-text-muted)] leading-[1.75] sm:leading-[1.8]">
                    {exp.reason}
                  </p>
                </aside>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
