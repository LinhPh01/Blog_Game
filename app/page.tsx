import Image from "next/image";
import getBlogs from "./actions/getBlogs";
import Welcome from "@/components/body/welcome";
import Outstanding from "@/components/blog/Outstanding";
import Footer from "@/components/footer/footer";
import { TitleBlog } from "@/components/blog/title";

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <div className="overflow-x-hidden">
      <div>
        <Welcome />
        <TitleBlog />
        <div className="flex flex-wrap justify-center ">
          {blogs.map((item: any) => (
            <Outstanding data={item} />
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
}
