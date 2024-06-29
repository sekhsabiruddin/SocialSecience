"use client";
import React, { useState } from "react";
import Image from "next/image";
import Hill from "../../Assest/hills.jpg";
import { MdLocationPin } from "react-icons/md";

const ColorPage = () => {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [mixColor, setMixColor] = useState(false);
  const handleColor = (color: string) => {
    setBackgroundColor(color);
    setMixColor(false);
  };
  const handleMixColor = (color: string) => {
    setBackgroundColor(color);
    setMixColor(true);
  };

  const colors = [
    "#0d0d0d",
    "#cbced4",
    "#200c94",
    "#c910b4",
    "#ed0c22",
    "#960311",
    "#c91e99",
    "#34eb9e",
    "#34dfeb",
  ];

  const linearGradients = [
    "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%), linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,31,0.5300245098039216) 35%, rgba(0,212,255,1) 100%)",
    "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,255,0,1) 50%, rgba(0,255,0,1) 100%)",
    "linear-gradient(90deg, rgba(255,0,255,1) 0%, rgba(0,255,255,1) 50%, rgba(255,0,0,1) 100%)",
    "linear-gradient(90deg, rgba(0,0,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,255,0,1) 100%)",
    "linear-gradient(90deg, rgba(255,255,0,1) 0%, rgba(0,255,255,1) 50%, rgba(255,0,255,1) 100%)",
    "linear-gradient(90deg, rgba(0,255,0,1) 0%, rgba(255,0,255,1) 50%, rgba(0,0,255,1) 100%)",
    "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,0,255,1) 50%, rgba(0,255,255,1) 100%)",
    "linear-gradient(90deg, rgba(0,255,0,1) 0%, rgba(255,0,255,1) 50%, rgba(255,0,0,1) 100%)",
    "linear-gradient(90deg, rgba(0,0,255,1) 0%, rgba(255,255,0,1) 50%, rgba(0,255,0,1) 100%)",
    "linear-gradient(90deg, rgba(255,255,0,1) 0%, rgba(0,255,255,1) 50%, rgba(255,0,255,1) 100%)",
    "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,0,255,1) 50%, rgba(0,0,255,1) 100%)",
    "linear-gradient(90deg, rgba(0,255,0,1) 0%, rgba(255,0,255,1) 50%, rgba(255,255,0,1) 100%)",
    "linear-gradient(90deg, rgba(0,0,255,1) 0%, rgba(255,255,0,1) 50%, rgba(0,255,255,1) 100%)",
    "linear-gradient(90deg, rgba(255,255,0,1) 0%, rgba(0,255,0,1) 50%, rgba(255,0,255,1) 100%)",
    "linear-gradient(90deg, rgba(255,0,255,1) 0%, rgba(255,255,0,1) 50%, rgba(0,0,255,1) 100%)",
  ];

  const radialGradients = [
    "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
    "radial-gradient(circle, rgba(255,0,0,1) 0%, rgba(255,255,0,1) 50%, rgba(0,255,0,1) 100%)",
    "radial-gradient(circle, rgba(255,0,255,1) 0%, rgba(0,255,255,1) 50%, rgba(255,0,0,1) 100%)",
    "radial-gradient(circle, rgba(0,0,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,255,0,1) 100%)",
    "radial-gradient(circle, rgba(255,255,0,1) 0%, rgba(0,255,255,1) 50%, rgba(255,0,255,1) 100%)",
    "radial-gradient(circle, rgba(0,255,0,1) 0%, rgba(255,0,255,1) 50%, rgba(0,0,255,1) 100%)",
    "radial-gradient(circle, rgba(255,0,0,1) 0%, rgba(255,0,255,1) 50%, rgba(0,255,255,1) 100%)",
    "radial-gradient(circle, rgba(0,255,0,1) 0%, rgba(255,0,255,1) 50%, rgba(255,0,0,1) 100%)",
    "radial-gradient(circle, rgba(0,0,255,1) 0%, rgba(255,255,0,1) 50%, rgba(0,255,0,1) 100%)",
    "radial-gradient(circle, rgba(255,255,0,1) 0%, rgba(0,255,255,1) 50%, rgba(255,0,255,1) 100%)",
    "radial-gradient(circle, rgba(255,0,0,1) 0%, rgba(255,0,255,1) 50%, rgba(0,0,255,1) 100%)",
    "radial-gradient(circle, rgba(0,255,0,1) 0%, rgba(255,0,255,1) 50%, rgba(255,255,0,1) 100%)",
    "radial-gradient(circle, rgba(0,0,255,1) 0%, rgba(255,255,0,1) 50%, rgba(0,255,255,1) 100%)",
    "radial-gradient(circle, rgba(255,255,0,1) 0%, rgba(0,255,0,1) 50%, rgba(255,0,255,1) 100%)",
    "radial-gradient(circle, rgba(255,0,255,1) 0%, rgba(255,255,0,1) 50%, rgba(0,0,255,1) 100%)",
  ];

  return (
    <div className="flex flex-wrap">
      {/* Left Column */}
      <div className="w-full lg:w-[40%]">
        {/* Solid Colors */}
        <div className="mb-6">
          <p className="mb-2 font-bold">Solid Colors</p>
          <div className="flex flex-wrap">
            {colors.map((color, index) => (
              <div
                key={index}
                className="w-10 h-10 m-1 flex items-center justify-center rounded-full cursor-pointer"
                style={{ backgroundColor: color }}
                onClick={() => handleColor(color)}
              ></div>
            ))}
          </div>
        </div>

        {/* Linear Gradients */}
        <div className="mb-6">
          <p className="mb-2 font-bold">Linear Gradients</p>
          <div className="flex flex-wrap">
            {linearGradients.map((gradient, index) => (
              <div
                key={index}
                className="w-10 h-10 m-1 flex items-center justify-center rounded-full cursor-pointer"
                style={{
                  backgroundImage: gradient,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                onClick={() => handleMixColor(gradient)}
              ></div>
            ))}
          </div>
        </div>

        {/* Radial Gradients */}
        <div>
          <p className="mb-2 font-bold">Radial Gradients</p>
          <div className="flex flex-wrap">
            {radialGradients.map((gradient, index) => (
              <div
                key={index}
                className="w-10 h-10 m-1 flex items-center justify-center rounded-full cursor-pointer"
                style={{
                  backgroundImage: gradient,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                onClick={() => handleMixColor(gradient)}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div
        className="w-full lg:w-[60%] p-4"
        style={{
          backgroundImage: mixColor ? backgroundColor : undefined,
          backgroundColor: mixColor ? undefined : backgroundColor,
        }}
      >
        <div className="border p-4 rounded shadow-md">
          <div className="mb-4 w-full">
            <Image
              src={Hill}
              alt="Hill Image"
              className="rounded-sm w-full h-40 lg:h-[200px] object-cover"
            />
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold">Mason Parker</h2>
            <p>Graphics & UI/UX Designer</p>
            <div className="flex items-center text-gray-600">
              <MdLocationPin className="mr-1" />
              Denver, United States
            </div>
          </div>
          <div className="border-dotted p-2">
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              ratione omnis magnam esse. Molestiae nam unde non aperiam officiis
              quos explicabo, maxime dolores reiciendis dolor molestias
              voluptatibus pariatur quidem iste neque veniam ipsa aut tempora
              repellat itaque. Eos, quae hic!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPage;
