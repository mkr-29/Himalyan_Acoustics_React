import React from "react";
import "./Whyus.css";
import House from "./Assets/icon _house_.svg";
import Premium from "./Assets/icon _premium_.svg";
import Construction from "./Assets/icon _construction_.svg";
import Globe from "./Assets/icon _globe_.svg";
import Architecture from "./Assets/icon _architecture_.svg";
import El3 from "./Assets/el3.svg";
import El4 from "./Assets/el4.svg";
import El5 from "./Assets/el5.svg";
import EcoFP from "./EcoFP";

export default function Whyus() {
  return (
    <div>
      {/* Why Us */}

      <div class="why_us" id="why-us">
        {/* Ornaments */}
        <img src={El3} alt="" class="ellipse1 ellipse4" />
        <img src={El4} alt="" class="ellipse1 ellipse3" />
        <img src={El5} alt="" class="ellipse5" />

        {/* Body */}
        <div class="why_us_body">
          <div class="why_us_content">
            {/* Title */}
            <span class="why_us_title">Why Us?</span>

            <div class="why_us_ico_desc">
              {/* Icons with info */}
              <div class="why_us_ic">
                <img class="why_us_ic_i" src={House} alt="" />
                <span class="why_us_ic_text">In-House Manufacturing</span>
              </div>
              <div class="why_us_ic">
                <img class="why_us_ic_i" src={Premium} alt="" />
                <span class="why_us_ic_text">Certified Products</span>
              </div>
              <div class="why_us_ic">
                <img class="why_us_ic_i" src={Construction} alt="" />
                <span class="why_us_ic_text">Best in Class Installation</span>
              </div>
              <div class="why_us_ic">
                <img class="why_us_ic_i" src={Globe} alt="" />
                <span class="why_us_ic_text">Global Coverage</span>
              </div>
              <div class="why_us_ic">
                <img class="why_us_ic_i" src={Architecture} alt="" />
                <span class="why_us_ic_text">Top Advisors committee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EcoFP/>
    </div>
  );
}
