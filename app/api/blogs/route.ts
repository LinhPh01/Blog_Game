import { NextResponse } from "next/server";

import prisma from "../../lib/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

export async function generateStaticParams() {
  try {
    const blogs = await prisma.blog.findMany(); // Lấy danh sách các blog từ cơ sở dữ liệu

    // Trả về một mảng các đối tượng, mỗi đối tượng chứa các tham số cho từng blogId cụ thể
    return blogs.map((blog) => ({
      params: { blogId: blog.id },
    }));
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw new Error("Failed to fetch blogs");
  }
}
export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return null;
  }

  const body = await request.json();
  const { name, description, imageSrc } = body;

  //   Object.keys(body).forEach((value: any) => {
  //     if (!body[value]) {
  //       NextResponse.error();
  //     }
  //   });

  const blog = await prisma.blog.create({
    data: {
      name,
      imageSrc,
      description,
      userId: currentUser.id,
      //   userId: currentUser.id
    },
  });

  return NextResponse.json(blog);
}
