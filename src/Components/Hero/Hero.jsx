import React from 'react'
import "./Hero.css"
import hero_image from "../../assets/barre2.png"
import hero_back from "../../assets/hero_image_back.png"
import heart from "../../assets/heart.png"
import calories from "../../assets/calories.png"
import { motion } from "framer-motion"
import NumberCounter from "number-counter";
import Header from '../Header/Header'
import { Link } from "react-scroll";

const Hero = () => {
  const transition = { duration: 3, type: "spring" };
  const mobile = window.innerWidth<=768? true:false;
  return (
    <div className="hero" id='home'>
      <div className="blur hero-blur"></div>

      <div className="left-h">
        <Header/>
        {/* the best ad */}
        <div className="the-best">
          <motion.div
            initial={{left: mobile? "178px": '238px' }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>Low Impact, High Intensity Classes</span>
        </div>
        {/* Hero text */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Rise </span>
            <span>By</span>
          </div>
          <div>
            <span>Lifting Others</span>
          </div>
          <div>
            <span>
             We offer full-body workouts format that anyone can do.
            </span>
          </div>
        </div>

        {/* experience figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={12} start={1} delay={4} preFix="+" />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={430} start={200} delay={4} preFix="+" />
            </span>
            <span>Members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} delay={2} preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-btns">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      {/* Right Side */}
      <div className="right-h">
      <Link className="btn"
              to="contact"
              spy={true}
              smooth={true}
            >
              Join now
            </Link>

        {/* heart rate */}
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero images */}
        <img className="hero-img" src={hero_image} alt="" />
        <motion.img
            initial={{right: mobile? "11rem": '11rem' }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          className="hero-back"
          src={hero_back}
          alt=""
        />

        {/* calories */}
        <motion.div
          initial={{ right: "32rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={calories} alt="" />
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
