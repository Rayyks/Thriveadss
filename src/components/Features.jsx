import React from "react";
import { features } from "../data/content";

export const Features = () => {
  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto my-10 gap-8 px-4">
      <div className="lg:w-1/2">
        <img
          className="w-full h-auto rounded-2xl"
          src="/laptop.jpg"
          alt="Business challenges illustration"
        />
      </div>

      <div className="lg:w-1/2 bg-gray-100 rounded-lg p-6">
        <h2 className="text-2xl md:text-3xl font-normal text-gray-900 mb-6">
          Pernahkah Anda Mengalami Hal Ini?
        </h2>

        {features.map((item, index) => (
          <div key={index} className="mb-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-indigo-100 rounded flex items-center justify-center mr-4">
                <item.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
            </div>
            <p className="text-sm text-gray-700 leading-6">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
