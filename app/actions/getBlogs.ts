import { Blog } from "@prisma/client";
import prisma from "../lib/prismadb";

// export interface IBlogParams {
//   user?: string;
//   userId?: string;
//   categories?: string;
// }

export default async function getBlogs() {
  try {
    const blogs: Blog[] = await prisma.blog.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    const SafeBlogs = blogs.map((blog) => ({
      ...blog,
      createdAt: blog.createdAt.toISOString(),
    }));

    return SafeBlogs;
  } catch (err: any) {
    throw new Error(err);
  }
}

///thay doei
