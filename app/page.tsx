import Image from "next/image";

import Welcome from "@/components/body/welcome";

export default async function Home() {
  // const currentUser = await getCurrentUser();
  // const blogs = await getBlogs();

  return (
    <div className="overflow-x-hidden">
      <div>
        <Welcome />
        
      </div>
    </div>
  );
}
