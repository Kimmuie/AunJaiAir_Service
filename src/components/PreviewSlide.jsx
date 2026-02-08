import { useState, useEffect } from "react";

const PreviewSlide = () => {
  const imageLeftSrc = [
    "/img/previewimage_1.png",
    "/img/previewimage_2.png",
  ];

  const imageRightSrc = [
    "/img/previewimage_2.png",
    "/img/previewimage_1.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState("next");

  const handleTransition = (newIndex, dir) => {
    if (isTransitioning) return;
    
    setDirection(dir);
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false)
      setCurrentIndex(newIndex);
    }, 500);
  };

  // Auto Slide
  useEffect(() => {
    if (isTransitioning) return;
    const interval = setInterval(() => {
      goToNext();
    }, 15000);
    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning]);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? imageLeftSrc.length - 1 : currentIndex - 1;
    handleTransition(newIndex, "prev");
  };

  const goToNext = () => {
    const newIndex = currentIndex === imageLeftSrc.length - 1 ? 0 : currentIndex + 1;
    handleTransition(newIndex, "next");
  };

  const goToSlide = (index) => {
    if (index === currentIndex) return;
    const dir = index > currentIndex ? "next" : "prev";
    handleTransition(index, dir);
  };

  // Helper function to get safe index
  const getSafeIndex = (index) => {
    if (index < 0) return imageLeftSrc.length - 1;
    if (index >= imageLeftSrc.length) return 0;
    return index;
  };

  const prevIndex = getSafeIndex(currentIndex - 1);
  const nextIndex = getSafeIndex(currentIndex + 1);

  return (
    <div className="relative w-full mt-15">
      {/* Slider Container */}
      <div className="relative w-full h-96 overflow-hidden rounded-lg flex justify-center items-center gap-4 px-8">

        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          disabled={isTransitioning}
          className="text-Primary text-4xl cursor-pointer bg-Secondary border-4 border-Secondary hover:bg-transparent hover:text-Secondary rounded-full px-2 py-0.5 transition flex justify-center items-center z-10 flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous slide"
        >
          ⮜
        </button>

        {/* Images Container */}
        <div className="relative flex-1 h-full overflow-hidden">
          {/* Previous Slide */}
          <div 
            className={`absolute inset-0 flex justify-between md:flex-row transition-transform flex-col gap-4 h-full duration-500 ease-in-out ${
              isTransitioning && direction === "prev"
                ? "translate-x-0" 
                : "-translate-x-full "
            }`}
          >
            <img
              src={imageLeftSrc[prevIndex]}
              alt={`Slide ${prevIndex + 1} - Left`}
              className="w-full md:w-1/2 h-full object-cover rounded"
            />
            <img
              src={imageRightSrc[prevIndex]}
              alt={`Slide ${prevIndex + 1} - Right`}
              className="w-full md:w-1/2 h-full object-cover rounded"
            />
          </div>

          {/* Current Slide */}
          <div 
            className={`absolute inset-0 flex justify-between md:flex-row flex-col transition-transform gap-4 h-full duration-500 ease-in-out ${
              isTransitioning 
                ? direction === "next" 
                  ? "-translate-x-full" 
                  : "translate-x-full"
                : "translate-x-0 "
            }`}
          >
            <img
              src={imageLeftSrc[currentIndex]}
              alt={`Slide ${currentIndex + 1} - Left`}
              className="w-full md:w-1/2 h-full object-cover rounded"
            />
            <img
              src={imageRightSrc[currentIndex]}
              alt={`Slide ${currentIndex + 1} - Right`}
              className="w-full md:w-1/2 h-full object-cover rounded"
            />
          </div>

          {/* Next Slide */}
          <div 
            className={`absolute inset-0 flex justify-between md:flex-row transition-transform flex-col gap-4 h-full duration-500 ease-in-out ${
              isTransitioning && direction === "next"
                ? "translate-x-0 " 
                : "translate-x-full"
            }`}
          >
            <img
              src={imageLeftSrc[nextIndex]}
              alt={`Slide ${nextIndex + 1} - Left`}
              className="w-full md:w-1/2 h-full object-cover rounded"
            />
            <img
              src={imageRightSrc[nextIndex]}
              alt={`Slide ${nextIndex + 1} - Right`}
              className="w-full md:w-1/2 h-full object-cover rounded"
            />
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={goToNext}
          disabled={isTransitioning}
          className="text-Primary text-4xl cursor-pointer bg-Secondary border-4 border-Secondary hover:bg-transparent hover:text-Secondary rounded-full px-2 py-0.5 transition flex justify-center items-center z-10 flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next slide"
        >
          ⮞
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-20">
        {imageLeftSrc.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-Secondary w-8"
                : "bg-White hover:w-4 cursor-pointer"
            } disabled:cursor-not-allowed`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default PreviewSlide;