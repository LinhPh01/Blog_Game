import Image from "next/image";
import getCurrentUser from "./actions/getCurrentUser";
import getBlogs from "./actions/getBlogs";
import SingleBlog from "@/components/blog/SingleBlog";
import Welcome from "@/components/body/welcome";

export default async function Home() {
  const currentUser = await getCurrentUser();
  const blogs = await getBlogs();

  return (
    <div className="overflow-x-hidden">
      <div>
        <Welcome />
        {blogs.map((item: any) => (
          <SingleBlog data={item} key={item.id} currentUser={currentUser} />
        ))}
      </div>
    </div>
  );
}
