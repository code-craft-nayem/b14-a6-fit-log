"use client";
import { LibraryContext } from "@/context/LibraryContext";
import { ILibrary } from "@/types/Type";
import { useContext } from "react";
import { toast } from "react-toastify";

const SavedButton = ({ library }: { library: ILibrary }) => {
  const { Save, setSave } = useContext(LibraryContext);

  const handleSaved = () => {
    const alreadyAdded = Save.some((item) => item.id === library.id);
    if (alreadyAdded) {
      toast.info(`"${library.name}" is already saved `);
      return;
    }
    setSave([...Save, library]);
    toast.success(`"${library.name}" saved for later`);
  };
  return (
    <button
      className="font-medium text-sm btn btn-outline text-[#E5E7EB] rounded-xl px-6 py-3"
      onClick={() => handleSaved()}
    >
      Save for later
    </button>
  );
};

export default SavedButton;
