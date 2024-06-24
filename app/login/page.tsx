"use client";

import Input from "@/components/input/Input";
import { FormEvent, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { string } from "prop-types";
import bg from "../../public/images/banner4.jpg";

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
      className="py-16 min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form className="text-center " onSubmit={onSubmit}>
        <div
          className="flex flex-col px-6 justify-center h-[450px] w-[350px] mx-auto gap-2"
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-white">LOGIN</div>
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
          <button className="text-white" type="submit">
            Submit
          </button>
        </div>

        <div>
          <div className="text-white">
            Haven't you have an acccount yet ?{" "}
            <Link href="/register">Register</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
