"use client";

import Image from "next/image";

export default function ServicesGrid() {
  const services = [
    {
      icon: "/uiux.png",
      title: "UI/UX Design",
      description: "Crafting user experiences that resonate and engage",
    },
    {
      icon: "/web.png",
      title: "Web Development",
      description:
        "Developing dynamic websites that are powerful and efficient",
    },
    {
      icon: "/mobiledev.png",
      title: "Mobile Development",
      description: "Creating innovative mobile apps that connect and inspire",
    },
    {
      icon: "/edge.png",
      title: "Cutting Edge",
      description: "Latest technology solutions to lead the industry",
    },
    {
      icon: "/quality.png",
      title: "Quality Assurance",
      description: "Delivering excellence and reliability in every product",
    },
    {
      icon: "/cyber.png",
      title: "Cyber Security",
      description:
        "Protecting your digital assets with advanced security solutions",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="md:flex md:justify-between md:items-start mb-10">
          <h2 className="text-xl md:text-4xl font-bold text-black max-w-md">
            Custom Enterprise <br /> Software Development Services
          </h2>
          <p className="text-black mt-4 md:mt-0 max-w-sm">
            We prioritize cultivating lasting business partnerships as your
            trusted software development partner
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center   mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={40}
                  height={40}
                />
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-semibold text-black mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {service.description}
              </p>

              {/* Arrow Icon */}
              <div className="flex items-center text-black text-xl group-hover:translate-x-2 transition-transform duration-300">
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
