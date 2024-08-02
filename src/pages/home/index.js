import React from "react";
import carousel01 from "../../assets/img/carousel-01.jpg";
import carousel02 from "../../assets/img/carousel-02.jpg";
import carousel03 from "../../assets/img/carousel-03.jpg";
import img06 from "../../assets/img/img-06.jpg";
import img01 from "../../assets/img/img-01.jpg";
import tumb01 from "../../assets/img/portfolio/thumb-01.jpg";
import tumb02 from "../../assets/img/portfolio/thumb-02.jpg";
import tumb03 from "../../assets/img/portfolio/thumb-03.jpg";
import tumb04 from "../../assets/img/portfolio/thumb-04.jpg";

const Home = () => {
  return (
    <div>
      {/*TOP SECTION */}
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
              Con nonummy sem integer interdum volutpat dis eget eligendi
              aliquip dolorum magnam.
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
              Con nonummy sem integer interdum volutpat dis eget eligendi
              aliquip dolorum magnam.
            </p>
          </div>
          <div
            className="item background-image"
            style={{ backgroundImage: `url(${carousel03})` }}
          >
            <p className="text-padding text-strong text-white text-s-size-30 text-size-60 text-uppercase background-primary">
              CSS and HTML is our Playground
            </p>
            <p className="text-padding text-size-20 text-dark text-uppercase background-white">
              Con nonummy sem integer interdum volutpat dis eget eligendi
              aliquip dolorum magnam.
            </p>
          </div>
        </div>
      </section>
      {/*Section 1 */}
      <section className="grid margin text-center">
        <a
          href="/"
          className="s-12 m-6 l-3 padding-2x vertical-center margin-bottom background-red"
        >
          <i className="icon-sli-equalizer text-size-60 text-white center margin-bottom-15"></i>
          <h3 className="text-strong text-size-20 text-line-height-1 margin-bottom-30 text-uppercase">
            Unlimited Color Variants
          </h3>
        </a>
        <a
          href="/"
          className="s-12 m-6 l-3 padding-2x vertical-center margin-bottom background-blue"
        >
          <i className="icon-sli-layers text-size-60 text-white center margin-bottom-15"></i>
          <h3 className="text-strong text-size-20 text-line-height-1 margin-bottom-30 text-uppercase">
            Many Reusable Elements
          </h3>
        </a>

        {/*<!-- Image-->*/}
        <img
          className="m-12 l-6 l-row-2 margin-bottom"
          src={img06}
          alt="alt-pict"
        />

        <a
          href="/"
          className="s-12 m-6 l-3 padding-2x vertical-center margin-bottom background-orange"
        >
          <i className="icon-sli-diamond text-size-60 text-white center margin-bottom-15"></i>
          <h3 className="text-strong text-size-20 text-line-height-1 margin-bottom-30 text-uppercase">
            Responsive Layoute
          </h3>
        </a>
        <a
          href="/"
          className="s-12 m-6 l-3 padding-2x vertical-center margin-bottom background-aqua"
        >
          <i className="icon-sli-share text-size-60 text-white center margin-bottom-15"></i>
          <h3 className="text-strong text-size-20 text-line-height-1 margin-bottom-30 text-uppercase">
            Clean Modern Code
          </h3>
        </a>
      </section>
      {/* section 2 */}
      <section className="grid section margin-bottom background-dark">
        <h2 className="s-12 l-6 center text-thin text-size-30 text-white text-uppercase margin-bottom-30">
          Responsive <b>Parallax Background</b>
        </h2>
        <p className="s-12 l-6 center">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
          sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
          aliquam erat volutpat.
        </p>
      </section>
      {/* section 3 */}
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
      {/* section 4 */}
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
      {/* section 5 */}
      <section className="grid margin text-center">
        <div className="m-12 l-4 padding-2x background-dark margin-bottom text-right">
          <h3 className="text-strong text-size-25 text-uppercase margin-bottom-10">
            Let's keep in touch
          </h3>
          <p>
            Deleniti pertinacia eu est, te his soluta quaestio pericula illum
            vulputate lobortis facilisis.
          </p>
        </div>
        <a
          href="/"
          className="s-12 m-6 l-2 padding vertical-center margin-bottom facebook hover-zoom"
        >
          <i className="icon-sli-social-facebook text-size-60 text-white center"></i>
        </a>
        <a
          href="/"
          className="s-12 m-6 l-2 padding vertical-center margin-bottom twitter hover-zoom"
        >
          <i className="icon-sli-social-twitter text-size-60 text-white center"></i>
        </a>
        <a
          href="/"
          className="s-12 m-6 l-2 padding vertical-center margin-bottom youtube hover-zoom"
        >
          <i className="icon-sli-social-youtube text-size-60 text-white center"></i>
        </a>
        <a
          href="/"
          className="s-12 m-6 l-2 padding vertical-center margin-bottom linkedin hover-zoom"
        >
          <i className="icon-sli-social-linkedin text-size-60 text-white center"></i>
        </a>
      </section>
    </div>
  );
};

export default Home;
