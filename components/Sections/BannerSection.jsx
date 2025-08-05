import React from "react";

function BannerSection() {
  return (
    <div>
      <section className="banner-carousel-section">
        {/* Banner Carousel */}
        <div className="banner-carousel owl-carousel owl-theme">
          {/* Slide */}
          <div className="slide">
            <div className="icons">
              <div
                className="icon-one"
                style={{ backgroundImage: "url(images/icons/icon-1.png)" }}
              />

              <div
                className="icon-two"
                style={{ backgroundImage: "url(images/icons/icon-2.png)" }}
              />

              <div
                className="icon-three"
                style={{ backgroundImage: "url(images/icons/icon-3.png)" }}
              />
              {/* Icon Four */}
              <div
                className="icon-four"
                style={{ backgroundImage: "url(images/icons/icon-4.png)" }}
              />
              {/* Icon Five */}
              <div
                className="icon-five"
                style={{ backgroundImage: "url(images/icons/icon-5.png)" }}
              />
              {/* Icon Six */}
              <div
                className="icon-six"
                style={{ backgroundImage: "url(images/icons/icon-6.png)" }}
              />
              {/* Icon Seven */}
              <div
                className="icon-seven"
                style={{ backgroundImage: "url(images/icons/icon-7.png)" }}
              />
              {/* Icon Eight */}
              <div
                className="icon-eight"
                style={{ backgroundImage: "url(images/icons/icon-8.png)" }}
              />
              {/* Icon Nine */}
              <div
                className="icon-nine"
                style={{ backgroundImage: "url(images/icons/icon-9.png)" }}
              />
            </div>
            {/* Pattern Layer */}
            <div
              className="pattern-layer"
              style={{
                backgroundImage: "url(images/main-slider/pattern-1.png)",
              }}
            />
            <div className="auto-container">
              <div className="row clearfix">
                {/* Content Column */}
                <div className="content-column col-xl-5 col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="content">
                      <h2>Unlock Seamless Efficiency and Growth.</h2>
                      <div className="text">
                        Empowering businesses to achieve more with less. Through
                        innovative solutions and intelligent automation, we help
                        you simplify processes, enhance productivity, and drive
                        impactful results.
                      </div>
                      <div className="link-box">
                        <a
                          href="/#contact-us"
                          className="theme-btn btn-style-two"
                        >
                          <span className="txt">Contact Us</span>
                        </a>
                        {/* <a
                          href="https://www.youtube.com/watch?v=SXZXtD60t2g"
                          className="lightbox-image theme-btn btn-style-three"
                        >
                          <span className="txt">See Live Demo</span>
                          <span className="icon fas fa-play" />
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Images Column */}
                <div className="images-column col-xl-7 col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column parallax-scene-1">
                    <div
                      data-depth="0.20"
                      className="parallax-layer image image-one"
                    >
                      <img
                        src="images/main-slider/content-image-1.png"
                        alt=""
                        className="lady-png"
                        // style={{ paddingTop: "120px" }}
                      />
                    </div>
                    <div
                      data-depth="0.20"
                      className="image image-two parallax-layer"
                    >
                      <img
                        src="images/main-slider/content-image-2.png"
                        alt=""
                      />
                    </div>
                    <div
                      data-depth="0.50"
                      className="image image-three parallax-layer"
                    >
                      <img
                        src="images/main-slider/content-image-3.png"
                        alt=""
                      />
                    </div>
                    <div
                      data-depth="0.30"
                      className="image image-four parallax-layer"
                    >
                      <img
                        src="images/main-slider/content-image-4.png"
                        alt=""
                      />
                    </div>
                    <div
                      data-depth="0.40"
                      className="image image-five parallax-layer"
                    >
                      <img
                        src="images/main-slider/content-image-5.png"
                        alt=""
                      />
                    </div>
                    <div
                      data-depth="0.60"
                      className="image image-six parallax-layer"
                    >
                      <img
                        src="images/main-slider/content-image-6.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Slide */}
        </div>
      </section>
    </div>
  );
}

export default BannerSection;
