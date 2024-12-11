import Image from "next/image";
import home from "@/public/home.png";
export default function Home() {
  return (
    <div className="p-8 flex my-[1.35rem] items-center justify-around text-black">
      <div>
        <h1 className="text-6xl font-bold mb-4">Welcome!</h1>
        <p className="my-4 text-xl">This is home page</p>
        <p className="text-slate-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus,
          rerum!
        </p>
      </div>
      <div className="w-[40%] animate-small-bounce">
        <Image src={home} alt="home-avatar"/>
      </div>
    </div>
  );
}
