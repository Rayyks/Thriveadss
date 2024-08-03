import React from "react";
import {
  IconTimeline,
  IconGradienter,
  IconRulerMeasure,
  IconMoneybag,
  IconBrandNuxt,
} from "@tabler/icons-react";

const Feature = ({ icon: Icon, title, description, className }) => (
  <div
    className={`bg-white p-6 border border-gray-200 transition-colors ease-linear hover:bg-gray-200 ${className}`}
  >
    <div className="bg-indigo-600 p-3 inline-block mb-4">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const Benefits = () => {
  return (
    <div className="bg-white py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-xl font-medium mb-2">CuanManagement</h1>
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 montserrat-font-title">
            Apa Saja Yang Akan Anda Rasakan Setelah Menggunakan Layanan Kami?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <Feature
            icon={IconTimeline}
            title="Nggak Pusing Lagi Nyari Orderan Atau Konsumen"
            description="Bayangkan saja, Anda nggak perlu lagi repot-repot cari konsumen tiap hari. Kami yang bakal urus iklan Anda, biar pesanan datang sendiri."
          />
          <Feature
            icon={IconGradienter}
            title="Bisa Scale Up Bisnis Tanpa Takut Boncos"
            description="Mau mengembangkan bisnis tapi takut rugi? Jangan khawatir! Kami adalah tim advertiser profesional yang sudah terbukti handal. Kami pastikan setiap iklan yang kami buat benar-benar efektif."
          />
          <Feature
            icon={IconRulerMeasure}
            title="Lihat Permasalahan Bisnis Dengan Helicopter View"
            description="Dengan pengalaman kami yang sudah banyak menangani berbagai macam industri, kami bisa bantu Anda melihat permasalahan bisnis dari sudut pandang yang lebih luas."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          <Feature
            icon={IconMoneybag}
            title="Brand Anda Lebih Kreatif Dibanding Kompetitor"
            description="Tim kami yang berpengalaman akan membantu Anda membuat strategi digital marketing yang unik dan kreatif. Jadi, brand Anda bisa lebih menarik perhatian."
          />
          <Feature
            icon={IconBrandNuxt}
            title="Udah Nggak Boncos Lagi Iklannya"
            description="Iklan yang boncos itu sudah jadi masalah masa lalu. Dengan strategi yang sesuai dengan kondisi bisnis Anda, kami pastikan setiap iklan yang kami pasang benar-benar tepat sasaran. Hasilnya? Jauh lebih efektif dan efisien."
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
