import { IconBrandWhatsapp } from "@tabler/icons-react";
import React from "react";

const ConsultationCard = ({ title, description, buttonText }) => {
  return (
    <div className="max-w-6xl mx-auto w-full bg-[#726BE9] rounded-xl my-10 px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 montserrat-font-title">
          {title}
        </h2>
        <p className="text-base sm:text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex justify-center">
          <a
            className="sm:w-2/3 md:w-1/2 lg:w-[100%]  py-3 px-6 inline-flex justify-center items-center gap-x-2 text-sm sm:text-base font-medium rounded-lg border border-transparent bg-[#DEDCFF] text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ease-in-out"
            href="https://wa.me/6281267663389?text=Halo%20admin%20saya%20ingin%20konsultasi%20masalah%20iklan%20bisnis%20saya.%20Mohon%20dibantu."
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export const Consultation = () => {
  return (
    <ConsultationCard
      title="Ingin Berkonsultasi Dahulu?"
      description="Jadwalkan meeting sekarang juga untuk mendapatkan panduan strategi digital marketing GRATIS!"
      buttonText="Konsultasi Sekarang"
    />
  );
};

export const Questions = () => {
  return (
    <ConsultationCard
      title="Ada Pertanyaan?"
      description="Jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda dengan segala pertanyaan seputar layanan kami."
      buttonText="Tanyakan Sekarang"
    />
  );
};
