import { IconBrandWhatsapp } from "@tabler/icons-react";
import React from "react";

export const Consultation = () => {
  return (
    <div className="max-w-6xl flex flex-col mx-auto size-full bg-blue-600 rounded-xl my-20">
      {/* <!-- ========== MAIN CONTENT ========== --> */}
      <main id="content">
        <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
          <h1 className="block text-2xl font-bold text-gray-100 sm:text-4xl montserrat-font-title">
            Ingin Berkonsultasi Dahulu?
          </h1>
          <p className="mt-3 text-lg text-gray-100">
            Jadwalkan meeting sekarang juga untuk mendapatkan panduan strategi
            digital marketing GRATIS!
          </p>
          <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
            <a
              className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-white text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
              href="https://wa.me/6281267663389?text=Halo%20admin%20saya%20ingin%20konsultasi%20masalah%20iklan%20bisnis%20saya.%20Mohon%20dibantu."
              target="_blank"
            >
              <IconBrandWhatsapp className="w-6 h-6" />
              Konsultasi Sekarang
            </a>
          </div>
        </div>
      </main>
      {/* <!-- ========== END MAIN CONTENT ========== --> */}
    </div>
  );
};

export const Questions = () => {
  return (
    <div className="max-w-6xl flex flex-col mx-auto size-full bg-blue-600 rounded-xl my-20">
      {/* <!-- ========== MAIN CONTENT ========== --> */}
      <main id="content">
        <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
          <h1 className="block text-2xl font-bold text-gray-100 sm:text-4xl montserrat-font-title">
            Ingin Berkonsultasi Dahulu?
          </h1>
          <p className="mt-3 text-lg text-gray-100">
            Jadwalkan meeting sekarang juga untuk mendapatkan panduan strategi
            digital marketing GRATIS!
          </p>
          <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
            <a
              className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-white text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
              href="https://wa.me/6281267663389?text=Halo%20admin%20saya%20ingin%20konsultasi%20masalah%20iklan%20bisnis%20saya.%20Mohon%20dibantu."
              target="_blank"
            >
              <IconBrandWhatsapp className="w-6 h-6" />
              Konsultasi Sekarang
            </a>
          </div>
        </div>
      </main>
      {/* <!-- ========== END MAIN CONTENT ========== --> */}
    </div>
  );
};
