import React from "react";
import Logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";

const Nav = (props) => {
  //const navigate = useNavigate();
  return (
    <div>
      <header className="grid">
        {/* Top Navigation */}
        <nav className="s-12 grid background-none background-primary-hightlight">
          {/* logo */}
          <a href="index.html" className="m-12 l-3 padding-2x logo">
            <img src={Logo} alt="pict-alert" />
          </a>
          <div className="top-nav s-12 l-9">
            <ul className="top-ul right chevron">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/aboutUs">About Us</Link>
                {/*<a href="#" onClick={() => navigate("/aboutUs")}>
                  About Us
                </a>*/}
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
