"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { useContext } from "react";
import { useSearchParams } from "next/navigation";
import { LibraryContext } from "@/context/LibraryContext";

const Navbar = () => {
  const { Plan, Save } = useContext(LibraryContext);
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "plan";
  const links = (
    <>
      <li>
        <Link href="/">Workouts</Link>
      </li>
      <li className="hidden md:block">
        <Link href="/my-plan">My Plan</Link>
      </li>
    </>
  );

  return (
    <nav>
      <div className="bg-[#0C0D10]">
        <div className="flex  items-center gap-4   py-4 justify-between px-4 md:flex-row md:py-6 ">
          <div className="flex items-center ">
            <Image src={logo} alt="" width={20} height={20} />
            <h1 className=" font-medium md:text-lg md:font-extrabold pl-1 md:pl-0 text-[#FFFFFF]">
              FITLOG
            </h1>
          </div>

          <div>
            <ul className="flex items-center gap-4">{links}</ul>
          </div>

          <div className="flex items-center gap-2 md:gap-5">
            <Link
              href="/my-plan?tab=plan"
              className="flex items-center gap-1 md:gap-4 text-gray-300"
            >
              <span>Plan</span>

              <span
                className={`flex h-6 w-6 md:h-10 md:w-10 items-center justify-center rounded-full text-sm font-normal ${
                  activeTab === "plan"
                    ? "bg-[#C2F800] text-black"
                    : "border border-gray-600 bg-[#0C0D10] text-gray-300"
                }`}
              >
                {Plan.length}
              </span>
            </Link>
            <Link
              href="/my-plan?tab=saved"
              className="flex items-center gap-1 md:gap-4 text-gray-300"
            >
              <span>Saved</span>

              <span
                className={`flex h-6 w-6 md:h-10 md:w-10 items-center justify-center rounded-full text-sm font-normal ${
                  activeTab === "saved"
                    ? "bg-[#C2F800] text-black"
                    : "border border-gray-600 bg-[#0C0D10] text-gray-300"
                }`}
              >
                {Save.length}
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-[#1f2227]"></div>
    </nav>
  );
};

export default Navbar;
