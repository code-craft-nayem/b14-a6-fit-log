import PlanButton from "@/app/components/planSavedButton/PlanButton";
import SavedButton from "@/app/components/planSavedButton/SavedButton";
import Image from "next/image";
import { notFound } from "next/navigation";

interface DetailPageProps {
  params: Promise<{ libraryId: string }>;
}

const detailPage = async ({ params }: DetailPageProps) => {
  const { libraryId } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${libraryId}`,
  );
  if (!res.ok) {
    notFound();
  }
  const library = await res.json();
  return (
    <main className=" bg-[#0d0f12] px-5 py-6 text-white">
      <div className="mx-auto max-w-[900px]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[395px_1fr] ">
          <div>
            <Image
              src={library.image}
              alt={library.name}
              width={395}
              height={1000}
              className="rounded-lg object-fill "
            />
          </div>

          <div>
            <h1 className="text-[25px] font-black uppercase leading-[1.05] tracking-[-0.5px]">
              {library.name}
            </h1>

            <p className="mt-[10px] max-w-[395px] text-[10px] leading-[15px] text-[#8d929b]">
              {library.description}
            </p>
            <div className="mt-[13px] flex flex-wrap gap-[7px]">
              {library.muscleGroups.map(
                (muscleGroup: string, index: number) => (
                  <span
                    key={index}
                    className="rounded-full bg-[#CCFF00] px-[10px] py-[4px] text-[8px] font-bold uppercase leading-none text-black"
                  >
                    {muscleGroup}
                  </span>
                ),
              )}
            </div>

            <div className="mt-[19px] overflow-hidden rounded-[10px] border border-[#272b32] bg-[#171a20]">
              <div className="flex h-[38px] items-center justify-between border-b border-[#272b32] px-4">
                <span className="text-[8px] uppercase tracking-wide text-[#8b9099]">
                  Equipment
                </span>

                <span className="text-[9px] text-gray-200">
                  {library.equipment}
                </span>
              </div>

              <div className="flex h-[38px] items-center justify-between border-b border-[#272b32] px-4">
                <span className="text-[8px] uppercase tracking-wide text-[#8b9099]">
                  Difficulty
                </span>

                <span className="text-[9px] text-gray-200">
                  {library.difficulty}
                </span>
              </div>
              <div className="flex h-[38px] items-center justify-between border-b border-[#272b32] px-4">
                <span className="text-[8px] uppercase tracking-wide text-[#8b9099]">
                  Sets
                </span>

                <span className="text-[9px] text-gray-200">{library.sets}</span>
              </div>

              <div className="flex h-[38px] items-center justify-between border-b border-[#272b32] px-4">
                <span className="text-[8px] uppercase tracking-wide text-[#8b9099]">
                  Reps
                </span>

                <span className="text-[9px] text-gray-200">{library.reps}</span>
              </div>

              <div className="flex h-[38px] items-center justify-between border-b border-[#272b32] px-4">
                <span className="text-[8px] uppercase tracking-wide text-[#8b9099]">
                  Duration
                </span>

                <span className="text-[9px] text-gray-200">
                  {library.duration} min
                </span>
              </div>
              <div className="flex h-[38px] items-center justify-between border-b border-[#272b32] px-4">
                <span className="text-[8px] uppercase tracking-wide text-[#8b9099]">
                  Calories
                </span>

                <span className="text-[9px] text-gray-200">
                  {library.caloriesBurned} kcal
                </span>
              </div>

              <div className="flex h-[38px] items-center justify-between px-4">
                <span className="text-[8px] uppercase tracking-wide text-[#8b9099]">
                  Rating
                </span>

                <span className="text-[9px] text-gray-200">
                  {library.rating}
                </span>
              </div>
            </div>

            <div className="mt-[21px]">
              <h2 className="text-[11px] font-extrabold uppercase tracking-wide">
                Instructions
              </h2>

              <ol className="mt-[10px] space-y-[6px]">
                {library.instructions.map(
                  (instruction: string, index: number) => (
                    <li
                      key={index}
                      className="flex gap-[10px] text-[9px] leading-[15px] text-[#a0a4ab]"
                    >
                      <span className="shrink-0 text-[#777c85]">
                        {index + 1}.
                      </span>

                      <span>{instruction}</span>
                    </li>
                  ),
                )}
              </ol>
            </div>
            <div className="mt-[24px] flex gap-[10px]">
              <PlanButton library={library} />
              <SavedButton library={library} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default detailPage;
