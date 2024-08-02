import React from "react";
import Nav from "./nav";
import Footer from "./footer";
import Home from "./../pages/home";
import PublicRouter from "../config/router";

const Layout = (props) => {
  return (
    <div className="size-1520 primary-color-red background-dark">
      <Nav />
      <main role="main">
        <PublicRouter />
        {/*
        <Home />
        */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
