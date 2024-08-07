import React from "react";
import Img01 from "../../assets/img/img-01.jpg";
import Team01 from "../../assets/img/team-01.jpg";
import Team02 from "../../assets/img/team-02.jpg";
import Team03 from "../../assets/img/team-03.jpg";
import Team04 from "../../assets/img/team-04.jpg";
import Team05 from "../../assets/img/team-05.jpg";
import Team06 from "../../assets/img/team-06.jpg";

const aboutUs = () => {
  const sectionImg = [
    { id: 1, name: "Frank Star", job: "Boss", img: Team01 },
    { id: 2, name: "Jane Naismith", job: "Graphic Designer", img: Team02 },
    { id: 3, name: "Mark Stoner", job: "Web Designer", img: Team03 },
    { id: 4, name: "Steve Carpenter", job: "Web Developer", img: Team04 },
    { id: 5, name: "Steff Kingston", job: "Account Manager", img: Team05 },
    { id: 7, name: "John Sandman", job: "Account Manager", img: Team06 },
  ];

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

      {/*-- SECTION 2 --*/}
      <section className="grid margin margin-bottom padding-2x background-primary">
        <div className="s-12 m-6 l-3">
          <span className="timer text-size-50 text-white text-strong">
            1500
          </span>
          <h3 className="text-uppercase text-strong">Ultricies eros sociis</h3>
          <p className="text-size-16 margin-m-bottom-20">
            Eodem modo typi nonummy maecenas ultricies eros sociis hendrerit
            dictum.
          </p>
        </div>

        <div className="s-12 m-6 l-3">
          <span className="timer text-size-50 text-white text-strong">95</span>{" "}
          <span className="text-size-50 text-white text-strong">%</span>
          <h3 className="text-uppercase text-strong">
            Magna condimentum suspendisse
          </h3>
          <p className="text-size-16 margin-m-bottom-20">
            Duis autem libero ullam magna condimentum suspendisse pellentesque.
          </p>
        </div>

        <div className="s-12 m-6 l-3">
          <span className="timer text-size-50 text-white text-strong">287</span>
          <h3 className="text-uppercase text-strong">
            Consequat phasellus orci
          </h3>
          <p className="text-size-16 margin-m-bottom-20">
            Mirum est notare dolor consequat phasellus orci pellentesque
            hendrerit.
          </p>
        </div>

        <div className="s-12 m-6 l-3">
          <span className="timer text-size-50 text-white text-strong">7</span>{" "}
          <span className="text-size-50 text-white text-strong">milion</span>
          <h3 className="text-uppercase text-strong">Augue et venenatis</h3>
          <p className="text-size-16 margin-m-bottom-20">
            Nam liber tempor erat augue et venenatis lorem ipsum dolor si amet.
          </p>
        </div>
      </section>
      {/*-- SECTION 3 --*/}
      <section className="grid margin">
        <h2 className="s-12 text-white text-thin text-size-30 text-white text-uppercase margin-top-bottom-20 center text-center">
          Our <b>Dream Team</b>
        </h2>
        {sectionImg.map((data) => {
          return (
            <div className="s-12 m-6 l-2 margin-bottom" key={data.id}>
              <img src={data.img} alt="pict-alt" />
              <h4 className="background-primary padding text-strong">
                {data.name}
              </h4>
              <p className="margin-bottom-10 text-primary text-uppercase">
                {data.job}
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default aboutUs;
