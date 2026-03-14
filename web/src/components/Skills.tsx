import { resumeData } from "@/data/resume";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section title="活かせる経験・知識・スキル">
      {/* モバイル: 縦並び / タブレット以上: 表形式 */}
      <div className="sm:hidden space-y-4">
        {resumeData.skills.map((category) => (
          <div key={category.name} className="border-b border-[var(--color-border)] pb-3">
            <h3 className="font-bold text-[var(--color-text)] mb-1.5">
              {category.name}
            </h3>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              {category.items.join(" ／ ")}
            </p>
          </div>
        ))}
      </div>

      {/* タブレット以上: 表形式 */}
      <table className="hidden sm:table w-full">
        <tbody>
          {resumeData.skills.map((category, idx) => (
            <tr
              key={category.name}
              className={idx !== resumeData.skills.length - 1 ? "border-b border-[var(--color-border)]" : ""}
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
    </Section>
  );
}
