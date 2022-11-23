import { useState } from "react";
import { data } from "./data";
import left from "./vectors/left.png";
import right from "./vectors/right.png";

function Slider() {
  const [slide, setSlide] = useState(0);
  const { image } = data[slide];

  const prevSlide = () => {
    setSlide((slide) => {
      slide--;
      if (slide < 1) {
        return data.length - 1;
      }
      return slide;
    });
  };
  const nextSlide = () => {
    setSlide((slide) => {
      slide++;
      if (slide > data.length - 1) {
        slide = 0;
      }
      return slide;
    });
  };

  return (
    <div className="slide">
      <button className="leftBtn" onClick={prevSlide}>
        <img src={left} alt="left" className="btnImg" />
      </button>
      <img className="sliderImg" src={image} alt="restaurant" />
      <button className="rightBtn" onClick={nextSlide}>
        {" "}
        <img src={right} alt="right" className="btnImg" />
      </button>
    </div>
  );
}

export default Slider;
