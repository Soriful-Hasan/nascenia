"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center justify-around px-8 py-4 bg-white relative"
    >
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" width={70} height={70} />
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
        {/* About, Blog ... same */}
      </ul>

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
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden"
        >
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
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
