import React from "react";

export const About = () => {
  return (
    <section className="bg-white w-full my-20">
      <div className="px-6 py-12 mx-auto sm:px-8 md:px-12 lg:px-24 max-w-7xl">
        <div className="relative overflow-hidden bg-white isolate sm:rounded-3xl pt-10 pb-10 px-4 border border-gray-200">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            {/* Text Section */}
            <div className="flex flex-col justify-center md:pr-8 lg:pr-12">
              <div className="max-w-xl mx-auto lg:mx-0">
                <h1 className="text-3xl font-semibold text-gray-900 md:text-4xl lg:text-5xl leading-tight mb-4">
                  Apa itu <br />
                  <span className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-indigo-600">
                    Thriveads
                  </span>
                </h1>
                <p className="font-medium text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed">
                  ThriveAds adalah solusi periklanan cerdas yang dikhususkan
                  untuk UMKM. Kami membantu bisnis kecil Anda meningkatkan
                  visibilitas, kesadaran merek, dan pertumbuhan dengan cara yang
                  efektif dan efisien.
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative flex justify-center items-center">
              <div className="absolute top-0 right-0 bottom-0 left-0 bg-indigo-600 rounded-tl-xl rounded-bl-xl transform scale-125 -z-10"></div>
              <div className="flex justify-center items-center">
                <img
                  alt="Thriveads Logo"
                  className="object-cover w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56"
                  src="/logo.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
