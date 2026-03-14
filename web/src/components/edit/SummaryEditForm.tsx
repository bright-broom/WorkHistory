"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/Modal";

interface SummaryEditFormProps {
  summary: string;
  isOpen: boolean;
  onClose: () => void;
  onSave: (summary: string) => Promise<void>;
}

export function SummaryEditForm({
  summary,
  isOpen,
  onClose,
  onSave,
}: SummaryEditFormProps) {
  const [value, setValue] = useState(summary);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setError(null);

    try {
      await onSave(value);
      onClose();
    } catch {
      setError("保存に失敗しました");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="職務要約を編集">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[var(--color-text)] mb-1">
            職務要約
          </label>
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows={12}
            className="w-full px-3 py-2 border border-[var(--color-border)] focus:border-[var(--color-border-dark)] focus:outline-none resize-y"
          />
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <div className="flex gap-2 justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-surface)]"
          >
            キャンセル
          </button>
          <button
            type="submit"
            disabled={isSaving}
            className="px-4 py-2 bg-[var(--color-text)] text-white hover:opacity-90 disabled:opacity-50"
          >
            {isSaving ? "保存中..." : "保存"}
          </button>
        </div>
      </form>
    </Modal>
  );
}
