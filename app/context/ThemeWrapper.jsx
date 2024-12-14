"use client"

import React,{useContext} from 'react'
import { ThemeContext } from './ThemeContext';

const ThemeWrapper = ({children}) => {
    const { toggle,mode } = useContext(ThemeContext);
  return (
    <div className={`${mode==="light" ? "text-blue-800" : "text-blue-200"}`}>
      {children}
    </div>
  )
}

export default ThemeWrapper
