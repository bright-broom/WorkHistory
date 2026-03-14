import { resumeData } from "@/data/resume";
import { Section } from "./Section";

export function Languages() {
  return (
    <Section title="語学">
      <table className="w-full">
        <tbody>
          {resumeData.languages.map((lang, idx) => (
            <tr
              key={idx}
              className={idx !== resumeData.languages.length - 1 ? "border-b border-[var(--color-border)]" : ""}
            >
              <td className="font-bold py-2.5 sm:py-3 w-[120px] sm:w-[140px] text-[var(--color-text)] text-left align-top">
                {lang.language}
              </td>
              <td className="py-2.5 sm:py-3 text-[var(--color-text)] text-left">
                {lang.level}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Section>
  );
}
