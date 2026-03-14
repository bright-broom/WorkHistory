import { createClient } from "@/lib/supabase/server";
import { resumeData as fallbackData } from "@/data/resume";
import { ResumeContent } from "@/components/ResumeContent";
import type { ResumeData } from "@/types/resume";

export const revalidate = 60; // ISR: 60秒ごとに再検証

export default async function Home() {
  let resumeData: ResumeData = fallbackData;

  try {
    const supabase = await createClient();

    if (supabase) {
      const { data, error } = await supabase
        .from("resume_data")
        .select("data")
        .single();

      if (!error && data?.data) {
        resumeData = data.data as ResumeData;
      }
    }
  } catch {
    // Supabaseに接続できない場合はフォールバックデータを使用
  }

  return <ResumeContent initialData={resumeData} />;
}
