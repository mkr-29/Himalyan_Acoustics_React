import React from "react";
import "./Services.css";
import Service1 from "./Assets/Ser1.jpg";
import Service2 from "./Assets/Ser2.jpg";
import Service3 from "./Assets/Ser3.jpg";
import Service4 from "./Assets/Ser4.jpg";
import Service5 from "./Assets/Ser5.jpg";
import Service6 from "./Assets/Ser6.jpg";
import Service7 from "./Assets/Ser7.jpg";
import Service8 from "./Assets/Ser8.jpg";
import Service9 from "./Assets/Ser9.jpg";
import Service10 from "./Assets/Ser10.jpg";
import Service11 from "./Assets/Ser11.jpg";
import SocialOrn from "./Social_Orn";
import Orn1 from "./Assets/el1.svg";
import Orn2 from "./Assets/el2.svg";

export default function Services() {

  const serSlides = document.querySelectorAll(".ser-img");
  // const serMaxSlide = serSlides.length;

  let serTitle = document.getElementById("serTitle");
  let serInfo = document.getElementById("serText");

  var services = [
    "Auditoriums",
    "Banquet Halls",
    "Conference Hall",
    "Disco's & Lounges",
    "Gymnasiums",
    "Home Theaters",
    "Multipurpose Hall",
    "Offices",
    "Studios",
    "Restaurants",
    "Worship Places",
  ];

  var serDesc = [
    "We have to take care the stage differently, where most of the sounds will be played.",
    "Banquet Halls are the places, which are built to host thefunctions like marriages, events, parties etc.",
    "Conference halls are basically meant for the exchange of communication.",
    "Discotheques and lounges are comparatively small as compare to the banquet halls.",
    "Gymnasiums are the multi-use spaces and are used forsporting events.",
    "Home Theater is an area where most of the people give the least attention on acoustics.",
    "Multipurpose hall as an area which could be used for multiple kind of activities.",
    "Offices: Bangalore; Gurgaon; Bihar, Bhagalpur; Office Jodhpur; OSTRO Delhi;",
    "Do you know the Elementor image box height? Offering the best image box wordpress plugin.",
    "Offering the Elementor image box with button. We are offering image box carousel elementor",
    "Offering the Elementor image box with button. We are offering image box carousel elementor",
  ];

  let serSlideCounter = 0;

  serSlides.forEach((serSlide, serIndex) => {
    serSlide.style.left = `${serIndex * 110}%`;
  });

  const updateServicesInfo = function () {
    serTitle.innerHTML = services[serSlideCounter];
    serInfo.innerHTML = serDesc[serSlideCounter];
  };

  const serSlideImage = function () {
    serSlides.forEach((serSlide) => {
      serSlide.style.transform = `translateX(-${serSlideCounter * 110}%)`;
    });
  };

  // const goSerNext = function () {
  //   if (serSlideCounter !== serMaxSlide - 1) {
  //     serSlideCounter++;
  //   } else {
  //     serSlideCounter = 0;
  //   }
  //   serSlideImage();
  //   updateServicesInfo();
  // };

  //Slides will slide automatically
  // let autoSerSlide = setInterval(goSerNext, 4000);

  return (
    <div>
      {/* Services Offered */}
      <div className="services_offered">
        {/* ornament */}
        <img src={Orn1} alt="" className="ellipse1" />
        <img src={Orn2} alt="" className="ellipse2" />
        <SocialOrn />

        <div className="services_offered_whole">
          {/* Title */}
          <span className="ser_off_title">
            Services <span className="ser_off_right">Offered</span>
          </span>

          {/* Body */}
          <div className="ser_off_body">
            <div className="ser_off_carousel">
              <div className="image-wrapper">
                <div>
                  <img
                    className="ser-img"
                    src={Service1}
                    alt="Auditoriums"
                    srcset=""
                  />
                </div>
                <div>
                  <img
                    className="ser-img"
                    src={Service2}
                    alt="Banquet Halls"
                    srcset=""
                  />
                </div>
                <div>
                  <img
                    className="ser-img"
                    src={Service3}
                    alt="Conference Hall"
                    srcset=""
                  />
                </div>
                <div>
                  <img
                    className="ser-img"
                    src={Service4}
                    alt="Disco's & Lounges"
                    srcset=""
                  />
                </div>
                <div>
                  <img
                    className="ser-img"
                    src={Service5}
                    alt="Gymnasiums"
                    srcset=""
                  />
                </div>
                <div>
                  <img
                    className="ser-img"
                    src={Service6}
                    alt="Home Theaters"
                    srcset=""
                  />
                </div>
                <div>
                  <img
                    className="ser-img"
                    src={Service7}
                    alt="Multipurpose Hall"
                    srcset=""
                  />
                </div>
                <div>
                  <img
                    className="ser-img"
                    src={Service8}
                    alt="Offices"
                    srcset=""
                  />
                </div>
                <div>
                  <img
                    className="ser-img"
                    src={Service9}
                    alt="Studios"
                    srcset=""
                  />
                </div>
                <div>
                  <img
                    className="ser-img"
                    src={Service10}
                    alt="Restaurants"
                    srcset=""
                  />
                </div>
                <div>
                  <img
                    className="ser-img"
                    src={Service11}
                    alt="Worship Places"
                    srcset=""
                  />
                </div>
              </div>
            </div>
            <div className="ser_off_textbox">
              <span className="conf_halls" id="serTitle">
                Auditoriums
              </span>
              <span className="conf_text" id="serText">
                We have to take care the stage differently where most of the
                sounds will be played.
              </span>
              <span className="ser-buttons">
                <button className="ser-btn-prev">&larr;</button>
                <button className="ser-btn-next">&rarr;</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
