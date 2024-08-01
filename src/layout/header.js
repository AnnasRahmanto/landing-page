import React from "react";
import carousel01 from "./../assets/img/carousel-01.jpg";
import carousel02 from "./../assets/img/carousel-02.jpg";
import carousel03 from "./../assets/img/carousel-03.jpg";

const Header = (props) => {
  return (
    <section className="grid">
      {/*Main Carousel */}
      <div className="s-12 margin-bottom carousel-fade-transition owl-carousel carousel-main carousel-nav-white carousel-hide-arrows background-dark">
        <div
          className="item background-image"
          style={{ backgroundImage: `url(${carousel01})` }}
        >
          <p className="text-padding text-strong text-white text-s-size-30 text-size-60 text-uppercase background-primary">
            We are Web design Heroes
          </p>
          <p className="text-padding text-size-20 text-dark text-uppercase background-white">
            Con nonummy sem integer interdum volutpat dis eget eligendi aliquip
            dolorum magnam.
          </p>
        </div>
        <div
          className="item background-image"
          style={{ backgroundImage: `url(${carousel02})` }}
        >
          <p className="text-padding text-strong text-white text-s-size-30 text-size-60 text-uppercase background-primary">
            Inspired by Technologies
          </p>
          <p className="text-padding text-size-20 text-dark text-uppercase background-white">
            Con nonummy sem integer interdum volutpat dis eget eligendi aliquip
            dolorum magnam.
          </p>
        </div>
        <div
          className="item background-image"
          style={{ backgroundImage: `url(${carousel03})` }}
          //style="background-image:url(img/carousel-03.jpg)"
        >
          <p className="text-padding text-strong text-white text-s-size-30 text-size-60 text-uppercase background-primary">
            CSS and HTML is our Playground
          </p>
          <p className="text-padding text-size-20 text-dark text-uppercase background-white">
            Con nonummy sem integer interdum volutpat dis eget eligendi aliquip
            dolorum magnam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
