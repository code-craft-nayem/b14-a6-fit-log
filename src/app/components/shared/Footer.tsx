import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <section className="">
      <div className="bg-[#090A0D]">
        <div className="h-px w-full bg-[#1f2227]"></div>
        <div className=" min-h-25  flex flex-col items-center justify-between  px-4 py-5 text-center sm:flex-row sm:justify-between sm:gap-0 sm:px-6 sm:py-0  sm:text-left h-full  ">
          <div className="flex  gap-4">
            <Image src={logo} alt="logo" width={18} height={18} />
            <h2 className="font-bold text-sm text-[#FFFFFF]">FITLOG</h2>
          </div>
          <p className="font-normal text-xs text-[#6B7280]">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
