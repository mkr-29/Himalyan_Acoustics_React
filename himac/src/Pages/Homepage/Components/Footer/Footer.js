import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { animateScroll as scroll } from "react-scroll";
import { Link as LNK } from "react-scroll";

function Footer() {
  return (
    <footer>
      <h1 class="footer_head">
        Himalayan
        <strong class="footer_head_r"> Acoustics </strong>
      </h1>
      <div class="flinks">
        <Link to="/" onClick={() => scroll.scrollToTop()} class="foot_link">
          Home
        </Link>
        <LNK
          to="prod_range"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          class="foot_link"
        >
          Products
        </LNK>
        <LNK
          to="why-us"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          class="foot_link"
        >
          About Us
        </LNK>
        <LNK
          to="con_us"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          class="foot_link"
        >
          Contact
        </LNK>
      </div>

      <div class="ser_off_socials con_socials footer-social_icons">
        <a href="">
          <img class="con_ic" src="Icons/icon _facebook_.svg" alt="" />
        </a>
        <a href="">
          <img class="con_ic" src="Icons/icon _linkedin.svg" alt="" />
        </a>
        <a href="">
          <img class="con_ic" src="Icons/icon _twitter.svg" alt="" />
        </a>
        <a href="">
          <img class="con_ic" src="Icons/icon _instagram.svg" alt="" />
        </a>
      </div>

      <div class="footer-contact">username@email.com | +91 452 482 5615</div>
      <div class="footer-copyright">
        © 2022 Himalyan Accounts (Kool Pack and Allied Industries) • All Rights
        Reserved
      </div>
    </footer>
  );
}

export default Footer;
