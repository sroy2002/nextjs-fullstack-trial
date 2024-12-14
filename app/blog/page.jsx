import React from "react";
import Link from "next/link";
import Image from "next/image";
import blog1 from "@/public/blog1.jpg";
import blog2 from "@/public/blog2.jpg";
import blog3 from "@/public/blog3.jpg";
import blog4 from "@/public/blog4.jpg";
import blog5 from "@/public/blog5.jpg";
import blog6 from "@/public/blog6.jpg";
import ThemeWrapper from "../context/ThemeWrapper";

const Blog = () => {
  return (
    <ThemeWrapper>
      <div className="mx-6 px-4">
        <div className=" flex gap-8 items-center px-[4rem] my-6">
          <Link href={"/blog/1"}>
            <div>
              <Image
                src={blog1}
                alt={"blog 1"}
                className="max-w-[20rem] min-w-[18rem]"
              />
            </div>
          </Link>
          <div>
            <Link href={"/blog/1"}>
              <h2 className="font-semibold text-xl mb-6">
                Lorem ipsum dolor sit amet.
              </h2>
            </Link>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum,
              blanditiis nisi repellendus explicabo ab saepe voluptas
              perferendis modi similique atque sed veniam quisquam culpa odit
              numquam qui, harum quos veritatis? Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Voluptates vel dignissimos possimus
              quam officia ut suscipit architecto a eligendi dolor.
            </p>
          </div>
        </div>
        <div className=" flex gap-8 items-center px-[4rem] my-6">
          <Link href={"/blog/2"}>
            <div>
              <Image
                src={blog2}
                alt={"blog 2"}
                className="max-w-[20rem] min-w-[18rem]"
              />
            </div>
          </Link>
          <div>
            <Link href={"/blog/2"}>
              <h2 className="font-semibold text-xl mb-6">
                Lorem ipsum dolor sit amet.
              </h2>
            </Link>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum,
              blanditiis nisi repellendus explicabo ab saepe voluptas
              perferendis modi similique atque sed veniam quisquam culpa odit
              numquam qui, harum quos veritatis? Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Voluptates vel dignissimos possimus
              quam officia ut suscipit architecto a eligendi dolor.
            </p>
          </div>
        </div>
        <div className=" flex gap-8 items-center px-[4rem] my-6">
          <Link href={"/blog/3"}>
            <div>
              <Image
                src={blog3}
                alt={"blog 3"}
                className="max-w-[20rem] min-w-[18rem]"
              />
            </div>
          </Link>
          <div>
            <Link href={"/blog/3"}>
              <h2 className="font-semibold text-xl mb-6">
                Lorem ipsum dolor sit amet.
              </h2>
            </Link>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum,
              blanditiis nisi repellendus explicabo ab saepe voluptas
              perferendis modi similique atque sed veniam quisquam culpa odit
              numquam qui, harum quos veritatis? Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Voluptates vel dignissimos possimus
              quam officia ut suscipit architecto a eligendi dolor.
            </p>
          </div>
        </div>
        <div className=" flex gap-8 items-center px-[4rem] my-6">
          <Link href={"/blog/4"}>
            <div>
              <Image
                src={blog4}
                alt={"blog 4"}
                className="max-w-[20rem] min-w-[18rem]"
              />
            </div>
          </Link>
          <div>
            <Link href={"/blog/4"}>
              <h2 className="font-semibold text-xl mb-6">
                Lorem ipsum dolor sit amet.
              </h2>
            </Link>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum,
              blanditiis nisi repellendus explicabo ab saepe voluptas
              perferendis modi similique atque sed veniam quisquam culpa odit
              numquam qui, harum quos veritatis? Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Voluptates vel dignissimos possimus
              quam officia ut suscipit architecto a eligendi dolor.
            </p>
          </div>
        </div>
        <div className=" flex gap-8 items-center px-[4rem] my-6">
          <Link href={"/blog/5"}>
            <div>
              <Image
                src={blog5}
                alt={"blog 5"}
                className="max-w-[20rem] min-w-[18rem]"
              />
            </div>
          </Link>
          <div>
            <Link href={"/blog/5"}>
              <h2 className="font-semibold text-xl mb-6">
                Lorem ipsum dolor sit amet.
              </h2>
            </Link>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum,
              blanditiis nisi repellendus explicabo ab saepe voluptas
              perferendis modi similique atque sed veniam quisquam culpa odit
              numquam qui, harum quos veritatis? Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Voluptates vel dignissimos possimus
              quam officia ut suscipit architecto a eligendi dolor.
            </p>
          </div>
        </div>
        <div className=" flex gap-8 items-center px-[4rem] my-6">
          <Link href={"/blog/6"}>
            <div>
              <Image
                src={blog6}
                alt={"blog 6"}
                className="max-w-[20rem] min-w-[18rem]"
              />
            </div>
          </Link>
          <div>
            <Link href={"/blog/6"}>
              <h2 className="font-semibold text-xl mb-6">
                Lorem ipsum dolor sit amet.
              </h2>
            </Link>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum,
              blanditiis nisi repellendus explicabo ab saepe voluptas
              perferendis modi similique atque sed veniam quisquam culpa odit
              numquam qui, harum quos veritatis? Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Voluptates vel dignissimos possimus
              quam officia ut suscipit architecto a eligendi dolor.
            </p>
          </div>
        </div>
        <div className=" flex gap-8 items-center px-[4rem] my-6">
          <Link href={"/blog/1"}>
            <div>
              <Image
                src={blog1}
                alt={"blog 1"}
                className="max-w-[20rem] min-w-[18rem]"
              />
            </div>
          </Link>
          <div>
            <Link href={"/blog/1"}>
              <h2 className="font-semibold text-xl mb-6">
                Lorem ipsum dolor sit amet.
              </h2>
            </Link>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum,
              blanditiis nisi repellendus explicabo ab saepe voluptas
              perferendis modi similique atque sed veniam quisquam culpa odit
              numquam qui, harum quos veritatis? Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Voluptates vel dignissimos possimus
              quam officia ut suscipit architecto a eligendi dolor.
            </p>
          </div>
        </div>
      </div>
    </ThemeWrapper>
  );
};

export default Blog;
