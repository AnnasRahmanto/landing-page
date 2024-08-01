import React from "react";
import img01 from "../assets/img/img-01.jpg";

const sectionThree = () => {
  return (
    <section className="grid margin">
      {/*<-- Image-->*/}
      <img className="s-12 m-6 margin-bottom" src={img01} alt="alt-pict" />

      <div className="s-12 m-6 padding-2x margin-bottom background-blue">
        <h2 className="text-strong text-size-50 text-line-height-1">
          Nonummy nibh euismod tincidunt ut laoreet
          <br /> massa nec orci accusamus auctor aute
        </h2>
        <ul>
          <li>Sed diam nonummy nibh euismod tincidunt ut laoreet</li>
          <li>Dolore magna aliquam erat volutpat</li>
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</li>
          <li>Sed diam nonummy nibh euismod tincidunt ut laoreet</li>
          <li>Dolore magna aliquam erat volutpat</li>
        </ul>
      </div>
    </section>
  );
};

export default sectionThree;
