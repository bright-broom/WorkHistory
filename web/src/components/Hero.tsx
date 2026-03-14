import { resumeData } from "@/data/resume";
import { CurrentDate } from "./CurrentDate";
import { SectionHeading } from "./SectionHeading";

export function Hero() {
  return (
    <header className="mb-10 sm:mb-12">
      {/* ドキュメントタイトル - 中央揃え */}
      <h1 className="
        text-[22px] sm:text-[25px] lg:text-[28px]
        font-bold
        text-center
        tracking-[0.15em] sm:tracking-[0.2em]
        mb-6 sm:mb-8
      ">
        職務経歴書
      </h1>

      {/* 日付・氏名 - 右寄せ */}
      <div className="text-right mb-8 sm:mb-10">
        <p className="mb-1">
          <CurrentDate />
        </p>
        <p>
          氏名：{resumeData.header.name}
        </p>
      </div>

      {/* 職務要約 */}
      <section>
        <SectionHeading>職務要約</SectionHeading>
        <p className="leading-[1.9] sm:leading-[2] text-[var(--color-text)] whitespace-pre-wrap text-left">
          {resumeData.summary}
        </p>
      </section>
    </header>
  );
}
