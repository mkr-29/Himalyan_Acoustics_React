import React from "react";
import "./Client.css";
import Arf2 from "./Assets/arf1.svg";
import Arb2 from "./Assets/arb1.svg";
import Orn4 from "./Assets/orn4.svg";

export default function Client() {
  return (
    <div>
      {/* Client Reviews */}

      <div class="c_rev">
        {/* Ornament */}
        <img
          src={Orn4}
          alt=""
          class="ellipse_dec1"
        />

        {/* Body */}
        <div class="c_rev_body">
          {/* Title */}
          <span class="c_rev_title">
            WHAT <br class="c_rev_br1" />
            <span class="c_rev_title_middle">OUR CLIENTS</span>
            <br class="c_rev_br1" /> SAY
          </span>
          <div class="carousel_container">
            <div class="c_reviews">
              <div class="c_review">
                {/* Review No */}
                <div class="c_rev_serial">
                  01. <span class="c_ser_uline"></span>
                </div>

                {/* Review */}
                <div class="c_rev_review">
                  “We run a luxury hotel in Kasauli and working with Himalyan
                  Acoustics and their team remained a wonderful experience for
                  us. We were facing soundproofing issues in some of our hotel
                  areas for which we contacted Himalyan Acoustics. We got
                  excellent technical expertise, best and technical materials
                  from Himalyan Acoustics for the resolution of our problem.
                  They completely resolved our soundproof issues in a timely and
                  very professional manner. They were also very flexible in
                  customizing their products according to client needs. We look
                  forward to work with them for our upcoming projects also.”
                </div>

                {/* Client Info */}
                <div class="c_rev_name">Anand Mohan</div>
                <div class="c_rev_designation">
                  The Mansion, Bed and Breakfast
                </div>

                {/* Navigation */}
              </div>
              <div class="c_review">
                {/* Review No */}
                <div class="c_rev_serial">
                  02. <span class="c_ser_uline"></span>
                </div>

                {/* Review */}
                <div class="c_rev_review">
                  “I have used the product and services in a couple of projects
                  and have found the product effective. The services are backed
                  with professional competence and knowledge. We wish them the
                  very best.”
                </div>

                {/* Client Info */}
                <div class="c_rev_name">Nk negi</div>
                <div class="c_rev_designation">
                  Practising Architect, Tayumm studio
                </div>

                {/* Navigation */}
              </div>
              <div class="c_review">
                {/* Review No */}
                <div class="c_rev_serial">
                  03. <span class="c_ser_uline"></span>
                </div>

                {/* Review */}
                <div class="c_rev_review">
                  “Pinegrove School has had the pleasure of getting acoustic
                  panelling installed by eHimalyan Acousticsi on two occasions.
                  One in our 750-Seat Auditorium - The Colosseumi, in Pinegrove
                  School Dharampur and another in an Indoor éMulti- purpose
                  Halli (MPH) at Pinegrove School, Subathu, both in Distt Solan
                  HP. We have observed that their response and service is off
                  the highest order and expected quality. I have personally
                  known Mr Mohit Munshi and his revered father Mr Pradeep
                  Munshi, as well. I do have reasons to believe that Mohit is a
                  visionary entrepreneur, enthused with integrity and purpose.
                  The company he leads can surely be relied upon.”
                </div>

                {/* Client Info */}
                <div class="c_rev_name">Capt Aj Singh</div>
                <div class="c_rev_designation">
                  Member Board of Governors CBSE
                </div>

                {/* Navigation */}
              </div>
            </div>
            <div class="c_rev_carousel">
              <div class="c_car_up">
                <div class="c_car_upu">
                  <img
                    class="review-btn-prev"
                    src={Arb2}
                    alt=""
                  />
                  <span class="c_caru" id="review-count">
                    1
                  </span>
                </div>
              </div>
              <span class="c_car_div">/</span>
              <div class="c_car_d">
                <span class="c_card">3</span>
                <img
                  class="review-btn-next ar_fwd_cr"
                  src={Arf2}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
