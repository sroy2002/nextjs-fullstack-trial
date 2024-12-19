import React from "react";
import Image from "next/image";
import blog1 from "@/public/blog1.jpg";
import user from "@/public/user.jpeg";
import ThemeWrapper from "@/app/Components/ThemeWrapper";

async function getData(slug){
  const data = await fetch(`http://localhost:3000/api/posts/${slug}`);
  
  if (!data.ok) {
    return <div>Error loading the blog post</div>;
  }

  return data.json();
}

export async function generateMetadata({ params }) {
  const slug = (await params).slug;
  const post = await getData(slug)
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const slug = (await params).slug;
  
  // Fetching data from API
  
  
  const post = await getData(slug);

  return (
    <ThemeWrapper>
      <div className="mx-8 px-[5rem] py-[1.5rem] h-screen">
        <div className="flex flex-row-reverse justify-between gap-8">
          <div>
            <Image
              src={post.img}
              alt={"blog 1"}
              className="w-[25rem]"
              width={400}
              height={400}
            />
          </div>
          <div>
            <p className="text-2xl font-bold mt-6">{post.title}</p>
            <div className="my-4 flex items-center gap-4">
              <Image
                src={user}
                alt="user-pic"
                className="w-[3rem] rounded-full object-cover"
                width={48}
                height={48}
              />
              <p className="text-lg">{post.username}</p>
            </div>
          </div>
        </div>
        <div className="my-8 text-lg">{post.desc}</div>
      </div>
    </ThemeWrapper>
  );
};

export default BlogPost;
