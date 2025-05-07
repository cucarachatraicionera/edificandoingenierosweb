import { useState } from "react";

const images = [
  "/images/construccion1.jpg",
  "/images/construccion2.jpg",
  "/images/construccion3.jpg",
  "/images/construccion4.jpg",
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prev = () => setCurrent((current - 1 + total) % total);
  const next = () => setCurrent((current + 1) % total);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-6">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[current]}
          alt={`Construcción ${current + 1}`}
          className="w-full h-[300px] object-cover transition-all duration-500"
        />
      </div>

      <button
        onClick={prev}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-logoGreen text-white px-3 py-1 rounded-full shadow-md"
      >
        ◀
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-logoGreen text-white px-3 py-1 rounded-full shadow-md"
      >
        ▶
      </button>

      <div className="flex justify-center gap-2 mt-3">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-logoGreen" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
