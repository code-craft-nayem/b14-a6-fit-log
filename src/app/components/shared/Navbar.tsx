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
      <li>
        <Link href="/my-plan">
          <span className="md:hidden"> My Plan</span>
        </Link>
      </li>
    </>
  );

  return (
    <nav>
      <div className="bg-[#0C0D10]">
        <div className="flex  items-center gap-4   py-4 justify-between px-4 md:flex-row md:py-6 ">
          <div className="flex items-center gap-5">
            <Image src={logo} alt="" width={30} height={30} />
            <h1 className="text-lg font-extrabold text-[#FFFFFF]">FITLOG</h1>
          </div>

          <div>
            <ul className="flex items-center gap-4">{links}</ul>
          </div>

          <div className="flex items-center gap-5">
            <Link
              href="/my-plan?tab=plan"
              className="flex items-center gap-4 text-gray-300"
            >
              <span>Plan</span>

              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
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
              className="flex items-center gap-2 text-gray-300"
            >
              <span>Saved</span>

              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
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
