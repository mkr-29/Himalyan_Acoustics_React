import React from "react";
import Header from "./Components/Header/Header";
import Landing from "./Components/Landing/Landing";
import Services from "./Components/Services/Services";
import Footer from "./Components/Footer/Footer";
import FromOwner from "./Components/FromOwner/FromOwner";
import "./Homepage.css";
import Products from "./Components/Products/Products";
import Whyus from "./Components/WhyUs/Whyus";
import Client from "./Components/Client/Client";
import Quicklinks from "../Quicklinks/Quicklinks";
import { Link } from "react-router-dom";
import {animateScroll as scroll} from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Homepage() {
  return (
    <div>
      <Header />
      <a
        href="https://api.whatsapp.com/send?phone=+919779512233&text=Hello"
        class="float"
        target="_blank"
      >
        <i class="fa fa-whatsapp my-float"></i>
      </a>
      <Link to="/" className="to_top" onClick={() => scroll.scrollToTop()}>To Top <i class='fa fa-arrow-up ar_up'></i></Link>
      <Landing />
      <Quicklinks />
      <Services />
      <Products />
      <Whyus />
      <Client />
      <FromOwner />
      <Footer />
    </div>
  );
}
