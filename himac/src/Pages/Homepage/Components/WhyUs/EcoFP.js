import React from "react";
import "./EcoFP.css";
import IndoorAir from "./Assets/ico_indoor_air.svg";
import Manufacture from "./Assets/ico_manufacture.svg";
import Recycle from "./Assets/ico_recycle.svg";
import Thermal from "./Assets/ico_thermal.svg";
import NoFlame from "./Assets/ico_no_flame.svg";
import Mr2 from "./Assets/mr2.svg";
import Mr3 from "./Assets/mr3.svg";

export default function EcoFP() {
  return (
    <div>
      {/* Our Ecofriendly Practices */}
      <div class="eco_frip">
        <div class="eco_frip_body">
          {/* Title */}
          <span class="eco_frip_title">Our EcoFriendly Practices</span>

          {/* Icons with info */}
          <div class="eco_ico_box">
            <div class="eco_ico_img">
              <img
                src={IndoorAir}
                alt=""
                class="eco_ico"
              />
            </div>
            <span class="eco_txt">Indoor Air Quality</span>
          </div>

          <div class="eco_ico_box">
            <div class="eco_ico_img">
              <img
                src={Manufacture}
                alt=""
                class="eco_ico"
              />
            </div>
            <span class="eco_txt">Local Manufacturing</span>
          </div>

          <div class="eco_ico_box">
            <div class="eco_ico_img">
              <img
                src={Recycle}
                alt=""
                class="eco_ico"
              />
            </div>
            <span class="eco_txt">Recyclability and Resusability</span>
          </div>

          <div class="eco_ico_box">
            <div class="eco_ico_img">
              <img
                src={Thermal}
                alt=""
                class="eco_ico"
              />
            </div>
            <span class="eco_txt">Acoustics & Thermal Insulation</span>
          </div>

          <div class="eco_ico_box">
            <div class="eco_ico_img">
              <img
                src={NoFlame}
                alt=""
                class="eco_ico"
              />
            </div>
            <span class="eco_txt">Non-Toxic Flame</span>
          </div>
        </div>

        {/* Ornaments */}
        <img
          src={Mr2}
          alt=""
          class="meshed_rectangle2"
        />
        <img
          src={Mr3}
          alt=""
          class="meshed_rectangle3"
        />
      </div>
    </div>
  );
}
