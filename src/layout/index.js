import React from "react";
import Nav from "./nav";
import Header from "./header";
import SectionOne from "./sectionOne";
import SectionTwo from "./sectionTwo";
import SectionThree from "./sectionThree";
const Layout = (props) => {
  return (
    <div className="size-1520 primary-color-red background-dark">
      <Nav />
      <main role="main">
        <Header />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </main>
    </div>
  );
};

export default Layout;
