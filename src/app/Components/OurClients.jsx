"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function OurClients() {
  const clientLogo = [
    { icon: "/nuc.png" },
    { icon: "/nokia.png" },
    { icon: "/ict.png" },
    { icon: "/herfy.png" },
    { icon: "/hemas.png" },
    { icon: "/biyeta.png" },
    { icon: "/bc.png" },
    { icon: "/citygroup.png" },
    { icon: "/nuc.png" },
    { icon: "/sky.png" },
    { icon: "/nokia.png" },
    { icon: "/bc.png" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Clients</h2>

        {/* Logo Grid */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 place-items-center"
        >
          {clientLogo.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 transition-transform duration-300 hover:scale-105 group"
            >
              <Image
                src={logo.icon}
                alt={`Client logo ${index + 1}`}
                width={200}
                height={200}
                className="object-contain filter group-hover:grayscale-0 group-hover:brightness-125 transition-all duration-500"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
