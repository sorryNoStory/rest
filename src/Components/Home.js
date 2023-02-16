import React from "react";
import Slider from "./Slider";
import bottleImg from "../events/bottle.png";
import roseImg from "../events/rose.png";
import cakeImg from "../events/cake.png";
import charityImg from "../events/charity.png";
import Book from "./Book";
import { motion } from 'framer-motion';

function Home() {
  return (
    <div>
      <div className="homeCont">
        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="heading">
          <h1>Discover authentic and fusion Italian cuisine. </h1>
          <h2>Award-winning fine dining</h2>
          <Book />
        </motion.div>
      </div>

      <div className="sliderCont">
        <motion.h2 
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="headingThree">Interior and vibe
        </motion.h2>
        <div>
          <Slider />
        </div>
      </div>

      <div className="events">
        <motion.h2 
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="headingThree">Uncompromising service level
        </motion.h2>

        <div className="listEvents">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="event">
            <img className="eventsImg" src={roseImg} alt="rose" />
            <h3>Romantic date</h3>
            <p>
              Treat your significant other with an unforgettable date. We
              organize everything.
            </p>
          </motion.div>

          <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="event">
            <img className="eventsImg" src={cakeImg} alt="cake" />
            <h3>B-day party</h3>
            <p>
              Celebrate your special day with your family and friends. Free cake
              and champagne!
            </p>
          </motion.div>

          <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="event">
            <img className="eventsImg" src={bottleImg} alt="bottle" />
            <h3>Events party</h3>
            <p>
              Christmas party, business meeting? Let us know, we will arrange
              everything.
            </p>
          </motion.div>

          <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="event">
            <img className="eventsImg" src={charityImg} alt="charity" />
            <h3>Charity events</h3>
            <p>
              We will help you organize any event at the highest level. Your
              guests will be satisfied.
            </p>
          </motion.div>
        </div>
        <div className="btnHome">
          <Book />
        </div>
      </div>
    </div>
  );
}

export default Home;
