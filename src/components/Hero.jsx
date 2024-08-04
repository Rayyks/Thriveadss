import { IconBrandWhatsapp } from "@tabler/icons-react";
import React from "react";

export const Hero = () => {
  return (
    <section className="relative flex items-center w-full py-20 lg:py-0">
      <div className="relative items-center w-full px-5  mx-auto lg:px-16 lg:py-36 max-w-7xl md:px-12">
        <div className="relative flex-col items-start m-auto align-middle">
          <div className="grid grid-cols-1 gap-6 lg:gap-24 lg:grid-cols-2">
            <div className="relative items-center gap-12 m-auto lg:inline-flex">
              <div className="max-w-xl text-center lg:text-left">
                <div>
                  <p className="text-3xl montserrat-font-title md:text-4xl text-slate-900">
                    Santai aja, biar kami yang handle iklan kamu biar hasilnya
                    maksimal!
                  </p>
                  <p className="mt-4 text-lg text-gray-900 lg:text-md">
                    Santai aja, serahkan iklan sosmed kamu ke kami. Hasil
                    maksimal, omset melonjak! Kami akan kerja sama dengan kamu
                    untuk capai target. Konsultasi gratis, BURUAN DAFTAR
                    SEKARANG !!
                  </p>
                </div>
                <div className="flex flex-col items-center gap-3 mt-10 lg:flex-row">
                  <a
                    className="inline-flex items-center justify-center w-full px-6 py-4 text-center text-white duration-200 bg-indigo-500 border-2 border-indigo-500 focus:outline-none focus-visible:outline-black focus-visible:ring-black hover:bg-transparent hover:border-indigo-500 hover:text-indigo-500 lg:w-auto rounded-xl"
                    href="https://wa.me/6281267663389?text=Halo%20admin%20saya%20ingin%20konsultasi%20masalah%20iklan%20bisnis%20saya.%20Mohon%20dibantu."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconBrandWhatsapp className="w-6 h-6" />
                    <span className="ml-3">Konsultasi Sekarang</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="block w-full mt-12 lg:mt-0">
              <img
                alt="hero"
                className="object-cover object-center w-full mx-auto  lg:ml-auto rounded-2xl"
                src="/hero-1.png"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
