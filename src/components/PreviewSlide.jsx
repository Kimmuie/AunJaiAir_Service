import { useState, useEffect, useRef } from "react";

const slides = [
  {
    left: "/img/Poster1.png",
    right: "/img/Poster2.png",
  },
  {
    left: "/img/Poster3.png",
    right: "/img/Poster4.png",
  },
];

const PreviewSlide = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const total = slides.length;

  const goTo = (i) => {
    setIndex((i + total) % total);
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // Auto slide
  useEffect(() => {
    intervalRef.current = setInterval(next, 15000);
    return () => clearInterval(intervalRef.current);
  }, [index]);

  return (
    <div className="relative w-full flex flex-col gap-4">
      <div className="relative w-full h-full lg:h-100 overflow-hidden rounded-lg flex items-center px-4 sm:px-8 gap-4">

        {/* Prev */}
        <button
          onClick={prev}
          className="z-10 text-4xl bg-Secondary border-4 border-Secondary rounded-full px-1.5 cursor-pointer text-Primary hover:bg-transparent hover:text-Secondary transition"
        >
          ⮜
        </button>

        {/* Slider */}
        <div className="relative flex-1 h-full overflow-hidden">
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-full h-full flex gap-4 md:flex-row flex-col"
              >
                <img
                  src={slide.left}
                  className="w-full md:w-1/2 h-full object-fill sm:object-contain rounded"
                />
                <img
                  src={slide.right}
                  className="w-full md:w-1/2 h-full object-fill sm:object-contain rounded"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Next */}
        <button
          onClick={next}
          className="z-10 text-4xl bg-Secondary border-4 border-Secondary rounded-full px-1.5 cursor-pointer text-Primary hover:bg-transparent hover:text-Secondary transition"
        >
          ⮞
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-3 rounded-full transition-all ${
              i === index ? "w-8 bg-Secondary" : "w-3 bg-White"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PreviewSlide;
