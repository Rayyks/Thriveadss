import React from "react";
import { features } from "../data/content";

export const Features = () => {
  return (
    <section>
      <div className="px-8 mx-auto md:px-12 lg:px-32 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-12">
          <div className="order-first block w-full mt-12 aspect-square lg:mt-0 lg:col-span-5">
            <div className="overflow-hidden rounded-3xl lg:scale-110">
              <img
                alt="Features"
                className="relative w-full rounded-2xl"
                src="/features-person.webp"
              />
            </div>
          </div>
          <div className="bg-indigo-50 p-10 rounded-lg shadow-md lg:col-span-7">
            <div className="md:order-first space-y-10 py-18">
              <h1 className="text-4xl font-semibold text-gray-900 text-balance">
                Pernakah anda merasakan ini?
              </h1>
              <dl className="grid grid-cols-1 gap-6 mt-12 lg:grid-cols-1">
                {features.map((feature) => (
                  <div key={feature.title}>
                    <feature.icon className="bg-indigo-200 w-12 h-10 rounded-lg p-1 text-indigo-700 " />
                    <dt className="font-medium text-gray-900">
                      {feature.title}
                    </dt>
                    <dd className="mt-2 text-sm font-medium text-gray-500">
                      {feature.desc}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
