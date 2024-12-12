import React from 'react'
import Link from 'next/link'
const Button = ({text,url}) => {
  return (
    <div className='my-4'>
      <Link href={url}>
        <button className=' px-6 py-3 font-bold text-white rounded-xl bg-[#dd6225]'>{text}</button>
      </Link>
    </div>
  )
}

export default Button
