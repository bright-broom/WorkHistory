"use client";

import { useEditMode } from "./EditModeProvider";

interface EditButtonProps {
  onClick: () => void;
  className?: string;
}

export function EditButton({ onClick, className = "" }: EditButtonProps) {
  const { isEditMode } = useEditMode();

  if (!isEditMode) return null;

  return (
    <button
      onClick={onClick}
      className={`
        px-2 py-1
        text-xs
        bg-[var(--color-text)]
        text-white
        hover:opacity-80
        transition-opacity
        ${className}
      `}
      aria-label="編集"
    >
      編集
    </button>
  );
}
