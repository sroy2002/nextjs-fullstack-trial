import React from "react";
import contact from "@/public/contact.png";
import Image from "next/image";
import Button from "../Components/Button";
import ThemeWrapper from "../context/ThemeWrapper";
const Contacts = () => {
  return (
    <ThemeWrapper>
    <div className="p-8 ">
      <div className="flex justify-center mb-12">
        <h1 className="text-5xl font-bold ">Let's Keep In Touch</h1>
      </div>
      <div className="flex gap-6 justify-evenly">
        <div className="flex justify-center items-start w-[50%]">
          <Image src={contact} className="animate-small-bounce" alt="contact image"></Image>
        </div>
        <div className="w-[50%] px-8 py-4">
          <form className="flex flex-col gap-4 w-[70%]">
            <input type="text"  className="rounded-lg px-4 py-3 focus:outline-none" placeholder="Name" />
            <input type="email"  className="rounded-lg px-4 py-3 focus:outline-none " placeholder="Email ID" />
            <textarea rows={8} className="rounded-lg px-4 py-2 focus:outline-none" placeholder="Enter your message"></textarea>
          </form>
          <Button text={"Send"} url={'#'}/>
        </div>
      </div>
    </div>
    </ThemeWrapper>
  );
};

export default Contacts;
