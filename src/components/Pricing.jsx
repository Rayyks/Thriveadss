import React from "react";

const PricingCard = ({ title, price, features }) => (
  <div className="bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 flex flex-col justify-between">
    <div>
      <div className="p-8 bg-indigo-600 text-white">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
      </div>
      <div className="p-8">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="p-8 text-center">
      <p className="text-3xl font-bold">{price}</p>
    </div>
  </div>
);

export const Pricing = () => {
  const plans = [
    {
      title: "Basic",
      price: "Rp 400.000",
      features: [
        "Konsultasi dan Strategi 3x",
        "Pelatihan atau Workshop 2x",
        "Target Audience (lokasi, usia dan minat)",
        "Free konten desain dan copywriting",
        "Durasi iklannya 7 hari",
        "Report",
      ],
    },
    {
      title: "Plus",
      price: "Rp 800.000",
      features: [
        "Konsultasi dan Strategi 5x",
        "Pelatihan atau Workshop 4x",
        "Target Audience (lokasi, usia dan minat)",
        "Free konten desain dan copywriting",
        "Durasi iklannya 14 hari",
        "Report",
        "Additional support",
      ],
    },
    {
      title: "Premium",
      price: "Rp 1.200.000",
      features: [
        "Konsultasi dan Strategi 7x",
        "Pelatihan atau Workshop 6x",
        "Target Audience (lokasi, usia dan minat)",
        "Free konten desain dan copywriting",
        "Durasi iklannya 30 hari",
        "Report",
        "Premium support",
        "Advanced analytics",
      ],
    },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};
