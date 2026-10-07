"use client";
import { ILibrary } from "@/types/Type";
import React, { createContext, ReactNode, useEffect, useState } from "react";

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
  //Plan
  const [Plan, setPlan] = useState<ILibrary[]>(() => {
    if (typeof window !== "undefined") {
      const Stored = localStorage.getItem("saved");
      return Stored ? JSON.parse(Stored) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("saved", JSON.stringify(Plan));
  }, [Plan]);

  //Saved
  const [Save, setSave] = useState<ILibrary[]>(() => {
    if (typeof window !== "undefined") {
      const Saved = localStorage.getItem("saved");
      return Saved ? JSON.parse(Saved) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("saved", JSON.stringify(Save));
  }, [Save]);

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
