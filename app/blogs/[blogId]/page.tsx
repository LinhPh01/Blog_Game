import getCurrentUser from "@/app/actions/getCurrentUser";
import getBlogById from "@/app/actions/getBlogById";
import BlogId from "@/components/blog/BlogId";
import prisma from "../../lib/prismadb";

interface IParams {
  blogId: string;
}

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

export default async function page({ params }: { params: IParams }) {
  const blog = await getBlogById(params);
  const currentUser = await getCurrentUser();
  return (
    <div>
      <div>
        <BlogId
          name={blog?.name}
          description={blog?.description}
          blogId={blog?.id}
          imageSrc={blog?.imageSrc}
        />
      </div>
    </div>
  );
}
