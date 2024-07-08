"use client";

import React, { ChangeEvent, FormEvent, useMemo, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Input from "@/components/input/Input";
import ImageUpload from "@/components/input/ImageUpload";
import bg from "../../public/images/bg.jpg";

interface InitalStateProps {
  name?: string;
  imageSrc: string;
  description: string;
}

const initialState: InitalStateProps = {
  name: "",
  imageSrc: "",
  description: "",
};

export default function page() {
  const [state, setState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit = (event: FormEvent) => {
    setIsLoading(true);

    event.preventDefault();

    axios
      .post("/api/blogs", state)
      .then(() => {
        // toast.success("Created successfully");
        // router.refresh();
        router.push("/");
        // router.push('/')
      })

      .catch(() => {
        toast.error("Went wring");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setState({ ...state, [event.target.name]: event.target.value });
  }
  const setCustomValue = (id: any, value: any) => {
    setState((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  return (
    <div
      className="h-screen flex justify-center py-16"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form onSubmit={onSubmit} className="flex flex-row">
        <div className="w-full md:w-1/2 lg:w-1/4 h-auto text-white">
          <ImageUpload
            value={state.imageSrc}
            onChange={(value) => setCustomValue("imageSrc", value)}
          />
        </div>

        <div
          className="flex flex-col justify-center h-[500px] w-[350px] mx-auto gap-4 px-6 rounded-xl"
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Input
            placeholder="Blog header"
            id="name"
            type="text"
            value={state.name}
            name="name"
            onChange={handleChange}
          />
          <Input
            big
            placeholder="Blog content or description"
            id="description"
            type="text"
            value={state.description}
            name="description"
            onChange={handleChange}
          />
          <div className="flex items-center justify-center">
            <button className="before:ease relative h-12 w-40 overflow-hidden border border-white text-white shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-white before:duration-300 hover:text-black hover:shadow-white hover:before:h-64 hover:before:-translate-y-32 rounded-2xl">
              <span className="relative z-10">Submit</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
