import { lazy } from "react";
import {
  IconNumber1,
  IconNumber2,
  IconNumber3,
  IconNumber4,
  IconNumber5,
  IconNumber6,
} from "@tabler/icons-react";
const PricingBg = lazy(() => import("./ui/pricing-bg"));
import { pricing } from "../data/content";

export const Pricing = () => {
  // Helper function to get the appropriate icon
  const getIcon = (index) => {
    switch (index) {
      case 0:
        return (
          <IconNumber1 className="bg-white rounded-full w-4 h-4 text-black" />
        );
      case 1:
        return (
          <IconNumber2 className="bg-white rounded-full w-4 h-4 text-black" />
        );
      case 2:
        return (
          <IconNumber3 className="bg-white rounded-full w-4 h-4 text-black" />
        );
      case 3:
        return (
          <IconNumber4 className="bg-white rounded-full w-4 h-4 text-black" />
        );
      case 4:
        return (
          <IconNumber5 className="bg-white rounded-full w-4 h-4 text-black" />
        );
      default:
        return (
          <IconNumber6 className="bg-white rounded-full w-4 h-4 text-black" />
        );
    }
  };
  return (
    <section className="relative overflow-hidden bg-gradient-to-t from-gray-950 to-gray-800">
      <PricingBg />
      <div className="relative flex flex-col items-center justify-center px-8 py-12 mx-auto md:px-12 lg:px-16 xl:px-36 max-w-9xl lg:py-16">
        <h2 className="montserrat-font-title text-5xl text-white mb-20">
          Penetapan Harga
        </h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 gap-y-12">
          {pricing.map((item, index) => (
            <div key={index} className="px-4">
              <div className="flex items-center justify-center gap-3 text-white">
                <p className="font-mono text-4xl font-medium">{item.title}</p>
              </div>
              <div className="p-8 mt-4 shadow-2xl shadow-black rounded-xl bg-gray-900 backdrop-blur-xl border-white/5 ring-1 ring-white/10">
                <ul
                  className="flex flex-col text-sm text-gray-400 gap-y-3"
                  role="list"
                >
                  {item.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex flex-row items-center gap-2"
                    >
                      {getIcon(featureIndex)}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-mono font-bold tracking-tighter">
                  <span className="text-2xl text-white lg:text-3xl">
                    {item.price}
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    {" "}
                    /bln
                  </span>
                </p>
                <div className="flex mt-6 lg:mt-12">
                  <a
                    className="rounded-lg px-4 py-2 text-sm transition-all flex items-center justify-center text-white bg-gradient-to-b from-white/[.105] to-white/[.15] hover:to-white/[.25] h-10 ring-1 ring-inset ring-white/10 w-full"
                    href="#"
                  >
                    Beli Sekarang
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
