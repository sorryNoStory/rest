import { useState } from "react";
import { data } from "../data";
import left from "../vectors/left.png";
import right from "../vectors/right.png";
import { motion, AnimatePresence } from "framer-motion";

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
      <motion.div
        className="slide"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, duration: 2, transition: 0.5 }}
      >
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="leftBtn" onClick={prevSlide}>
          <img src={left} alt="left" className="btnImg" />
        </motion.button>
        <AnimatePresence exitBeforeEnter>
          <motion.img
            key={image}
            className="sliderImg"
            src={image}
            alt="restaurant"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        </AnimatePresence>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} 
          className="rightBtn" onClick={nextSlide}>
          {" "}
          <img src={right} alt="right" className="btnImg" />
        </motion.button>
      </motion.div>
    );
}

export default Slider;
