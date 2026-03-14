import { resumeData } from "@/data/resume";

export function Skills() {
  return (
    <section className="mb-12">
      <h2 className="text-[18px] font-bold border-b-2 border-[var(--color-border-dark)] pb-2 mb-6">
        活かせる経験・知識・スキル
      </h2>
      <table className="w-full">
        <tbody>
          {resumeData.skills.map((category, idx) => (
            <tr
              key={category.name}
              className={idx !== resumeData.skills.length - 1 ? "border-b border-[var(--color-border)]" : ""}
            >
              <th className="text-left text-[14px] font-bold py-3 pr-8 w-[160px] align-top text-[var(--color-text)]">
                {category.name}
              </th>
              <td className="text-[14px] py-3 text-[var(--color-text)] leading-relaxed">
                {category.items.join(" ／ ")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
