import React, { useState } from "react";
import { faq } from "../data/content";
import { motion, AnimatePresence } from "framer-motion";

const AccordionItem = ({
  id,
  title,
  children,
  activeAccordion,
  setActiveAccordion,
}) => {
  const isActive = activeAccordion === id;
  const handleToggle = () => setActiveAccordion(isActive ? "" : id);

  return (
    <div
      className={`text-gray-600 cursor-pointer group  ${
        isActive ? "text-gray-900" : "hover:text-gray-500"
      }`}
    >
      <button
        className="flex items-center justify-between w-full p-4 pb-5 my-3 text-lg font-medium select-none bg-gray-100"
        onClick={handleToggle}
      >
        <span className={isActive ? "text-indigo-500" : "text-black"}>
          {title}
        </span>
        <svg
          className={`size-8 text-gray-900 duration-300 ease-out transform ${
            isActive ? "-rotate-[45deg]" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M12 6v12m6-6H6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-2 text-base font-medium text-gray-500 text-balance">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FaqSection = () => {
  const [activeAccordion, setActiveAccordion] = useState("");

  return (
    <section>
      <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 w-full bg-white">
        <div className="text-center">
          <div>
            <p className="text-4xl montserrat-font-title text-gray-900">FAQ</p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-12 ">
          <div>
            {faq.map((item, index) => (
              <AccordionItem
                key={index}
                id={`accordion${index}`}
                title={item.q}
                activeAccordion={activeAccordion}
                setActiveAccordion={setActiveAccordion}
              >
                {item.a}
              </AccordionItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
