"use client"

import React,{useContext} from 'react'
import { ThemeContext } from '../../context/ThemeContext';

const ThemeWrapper = ({children}) => {
    const { toggle,mode } = useContext(ThemeContext);
  return (
    <div className={`${mode==="light" ? "text-blue-800 bg-blue-300" : "text-blue-200 bg-blue-900"} transition-all ease-in-out duration-1000`}>
      {children}
    </div>
  )
}

export default ThemeWrapper
