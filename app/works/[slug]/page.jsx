import React from "react";
import Image from "next/image";
import portrait1 from "@/public/portrait1.jpg"
import portrait2 from "@/public/portrait2.jpg"
import portrait3 from "@/public/portrait3.jpg"
import Button from "@/app/Components/Button";


const Category = async ({ params }) => {
  const slug = (await params).slug
  const category = slug.charAt(0).toUpperCase() + slug.slice(1);
  return (
    <div>
      <div className="mx-6">
        <p className="text-2xl font-semibold px-4">{category}</p>
      </div>
      <div className="flex flex-row-reverse justify-center items-center gap-[8rem] my-8">
        <div>
            <Image src={portrait1} alt="portrait 1"  className="object-cover w-[20rem] h-[20rem]"/>
        </div>
        <div className="w-[40%] text-black">
          <p className="text-xl font-bold mb-4">Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod perferendis mollitia soluta, amet maxime non. Dolorem sapiente nisi assumenda ex? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto itaque vero velit beatae delectus doloremque praesentium non quam eaque commodi!</p>
          <Button text={"See more"} url={"#"}/>
        </div>
      </div>
      <div className="flex  justify-center items-center gap-[8rem] my-8">
        <div>
            <Image src={portrait2} alt="portrait 2"  className="object-cover w-[20rem] h-[20rem]"/>
        </div>
        <div className="w-[40%] text-black">
          <p className="text-xl font-bold mb-4">Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod perferendis mollitia soluta, amet maxime non. Dolorem sapiente nisi assumenda ex? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto itaque vero velit beatae delectus doloremque praesentium non quam eaque commodi!</p>
          <Button text={"See more"} url={"#"}/>
        </div>
      </div>
      <div className="flex flex-row-reverse justify-center items-center gap-[8rem] my-8">
        <div>
            <Image src={portrait3} alt="portrait 3"  className="object-cover w-[20rem] h-[20rem]"/>
        </div>
        <div className="w-[40%] text-black">
          <p className="text-xl font-bold mb-4">Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod perferendis mollitia soluta, amet maxime non. Dolorem sapiente nisi assumenda ex? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto itaque vero velit beatae delectus doloremque praesentium non quam eaque commodi!</p>
          <Button text={"See more"} url={"#"}/>
        </div>
      </div>
    </div>
  );
};

export default Category;
