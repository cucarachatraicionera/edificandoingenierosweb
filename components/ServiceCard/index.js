import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ name, description }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div
        className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
          mounted && theme === "dark"
            ? "hover:bg-slate-800"
            : "hover:bg-slate-50"
        } hover:scale-105 link`}
      >
        <h1 className="text-3xl">{name || "Heading"}</h1>
        <p
          className="mt-5 opacity-40 text-xl cursor-pointer hover:opacity-70 transition"
          onClick={() => setIsModalOpen(true)}
        >
          {description ||
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
        </p>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative bg-white p-6 rounded-xl max-w-lg w-full mx-4 text-black shadow-lg">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-4 text-black text-2xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-3">{name}</h2>
            <p className="text-lg text-justify">{description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceCard;
