"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { useAuthContext } from "@/components/auth/AuthProvider";

interface EditModeContextType {
  isEditMode: boolean;
  toggleEditMode: () => void;
  editingSection: string | null;
  setEditingSection: (section: string | null) => void;
}

const EditModeContext = createContext<EditModeContextType | null>(null);

export function EditModeProvider({ children }: { children: ReactNode }) {
  const { isOwner } = useAuthContext();
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingSection, setEditingSection] = useState<string | null>(null);

  const toggleEditMode = () => {
    setIsEditMode((prev) => !prev);
    if (isEditMode) {
      setEditingSection(null);
    }
  };

  // オーナーでない場合は編集モードを無効化
  const effectiveEditMode = isOwner && isEditMode;

  return (
    <EditModeContext.Provider
      value={{
        isEditMode: effectiveEditMode,
        toggleEditMode,
        editingSection,
        setEditingSection,
      }}
    >
      {children}
    </EditModeContext.Provider>
  );
}

export function useEditMode() {
  const context = useContext(EditModeContext);
  if (!context) {
    throw new Error("useEditMode must be used within EditModeProvider");
  }
  return context;
}
