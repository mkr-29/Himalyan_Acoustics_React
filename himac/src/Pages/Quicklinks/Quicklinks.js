import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Homepage/Components/Footer/Footer";
import Header from "../Homepage/Components/Header/Header";
import "./Quicklinks.css";

export default function Quicklinks() {
  return (
    <div>
      <Header />
      <div className="quicklinks">
        <h1 className="q_links_h">Quick Links</h1>
        <div className="q_links_msec">
          <div className="q_links_sec">
            <h2 className="q_links_sh">About</h2>
            <div className="q_links">
              <Link to="/" className="q_link">
                News and Events
              </Link>
              <Link to="/" className="q_link">
                FAQ's
              </Link>
              <Link to="/" className="q_link">
                Manufacturing
              </Link>
            </div>
          </div>
          <div className="q_links_sec">
            <h2 className="q_links_sh">Product Categorization</h2>
            <div className="q_links">
              <Link to="/absorption" className="q_link">
                Absorption
              </Link>
              <Link to="/insiso" className="q_link">
                Insulation
              </Link>
              <Link to="/vibration" className="q_link">
                Vibration
              </Link>
              <Link to="/diffusion" className="q_link">
                Diffusion
              </Link>
            </div>
          </div>
          <div className="q_links_sec">
            <h2 className="q_links_sh">Product Range</h2>
            <div className="q_links">
              <Link to="/" className="q_link">
                Ceiling
              </Link>
              <Link to="/" className="q_link">
                Walls
              </Link>
              <Link to="/" className="q_link">
                Floor
              </Link>
              <Link to="/" className="q_link">
                Door
              </Link>
              <Link to="/" className="q_link">
                Windows
              </Link>
              <Link to="/" className="q_link">
                Movable Partitions
              </Link>
            </div>
          </div>
          <div className="q_links_sec qsec4">
            <h2 className="q_links_sh">Applications</h2>
            <div className="q_links">
              <Link to="/auditorium" className="q_link">
                Auditorium
              </Link>
              <Link to="/banquet_hall" className="q_link">
                Banquet Halls
              </Link>
              <Link to="/conference_hall" className="q_link">
                Conference Halls
              </Link>
              <Link to="/disco" className="q_link">
                Discos and Lounges
              </Link>
              <Link to="/gymnasiums" className="q_link">
                Gymnasium
              </Link>
              <Link to="/homethea" className="q_link">
                Home Theaters
              </Link>
              <Link to="/multipurpose" className="q_link">
                Multi-Purpose Halls
              </Link>
              <Link to="/office" className="q_link">
                Office
              </Link>
              <Link to="/studio" className="q_link">
                Studios
              </Link>
              <Link to="/worship" className="q_link">
                Worship Places
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
