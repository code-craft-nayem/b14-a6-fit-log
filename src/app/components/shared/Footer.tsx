import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <section className="">
      <div className="border-t-2 border-[#1f2227] flex  items-center justify-between  px-4 py-5 md:px-10 md:py-10 text-center    ">
        <div className="flex  md:gap-4 gap-1">
          <Image src={logo} alt="logo" />
          <h2 className=" font-medium text-xs md:text-lg md:font-extrabold pl-1 md:pl-0 text-[#FFFFFF]">
            FITLOG
          </h2>
        </div>
        <p className=" flex font-normal text-xs md:text-lg text-[#6B7280]">
          © 2026 FitLog — Workout Library.
          <span className="hidden md:block">Train hard, log honest.</span>
        </p>
      </div>
    </section>
  );
};

export default Footer;
