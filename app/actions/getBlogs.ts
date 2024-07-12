import prisma from "../lib/prismadb";

// export interface IBlogParams {
//   user?: string;
//   userId?: string;
//   categories?: string;
// }

export default async function getBlogs() {
  const blogs = await prisma.blog.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const SafeBlogs = blogs.map((blog) => ({
    // @ts-ignore
    ...blog,
    createdAt: blog.createdAt.toISOString(),
  }));

  return SafeBlogs;
}
