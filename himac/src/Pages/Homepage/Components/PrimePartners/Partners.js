import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Partner1 from './Partners/client1.png'
import Partner2 from './Partners/client2.png'
import Partner3 from './Partners/client3.png'
import Partner4 from './Partners/client4.png'
import Partner5 from './Partners/client5.png'
import Partner6 from './Partners/client6.png'
import Partner7 from './Partners/client7.png'
import Partner8 from './Partners/client8.png'
import Partner9 from './Partners/client9.png'
import Partner10 from './Partners/client10.png'
import Partner11 from './Partners/client11.png'
import Partner12 from './Partners/client12.png'
import Partner13 from './Partners/client13.png'
import Partner15 from './Partners/client15.png'
import Partner16 from './Partners/client16.png'
import Partner17 from './Partners/client17.png'
import Partner18 from './Partners/client18.png'
import Partner19 from './Partners/client19.png'
import Partner20 from './Partners/client20.png'
import Partner21 from './Partners/client21.png'
import Partner22 from './Partners/client22.png'
import Partner23 from './Partners/client23.png'
import Partner24 from './Partners/client24.png'
import Partner25 from './Partners/client25.png'
import Partner26 from './Partners/client26.png'
import Partner27 from './Partners/client27.png'
import Partner28 from './Partners/client28.png'
import Partner29 from './Partners/client29.png'
import Partner30 from './Partners/client30.png'
import Partner31 from './Partners/client31.png'
import Partner32 from './Partners/client32.png'
import Partner33 from './Partners/client33.png'
import Partner34 from './Partners/client34.png'
import Partner35 from './Partners/client35.png'

import './Partners.css'

export default class CenterMode extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 200,
            autoplay: true,
            autoplaySpeed: 100,
            slidesToScroll: 1,
            slidesToShow: 5,
        };
        return (
            <div className="service-carousel">
                <h2>Our Prime
                    <span> Partners</span>
                </h2>
                <Slider {...settings}>
                    <div>

                    </div>
                    <div>
                        <img src={Partner1} alt='' className="partner-img" />
                    </div>
                    <div>
                        <img src={Partner2} alt='' className="partner-img" />
                    </div>
                    <div>
                        <img src={Partner3} alt='' className="partner-img" />
                    </div>
                    <div>
                        <img src={Partner4} alt='' className="partner-img" />
                    </div>
                    <div>
                        <img src={Partner5} alt='' className="partner-img" />
                    </div>
                    <div>
                        <img src={Partner6} alt='' className="partner-img" />
                    </div>
                    <div>
                        <img src={Partner7} alt='' className="partner-img" />
                    </div>
                    <div>
                        <img src={Partner8} alt='' className="partner-img" />
                    </div>
                    <div>
                        <img src={Partner9} alt='' className="partner-img" />
                    </div>
                    <div>
                        <img src={Partner10} alt='' className="partner-img" />
                    </div>
                    <div>
                        <img src={Partner11} alt='' className="partner-img" />
                    </div>
                    <div>
                        <img src={Partner12} alt='' className="partner-img" />
                    </div>
                    <div>
                        <img src={Partner13} alt='' className="partner-img" />
                    </div>
                    <div>
                        <img src={Partner15} alt='' className="partner-img" />
                    </div>
                    <div>
                        <img src={Partner16} alt='' className="partner-img" />
                    </div>
                    <div>
                        <img src={Partner17} alt='' className="partner-img" />
                    </div>
                    <div>
                        <img src={Partner18} alt='' className="partner-img" />
                    </div>
                    <div>
                        <img src={Partner19} alt='' className="partner-img" />
                    </div>
                    <div>
                        <img src={Partner20} alt='' className="partner-img" />
                    </div>
                    <div>
                        <img src={Partner21} alt='' className="partner-img" />
                    </div>
                    <div>
                        <img src={Partner22} alt='' className="partner-img" />
                    </div>
                    <div>
                        <img src={Partner23} alt='' className="partner-img" />
                    </div>
                    <div>
                        <img src={Partner24} alt='' className="partner-img" />
                    </div>
                    <div>
                        <img src={Partner25} alt='' className="partner-img" />
                    </div>
                    <div>
                        <img src={Partner26} alt='' className="partner-img" />
                    </div>
                    <div>
                        <img src={Partner27} alt='' className="partner-img" />
                    </div>
                    <div>
                        <img src={Partner28} alt='' className="partner-img" />
                    </div>
                    <div>
                        <img src={Partner29} alt='' className="partner-img" />
                    </div>
                    <div>
                        <img src={Partner30} alt='' className="partner-img" />
                    </div>
                    <div>
                        <img src={Partner31} alt='' className="partner-img" />
                    </div>
                    <div>
                        <img src={Partner32} alt='' className="partner-img" />
                    </div>
                    <div>
                        <img src={Partner33} alt='' className="partner-img" />
                    </div>
                    <div>
                        <img src={Partner34} alt='' className="partner-img" />
                    </div>
                    <div>
                        <img src={Partner35} alt='' className="partner-img" />
                    </div>
                </Slider>
            </div>
        );
    }
}