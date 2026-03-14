import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { resumeData as fallbackData } from "@/data/resume";
import type { ResumeData } from "@/types/resume";

// GET - 職務経歴書データを取得
export async function GET() {
  try {
    const supabase = await createClient();

    if (!supabase) {
      return NextResponse.json(fallbackData);
    }

    const { data, error } = await supabase
      .from("resume_data")
      .select("data")
      .single();

    if (error || !data) {
      // Supabaseにデータがない場合はフォールバック
      return NextResponse.json(fallbackData);
    }

    return NextResponse.json(data.data as ResumeData);
  } catch {
    return NextResponse.json(fallbackData);
  }
}

// PATCH - 職務経歴書データを更新
export async function PATCH(request: Request) {
  try {
    const supabase = await createClient();

    if (!supabase) {
      return NextResponse.json(
        { error: "Supabase not configured" },
        { status: 500 }
      );
    }

    // 認証確認
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // オーナー確認
    if (user.email !== process.env.NEXT_PUBLIC_OWNER_EMAIL) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const body = await request.json();
    const { key, value } = body as { key: keyof ResumeData; value: unknown };

    // 現在のデータを取得
    const { data: currentData, error: fetchError } = await supabase
      .from("resume_data")
      .select("id, data")
      .single();

    if (fetchError || !currentData) {
      return NextResponse.json(
        { error: "Failed to fetch current data" },
        { status: 500 }
      );
    }

    // データを更新
    const updatedData = {
      ...(currentData.data as ResumeData),
      [key]: value,
    };

    const { error: updateError } = await supabase
      .from("resume_data")
      .update({
        data: updatedData,
        updated_at: new Date().toISOString(),
      })
      .eq("id", currentData.id);

    if (updateError) {
      return NextResponse.json(
        { error: "Failed to update data" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data: updatedData });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
