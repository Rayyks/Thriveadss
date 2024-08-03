import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <NavLink
      className="block bg-blue-700 p-4 text-center transition duration-300"
      to="#"
    >
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <p className="me-2 inline-block text-sm text-gray-100">
          Dapatkan Strategi Digital Marketing Yang Tepat Untuk Bisnis Anda
          GRATIS Sekarang!
        </p>
        <span className=" inline-flex justify-center items-center gap-x-2 font-semibold text-yellow-300">
          Klik Disini.
          <svg
            className="shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </span>
      </div>
    </NavLink>
  );
};
