"use client";
import {
  ChatBubbleLeftRightIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import { SafeBlogs } from "../../types/";

interface BlogProps {
  data: SafeBlogs;
}

export default function Outstanding({ data }: BlogProps) {
  return (
    <div className="px-8 py-8 bg-white bg-cover bg-center">
      <div className="w-[100%] relative h-[400px] ">
        <Image
          src={data.imageSrc}
          alt="blog"
          layout="fill"
          className="object-cover transform transition duration-500 hover:scale-110 flex justify-center items-center"
        />
      </div>
      <div className="w-[90%] text-center mx-auto bg-[#071225] relative p-[2rem] mt-[-1rem]">
        <div className="w-fit px-[2rem] py-[1rem] bg-[#60A5FA] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
          {data?.createdAt}
        </div>
        <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
          <div className="flex items-center space-x-3">
            <UserCircleIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#60A5FA]" />
            <p className="text-white">{data?.name}</p>
          </div>
          <div className="flex items-center space-x-3">
            <ChatBubbleLeftRightIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#60A5FA]" />
            <p className="text-white">Comments(0)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
