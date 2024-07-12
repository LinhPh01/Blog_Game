import prisma from "../lib/prismadb";

// export interface IBlogParams {
//   user?: string;
//   userId?: string;
//   categories?: string;
// }

export default async function getBlogs() {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    const SafeBlogs = blogs.map((blogs) => ({
      ...blogs,
      createdAt: blogs.createdAt.toISOString(),
    }));
    console.log("tets", blogs);

    return SafeBlogs;
  } catch (err: any) {
    throw new Error(err);
  }
}
