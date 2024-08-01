import React from "react";
import tumb01 from "../assets/img/portfolio/thumb-01.jpg";
import tumb02 from "../assets/img/portfolio/thumb-02.jpg";
import tumb03 from "../assets/img/portfolio/thumb-03.jpg";
import tumb04 from "../assets/img/portfolio/thumb-04.jpg";

const sectionFour = () => {
  return (
    <div>
      <h2 className="s-12 text-white text-thin text-size-30 text-white text-uppercase margin-top-bottom-40 center text-center">
        Top <b>References</b>
      </h2>
      <section className="grid margin">
        <a className="s-12 m-6 margin-bottom" href="gallery.html">
          <img className="full-img" src={tumb01} alt="alt-pict" />
        </a>
        <a className="s-12 m-6 margin-bottom" href="gallery.html">
          <img className="full-img" src={tumb02} alt="alt-pict" />
        </a>
        <a className="s-12 m-6 margin-bottom" href="gallery.html">
          <img className="full-img" src={tumb03} alt="alt-pict" />
        </a>
        <a className="s-12 m-6 margin-bottom" href="gallery.html">
          <img className="full-img" src={tumb04} alt="alt-pict" />
        </a>
      </section>
    </div>
  );
};

export default sectionFour;
