"use client";

import { useEffect, useState } from "react";

/**
 * 現在の日付を日本語フォーマットで表示するコンポーネント
 * - SSR/CSRのハイドレーション不一致を回避
 * - Intl.DateTimeFormatを使用した堅牢な日本語フォーマット
 */
export function CurrentDate() {
  const [dateString, setDateString] = useState<string>("");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setDateString(formatter.format(new Date()));
  }, []);

  // マウント前はレイアウトシフトを防ぐため不可視のプレースホルダーを表示
  if (!dateString) {
    return <span className="invisible">0000年00月00日 現在</span>;
  }

  return <>{dateString} 現在</>;
}
