import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Homepage/Components/Footer/Footer";
import Header from "../Homepage/Components/Header/Header";
import "./Quicklinks.css";
import { animateScroll as scroll } from "react-scroll";

export default function Quicklinks() {
  return (
    <div>
      <div className="quicklinks">
        <h1 className="q_links_h">Quick Links</h1>
        <div className="q_links_msec">
          <div className="q_links_sec">
            <h2 className="q_links_sh">About</h2>
            <div className="q_links">
              <Link
                to="/"
                onClick={() => scroll.scrollToTop()}
                className="q_link"
              >
                News and Events
              </Link>
              <Link
                to="/"
                onClick={() => scroll.scrollToTop()}
                className="q_link"
              >
                FAQ's
              </Link>
              <Link
                to="/"
                onClick={() => scroll.scrollToTop()}
                className="q_link"
              >
                Manufacturing
              </Link>
            </div>
          </div>
          <div className="q_links_ul" />
          <div className="q_links_sec">
            <h2 className="q_links_sh">Product Categorization</h2>
            <div className="q_links">
              <Link
                to="/absorption"
                onClick={() => scroll.scrollToTop()}
                className="q_link"
              >
                Absorption
              </Link>
              <Link
                to="/insiso"
                onClick={() => scroll.scrollToTop()}
                className="q_link"
              >
                Insulation
              </Link>
              <Link
                to="/vibration"
                onClick={() => scroll.scrollToTop()}
                className="q_link"
              >
                Vibration
              </Link>
              <Link
                to="/diffusion"
                onClick={() => scroll.scrollToTop()}
                className="q_link"
              >
                Diffusion
              </Link>
            </div>
          </div>
          <div className="q_links_ul" />
          <div className="q_links_sec">
            <h2 className="q_links_sh">Product Range</h2>
            <div className="q_links">
              <Link
                to="/ceilings"
                onClick={() => scroll.scrollToTop()}
                className="q_link"
              >
                Ceiling
              </Link>
              <Link
                to="/walls"
                onClick={() => scroll.scrollToTop()}
                className="q_link"
              >
                Walls
              </Link>
              <Link
                to="/floor"
                onClick={() => scroll.scrollToTop()}
                className="q_link"
              >
                Floor
              </Link>
              <Link
                to="/door"
                onClick={() => scroll.scrollToTop()}
                className="q_link"
              >
                Door
              </Link>
              <Link
                to="/windows"
                onClick={() => scroll.scrollToTop()}
                className="q_link"
              >
                Windows
              </Link>
              <Link
                to="/movpart"
                onClick={() => scroll.scrollToTop()}
                className="q_link"
              >
                Movable Partitions
              </Link>
            </div>
          </div>
          <div className="q_links_ul" />
          <div className="q_links_sec qsec4">
            <h2 className="q_links_sh">Applications</h2>
            <div className="q_links">
              <Link
                to="/auditorium"
                onClick={() => scroll.scrollToTop()}
                className="q_link"
              >
                Auditorium
              </Link>
              <Link
                to="/banquet_hall"
                onClick={() => scroll.scrollToTop()}
                className="q_link"
              >
                Banquet Halls
              </Link>
              <Link
                to="/conference_hall"
                onClick={() => scroll.scrollToTop()}
                className="q_link"
              >
                Conference Halls
              </Link>
              <Link
                to="/disco"
                onClick={() => scroll.scrollToTop()}
                className="q_link"
              >
                Discos and Lounges
              </Link>
              <Link
                to="/gymnasiums"
                onClick={() => scroll.scrollToTop()}
                className="q_link"
              >
                Gymnasium
              </Link>
              <Link
                to="/homethea"
                onClick={() => scroll.scrollToTop()}
                className="q_link"
              >
                Home Theaters
              </Link>
              <Link
                to="/multipurpose"
                onClick={() => scroll.scrollToTop()}
                className="q_link"
              >
                Multi-Purpose Halls
              </Link>
              <Link
                to="/office"
                onClick={() => scroll.scrollToTop()}
                className="q_link"
              >
                Office
              </Link>
              <Link
                to="/studio"
                onClick={() => scroll.scrollToTop()}
                className="q_link"
              >
                Studios
              </Link>
              <Link
                to="/worship"
                onClick={() => scroll.scrollToTop()}
                className="q_link"
              >
                Worship Places
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
