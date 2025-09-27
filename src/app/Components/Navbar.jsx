"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu toggle

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white ">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" width={40} height={40} />
      </div>

      {/* Menu Items */}
      <ul className="hidden md:flex items-center space-x-8 font-medium">
        <li>
          <a
            href="#"
            className="text-orange-500 border-b-2 border-orange-500 pb-1"
          >
            Home
          </a>
        </li>
        <li className="relative group">
          <button className="flex items-center space-x-1 hover:text-orange-500">
            <span>Services</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {/* Dropdown */}
          <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md w-40">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Service 1
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Service 2
              </a>
            </li>
          </ul>
        </li>
        <li className="relative group">
          <button className="flex items-center space-x-1 hover:text-orange-500">
            <span>About</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {/* Dropdown */}
          <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md w-40">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Careers
              </a>
            </li>
          </ul>
        </li>
        <li className="relative group">
          <button className="flex items-center space-x-1 hover:text-orange-500">
            <span>Blog</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {/* Dropdown */}
          <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md w-40">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Latest
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Archive
              </a>
            </li>
          </ul>
        </li>
      </ul>

      {/* Language Flags */}
      <div className="hidden md:flex items-center space-x-4">
        {/* <Image
          src="https://flagcdn.com/w20/jp.png"
          alt="JP"
          width={20}
          height={20}
          className="cursor-pointer"
        />
        <Image
          src="https://flagcdn.com/w20/gb.png"
          alt="EN"
          width={20}
          height={20}
          className="cursor-pointer"
        /> */}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col space-y-2 p-4 font-medium">
            <li>
              <a href="#" className="hover:text-orange-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Blog
              </a>
            </li>
            <li className="flex space-x-4 mt-2">
              {/* <Image
                src="https://flagcdn.com/w20/jp.png"
                alt="JP"
                width={20}
                height={20}
              />
              <Image
                src="https://flagcdn.com/w20/gb.png"
                alt="EN"
                width={20}
                height={20}
              /> */}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
