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
    <section className="sticky top-0 left-0 right-0 z-50">
      <header>
        <nav className="bg-color relative flex items-center px-4 py-4 h-full">
          <div
            className={`${
              isOpen ? "hidden" : "block"
            }  rounded-md px-4 border-2 border-yellow-400 text-yellow-400`}
          >
            {currentUser?.name}
          </div>
          {/* open button */}
          <div className="md:hidden absolute flex items-center top-0 right-0 px-4 py-2">
            <button onClick={openNavbar} className="focus:outline-none">
              {isOpen ? (
                <XMarkIcon className="h-10 w-10 border-2 border-blue-600 rounded-xl text-blue-600" />
              ) : (
                <Bars3Icon className="h-10 w-10 border-2 border-blue-600 rounded-xl text-blue-600" />
              )}
            </button>
          </div>
          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row items-center w-full h-full justify-center mt-4 md:mt-0`}
          >
            <Link href="/" className="nav-link px-4 py-4" onClick={closeNavbar}>
              Home
            </Link>
            <Link
              href="/blogsingle"
              className="nav-link px-4 py-4"
              onClick={closeNavbar}
            >
              Blog
            </Link>
            <Link
              href="/create"
              className="nav-link px-4 py-4"
              onClick={closeNavbar}
            >
              Create
            </Link>
            <Link
              href="/login"
              className="nav-link px-4 py-4"
              onClick={closeNavbar}
            >
              Login
            </Link>

            {currentUser ? (
              <button
                onClick={() => signOut()}
                className="nav-link px-4 py-4 focus:outline-none"
              >
                Sign out
              </button>
            ) : (
              <Link
                href="/register"
                className="nav-link px-4 py-4 focus:outline-none"
              >
                Register
              </Link>
            )}
          </div>
        </nav>
      </header>
    </section>
  );
}
