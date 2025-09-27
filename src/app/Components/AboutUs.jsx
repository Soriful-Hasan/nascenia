"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  const features = [
    {
      icon: "/accountability.png",
      title: "Accountability",
      description:
        "Client satisfaction defines our success, measured by the smiles we address.",
    },
    {
      icon: "/transparency.png",
      title: "Transparency",
      description:
        "We maintain an employee policy, requiring timely follow-up.",
    },
    {
      icon: "/confidentiality.png",
      title: "Confidentiality",
      description:
        "Rest assured, your idea stays secure, confidentiality is our practice and enduring.",
    },
    {
      icon: "/relationship.png",
      title: "Relationships",
      description:
        "Our talented and dedicated team works together enthusiastically to materialize your ideas.",
    },
  ];
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold text-black mb-4">About Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nascenia is one of the best software companies in Bangladesh. With
              over 14+ years of experience, delivering innovative and tailored
              software solutions. Our journey has been driven by a passion for
              technology and a commitment to excellence, helping our clients
              navigate the complexities of the digital landscape.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At Nascenia, we believe in the power of collaboration and the
              impact of well-crafted software. Our team of highly skilled
              developers, designers, and strategists work closely with our
              clients to understand their unique needs and challenges. We take
              pride in transforming ideas into robust, scalable solutions that
              drive growth and success.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <Image
              src="/team.png"
              alt="About Nascenia Team"
              width={550}
              height={400}
              className="rounded-lg shadow-md"
            />
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1 }}
                className="w-12 h-12 flex items-center justify-center rounded"
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={40}
                  height={40}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1 }}
                className="flex-1"
              >
                <h3 className="text-lg font-semibold text-black">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
