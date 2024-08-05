import React from "react";
import Logo from "../assets/img/logo.svg";
import { Link, useLocation } from "react-router-dom";

const Nav = (props) => {
  const navLink = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About Us", path: "/aboutUs" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Gallery", path: "/gallery" },
    { id: 5, name: "Contact", path: "/contact" },
  ];

  const path = useLocation();

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
              {navLink.map((data) => {
                return (
                  <li key={data.id}>
                    <Link
                      to={data.path}
                      className={
                        path.pathname === data.path
                          ? "background-red text-white text-bold"
                          : " "
                      }
                    >
                      {data.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
