"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import type { Experience } from "@/types/resume";

interface ExperienceEditFormProps {
  experience: Experience;
  isOpen: boolean;
  onClose: () => void;
  onSave: (experience: Experience) => Promise<void>;
  onDelete?: () => Promise<void>;
}

export function ExperienceEditForm({
  experience,
  isOpen,
  onClose,
  onSave,
  onDelete,
}: ExperienceEditFormProps) {
  const [formData, setFormData] = useState<Experience>(experience);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setError(null);

    try {
      await onSave(formData);
      onClose();
    } catch {
      setError("保存に失敗しました");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!onDelete) return;
    if (!confirm("この職歴を削除しますか？")) return;

    setIsSaving(true);
    try {
      await onDelete();
      onClose();
    } catch {
      setError("削除に失敗しました");
    } finally {
      setIsSaving(false);
    }
  };

  const updateField = <K extends keyof Experience>(
    key: K,
    value: Experience[K]
  ) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="職務経歴を編集">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[var(--color-text)] mb-1">
            会社名
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => updateField("company", e.target.value)}
            required
            className="w-full px-3 py-2 border border-[var(--color-border)] focus:border-[var(--color-border-dark)] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--color-text)] mb-1">
            期間
          </label>
          <input
            type="text"
            value={formData.period}
            onChange={(e) => updateField("period", e.target.value)}
            placeholder="2024年4月 〜 現在"
            required
            className="w-full px-3 py-2 border border-[var(--color-border)] focus:border-[var(--color-border-dark)] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--color-text)] mb-1">
            役職
          </label>
          <input
            type="text"
            value={formData.role}
            onChange={(e) => updateField("role", e.target.value)}
            required
            className="w-full px-3 py-2 border border-[var(--color-border)] focus:border-[var(--color-border-dark)] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--color-text)] mb-1">
            業務内容
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => updateField("description", e.target.value)}
            rows={6}
            required
            className="w-full px-3 py-2 border border-[var(--color-border)] focus:border-[var(--color-border-dark)] focus:outline-none resize-y"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--color-text)] mb-1">
            実績・成果
          </label>
          <textarea
            value={formData.achievements}
            onChange={(e) => updateField("achievements", e.target.value)}
            rows={4}
            required
            className="w-full px-3 py-2 border border-[var(--color-border)] focus:border-[var(--color-border-dark)] focus:outline-none resize-y"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--color-text)] mb-1">
            退職理由（任意）
          </label>
          <textarea
            value={formData.reason || ""}
            onChange={(e) =>
              updateField("reason", e.target.value || undefined)
            }
            rows={3}
            className="w-full px-3 py-2 border border-[var(--color-border)] focus:border-[var(--color-border-dark)] focus:outline-none resize-y"
          />
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <div className="flex gap-2 justify-between">
          {onDelete && (
            <button
              type="button"
              onClick={handleDelete}
              disabled={isSaving}
              className="px-4 py-2 text-red-600 border border-red-600 hover:bg-red-50 disabled:opacity-50"
            >
              削除
            </button>
          )}
          <div className="flex gap-2 ml-auto">
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
        </div>
      </form>
    </Modal>
  );
}
