import React from "react";
import Image from "next/image";
import Link from "next/link";
import application from "@/public/application.jpg";
import illustration from "@/public/illustration.png";
import website from "@/public/website.jpg";
import { Poppins } from "next/font/google";
import ThemeWrapper from "../context/ThemeWrapper";
import { ThemeProvider } from "../context/ThemeContext";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
});

const Works = () => {
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <div className="p-8  mb-8">
          <p className="mx-8 text-xl font-semibold ">Choose a gallery!</p>
          <div className=" flex gap-6 mx-8 justify-evenly my-6 ">
            <div
              className={`${poppins.className} hover:cursor-pointer transform transition-all ease-in-out hover:scale-105 hover:drop-shadow-md`}
            >
              <Link href={"/works/illustrations"}>
                <Image
                  src={illustration}
                  alt="illustration"
                  className="w-[20rem] h-[20rem] object-cover rounded-2xl border-8 border-white hover:border-[#789DBC]"
                />
              </Link>
              <p className="text-center my-2 text-xl">ILLUSTRATIONS</p>
            </div>
            <div
              className={`${poppins.className} hover:cursor-pointer transform transition-all ease-in-out hover:scale-105 hover:drop-shadow-md`}
            >
              <Link href={"/works/websites"}>
                <Image
                  src={website}
                  alt="website"
                  className="w-[20rem] h-[20rem] object-cover rounded-2xl border-8 border-white hover:border-[#789DBC]"
                />
              </Link>
              <p className="text-center my-2 text-xl">WEBSITES</p>
            </div>
            <div
              className={`${poppins.className} hover:cursor-pointer transform transition-all ease-in-out hover:scale-105 hover:drop-shadow-md`}
            >
              <Link href={"/works/applications"}>
                <Image
                  src={application}
                  alt="application"
                  className="w-[20rem] h-[20rem] object-cover rounded-2xl border-8 border-white hover:border-[#789DBC]"
                />
              </Link>
              <p className="text-center my-2 text-xl">APPLICATIONS</p>
            </div>
          </div>
        </div>
      </ThemeWrapper>
    </ThemeProvider>
  );
};

export default Works;
