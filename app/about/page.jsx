import React from 'react'
import Image from 'next/image'
import aboutImage from "@/public/about-pic.jpg"; 
import Button from '../Components/Button';


const About = () => {
  return (
    <div className='p-6 text-[#1F509A]'>
      <div className='h-[15rem] w-full relative '>
        <Image src={aboutImage} alt='about-pic' fill={true} className='object-cover px-[4rem] '/>
      </div>
      <div className='flex px-[4rem] my-8 items-start justify-evenly'>
        <div className='mx-4'>
          <h1 className='text-4xl font-bold mb-3'>Who Are We ?</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi tenetur at neque mollitia quidem commodi illum recusandae laudantium eveniet veritatis. 
            <br />
            <br />
            Voluptas dolorem commodi optio numquam cupiditate magnam est, mollitia sequi ad, a, temporibus ea et vitae laboriosam voluptatibus quaerat alias debitis. Porro beatae quae animi obcaecati magnam, dolorem distinctio corporis.</p>
        </div>
        <div className='mx-4'>
          <h1 className='text-4xl font-bold mb-3'>What We Do ?</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi tenetur at neque mollitia quidem commodi illum recusandae laudantium eveniet veritatis. 
            <br />
            <br />
            Voluptas dolorem commodi optio numquam cupiditate magnam est, mollitia sequi ad, a, temporibus ea et vitae laboriosam voluptatibus quaerat alias debitis.</p>
            <Button text={"Contact"} url={"/contacts"}/>
        </div>
      </div>
    </div>
  )
}

export default About
