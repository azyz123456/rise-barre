import React from "react";
import image1 from "../../assets/fitness2.jpg";
import image2 from "../../assets/fitness3.jpg";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/fitness4.webp";
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from "../../assets/tick.png";
import "./Reasons.css";
const Reasons = () => {
  return (
    <div className="Reasons" id='reasons'>
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        <div>
          <span className="stroke-text">Why </span>
          <span>choose us?</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <span>12+ expert trainers</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Practical and relevant tips, tools, and recipes</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Classes led by Certified Holistic Health Coaches</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Our Partners</span>
          </div>
        </div>
        <span style={{color: "var(--gray)", fontWeight: "normal"}}>OUR PARTNERS</span>
        <div className="partners">
              <img src={nb} alt="" />
              <img src={adidas} alt="" />
              <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
