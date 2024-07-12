import getCurrentUser from "../actions/getCurrentUser";
import getBlogs from "../actions/getBlogs";
import SingleBlog from "@/components/blog/SingleBlog";
export default async function BlogPage() {
  const currentUser = await getCurrentUser();
  const blogs = await getBlogs();
  return (
    <div>
      {blogs.map((item: any, index: any) => (
        <SingleBlog data={item} key={index} currentUser={currentUser} />
      ))}
    </div>
  );
}
