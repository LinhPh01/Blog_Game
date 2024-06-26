import prisma from "../lib/prismadb";
interface IParams {
  blogId: string;
}

export default async function getBlogById(params: IParams) {
  try {
    const { blogId } = params;
    const blog = await prisma.blog.findUnique({
      where: {
        id: blogId,
      },
      include: {
        user: true,
      },
    });
    if (!blog) {
      return null;
    }

    return {
      ...blog,
      createAt: blog.createdAt.toString(),
      updatedAt: blog.user.updatedAt.toString(),
      emailVerified: blog.user.emailVerified?.toString() || null,
    };
  } catch (err: any) {
    throw new Error(err);
  }
}
