import React from "react";
import "./Services.css";
import Ap1 from "./Assets/ap1.jpg";
import Ap2 from "./Assets/ap2.jpg";
import Ap3 from "./Assets/ap3.jpg";
import Ap4 from "./Assets/ap4.jpg";
import Ap5 from "./Assets/ap5.jpg";
import Ap6 from "./Assets/ap6.jpg";
import Ap7 from "./Assets/ap7.jpg";
import Ap8 from "./Assets/ap8.jpg";
import Ap9 from "./Assets/ap9.jpg";
import Ap10 from "./Assets/ap10.jpg";
import Ap11 from "./Assets/ap11.jpg";
import Social_Orn from "./Social_Orn";

export default function Services() {

  const serSlides = document.querySelectorAll(".ser-img");
  const serMaxSlide = serSlides.length;

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

  const goSerNext = function () {
    if (serSlideCounter != serMaxSlide - 1) {
      serSlideCounter++;
    } else {
      serSlideCounter = 0;
    }
    serSlideImage();
    updateServicesInfo();
  };

  //Slides will slide automatically
  let autoSerSlide = setInterval(goSerNext, 4000);

  return (
    <div>
      {/* Services Offered */}
      <div className="services_offered">
        {/* ornament */}
        <img src="Assets/Ornaments/ellipse2svg.svg" alt="" className="ellipse2" />
        <Social_Orn/>

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
                    src={Ap1}
                    alt="auditorium"
                    srcset=""
                  />
                </div>
                <div>
                  <img
                    className="ser-img"
                    src={Ap2}
                    alt="cinema_hall"
                    srcset=""
                  />
                </div>
                <div>
                  <img
                    className="ser-img"
                    src={Ap3}
                    alt="sound_studio"
                    srcset=""
                  />
                </div>
                <div>
                  <img
                    className="ser-img"
                    src={Ap4}
                    alt="auditorium"
                    srcset=""
                  />
                </div>
                <div>
                  <img
                    className="ser-img"
                    src={Ap5}
                    alt="auditorium"
                    srcset=""
                  />
                </div>
                <div>
                  <img
                    className="ser-img"
                    src={Ap6}
                    alt="auditorium"
                    srcset=""
                  />
                </div>
                <div>
                  <img
                    className="ser-img"
                    src={Ap7}
                    alt="auditorium"
                    srcset=""
                  />
                </div>
                <div>
                  <img
                    className="ser-img"
                    src={Ap8}
                    alt="auditorium"
                    srcset=""
                  />
                </div>
                <div>
                  <img
                    className="ser-img"
                    src={Ap9}
                    alt="auditorium"
                    srcset=""
                  />
                </div>
                <div>
                  <img
                    className="ser-img"
                    src={Ap10}
                    alt="auditorium"
                    srcset=""
                  />
                </div>
                <div>
                  <img
                    className="ser-img"
                    src={Ap11}
                    alt="auditorium"
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
