"use client";
import { ILibrary } from "@/types/Type";
import React, { createContext, ReactNode, useState } from "react";

interface ILibraryContext {
  Plan: ILibrary[];
  setPlan: React.Dispatch<React.SetStateAction<ILibrary[]>>;
  Save: ILibrary[];
  setSave: React.Dispatch<React.SetStateAction<ILibrary[]>>;
}

export const LibraryContext = createContext<ILibraryContext>({
  Plan: [],
  setPlan: () => {},
  Save: [],
  setSave: () => {},
});

const LibraryProvider = ({ children }: { children: ReactNode }) => {
  const [Plan, setPlan] = useState<ILibrary[]>([]);
  const [Save, setSave] = useState<ILibrary[]>([]);

  const sharedCard = {
    Plan,
    setPlan,
    Save,
    setSave,
  };

  return (
    <LibraryContext.Provider value={sharedCard}>
      {children}
    </LibraryContext.Provider>
  );
};

export default LibraryProvider;
