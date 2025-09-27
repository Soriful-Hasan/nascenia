"use client";
import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../../../public/lotte.json";

export default function Header() {
  return (
    <div className="w-full min-h-[90vh] flex flex-col justify-between overflow-hidden">
      {/* Hero Section */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 lg:px-16 items-center flex-1">
        {/* Left Text */}
        <motion.div
          className="space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl lg:text-4xl font-bold leading-snug"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            Experience Excellence with Top <br /> Software Company of Bangladesh
          </motion.h1>
          <motion.p
            className="text-base text-gray-600 max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Get your application developed by experts. As Bangladesh’s leading
            software company, we create top-notch custom software that meets our
            client’s requirements.
          </motion.p>
          <motion.button
            className="border-2 border-primary px-6 py-3 hover:bg-primary hover:text-white rounded-xl transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Our Services
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div>
            <Lottie
              animationData={animationData}
              loop={true}
              autoPlay={true}
              style={{ width: 400, height: 400 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 bg-gray-100 py-12 gap-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {[
          { number: "14", label: "Years of Experience" },
          { number: "175", label: "Delivered Projects" },
          { number: "22", label: "Countries Served" },
          { number: "50", label: "Developers" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          >
            <h1 className="text-primary font-bold text-4xl">{item.number}</h1>
            <p className="text-gray-600">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
