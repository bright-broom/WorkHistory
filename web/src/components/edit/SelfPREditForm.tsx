"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import type { SelfPR } from "@/types/resume";

interface SelfPREditFormProps {
  selfPR: SelfPR;
  isOpen: boolean;
  onClose: () => void;
  onSave: (selfPR: SelfPR) => Promise<void>;
  onDelete?: () => Promise<void>;
}

export function SelfPREditForm({
  selfPR,
  isOpen,
  onClose,
  onSave,
  onDelete,
}: SelfPREditFormProps) {
  const [formData, setFormData] = useState<SelfPR>(selfPR);
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
    if (!confirm("この自己PRを削除しますか？")) return;

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

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="自己PRを編集">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[var(--color-text)] mb-1">
            タイトル
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
            className="w-full px-3 py-2 border border-[var(--color-border)] focus:border-[var(--color-border-dark)] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--color-text)] mb-1">
            内容
          </label>
          <textarea
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            rows={8}
            required
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
