import Image from "next/image";
import React from "react";
export default function Specialize() {
  const services = [
    {
      title: "Portal",
      desc: "Get Your Customized Portal to Engage, Collaborate, and Navigate the Digital Landscape.",
      icon: "/star.png",
    },
    {
      title: "E-Commerce",
      desc: "Showcase your Digital Storefronts with dynamic E-commerce Development Solutions for Lasting Success.",
      icon: "/cart.png",
    },
    {
      title: "Brand Website",
      desc: "Craft a Dynamic Website that articulates your vision and captivates your audience, amplifying your brand's unique identity.",
      icon: "/website.png",
    },
    {
      title: "SaaS",
      desc: "Step into the future of digital innovation with SaaS. We're here to turn your ideas into reality through custom SaaS dev.",
      icon: "/cloud.png",
    },
    {
      title: "CRM",
      desc: "We specialize in crafting robust CRM solutions meticulously designed to enhance and elevate every aspect of your customer interactions.",
      icon: "/group.png",
    },
    {
      title: "ERP",
      desc: "Design, Develop, and Deploy Customized ERP Solutions Tailored to Streamline and Maximize Efficiency in Your Business's Resource Planning.",
      icon: "/setting.png",
    },
    {
      title: "POS",
      desc: "Innovate at checkout with a tailored POS system designed to facilitate swift and secure transactions.",
      icon: "/calculator.png",
    },
    {
      title: "CMS",
      desc: "We specialize in customized CMS development to control, updates, and amplification of online content.",
      icon: "/cms.png",
    },
    {
      title: "LMS",
      desc: "We are dedicated to crafting bespoke Learning Management Systems (LMS) that empower education.",
      icon: "/lms.png",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">We Specialize</h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          We specialize in providing on-demand software solutions across various
          sectors. Our expertise covers a wide range of domains, ensuring
          tailored solutions to meet diverse business needs.
        </p>
        <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md p-6 text-left hover:shadow-lg transition"
            >
              <div className="text-3xl mb-4">
                <Image
                  src={service.icon}
                  alt={`Client logo ${index + 1}`}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
