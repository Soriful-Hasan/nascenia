"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function () {
  const services = [
    {
      icon: "/teams.png",
      title: "Dedicated Team",
      description:
        "Our Dedicated Team of expert developers will work exclusively on your projects. They'll ensure the progress, flexibility, and seamless integration with your existing processes, delivering top-notch results tailored to your on-demand needs.",
    },
    {
      icon: "/staff.png",
      title: "Staff Augmentation",
      description:
        "Engage top-tier professionals from our talent pool to strengthen your existing team. Our highly skilled individuals will accelerate project growth and boost productivity without the need for long-term hiring commitments.",
    },
    {
      icon: "/package.png",
      title: "Project Deliveries",
      description:
        "From concept to completion, we’ll handle every aspect of your project and ensure the final product will be completely satisfactory. Expect timely, high-quality results and a seamless experience as we manage end-to-end development.",
    },
  ];
  return (
    <section className="py-16 bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="max-w-6xl mx-auto  px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-1 border-gray-300  rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 text-center"
            >
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex items-center justify-center "
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={60}
                  height={60}
                />
              </motion.div>
              <motion.h3
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-xl font-semibold py-6 mb-3"
              >
                {service.title}
              </motion.h3>
              <motion.p
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-gray-600 tracking-wider  text-sm leading-relaxed"
              >
                {service.description}
              </motion.p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
