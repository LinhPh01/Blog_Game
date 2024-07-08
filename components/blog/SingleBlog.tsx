"use client";

import Image from "next/image";
import { SafeBlogs, SafeUser } from "@/types/index";
import axios from "axios";
import { useRouter } from "next/navigation";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsFillPencilFill } from "react-icons/bs";
import bg from "../../public/images/bg-5.jpg";

interface BlogProps {
  key: string;
  data: SafeBlogs;
  currentUser?: SafeUser | null;
}

export default function SingleBlog({ data, key, currentUser }: BlogProps) {
  const router = useRouter();
  const onDelete = () => {
    axios
      .delete(`/api/blogs/${data.id}`)
      .then(() => {
        router.refresh();
      })

      .catch((err) => {
        throw new Error(err);
      })
      .finally(() => {
        router.push("/");
      });
  };

  return (
    <div
      className="flex items-center justify-center mx-2 py-2 max-h-screen max-w-full overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat shadow-lg"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="px-4 md:px-8 py-2 border-2 bg-white border-black rounded-md">
        <div className="flex flex-col gap-4 justify-between items-center ">
          <Image
            src={data.imageSrc}
            width={600}
            height={300}
            alt="Blog Image"
            className="w-full h-auto" // Make the image responsive
          />
          <div className="w-full md:w-[530px] flex flex-col gap-4 leading-[1.5]">
            <h1 className="text-center text-lg md:text-xl font-bold">
              {data.name}
            </h1>
            <p className="break-words text-base md:text-lg">
              {data.description}
            </p>
          </div>
        </div>

        {data.userId === currentUser?.id && (
          <div className="flex items-center gap-4 mt-4">
            <RiDeleteBin5Line
              onClick={onDelete}
              className="cursor-pointer text-[1.5rem]"
            />
            <BsFillPencilFill
              onClick={() => router.push(`/blogs/${data.id}`)}
              className="cursor-pointer text-[1.2rem]"
            />
          </div>
        )}
      </div>
    </div>
  );
}
