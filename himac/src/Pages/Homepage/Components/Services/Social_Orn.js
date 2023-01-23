import React from "react";
import "./Services.css";
import Facebook from "../Header/Assets/fb.svg";
import Linkedin from "../Header/Assets/ln.svg";
import Twitter from "../Header/Assets/tw.svg";
import Instagram from "../Header/Assets/in.svg";

export default function Social_Orn() {
  return (
    <div>
      <div className="ser_off_line_socials">
        <div className="services_offered_line"></div>

        <div className="ser_off_socials">
          <a href="">
            <img className="ser_off_ic" src={Facebook} alt="" />
          </a>
          <a href="">
            <img className="ser_off_ic" src={Linkedin} alt="" />
          </a>
          <a href="">
            <img className="ser_off_ic" src={Twitter} alt="" />
          </a>
          <a href="">
            <img
              className="ser_off_ic"
              src={Instagram}
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}
