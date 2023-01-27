import "./Dropdown.css";
// import { AiFillCaretDown } from "@react-icons/all-files/ai/AiFillCaretDown";
import { useState } from "react";
import { Link } from "react-router-dom";
import Down from "./Assets/down.svg";

function Dropdown() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="dropdown">
      <div className="dropdown_btn" onClick={(e) => setIsActive(!isActive)}>
        Products
        <img className="d_arr" src={Down} alt="" />
        {/* <FaChevronDown/> */}
      </div>
      {isActive && (
        <div className="dropdown_content">
          <Link to="/absorption" className="dropdown_item">
            Absorption
          </Link>
          <Link to="/insiso" className="dropdown_item">
            Insulation/Isolation
          </Link>
          <Link to="/vibration" className="dropdown_item">
            Vibration
          </Link>
          <Link to="/diffusion" className="dropdown_item">
            Diffusion
          </Link>
          <hr />
        </div>
      )}
    </div>
  );
}
export default Dropdown;
