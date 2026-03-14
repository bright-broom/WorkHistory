"use client";

import { useAuthContext } from "@/components/auth/AuthProvider";
import { useEditMode } from "./EditModeProvider";

export function EditModeToggle() {
  const { isOwner, signOut } = useAuthContext();
  const { isEditMode, toggleEditMode } = useEditMode();

  if (!isOwner) return null;

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2 print:hidden">
      <button
        onClick={toggleEditMode}
        className={`
          px-4 py-2
          text-sm font-medium
          shadow-lg
          transition-colors
          ${
            isEditMode
              ? "bg-[var(--color-text)] text-white"
              : "bg-white text-[var(--color-text)] border border-[var(--color-border)]"
          }
        `}
      >
        {isEditMode ? "編集モード ON" : "編集モード OFF"}
      </button>

      <button
        onClick={() => signOut()}
        className="
          px-4 py-2
          text-sm
          bg-white
          text-[var(--color-text-muted)]
          border border-[var(--color-border)]
          hover:text-[var(--color-text)]
          shadow-lg
          transition-colors
        "
      >
        ログアウト
      </button>
    </div>
  );
}
