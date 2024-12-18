"use client"
import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext';

const DarkModeToggle = () => {
  const {toggle,mode} = useContext(ThemeContext);
  
  return (
    <div className='w-[3rem] flex justify-between items-center mr-4 bg-[#326ec8] border border-[#326ec8] px-1 rounded-2xl relative cursor-pointer drop-shadow-md' onClick={toggle}>
      <div>🌙</div>
      <div>☀️</div>
      <div className={`${(mode === "light" ? "right-[1.5rem]" : "left-[1.6rem]")} absolute w-[1.2rem] h-[1.2rem] rounded-full bg-[#D4EBF8]`}></div>
    </div>
  )
}

export default DarkModeToggle
