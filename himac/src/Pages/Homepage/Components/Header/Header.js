import React from "react";
import "./Header.css";
import Mail from "./Assets/mail.svg";
import Call from "./Assets/call.svg";
import Facebook from "./Assets/fb.svg";
import Linkedin from "./Assets/ln.svg";
import Instagram from "./Assets/in.svg";
import Twitter from "./Assets/tw.svg";
import { Link, NavLink } from "react-router-dom";
import {Link as LNK} from 'react-scroll';
import {animateScroll as scroll} from 'react-scroll';
import Logo from "./Assets/himalyan-logo.png"
import Dropdown from "./Dropdown";

export default function Header() {
  return (
    <div>
      <div className="header">
        
        {/* Upper portion of header line starts */}
        <div className="head_up">
          
          {/* Left portion of upper portion of header line starts */}
          <div className="head_up_left">
            
            {/* Mail */}
            <a href="mailto: sales@kpaiindia.com" className="mail_nav">
              <img src={Mail} className="mail__nav_ico" />
              <span className="mail_nav_txt">sales@kpaiindia.com</span>
            </a>

            {/* Phone Number */}
            <a href="tel: +919779512233" className="phone_nav">
              <img src={Call} className="phone_nav_ico"></img>
              <span className="phone_nav_txt">+91 9779 512 233</span>
            </a>

          </div>
          {/* Left portion of upper portion of header line ends */}

          {/* Right portion of upper portion of header line starts */}
          <div className="head_up_right">
            
            {/* Careers and Associates */}
            <div className="car_aso">
              <Link href="#" className="careers">
                Careers
              </Link>
              <Link href="#" className="associates">
                Associate
              </Link>
            </div>

            {/* Socials */}
            <Link href="facebook.com" className="facebook">
              <img className="fb_ico" src={Facebook} />
            </Link>
            <Link href="facebook.com" className="linkedin">
              <img className="ln_ico" src={Linkedin} />
            </Link>
            <Link href="facebook.com" className="twitter">
              <img className="tw_ico" src={Twitter} />
            </Link>
            <Link href="facebook.com" className="instagram">
              <img className="in_ico" src={Instagram} />
            </Link>
          </div>

          {/* Right portion of upper portion of header line ends */}
        </div>

        {/* Upper portion of header line ends */}

        {/* Header line */}
        <div className="nav_up_line"></div>

        {/* Lower portion of header line starts */}
        <div className="head_main" id="myTopnav">
          
          {/* Logo */}
          <NavLink to='/' className="header-logo">
            <img onClick={'/'} className="header-logo" src={Logo} />
          </NavLink>

          {/* Navigation links */}
          <div className="navlinks">
            <Link onClick={() => scroll.scrollToTop()} to="/" className="home_nav navlink">
              HOME
            </Link>
            <LNK
              to="prod_range"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              className="products_nav navlink"
            >
              PRODUCTS
            </LNK>
            {/* <Dropdown/> */}
            <LNK
              to="why-us"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              className="about_us_nav navlink"
            >
              ABOUT US
            </LNK>
            <LNK
              to="con_us"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              className="contact_nav navlink"
            >
              CONTACT
            </LNK>
          </div>
        </div>
      </div>
    </div>
  );
}
