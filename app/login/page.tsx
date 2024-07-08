"use client";

import Input from "@/components/input/Input";
import { FormEvent, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { string } from "prop-types";
import bg from "../../public/images/bg-1.jpg";

interface InitialStateProps {
  name: string;
  email: string;
  password: string;
}

const initialState: InitialStateProps = {
  name: "",
  email: "",
  password: "",
};

export default function page() {
  const [state, setState] = useState(initialState);
  const router = useRouter();
  function handleChange(e: any) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    signIn("credentials", { ...state, redirect: false }).then((callback) => {
      if (callback?.ok) {
        router.refresh();
      }
      if (callback?.error) {
        throw new Error("Wrong Credential");
      }
    });
    router.push("/");
  };

  return (
    <div
      className="py-28 h-screen flex flex-col"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form className="text-center " onSubmit={onSubmit}>
        <div
          className="flex flex-col px-6 pt-4 justify-center h-[450px] w-[350px] mx-auto gap-4 rounded-xl"
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Input
            placeholder="Email"
            name="email"
            id="email"
            type="email"
            onChange={handleChange}
            value={state.email}
          />
          <Input
            placeholder="Password"
            name="password"
            id="password"
            type="password"
            onChange={handleChange}
            value={state.password}
          />

          <div className="flex flex-col items-center space-y-2 gap-2">
            <button className="before:ease relative h-12 w-40 overflow-hidden border border-white text-white shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-white before:duration-300 hover:text-black hover:shadow-white hover:before:h-64 hover:before:-translate-y-32 rounded-2xl">
              <span className="relative z-10">Login</span>
            </button>
            <div className="text-white">
              Haven't you have an acccount yet ?{" "}
              <Link href="/register">Register</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
