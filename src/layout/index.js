import React from "react";
import Nav from "./nav";
import Header from "./header";
import SectionOne from "./sectionOne";
import SectionTwo from "./sectionTwo";
import SectionThree from "./sectionThree";
import SectionFour from "./sectionFour";
import SectionFive from "./sectionFive";
import Footer from "./footer";
const Layout = (props) => {
  return (
    <div className="size-1520 primary-color-red background-dark">
      <Nav />
      <main role="main">
        <Header />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
