import React from "react";
import "./Services.css";
import Facebook from "./Assets/fbo.svg";
import Linkedin from "./Assets/lno.svg";
import Twitter from "./Assets/two.svg";
import Instagram from "./Assets/ino.svg";

export default function Social_Orn() {
  return (
    <div>
      <div className="ser_off_line_socials">
        <div className="services_offered_line"></div>

        <div className="ser_off_socials">
          <a href="http://">
            <img className="ser_off_ic" src={Facebook} alt="" />
          </a>
          <a href="http://">
            <img className="ser_off_ic" src={Linkedin} alt="" />
          </a>
          <a href="http://">
            <img className="ser_off_ic" src={Twitter} alt="" />
          </a>
          <a href="http://">
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
