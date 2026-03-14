"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import type { Language } from "@/types/resume";

interface LanguageEditFormProps {
  languages: Language[];
  isOpen: boolean;
  onClose: () => void;
  onSave: (languages: Language[]) => Promise<void>;
}

export function LanguageEditForm({
  languages,
  isOpen,
  onClose,
  onSave,
}: LanguageEditFormProps) {
  const [formData, setFormData] = useState<Language[]>(languages);
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

  const updateLang = (index: number, field: keyof Language, value: string) => {
    setFormData((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
    );
  };

  const addLang = () => {
    setFormData((prev) => [...prev, { language: "", level: "" }]);
  };

  const removeLang = (index: number) => {
    setFormData((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="語学を編集">
      <form onSubmit={handleSubmit} className="space-y-4">
        {formData.map((lang, index) => (
          <div key={index} className="flex gap-2 items-start">
            <input
              type="text"
              value={lang.language}
              onChange={(e) => updateLang(index, "language", e.target.value)}
              placeholder="言語"
              required
              className="w-24 px-3 py-2 border border-[var(--color-border)] focus:border-[var(--color-border-dark)] focus:outline-none"
            />
            <input
              type="text"
              value={lang.level}
              onChange={(e) => updateLang(index, "level", e.target.value)}
              placeholder="レベル"
              required
              className="flex-1 px-3 py-2 border border-[var(--color-border)] focus:border-[var(--color-border-dark)] focus:outline-none"
            />
            <button
              type="button"
              onClick={() => removeLang(index)}
              className="px-3 py-2 text-red-600 hover:bg-red-50"
            >
              &times;
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addLang}
          className="w-full py-2 border border-dashed border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-text)] hover:text-[var(--color-text)]"
        >
          + 言語を追加
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
