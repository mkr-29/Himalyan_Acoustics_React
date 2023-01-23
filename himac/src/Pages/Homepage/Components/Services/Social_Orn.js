import React from "react";
import "./Services.css";

export default function Social_Orn() {
  return (
    <div>
      <div className="ser_off_line_socials">
        <div className="services_offered_line"></div>

        <div className="ser_off_socials">
          <a href="">
            <img
              className="ser_off_ic"
              src="Icons/icon _facebook_.svg"
              alt=""
            />
          </a>
          <a href="">
            <img className="ser_off_ic" src="Icons/icon _linkedin.svg" alt="" />
          </a>
          <a href="">
            <img className="ser_off_ic" src="Icons/icon _twitter.svg" alt="" />
          </a>
          <a href="">
            <img
              className="ser_off_ic"
              src="Icons/icon _instagram.svg"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}
