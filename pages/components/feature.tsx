import React from "react";
import { CiCircleCheck, CiDeliveryTruck, CiMemoPad } from "react-icons/ci";
import { LuSprout } from "react-icons/lu";

export default function BrandFeatures() {
  const features = [
    {
      icon: <CiDeliveryTruck size={40} />,
      title: "Next day as standard",
      description: "Order before 3pm and get your order the next day as standard.",
    },
    {
      icon: <CiCircleCheck size={40} />,
      title: "Made by true artisans",
      description: "Handmade crafted goods made with real passion and craftsmanship.",
    },
    {
      icon: <CiMemoPad size={40} />,
      title: "Unbeatable prices",
      description: "For our materials and quality, you wont find better prices anywhere.",
    },
    {
      icon: <LuSprout size={40}  />,
      title: "Recycled packaging",
      description: "We use 100% recycled packaging to ensure our footprint is manageable.",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-6 sm:px-12 md:px-16 lg:px-20">
      <h2 className="text-3xl md:text-4xl font-serif text-[#332a52] text-center mb-10">
        What Makes Our Brand Different
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
          >
            <div className="mb-4 text-[#332a52]">{feature.icon}</div> {/* Added icon */}
            <h3 className="text-xl font-serif text-[#332a52] mb-3">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
