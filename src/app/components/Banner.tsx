import Image from "next/image";
import logo from "@/assets/banner.png";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="mt-15  ">
      <div className=" md:flex items-center justify-center gap-20 container mx-auto bg-[#17191f] shadow-md border border-white/5  px-8 py-15 rounded-lg">
        <div className="space-y-5  ">
          <span className="font-bold text-xs text-[#C2F800] ">
            WORKOUT LIBRARY
          </span>
          <h1 className="xl:font-extrabold xl:text-6xl text-[#FFFFFF] xl:mt-5">
            TRAIN WITH INTENT. LOG <br /> EVERY SET.
          </h1>
          <p className="font-normal text-lg text-[#9CA3AF]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <Link href="/library">
            <button className="font-bold text-xs text-[#000000] bg-[#C2F800] rounded-sm px-6 py-3">
              BROWSE WORKOUTS
            </button>
          </Link>
        </div>

        <div className="hidden md:inline">
          <Image src={logo} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
