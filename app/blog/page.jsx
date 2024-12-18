import React from "react";
import Link from "next/link";
import Image from "next/image";
import blog1 from "@/public/blog1.jpg";
import blog2 from "@/public/blog2.jpg";
import blog3 from "@/public/blog3.jpg";
import blog4 from "@/public/blog4.jpg";
import blog5 from "@/public/blog5.jpg";
import blog6 from "@/public/blog6.jpg";
import ThemeWrapper from "../Components/ThemeWrapper";

const Blog = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();

  return (
    <ThemeWrapper>
      <div className="mx-6 px-4">
       { posts.map((item)=>(
         <div className=" flex gap-8 items-center px-[4rem] my-6" key={item.id} >
          <Link href={`/blog/${item.id}`}>
            <div>
              <Image
                src={blog2}
                alt={"blog 1"}
                className="max-w-[20rem] min-w-[18rem]"
              />
            </div>
          </Link>
          <div>
            <Link href={`/blog/${item.id}`}>
              <h2 className="font-semibold text-xl mb-6">
                {item.title}
              </h2>
            </Link>
            <p>
             {item.body}
            </p>
          </div>
        </div>
        ))
      }
       
      </div>
    </ThemeWrapper>
  );
};

export default Blog;
