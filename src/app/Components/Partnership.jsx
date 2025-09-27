"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Partnership() {
  const partnershipLogo = [
    { icon: "/odoo.png", title: "oddo" },
    { icon: "/aws.png", title: "aws" },
    { icon: "/iso.png", title: "iso" },
    { icon: "/oracle.png", title: "oracle" },
  ];
  return (
    <section className="bg-gray-200 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center py-6">
          <h1 className="text-xl lg:text-4xl font-bold">
            Partnerships & Certifications
          </h1>
        </div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 lg:grid-cols-4 "
        >
          {partnershipLogo.map((logo, index) => (
            <div key={index} className=" h-40 flex items-center justify-center">
              <Image
                src={logo.icon}
                alt={logo.title}
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
