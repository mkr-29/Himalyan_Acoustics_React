import React from "react";
import "./Landing.css";
import Whatsapp from "./Assets/wa.svg";

export default function Landing() {
  
  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });

  // Landing Slider
  // const slides = document.querySelectorAll(".slide");
  // const btnPrev = document.querySelector(".btn-prev");
  // const btnNext = document.querySelector(".btn-next");
  // const dotContainer = document.querySelector(".dots");

  // const maxSlide = slides.length;
  // let curSlide = 0;
  // var counter = 0;

  // const landingCount = document.getElementById("landing-image-count");
  // var landingTitle = document.getElementById("landing-title");
  // var landingInfo = document.getElementById("landing-info");

  // var titles = ["The Colosseum", "Wooden Tiles", "False Ceiling"];

  // var info = ["Pinegrove School", "Dummy Text", "Dummy Text"];

  // slides.forEach((s, i) => (s.style.transform = `translateY(${100 * i}%)`));

  // Dot working logic
  // const createDots = function () {
  //   slides.forEach(function (_, i) {
  //     dotContainer.insertAdjacentHTML(
  //       "beforeend",
  //       `<button class = "dots__dot" data-slide = "${i}"></button>`
  //     );
  //   });
  // };
  // createDots();

  // dotContainer.addEventListener("click", function (e) {
  //   if (e.target.classList.contains("dots__dot")) {
  //     const { slide } = e.target.dataset;
  //     goToSlide(slide);
  //   }
  // });
  // const activateDot = function (slide) {
  //   document
  //     .querySelectorAll(".dots__dot")
  //     .forEach((dot) => dot.classList.remove("dots__dot--active"));

  //   document
  //     .querySelector(`.dots__dot[data-slide="${slide}"]`)
  //     .classList.add("dots__dot--active");
  // };
  // activateDot(0);

  // Slider Logic
  // const goToSlide = function (slide) {
  //   slides.forEach(
  //     (s, i) => (s.style.transform = `translateY(${100 * (i - slide)}%)`)
  //   );
  // };
  // const updateLandingData = function () {
  //   landingCount.innerHTML = `0${curSlide + 1}`;
  //   landingTitle.innerHTML = titles[curSlide];
  //   landingInfo.innerHTML = info[curSlide];
  // };
  // btnNext.addEventListener("click", function () {
  //   if (curSlide == maxSlide - 1) {
  //     curSlide = 0;
  //   } else {
  //     curSlide++;
  //   }
  //   goToSlide(curSlide);
  //   activateDot(curSlide);
  //   updateLandingData();
  // });

  // btnPrev.addEventListener("click", function () {
  //   if (curSlide == 0) {
  //     curSlide = maxSlide - 1;
  //   } else {
  //     curSlide--;
  //   }
  //   goToSlide(curSlide);
  //   activateDot(curSlide);
  //   updateLandingData();
  // });

  return (
    <div>
      {/* Landing page starts */}

      <div className="landing">
        <div className="landing_whole">
          {/* Left portion of landing page starts */}

          <div className="landing_left">
            <h1 className="pg_title_landing">
              Himalyan <span className="pg_title_landing_right">Acoustics</span>
            </h1>
            <h3 className="tagline">
              Your one-stop-solution for all
              <span className="tagline_red">acoustic</span> your needs.
            </h3>

            {/* Call to action buttons */}

            <div className="call_to_action">
              <a href="/" className="know_more">
                Know more about us
                <img
                  className="arror_fwd_ico"
                  src="Icons/icon _arrow_forward_.svg"
                  alt=""
                />
              </a>
              or
              <div>
                <a className="chat_ctc" href="https://wa.me/+919779512233">
                  <span className="whatsapp">Let's have a Chat!!</span>
                  <img className="wh_ico" src={Whatsapp} />
                </a>
              </div>
            </div>
            <div className="company_brief">
              We here at Himalayan acoustics, a sister company of Kool Pack and
              Allied Industries aims to provide the state of the art
              infrastructure for Sound and Acoustics. Over a 17 plus years of
              time we have excelled in manufacturing acoustics and pro-acoustic
              products using eco-friendly Cutting-edge European Technology with
              national and international standards.
            </div>

            {/* Stats */}

            <div className="stats">
              <div className="up_stats">
                <div className="stat1">
                  <div className="stat_per">17+</div>
                  <div className="stat_brief">Years of experinece</div>
                </div>
                <div className="stat1">
                  <div className="stat_per">97%</div>
                  <div className="stat_brief">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                  </div>
                </div>
                <div className="stat1">
                  <div className="stat_per">97%</div>
                  <div className="stat_brief">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                  </div>
                </div>
              </div>
              <div className="down_stats">
                <div className="stat2">
                  <div className="stat_per">120+</div>
                  <div className="stat_brief2">
                    Lorem ipsum dolor sit amet
                    <br />
                    consectetur adipiscing elit
                  </div>
                </div>
                <div className="stat2">
                  <div className="stat_per">10+</div>
                  <div className="stat_brief2">
                    Lorem ipsum dolor sit amet
                    <br />
                    consectetur adipiscing elit
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Left portion of landing page ends */}

          {/* Right portion of landing page starts */}
          <div className="landing-right">
            <div className="slider">
              <div className="landing-slider">
                <div className="slide">
                  <img src="./Assets/Images/auditorium1.svg" alt="auditorium" />
                </div>
                <div className="slide">
                  <img src="./Assets/Images/prod1.svg" alt="auditorium" />
                </div>
                <div className="slide">
                  <img src="./Assets/Images/prod2.svg" alt="auditorium" />
                </div>
              </div>
              <div className="landing-slider-navigation">
                <button className="landing-carousel-btn">
                  <img
                    src="Icons/icon _keyboard arrow down_.svg"
                    alt=""
                    className="btn-prev"
                  />
                </button>
                <div className="dots">
                  {/* Dots code inserted through JS */}
                </div>
                <button className="landing-carousel-btn">
                  <img
                    src="Icons/icon _keyboard arrow down_.svg"
                    alt=""
                    className="btn-next"
                  />
                </button>
              </div>
            </div>
            <div className="landing-slider-text">
              <div className="landing-slider-count">
                <p id="landing-image-count">01</p>
              </div>
              <div className="landing-slider-info">
                <h2 className="lsi_head" id="landing-title">
                  The Colosseum
                </h2>
                <h3 className="lsi_head" id="landing-info">
                  Pinegrove School
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="landing_below">
        <div className="landing_below_content">
          <span className="ren_wor">
            OUR <span className="ren_reno">RENOWNED</span> WORKS
          </span>
          <div className="landing_end_line"></div>
        </div>
      </div>
    </div>
  );
}
