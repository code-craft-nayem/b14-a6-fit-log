"use client";
import { LibraryContext } from "@/context/LibraryContext";
import { ILibrary } from "@/types/Type";
import { useContext } from "react";
import { toast } from "react-toastify";

const PlanButton = ({ library }: { library: ILibrary }) => {
  const { Plan, setPlan } = useContext(LibraryContext);

  const handlePlan = () => {
    const alreadyAdded = Plan.some((item) => item.id === library.id);
    if (alreadyAdded) {
      toast.info(`"${library.name}" is already in today's plan`);
      return;
    }
    if (Plan.length >= 5) {
      toast.warning("Today's plan can  contain maximum 5 workouts");
      return;
    }

    setPlan([...Plan, library]);
    toast.success(`"${library.name}" added to today's plan`);
  };
  return (
    <button
      className="font-semibold text-sm text-[#0F1115] bg-[#C2F800] rounded-sm px-6 py-3"
      onClick={() => handlePlan()}
    >
      Add to today's plan
    </button>
  );
};

export default PlanButton;
