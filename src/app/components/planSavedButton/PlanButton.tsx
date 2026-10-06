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
      className="xl:font-semibold font-semibold xl:text-sm text-sm text-[#0F1115] bg-[#C2F800] rounded-sm xl:px-6 px-6 xl:py-3 py-3  border-none  md:text-xs md:px-2 md:py-2 md:text-center"
      onClick={() => handlePlan()}
    >
      Add to today&apos;s plan
    </button>
  );
};

export default PlanButton;
