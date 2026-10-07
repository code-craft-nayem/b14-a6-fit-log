"use client";
import { LibraryContext } from "@/context/LibraryContext";
import { ILibrary } from "@/types/Type";
import { useContext } from "react";
import { PiCalendarPlusBold } from "react-icons/pi";
import { Slide, toast } from "react-toastify";

const PlanButton = ({ library }: { library: ILibrary }) => {
  const { Plan, setPlan } = useContext(LibraryContext);

  const handlePlan = () => {
    const alreadyAdded = Plan.some((item) => item.id === library.id);
    if (alreadyAdded) {
      toast.error(`"${library.name}" is already added in today's plan`, {
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
    if (Plan.length >= 5) {
      toast.warn("Today's plan can't contain more than 5 workouts", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
      return;
    }

    setPlan([...Plan, library]);
    toast.success(`"${library.name}" add today's plan Successfully`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Slide,
    });
  };

  return (
    <button
      className="xl:font-semibold font-semibold xl:text-sm text-xs text-[#0F1115] bg-[#C2F800] rounded-sm xl:px-6 px-4 xl:py-3 py-2   border-none  md:text-xs md:px-2 md:py-2 md:text-center "
      onClick={() => handlePlan()}
    >
      <span className="flex items-center gap-1  "><PiCalendarPlusBold /> Add to today&apos;s plan</span>
    </button>
  );
};

export default PlanButton;
