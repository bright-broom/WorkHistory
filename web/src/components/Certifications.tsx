import { resumeData } from "@/data/resume";
import { Section } from "./Section";

export function Certifications() {
  return (
    <Section title="資格・免許">
      <table className="w-full">
        <tbody>
          {resumeData.certifications.map((cert, idx) => (
            <tr
              key={idx}
              className={idx !== resumeData.certifications.length - 1 ? "border-b border-[var(--color-border)]" : ""}
            >
              <td className="py-2.5 sm:py-3 w-[120px] sm:w-[140px] text-[var(--color-text-muted)] text-left align-top">
                {cert.date}
              </td>
              <td className="py-2.5 sm:py-3 text-[var(--color-text)] text-left">
                {cert.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Section>
  );
}
