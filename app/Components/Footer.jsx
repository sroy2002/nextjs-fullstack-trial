"use client"
import React,{useContext} from "react";
import {
  FaSquareXTwitter,
  FaSquareFacebook, // Changed from FaFacebookSquare
  FaSquareInstagram, // Changed from FaInstagramSquare
  FaSquareYoutube,
} from "react-icons/fa6";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { toggle,mode } = useContext(ThemeContext);
  return (
    <div className={ ` h-full text-sm ${mode === "light" ? "text-[#1F509A]" : "text-white"}`}>
      <div className="flex items-center justify-between mx-6">
        <p className="text-center my-6">
          @2024 Suranjana Roy. All rights reserved.
        </p>
        <div className="flex items-center justify-evenly gap-2">
          <div>
            <FaSquareFacebook size={25}/>
          </div>
          <div>
            <FaSquareInstagram size={25}/>
          </div>
          <div>
            <FaSquareXTwitter size={25}/>
          </div>
          <div>
            <FaSquareYoutube size={25}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
