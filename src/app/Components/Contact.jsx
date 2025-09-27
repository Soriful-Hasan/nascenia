"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="bg-black py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="text-white"
        >
          <h2 className="text-3xl font-bold mb-6">Let's Make Things Happen!</h2>
          <img
            src="/teamworking.png"
            alt="Team working"
            className="rounded-md mb-6"
          />
          <blockquote className="italic text-lg mb-4">
            "Do not suffer novices, hire a skilled team"
          </blockquote>
          <div className="flex items-center gap-3">
            <Image
              src="/profile.png"
              alt="Sajib"
              height={40}
              width={40}
              className=" rounded-full"
            />
            <div>
              <p className="font-semibold">Sajib</p>
              <p className="text-sm text-gray-400">COO, Deshit-BD</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Contact Us</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name*"
              className="w-full border border-gray-200 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              placeholder="Your Email *"
              className="w-full border rounded-md border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              placeholder="Your Phone Number"
              className="w-full border rounded-md border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              placeholder="Your Query ✉"
              rows={4}
              className="w-full border rounded-md border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
            <button
              type="submit"
              className="w-full cursor-pointer bg-orange-500 border-gray-200 text-white py-3 rounded-md hover:bg-orange-600 transition"
            >
              Send
            </button>
            <p className="text-xs text-gray-500 text-center mt-2">
              We will contact you after your query submission.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
