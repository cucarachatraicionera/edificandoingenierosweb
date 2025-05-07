// components/Carousel/index.js
import React, { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/carousel1.jpeg",
  "/carousel2.jpeg",
  "/carousel3.jpeg",
  "/carousel4.jpeg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[300px] laptop:h-[500px] overflow-hidden rounded-xl shadow-lg">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={img}
            alt={`Carousel image ${idx + 1}`}
            layout="fill"
            objectFit="cover"
            priority={idx === 0}
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
