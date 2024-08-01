import React from "react";
import Logo from "../assets/img/logo.svg";

const Nav = (props) => {
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
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about-us.html">About Us</a>
              </li>
              <li>
                <a href="services.html">Services</a>
              </li>
              <li>
                <a href="gallery.html">Gallery</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
