"use client"
import Link from "next/link";
import React,{useContext} from "react";
import { Poppins } from "next/font/google";
import Logout from "./Logout";
import DarkModeToggle from "./DarkModeToggle";
import { ThemeContext } from "../context/ThemeContext";


const poppins = Poppins({
  weight: "800",
  subsets: ["latin"],
});
const poppins1 = Poppins({
  weight: "600",
  subsets: ["latin"],
});

const Navbar = () => {

  const { toggle,mode } = useContext(ThemeContext);
  const navItems = [
    {
      id: 1,
      title: "Dashboard",
      url: "/dashboard",
    },
    {
      id: 2,
      title: "About",
      url: "/about",
    },
    {
      id: 3,
      title: "Works",
      url: "/works",
    },
    {
      id: 4,
      title: "Blogs",
      url: "/blog",
    },
    {
      id: 5,
      title: "Get In Touch",
      url: "/contacts",
    },
  ];

  console.log(mode);

  return (
    <div className={`flex p-6 justify-between items-center ${mode === "light" ? "text-black" : "text-white"}`}>
      <Link href={"/"} className={`${poppins.className} text-4xl`}>
        sRoy.
      </Link>
      <div className="flex gap-2 items-center">
        <div className="flex items-center">
          <DarkModeToggle/>
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className={`${poppins1.className} mx-4 hover:text-[#1F509A] hover:underline`}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <Logout />
      </div>
    </div>
  );
};

export default Navbar;
