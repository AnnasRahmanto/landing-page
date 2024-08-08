import { CCarousel, CCarouselItem } from "@coreui/react";
import React from "react";
import Carousel01 from "../../assets/img/carousel-01.jpg";
import Carousel02 from "../../assets/img/carousel-02.jpg";
import Carousel03 from "../../assets/img/carousel-03.jpg";

const Slider = () => {
  const Container = [
    {
      id: "1",
      title: "We are Web design Heroes",
      subtitle:
        "Con nonummy sem integer interdum volutpat dis eget eligendi aliquip dolorum magnam.",
      img: Carousel01,
    },
    {
      id: "2",
      title: "Inspired by Technologies",
      subtitle:
        "Con nonummy sem integer interdum volutpat dis eget eligendi aliquip dolorum magnam.",
      img: Carousel02,
    },
    {
      id: "3",
      title: "CSS and HTML is our Playground",
      subtitle:
        "Con nonummy sem integer interdum volutpat dis eget eligendi aliquip dolorum magnam.",
      img: Carousel03,
    },
  ];

  return (
    <div className="s-12 margin-bottom background-dark">
      <CCarousel controls transition="crossfade">
        {Container.map((data) => {
          return (
            <CCarouselItem>
              <div
                className="item background-image"
                style={{
                  backgroundImage: `url(${data.img})`,
                  height: "500px",
                }}
              >
                <div style={{ paddingTop: "150px" }}>
                  <p className="text-padding text-strong text-white text-s-size-30 text-size-60 text-uppercase background-primary">
                    {data.title}
                  </p>
                  <p className="text-padding text-size-20 text-dark text-uppercase background-white">
                    {data.subtitle}
                  </p>
                </div>
              </div>
            </CCarouselItem>
          );
        })}
      </CCarousel>
    </div>
  );
};

export default Slider;
