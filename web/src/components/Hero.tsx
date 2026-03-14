import { resumeData } from "@/data/resume";
import { CurrentDate } from "./CurrentDate";

export function Hero() {
  return (
    <header className="mb-12">
      {/* ドキュメントタイトル - 中央揃え */}
      <h1 className="text-[28px] font-bold text-center tracking-[0.2em] mb-8">
        職務経歴書
      </h1>

      {/* 日付・氏名 - 右寄せ、同じサイズ */}
      <div className="text-right mb-10 text-[14px]">
        <p className="mb-1">
          <CurrentDate />
        </p>
        <p>
          氏名：{resumeData.header.name}
        </p>
      </div>

      {/* 職務要約 - 見出しは左寄せ */}
      <section>
        <h2 className="text-[18px] font-bold border-b-2 border-[var(--color-border-dark)] pb-2 mb-6 text-left">
          職務要約
        </h2>
        <p className="text-[14px] leading-[2] text-[var(--color-text)] whitespace-pre-wrap text-left">
          {resumeData.summary}
        </p>
      </section>
    </header>
  );
}
