"use client";

import { useState } from "react";
import { useResumeData } from "@/lib/hooks/useResumeData";
import { EditModeProvider } from "@/components/edit/EditModeProvider";
import { EditModeToggle } from "@/components/edit/EditModeToggle";
import { EditButton } from "@/components/edit/EditButton";
import { SummaryEditForm } from "@/components/edit/SummaryEditForm";
import { SkillsEditForm } from "@/components/edit/SkillsEditForm";
import { ExperienceEditForm } from "@/components/edit/ExperienceEditForm";
import { SelfPREditForm } from "@/components/edit/SelfPREditForm";
import { CertificationEditForm } from "@/components/edit/CertificationEditForm";
import { LanguageEditForm } from "@/components/edit/LanguageEditForm";
import { Section } from "@/components/Section";
import { CurrentDate } from "@/components/CurrentDate";
import type { ResumeData, Experience, SelfPR } from "@/types/resume";

interface ResumeContentProps {
  initialData: ResumeData;
}

export function ResumeContent({ initialData }: ResumeContentProps) {
  const { data, updateSection } = useResumeData(initialData);

  // 編集モーダルの状態
  const [editingSummary, setEditingSummary] = useState(false);
  const [editingSkills, setEditingSkills] = useState(false);
  const [editingExperience, setEditingExperience] = useState<Experience | null>(null);
  const [editingSelfPR, setEditingSelfPR] = useState<{ selfPR: SelfPR; index: number } | null>(null);
  const [editingCerts, setEditingCerts] = useState(false);
  const [editingLangs, setEditingLangs] = useState(false);

  return (
    <EditModeProvider>
      <main className="w-full max-w-[800px] mx-auto px-5 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12 bg-white">
        {/* Hero / Header */}
        <header className="mb-10 sm:mb-12">
          <h1 className="text-[22px] sm:text-[25px] lg:text-[28px] font-bold text-center tracking-[0.15em] sm:tracking-[0.2em] mb-6 sm:mb-8">
            職務経歴書
          </h1>

          <div className="text-right mb-8 sm:mb-10">
            <p className="mb-1">
              <CurrentDate />
            </p>
            <p>氏名：{data.header.name}</p>
          </div>

          <section className="relative group">
            <div className="flex items-center justify-between border-b-2 border-[var(--color-border-dark)] pb-2 mb-5 sm:mb-6">
              <h2 className="text-[16px] sm:text-[17px] lg:text-[18px] font-bold text-left">
                職務要約
              </h2>
              <EditButton
                onClick={() => setEditingSummary(true)}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <p className="leading-[1.9] sm:leading-[2] text-[var(--color-text)] whitespace-pre-wrap text-left">
              {data.summary}
            </p>
          </section>
        </header>

        {/* Skills */}
        <section className="mb-10 sm:mb-12 relative group">
          <div className="flex items-center justify-between border-b-2 border-[var(--color-border-dark)] pb-2 mb-5 sm:mb-6">
            <h2 className="text-[16px] sm:text-[17px] lg:text-[18px] font-bold text-left">
              活かせる経験・知識・スキル
            </h2>
            <EditButton
              onClick={() => setEditingSkills(true)}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </div>

          <div className="sm:hidden space-y-4">
            {data.skills.map((category) => (
              <div key={category.name} className="border-b border-[var(--color-border)] pb-3">
                <h3 className="font-bold text-[var(--color-text)] mb-1.5">{category.name}</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {category.items.join(" ／ ")}
                </p>
              </div>
            ))}
          </div>

          <table className="hidden sm:table w-full">
            <tbody>
              {data.skills.map((category, idx) => (
                <tr
                  key={category.name}
                  className={idx !== data.skills.length - 1 ? "border-b border-[var(--color-border)]" : ""}
                >
                  <th className="text-left py-3 pr-8 w-[140px] lg:w-[160px] font-bold text-[var(--color-text)] align-top">
                    {category.name}
                  </th>
                  <td className="py-3 text-[var(--color-text)] leading-relaxed">
                    {category.items.join(" ／ ")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Experience */}
        <Section title="職務経歴">
          <div className="space-y-6 sm:space-y-8">
            {data.experiences.map((exp) => (
              <article key={exp.id} className="border border-[var(--color-border)] p-4 sm:p-6 bg-white relative group">
                <EditButton
                  onClick={() => setEditingExperience(exp)}
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                />

                <header className="mb-4 sm:mb-5 pb-3 sm:pb-4 border-b border-[var(--color-border)]">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4">
                    <div className="flex-1">
                      <h3 className="text-[15px] sm:text-[16px] font-bold text-[var(--color-text)] leading-snug mb-1">
                        {exp.company}
                      </h3>
                      <p className="text-[var(--color-text-secondary)]">{exp.role}</p>
                    </div>
                    <time className="text-[var(--color-text-muted)] whitespace-nowrap flex-shrink-0 text-[12px] sm:text-[13px] mt-1 sm:mt-0.5">
                      {exp.period}
                    </time>
                  </div>
                </header>

                <div className="space-y-4 sm:space-y-5">
                  <div>
                    <h4 className="font-bold text-[var(--color-text)] mb-1.5 sm:mb-2">【業務内容】</h4>
                    <p className="text-[var(--color-text)] leading-[1.85] sm:leading-[1.9] whitespace-pre-wrap">
                      {exp.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-[var(--color-text)] mb-1.5 sm:mb-2">【実績・成果】</h4>
                    <p className="text-[var(--color-text)] leading-[1.85] sm:leading-[1.9]">{exp.achievements}</p>
                  </div>

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

        {/* Self PR */}
        <Section title="自己PR">
          <div className="space-y-6 sm:space-y-8">
            {data.selfPR.map((pr, idx) => (
              <article key={idx} className="relative group">
                <EditButton
                  onClick={() => setEditingSelfPR({ selfPR: pr, index: idx })}
                  className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <h3 className="font-bold text-[var(--color-text)] mb-2 sm:mb-3 leading-snug">{pr.title}</h3>
                <p className="text-[var(--color-text)] leading-[1.85] sm:leading-[1.95] whitespace-pre-wrap">
                  {pr.content}
                </p>
              </article>
            ))}
          </div>
        </Section>

        {/* Certifications */}
        <section className="mb-10 sm:mb-12 relative group">
          <div className="flex items-center justify-between border-b-2 border-[var(--color-border-dark)] pb-2 mb-5 sm:mb-6">
            <h2 className="text-[16px] sm:text-[17px] lg:text-[18px] font-bold text-left">
              資格・免許
            </h2>
            <EditButton
              onClick={() => setEditingCerts(true)}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </div>
          <table className="w-full">
            <tbody>
              {data.certifications.map((cert, idx) => (
                <tr
                  key={idx}
                  className={idx !== data.certifications.length - 1 ? "border-b border-[var(--color-border)]" : ""}
                >
                  <td className="py-2.5 sm:py-3 w-[120px] sm:w-[140px] text-[var(--color-text-muted)] text-left align-top">
                    {cert.date}
                  </td>
                  <td className="py-2.5 sm:py-3 text-[var(--color-text)] text-left">{cert.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Languages */}
        <section className="mb-10 sm:mb-12 relative group">
          <div className="flex items-center justify-between border-b-2 border-[var(--color-border-dark)] pb-2 mb-5 sm:mb-6">
            <h2 className="text-[16px] sm:text-[17px] lg:text-[18px] font-bold text-left">
              語学
            </h2>
            <EditButton
              onClick={() => setEditingLangs(true)}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </div>
          <table className="w-full">
            <tbody>
              {data.languages.map((lang, idx) => (
                <tr
                  key={idx}
                  className={idx !== data.languages.length - 1 ? "border-b border-[var(--color-border)]" : ""}
                >
                  <td className="font-bold py-2.5 sm:py-3 w-[120px] sm:w-[140px] text-[var(--color-text)] text-left align-top">
                    {lang.language}
                  </td>
                  <td className="py-2.5 sm:py-3 text-[var(--color-text)] text-left">{lang.level}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <footer className="text-right pt-6 sm:pt-8 mt-12 sm:mt-16">
          <p>以上</p>
        </footer>
      </main>

      <EditModeToggle />

      {/* Edit Modals */}
      <SummaryEditForm
        summary={data.summary}
        isOpen={editingSummary}
        onClose={() => setEditingSummary(false)}
        onSave={async (summary) => {
          await updateSection("summary", summary);
        }}
      />

      <SkillsEditForm
        skills={data.skills}
        isOpen={editingSkills}
        onClose={() => setEditingSkills(false)}
        onSave={async (skills) => {
          await updateSection("skills", skills);
        }}
      />

      {editingExperience && (
        <ExperienceEditForm
          experience={editingExperience}
          isOpen={true}
          onClose={() => setEditingExperience(null)}
          onSave={async (experience) => {
            const updated = data.experiences.map((exp) =>
              exp.id === experience.id ? experience : exp
            );
            await updateSection("experiences", updated);
          }}
          onDelete={async () => {
            const updated = data.experiences.filter(
              (exp) => exp.id !== editingExperience.id
            );
            await updateSection("experiences", updated);
          }}
        />
      )}

      {editingSelfPR && (
        <SelfPREditForm
          selfPR={editingSelfPR.selfPR}
          isOpen={true}
          onClose={() => setEditingSelfPR(null)}
          onSave={async (selfPR) => {
            const updated = [...data.selfPR];
            updated[editingSelfPR.index] = selfPR;
            await updateSection("selfPR", updated);
          }}
          onDelete={async () => {
            const updated = data.selfPR.filter((_, i) => i !== editingSelfPR.index);
            await updateSection("selfPR", updated);
          }}
        />
      )}

      <CertificationEditForm
        certifications={data.certifications}
        isOpen={editingCerts}
        onClose={() => setEditingCerts(false)}
        onSave={async (certifications) => {
          await updateSection("certifications", certifications);
        }}
      />

      <LanguageEditForm
        languages={data.languages}
        isOpen={editingLangs}
        onClose={() => setEditingLangs(false)}
        onSave={async (languages) => {
          await updateSection("languages", languages);
        }}
      />
    </EditModeProvider>
  );
}
