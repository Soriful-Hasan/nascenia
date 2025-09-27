import Image from "next/image";
import React from "react";

export default function OurClients() {
  const clientLogo = [
    { icon: "/sky.png" },
    { icon: "/sky.png" },
    { icon: "/nuc.png" },
    { icon: "/nokia.png" },
    { icon: "/ict.png" },
    { icon: "/herfy.png" },
    { icon: "/hemas.png" },
    { icon: "/biyeta.png" },
    { icon: "/bc.png" },
    { icon: "/citygroup.png" },
    { icon: "/sky.png" },
    { icon: "/sky.png" },
    { icon: "/nuc.png" },
    { icon: "/nokia.png" },
    { icon: "/ict.png" },
    { icon: "/herfy.png" },
    { icon: "/hemas.png" },
    { icon: "/biyeta.png" },
    { icon: "/bc.png" },
    { icon: "/citygroup.png" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Clients</h2>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 place-items-center">
          {clientLogo.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={logo.icon}
                alt={`Client logo ${index + 1}`}
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
