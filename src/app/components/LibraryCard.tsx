import { ILibrary } from "@/types/Type";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineStarOutline } from "react-icons/md";
import { PiFireSimpleDuotone } from "react-icons/pi";
import { WiTime3 } from "react-icons/wi";

interface LibraryCardProps {
  LibraryData: ILibrary;
}

const LibraryCard = ({ LibraryData }: LibraryCardProps) => {
  const {
    id,
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = LibraryData;

  return (
    <Link href={`/library/${id}`}>
      <div className="overflow-hidden rounded-xl border border-gray-800 bg-[#17191f] shadow-md transition hover:-translate-y-1 hover:shadow-xl">
        <div className="relative w-full h-96 overflow-hidden">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>

        <div className="p-3">
          <div className="mb-2 flex flex-wrap gap-1.5">
            {muscleGroups.map((muscleGroup) => (
              <span
                key={muscleGroup}
                className="bg-[#C2F800] text-[#000000] text-[11px] font-bold px-5 py-1 rounded-full"
              >
                {muscleGroup}
              </span>
            ))}
          </div>
          <h2 className="mb-1 text-lg font-bold uppercase  text-[#FFFFFF]">
            {name}
          </h2>

          <p className="text-[#9CA3AF] font-normal text-xs"> {equipment} </p>

          <div className="h-px w-full bg-[#1f2227] mt-5 mb-5"></div>

          <div className="flex items-center justify-top gap-3 text-[9px] text-gray-400">
            <div className="flex items-center gap-1">
              <span>
                <WiTime3 size={14} />
              </span>
              <span className="font-normal text-xs text-[#9CA3AF]">
                {duration} min
              </span>
            </div>

            <div className="flex items-center gap-1">
              <span>
                <PiFireSimpleDuotone size={14} />
              </span>
              <span className="font-normal text-xs text-[#9CA3AF]">
                {caloriesBurned} kcal
              </span>
            </div>

            <div className="flex items-center gap-1">
              <span>
                <MdOutlineStarOutline size={14} />
              </span>
              <span className="font-normal text-xs text-[#9CA3AF]">
                {rating}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LibraryCard;
