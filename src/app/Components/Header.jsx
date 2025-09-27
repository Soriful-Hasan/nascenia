import React from "react";

export default function Header() {
  return (
    <div className="w-full min-h-[90vh]">
      <div className="grid grid-cols-1 lg:grid-cols-2  p-10 items-center   h-full">
        <div className="flex-1 space-y-20 ">
          <h1 className="text-2xl font-bold">
            Experience Excellence with Top <br /> Software Company of Bangladesh
          </h1>
          <p className="text-sm text-gray-600 w-lg">
            Get your application developed by experts. As Bangladesh’s leading
            software company, we create top-notch custom software that meets our
            client’s requirements.
          </p>
          <button className="border-2 px-2 hover:bg-primary cursor-pointer hover:text-white rounded-xl py-2">
            Our Services
          </button>
        </div>
        {/*  animation */}
        <div className="flex-1 0">
          <img src="/cercel.png" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-gray-100 py-16">
        <div className="space-y-4  flex flex-col items-center">
          <h1 className="text-primary font-bold text-4xl">14</h1>
          <p className="text-gray-600">Years of Experience</p>
        </div>

        <div className="space-y-4  flex flex-col items-center">
          <h1 className="text-primary font-bold text-4xl">175</h1>
          <p className="text-gray-600">Delivered Projects</p>
        </div>

        <div className="space-y-4  flex flex-col items-center">
          <h1 className="text-primary font-bold text-4xl">22</h1>
          <p className="text-gray-600">Countries Served</p>
        </div>

        <div className="space-y-4  flex flex-col items-center">
          <h1 className="text-primary font-bold text-4xl">50</h1>
          <p className="text-gray-600">Developers</p>
        </div>
      </div>
    </div>
  );
}
