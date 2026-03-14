"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import type { SkillItem } from "@/types/resume";

interface SkillsEditFormProps {
  skills: SkillItem[];
  isOpen: boolean;
  onClose: () => void;
  onSave: (skills: SkillItem[]) => Promise<void>;
}

export function SkillsEditForm({
  skills,
  isOpen,
  onClose,
  onSave,
}: SkillsEditFormProps) {
  const [formData, setFormData] = useState<SkillItem[]>(skills);
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

  const updateCategory = (index: number, field: keyof SkillItem, value: string | string[]) => {
    setFormData((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
    );
  };

  const addCategory = () => {
    setFormData((prev) => [...prev, { name: "", items: [] }]);
  };

  const removeCategory = (index: number) => {
    setFormData((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="スキルを編集">
      <form onSubmit={handleSubmit} className="space-y-6">
        {formData.map((category, index) => (
          <div key={index} className="border border-[var(--color-border)] p-4 space-y-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={category.name}
                onChange={(e) => updateCategory(index, "name", e.target.value)}
                placeholder="カテゴリ名"
                required
                className="flex-1 px-3 py-2 border border-[var(--color-border)] focus:border-[var(--color-border-dark)] focus:outline-none"
              />
              <button
                type="button"
                onClick={() => removeCategory(index)}
                className="px-3 py-2 text-red-600 border border-red-600 hover:bg-red-50"
              >
                削除
              </button>
            </div>

            <div>
              <label className="block text-sm text-[var(--color-text-muted)] mb-1">
                スキル（カンマ区切り）
              </label>
              <input
                type="text"
                value={category.items.join(", ")}
                onChange={(e) =>
                  updateCategory(
                    index,
                    "items",
                    e.target.value.split(",").map((s) => s.trim()).filter(Boolean)
                  )
                }
                placeholder="React, Next.js, TypeScript"
                className="w-full px-3 py-2 border border-[var(--color-border)] focus:border-[var(--color-border-dark)] focus:outline-none"
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addCategory}
          className="w-full py-2 border border-dashed border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-text)] hover:text-[var(--color-text)]"
        >
          + カテゴリを追加
        </button>

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
