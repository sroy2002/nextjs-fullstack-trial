import Image from "next/image";
import home from "@/public/home.png";
import Button from "./Components/Button";
export default function Home() {
  return (
    <div className="p-8 flex my-[1.35rem] items-center justify-around text-black">
      <div className="px-8 w-[50%]">
        <h1 className="text-6xl font-bold mb-8">Welcome!</h1>
        <p className="my-4 text-xl">This is home page</p>
        <p className="text-slate-500 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus,
          rerum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, expedita?
        </p>
        <Button text={"Our Works"} url={"/works"}/>
      </div>
      <div className="w-[40%] animate-small-bounce flex justify-center">
        <Image src={home} alt="home-avatar"/>
      </div>
    </div>
  );
}
