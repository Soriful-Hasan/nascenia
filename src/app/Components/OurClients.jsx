import Image from "next/image";
import React from "react";

export default function OurClients() {
  const clientLogo = [
    {
      icon: "/sky.png",
    },
    {
      icon: "/snaple.png",
    },
    {
      icon: "/nuc.png",
    },
    {
      icon: "/nokia.png",
    },
    {
      icon: "/ict.png",
    },
    {
      icon: "/herfy.png",
    },
    {
      icon: "/hemas.png",
    },
    {
      icon: "/biyeta.png",
    },
    {
      icon: "/bc.png",
    },
    {
      icon: "/citygroup.png",
    },
    {
      icon: "/sky.png",
    },
    {
      icon: "/snaple.png",
    },
    {
      icon: "/nuc.png",
    },
    {
      icon: "/nokia.png",
    },
    {
      icon: "/ict.png",
    },
    {
      icon: "/herfy.png",
    },
    {
      icon: "/hemas.png",
    },
    {
      icon: "/biyeta.png",
    },
    {
      icon: "/bc.png",
    },
    {
      icon: "/citygroup.png",
    },
    {
      icon: "/sky.png",
    },
    {
      icon: "/snaple.png",
    },
    {
      icon: "/nuc.png",
    },
    {
      icon: "/nokia.png",
    },
    {
      icon: "/ict.png",
    },
    {
      icon: "/herfy.png",
    },
    {
      icon: "/hemas.png",
    },
    {
      icon: "/biyeta.png",
    },
    {
      icon: "/bc.png",
    },
    {
      icon: "/citygroup.png",
    },
  ];
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Our Clients</h2>

        {/* Logo Grid */}
        <div className="grid max-w-5xl mx-auto grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {clientLogo.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center  p-4 bg-white  duration-300"
            >
              <Image
                src={logo.icon}
                alt={`Client logo ${index + 1}`}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
