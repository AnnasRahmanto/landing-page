import React from "react";
import Thumb01 from "../../assets/img/portfolio/thumb-01.jpg";
import Thumb02 from "../../assets/img/portfolio/thumb-02.jpg";
import Thumb03 from "../../assets/img/portfolio/thumb-03.jpg";
import Thumb04 from "../../assets/img/portfolio/thumb-04.jpg";
import Thumb05 from "../../assets/img/portfolio/thumb-05.jpg";
import Thumb06 from "../../assets/img/portfolio/thumb-06.jpg";

const gallery = () => {
  const Image = [
    { name: "Thumb 01", img: Thumb01 },
    { name: "Thumb 02", img: Thumb02 },
    { name: "Thumb 03", img: Thumb03 },
    { name: "Thumb 04", img: Thumb04 },
    { name: "Thumb 05", img: Thumb05 },
    { name: "Thumb 06", img: Thumb06 },
  ];

  return (
    <div>
      {/*<!-- TOP SECTION -->*/}
      <header className="grid">
        <div className="s-12 padding-2x">
          <h1 className="text-strong text-white text-center center text-size-60 text-uppercase margin-bottom-20">
            Our References
          </h1>
          <p className="text-size-20 text-white text-center center text-uppercase">
            Con nonummy sem integer interdum volutpat dis eget eligendi aliquip
            dolorum magnam. Iriure duis autem vel
            <br /> eum dolor in hendrerit in vulputate velit esse molestie
            consequat.
          </p>
        </div>
      </header>

      <section className="grid margin">
        {Image.map((item, index) => (
          <img
            key={index}
            className="s-12 m-6 margin-bottom"
            src={item.img}
            alt={item.name}
          />
        ))}
      </section>
    </div>
  );
};

export default gallery;
