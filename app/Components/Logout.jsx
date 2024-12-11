"use client"
import React from 'react'
import { Poppins } from "next/font/google";
const poppins1 = Poppins({
    weight: "600",
    subsets: ["latin"],
  });
  
const Logout = () => {
  return (
    <div className={`${poppins1.className} bg-[#dd6225] rounded-lg text-white`}>
      <button className='p-2 '>Log out</button>
    </div>
  )
}

export default Logout
