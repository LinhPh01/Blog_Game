import { NextResponse } from "next/server";

import prisma from "../../lib/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function generateStaticParams() {
  // Đây là một ví dụ đơn giản, bạn có thể thay đổi để phù hợp với logic của bạn
  return [
    { params: { blogId: String } },

    // Thêm các tham số cho từng blogId khác nếu cần thiết
  ];
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
