import React from "react";
import { whyChooseUs } from "../data/content";

export const WhyChooseUs = () => {
  return (
    <div className="max-w-[80rem] px-4 sm:px-6 lg:px-8 lg:py-14 mx-auto py-20">
      <h2 className="text-left text-2xl lg:text-3xl font-bold montserrat-font-title">
        Thriveads
      </h2>
      <h2 className="montserrat-font-title text-2xl lg:text-4xl mt-5 mb-10 font-semibold">
        Mengapa Memilih Kami?
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
        {whyChooseUs.map((item, idx) => (
          <div className="bg-white rounded-lg p-6 py-10" key={idx}>
            <div className="inline-flex justify-center items-center rounded-md bg-violet-200 p-2 mb-5">
              <item.icon className="w-8 h-8 text-indigo-500" />
            </div>
            <div className="flex items-center gap-x-4 mb-4">
              <h3 className="text-xl font-bold text-gray-900 ">{item.title}</h3>
            </div>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
