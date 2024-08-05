import React from "react";
import Img01 from "../../assets/img/img-01.jpg";

const aboutUs = () => {
  return (
    <div>
      {/*-- TOP SECTION --*/}
      <header className="grid">
        <div className="s-12 padding-2x">
          <h1 className="text-strong text-white text-center center text-size-60 text-uppercase margin-bottom-20">
            About Us
          </h1>
          <p className="text-size-20 text-white text-center center text-uppercase">
            Con nonummy sem integer interdum volutpat dis eget eligendi aliquip
            dolorum magnam. Iriure duis autem vel
            <br /> eum dolor in hendrerit in vulputate velit esse molestie
            consequat.
          </p>
        </div>
      </header>
      {/*-- SECTION 1 --*/}
      <section className="grid">
        <div className="m-12 l-6 padding-2x background-white">
          <h2 className="text-dark">
            Nonummy nibh euismod tincidunt ut laoreet
          </h2>
          <p>
            Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
            aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
            dolore magna aliquam erat volutpat.
            <br />
            <br />
          </p>
          <h2 className="text-dark">
            Wisi malesuada scelerisque praesent mi accumsan
          </h2>
          <p>
            Tortor massa nec orci accusamus auctor aute euismod lacus ipsam
            culpa earum beatae fugiat. Wisi malesuada scelerisque praesent mi
            accumsan euismod ea penatibus felis lacinia maiores dolorum optio
            officia. Nonummy libero adipiscing vel nulla dis tristique torquent
            sollicitudin felis inceptos eligendi molestiae omnis aspernatur.
          </p>
        </div>

        {/*-- Image-->*/}
        <img className="l-6 hide-s hide-m" src={Img01} alt="pict-alt" />
      </section>
    </div>
  );
};

export default aboutUs;
