"use client";

import useSWR from "swr";
import type { ResumeData } from "@/types/resume";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json() as Promise<ResumeData>;
};

export function useResumeData(initialData: ResumeData) {
  const { data, error, isLoading, mutate } = useSWR<ResumeData>(
    "/api/resume",
    fetcher,
    {
      fallbackData: initialData,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const updateSection = async <K extends keyof ResumeData>(
    key: K,
    value: ResumeData[K]
  ) => {
    if (!data) return;

    // Optimistic update
    const newData = { ...data, [key]: value };
    mutate(newData, false);

    try {
      const res = await fetch("/api/resume", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key, value }),
      });

      if (!res.ok) {
        // Rollback on error
        mutate(data, false);
        throw new Error("Failed to update");
      }

      // Revalidate
      mutate();
    } catch (err) {
      // Rollback on error
      mutate(data, false);
      throw err;
    }
  };

  return {
    data: data!,
    error,
    isLoading,
    updateSection,
    mutate,
  };
}
