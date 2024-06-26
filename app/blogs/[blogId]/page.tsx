import getCurrentUser from "@/app/actions/getCurrentUser";
import getBlogById from "@/app/actions/getBlogById";
import BlogId from "@/components/blog/BlogId";

interface IParams {
  blogId: string;
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
