// import prisma from "../lib/prismadb";

// // export interface IBlogParams {
// //   user?: string;
// //   userId?: string;
// //   categories?: string;
// // }

// export default async function getBlogs() {
//   try {
//     // const { userId, categories } = params;

//     // let query: any = {};

//     // if (userId) {
//     //   query.userId = userId;
//     // }

//     // if (categories) {
//     //   query.categories = categories;
//     // }

//     const blogs = await prisma.blog.findMany({
//       orderBy: {
//         createdAt: "desc",
//       },
//     });

//     const SafeBlogs = blogs.map((blog) => ({
//       ...blog,
//       createdAt: blog.createdAt.toISOString(),
//     }));

//     return SafeBlogs;
//   } catch (err: any) {
//     throw new Error(err);
//   }
// }

import prisma from "../lib/prismadb";

export default async function getBlogs() {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    const SafeBlogs = blogs.map((blog) => ({
      ...blog,
      createdAt: blog.createdAt.toISOString(),
    }));

    return SafeBlogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw new Error("Failed to fetch blogs");
  } finally {
    await prisma.$disconnect();
  }
}
// update nè
