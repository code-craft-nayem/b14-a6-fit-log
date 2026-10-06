import { ILibrary } from "@/types/Type";
import LibraryCard from "@/app/components/LibraryCard";

const getLibrary = async () => {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    return res.json();
  } catch (error) {
    console.error("Error fetching books data:", error);
    return [];
  }
};

const Library = async () => {
  const Library = await getLibrary();
  return (
    <section className="mt-18 mb-10">
      <div className="mx-w-[1160px] w-full container mx-auto px-7 md:px-14 xl:px-0 space-y-3">
        <div className="grid items-center justify-start space-y-2 mb-8">
          <h1 className="font-bold text-3xl text-[#FFFFFF]">THE LIBRARY</h1>
          <p className="font-normal text-sm text-[#9CA3AF]">
            Twelve lifts covering every major muscle group.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {Library.map((LibraryData: ILibrary, ind: number) => (
            <LibraryCard key={ind} LibraryData={LibraryData}></LibraryCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Library;
