"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { LibraryContext } from "@/context/LibraryContext";
import { ILibrary } from "@/types/Type";
import { toast } from "react-toastify";
import { MdClose } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { useSearchParams } from "next/navigation";

const MyPlanPage = () => {
  const { Plan, setPlan, Save, setSave } = useContext(LibraryContext);
  const searchParams = useSearchParams();

  const tab = searchParams.get("tab");

  const [activeTab, setActiveTab] = useState<"plan" | "saved">(
    tab === "saved" ? "saved" : "plan",
  );

  const [doneIds, setDoneIds] = useState<(string | number)[]>([]);
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );

  const sortCards = (cards: ILibrary[]) => {
    const sortedCards = [...cards];

    if (sortBy === "duration") {
      sortedCards.sort((a, b) => b.duration - a.duration);
    }

    if (sortBy === "calories") {
      sortedCards.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    }
    if (sortBy === "rating") {
      sortedCards.sort((a, b) => b.rating - a.rating);
    }

    return sortedCards;
  };

  const sortedPlan = sortCards(Plan);
  const sortedSave = sortCards(Save);

  const currentCards = activeTab === "plan" ? sortedPlan : sortedSave;

  const totalExercises = Plan.length;

  const totalDuration = Plan.reduce((total, item) => total + item.duration, 0);

  const totalCalories = Plan.reduce(
    (total, item) => total + item.caloriesBurned,
    0,
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">MY PLAN</h1>

        <p className="mt-2 text-sm text-gray-500">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="grid grid-cols-1 overflow-hidden rounded-xl border  border-[#272b32] bg-[#15171D] md:grid-cols-3">
        <div className="relative border-b border-[#272b32] p-6 md:border-b-0">
          <p className="text-sm text-gray-500">Exercises</p>

          <h2 className="mt-2 text-3xl font-bold">{totalExercises}</h2>
          <div className="absolute right-0 top-1/2 hidden h-14 w-px -translate-y-1/2 bg-[#272b32] md:block"></div>
        </div>

        <div className="border-b border-[#272b32] md:border-b-0 p-6">
          <p className="text-sm text-gray-500">Minutes</p>

          <h2 className="mt-2 text-3xl font-bold text-[#C2F800]">
            {totalDuration}
          </h2>
          <div className="absolute right-0 top-1/2 hidden h-14 w-px -translate-y-1/2 bg-[#272b32] md:block"></div>
        </div>

        <div className="p-6">
          <p className="text-sm text-gray-500">Calories</p>

          <h2 className="mt-2 text-3xl font-bold">{totalCalories}</h2>
        </div>
      </div>

      <div className="mt-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex w-fit rounded-lg border border-[#272b32] bg-[#111318] p-1">
          <div className="relative flex gap-1">
            <div
              className={`absolute inset-y-0 left-0 w-1/2 rounded-md border border-[#272b32] bg-[#1B1E25] transition-transform duration-300 ease-in-out ${
                activeTab === "saved" ? "translate-x-full" : "translate-x-0"
              }`}
            />

            <button
              onClick={() => setActiveTab("plan")}
              className={`relative z-10 w-auto rounded-md px-3 py-2 text-sm font-medium outline-none transition-colors duration-300 hover:border-transparent focus:border-transparent focus:outline-none ${
                activeTab === "plan"
                  ? "border border-[#272b32] bg-[#1B1E25] text-white"
                  : "text-[#9CA3AF]"
              }`}
            >
              Today&apos;s Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`relative z-10 w-[80px] rounded-md px-2 py-2 text-sm font-medium outline-none transition-colors duration-300 hover:border-transparent focus:border-transparent focus:outline-none ${
                activeTab === "saved" ? "text-white" : "text-[#8d929b]"
              }`}
            >
              Saved
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Sort By</span>

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as "duration" | "calories" | "rating")
            }
            className="rounded-lg border border-[#272b32] bg-[#171a20] px-3 py-2 text-sm text-white outline-noneJ"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        {currentCards.length > 0 ? (
          <div className="space-y-4">
            {currentCards.map((library: ILibrary) => (
              <div
                key={library.id}
                className="flex flex-col gap-4 rounded-xl border border-[#272b32] bg-[#171a20] p-4 shadow-sm sm:flex-row sm:items-center"
              >
                <Image
                  src={library.image}
                  alt={library.name}
                  width={128}
                  height={96}
                  className="h-24 w-full rounded-lg object-cover sm:w-32"
                />

                <div className="flex-1">
                  <h2 className="text-lg font-bold text-white">
                    {library.name}
                  </h2>

                  <p className="mt-1 text-sm text-[#8d929b]">
                    Equipment: {library.equipment}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-4 text-sm text-[#9CA3AF]">
                    <span>{library.duration} min</span>

                    <span>{library.caloriesBurned} kcal</span>

                    <span className="flex items-center gap-1">
                      <IoIosStar />
                      {library.rating}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-center ">
                  <Link
                    href={`/library/${library.id}`}
                    className="btn btn-outline btn-sm mr-4  text-[#FFFFFF] border-[#1f2227] rounded-full px-5 py-3"
                  >
                    View Details
                  </Link>

                  {!doneIds.includes(library.id) && (
                    <button
                      className="rounded-full text-[#000000] bg-[#CCFF00] px-3 py-2 text-xs font-semibold btn-ghost"
                      onClick={() => {
                        setDoneIds([...doneIds, library.id]);
                        toast.success(`"${library.name}" marked as done`);
                      }}
                    >
                      ✓ Mark as Done
                    </button>
                  )}

                  <button
                    className="ml-4"
                    onClick={() => {
                      if (activeTab === "plan") {
                        setPlan(Plan.filter((item) => item.id !== library.id));
                      } else {
                        setSave(Save.filter((item) => item.id !== library.id));
                      }
                      toast.success(`"${library.name}" removed`);
                    }}
                  >
                    <MdClose size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[350px] flex-col items-center justify-center rounded-xl border border-dashed border-[#1f2227] text-center">
            <h1 className="text-2xl font-bold">NOTHING HERE YET</h1>

            <p className="mt-2 max-w-md text-sm text-gray-500">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/"
              className="mt-6 rounded-full bg-[#C2F10D] px-6 py-3 text-sm font-medium text-black "
            >
              <button> Go to workouts</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPlanPage;
