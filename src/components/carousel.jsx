import React, { useState } from "react";

export default function Carousel({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? slides.length - 1 : activeIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex(activeIndex === slides.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <div className="carousel">
      <button onClick={handlePrevClick}>Prev</button>
      <img src={slides[activeIndex]} alt="carousel slide" />
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}


