"use client";

// import getCurrentUser from "@/app/actions/getCurrentUser";
import { Bars3Icon } from "@heroicons/react/20/solid";

import { SafeUser } from "../../types";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

interface UserMenuProps {
  currentUser: SafeUser | null;
}

export default function Navbar({ currentUser }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };
  return (
    <section className="sticky top-0 left-0 right-0 z-50">
      <header>
        <nav className="bg-color relative flex items-center px-4 py-3 h-full">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 imga" />
            <div
              className={`${
                isOpen ? "hidden" : "block"
              } bg-transparent border-yellow-400 text-yellow-400`}
            >
              {currentUser?.name}
            </div>
          </div>
          {/* open button */}
          <div className="flex items-center justify-between w-full">
            <div className="flex-1">
              {/* Logo hoặc bất kỳ thành phần nào khác */}
            </div>
            <div className="md:hidden">
              <button onClick={openNavbar} className="focus:outline-none">
                <Bars3Icon className="h-10 w-10 border-2 border-blue-600 rounded-xl text-blue-600" />
              </button>
            </div>
            <div
              className={`${
                isOpen ? "flex" : "hidden"
              } absolute  top-16 left-0 right-0 md:static md:flex flex-col md:flex-row items-center w-full bg-mobile md:w-auto justify-center  md:bg-transparent`}
            >
              <Link
                href="/"
                className="nav-link my-2 md:my-0"
                onClick={closeNavbar}
              >
                <div className="flex items-center justify-center before:ease relative h-12 w-40 overflow-hidden border-b-0 border-white text-white shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-white before:duration-300 hover:text-black hover:shadow-white hover:before:h-64 hover:before:-translate-y-32">
                  <span className="relative z-10">Home</span>
                </div>
              </Link>
              <Link
                href="/blogsingle"
                className="nav-link my-2 md:my-0 "
                onClick={closeNavbar}
              >
                <div className="flex items-center justify-center before:ease relative h-12 w-40 overflow-hidden border-b-0 border-white text-white shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-white before:duration-300 hover:text-black hover:shadow-white hover:before:h-64 hover:before:-translate-y-32">
                  <span className="relative z-10">Blog</span>
                </div>
              </Link>
              <Link
                href="/create"
                className="nav-link my-2 md:my-0"
                onClick={closeNavbar}
              >
                <div className="flex items-center justify-center before:ease relative h-12 w-40 overflow-hidden border-b-0 border-white text-white shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-white before:duration-300 hover:text-black hover:shadow-white hover:before:h-64 hover:before:-translate-y-32 ">
                  <span className="relative z-10">Create</span>
                </div>
              </Link>
              <Link
                href="/login"
                className="nav-link my-2 md:my-0"
                onClick={closeNavbar}
              >
                <div className="flex items-center justify-center before:ease relative h-12 w-40 overflow-hidden border-b-0 border-white text-white shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-white before:duration-300 hover:text-black hover:shadow-white hover:before:h-64 hover:before:-translate-y-32">
                  <span className="relative z-10">Login</span>
                </div>
              </Link>

              {currentUser ? (
                <button
                  onClick={() => signOut()}
                  className="nav-link focus:outline-none my-2 md:my-0"
                >
                  <div className="flex items-center justify-center before:ease relative h-12 w-40 overflow-hidden border-b-0 border-white text-white shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-white before:duration-300 hover:text-black hover:shadow-white hover:before:h-64 hover:before:-translate-y-32">
                    <span className="relative z-10">Sign out</span>
                  </div>
                </button>
              ) : (
                <Link
                  href="/register"
                  className="nav-link focus:outline-none my-2 md:my-0 "
                >
                  <div className="flex items-center justify-center before:ease relative h-12 w-40 overflow-hidden border-b-0 border-white text-white shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-white before:duration-300 hover:text-black hover:shadow-white hover:before:h-64 hover:before:-translate-y-32">
                    <span className="relative z-10">Register</span>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </nav>
      </header>
    </section>
  );
}
