"use client";

// import getCurrentUser from "@/app/actions/getCurrentUser";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { SafeUser } from "@/types";
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
    <section className="sticky top-0 left-0 right-0 z-50 bg-white">
      <header>
        <nav className=" bg-gray-200 flex items-center px-4 py-4 shadow-xl ">
          <div className={`${isOpen ? "hidden" : "block"}`}>
            {currentUser?.name}
          </div>
          {/* open button */}
          <div className="md:hidden absolute flex items-center top-0 right-0 px-4 py-2">
            <button onClick={openNavbar} className="focus:outline-none">
              {isOpen ? (
                <XMarkIcon className="h-10 w-10 text-blue-400" />
              ) : (
                <Bars3Icon className="h-10 w-10 text-blue-400" />
              )}
            </button>
          </div>
          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row items-center w-full justify-center mt-4 md:mt-0`}
          >
            <Link href="/" className="px-4 py-2" onClick={closeNavbar}>
              Home
            </Link>
            <Link href="/create" className="px-4 py-2" onClick={closeNavbar}>
              Create
            </Link>
            <Link href="/login" className="px-4 py-2" onClick={closeNavbar}>
              Login
            </Link>

            {currentUser ? (
              <button
                onClick={() => signOut()}
                className="px-4 py-2 focus:outline-none"
              >
                Sign out
              </button>
            ) : (
              <Link href="/register" className="px-4 py-2 focus:outline-none">
                Register
              </Link>
            )}
          </div>
        </nav>
      </header>
    </section>
  );
}
