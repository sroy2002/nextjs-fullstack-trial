import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post.js";
export const GET = async (request) => {
  //fetch
  try {
    await connect();
    console.log("Connected to DB");
    const posts = await Post.find();
    console.log("Fetched posts:", posts);
    return new NextResponse(JSON.stringify(posts), { status: 200 });
    // return new NextResponse("It works!", { status: 200 });
  } catch (error) {
    return new NextResponse("Database error!", { status: 500 });
  }
};
