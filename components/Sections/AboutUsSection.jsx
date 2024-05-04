import React from "react";

function AboutUsSection() {
  return (
    <div id="what">
      <section className="about-section">
        <div
          className="icon-layer paroller"
          data-paroller-factor="-0.10"
          data-paroller-factor-lg="0.10"
          data-paroller-type="foreground"
          data-paroller-direction="horizontal"
          style={{ backgroundImage: "url(images/icons/icon-13.png)" }}
        />
        <div className="auto-container">
          <div className="row clearfix">
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div
                className="inner-column wow fadeInLeft"
                data-wow-delay="250ms"
                data-wow-duration="1500ms"
              >
                <div className="image">
                  <img src="images/resource/about-1.png" alt="" />
                </div>
                {/* <div className="btn-box">
                  <a href="#" className="theme-btn btn-style-two">
                    <span className="txt">Learn More</span>
                  </a>
                </div> */}
              </div>
            </div>
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="sec-title">
                  <h2>About Us</h2>
                  {/* <div className="text">
                    Leading Digital Agency for <br /> Business Solution.
                  </div> */}
                </div>
                <div className="text">
                  <p>
                    JoonMS is the Management Ecosystem created for Small to
                    Midscale Businesses , helping them to compete with Large
                    players of their respective field of operation. JoonMS suite
                    provides them with the tools that are very essential in
                    current scenario of Communication and Technology. The
                    customizable and highly competent software package is spread
                    across all platforms which provides seamless experience for
                    the users, thus eliminating many factors responsible for
                    their bigger manual workforce but, lesser productivity.Out
                    of many principles, JoonMS is based on; User Happiness ,
                    Functional excellence, Long-term thinking, and Innovation
                    are our prime focused ones. Easy to connect to JoonMS team
                    makes us, perfect for our users and proved to be a sole
                    factor in keeping us along with their journey up and beyond.
                    JoonMS team managed by a youthful, well experienced team
                    from different sectors of operation, has made Research and
                    Development to handle each necessity smartly and smoothly.
                  </p>
                </div>
                <div className="author">
                  Baijoon N S <br /> ( Administrative Coordinator )
                </div>
                {/* <div className="signature">
                  <img src="images/icons/signature.png" alt="" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUsSection;
