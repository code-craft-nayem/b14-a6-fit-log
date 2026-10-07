"use client";
import { LibraryContext } from "@/context/LibraryContext";
import { ILibrary } from "@/types/Type";
import { useContext } from "react";
import { LuBookmark } from "react-icons/lu";
import { Slide, toast } from "react-toastify";

const SavedButton = ({ library }: { library: ILibrary }) => {
  const { Save, setSave } = useContext(LibraryContext);

  const handleSaved = () => {
    const alreadyAdded = Save.some((item) => item.id === library.id);
    if (alreadyAdded) {
      toast.info(`"${library.name}" is already saved `, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });

      return;
    }
    setSave([...Save, library]);
    toast.success(`"${library.name}" saved for later`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Slide,
    });
  };
  return (
    <button
      className="font-medium text-sm btn btn-outline border-[#1f2227] text-[#E5E7EB] rounded-xl px-6 py-6"
      onClick={() => handleSaved()}
    >
      <span className="flex items-center justify-center gap-1"><LuBookmark /> Save for later</span>
    </button>
  );
};

export default SavedButton;
