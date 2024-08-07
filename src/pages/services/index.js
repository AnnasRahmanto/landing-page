import React from "react";
import Img06 from "../../assets/img/img-06.jpg";
import Img01 from "../../assets/img/img-01.jpg";
import Img05 from "../../assets/img/img-05.jpg";

const services = () => {
  return (
    <div>
      {/*<!-- TOP SECTION -->*/}
      <header className="grid">
        <div className="s-12 padding-2x">
          <h1 className="text-strong text-white text-center center text-size-60 text-uppercase margin-bottom-20">
            Our Services
          </h1>
          <p className="text-size-20 text-white text-center center text-uppercase">
            Con nonummy sem integer interdum volutpat dis eget eligendi aliquip
            dolorum magnam. Iriure duis autem vel
            <br /> eum dolor in hendrerit in vulputate velit esse molestie
            consequat.
          </p>
        </div>
      </header>

      {/*<!-- SECTION 1 -->*/}
      <section className="grid">
        <div className="m-12 l-6 padding-2x background-white">
          <p className="text-strong text-size-80 text-red">01</p>

          <h2 className="text-size-50 text-line-height-1 text-dark">
            <b>Nonummy nibh euismod tincidunt ut laoreet</b>
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy.
          </p>
          <p>
            Libero malesuada varius leo mollis laoreet error occaecat unde
            nostra harum. A morbi hymenaeos rhoncus ridiculus temporibus
            consectetur ducimus exercitation. Integer arcu adipiscing augue
            iusto nam duis facilisi senectus iaculis proin repudiandae nemo
            cupidatat. Ipsum donec enim leo ultricies pulvinar aute semper
            dolores habitant impedit harum.{" "}
          </p>
        </div>

        {/*<!-- Image-->*/}
        <img className="m-12 l-6" src={Img06} alt="alt-pict" />
      </section>

      {/*<!-- SECTION 2 -->*/}
      <section className="grid">
        {/*<!-- Image-->*/}
        <img className="m-12 l-6" src={Img01} alt="alt-pict" />

        <div className="m-12 l-6 padding-2x background-dark">
          <p className="text-strong text-size-80 text-red">02</p>

          <h2 className="text-size-50 text-line-height-1 margin-bottom-30 text-white">
            <b>Libero malesuada varius leo mollis tincidunt</b>
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy.
          </p>
          <p>
            Libero malesuada varius leo mollis laoreet error occaecat unde
            nostra harum. A morbi hymenaeos rhoncus ridiculus temporibus
            consectetur ducimus exercitation. Integer arcu adipiscing augue
            iusto nam duis facilisi senectus iaculis proin repudiandae nemo
            cupidatat. Ipsum donec enim leo ultricies pulvinar aute semper
            dolores habitant impedit harum.{" "}
          </p>
        </div>
      </section>

      {/*<!-- SECTION 3 -->*/}
      <section className="grid">
        <div className="m-12 l-6 padding-2x background-aqua">
          <p className="text-strong text-size-80 text-white">03</p>

          <h2 className="text-size-50 text-line-height-1 text-white">
            <b>Morbi hymenaeos rhoncus ridiculus</b>
          </h2>

          <h3>Nonummy nibh euismod tincidunt ut laoreet</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy.
          </p>
          <p>
            Libero malesuada varius leo mollis laoreet error occaecat unde
            nostra harum. A morbi hymenaeos rhoncus ridiculus temporibus
            consectetur ducimus exercitation. Integer arcu adipiscing augue
            iusto nam duis facilisi senectus iaculis proin repudiandae nemo
            cupidatat. Ipsum donec enim leo ultricies pulvinar aute semper
            dolores habitant impedit harum.{" "}
          </p>
        </div>

        {/*<!-- Image-->*/}
        <img className="m-12 l-6" src={Img05} alt="alt-pict" />
      </section>

      {/*<!-- SECTION 6 -->*/}
      <section className="grid margin-bottom">
        <div className="s-12 padding-2x background-dark">
          <a
            href="contact.html"
            className="s-12 m-9 l-3 center button text-size-20 text-white background-red"
          >
            CONTACT US
          </a>
        </div>
      </section>
    </div>
  );
};

export default services;
