import React from "react";

function AboutUsSection() {
  return (
    <div>
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

            <div className="carousel-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="sec-title">
                  <h2>About Us</h2>
                </div>
                <div className="testimonial-carousel owl-carousel owl-theme">
                  <div className="testimonial-block">
                    <div className="inner-box">
                      <div className="text">
                        JoonMS was founded on the belief that technology should
                        simplify, not complicate. As a visionary provider of
                        software solutions, we’re committed to transforming the
                        way businesses operate by delivering innovative,
                        intuitive, and reliable tools. Our journey began with a
                        passion for solving real-world challenges, and today,
                        we’re proud to empower organizations across industries
                        with solutions that enhance efficiency, foster growth,
                        and ensure sustainability. Backed by a team of dedicated
                        professionals, JoonMS is more than a tech company—we’re
                        your partner in achieving success and building a better
                        future for businesses worldwide.
                      </div>
                    </div>
                  </div>

                  {/* <div className="testimonial-block">
                    <div className="inner-box">
                      <div className="text">
                        JoonMS is the Management Ecosystem created for small to
                        midscale businesses, empowering them to compete with
                        larger players in their respective industries. Our suite
                        provides essential tools for communication and
                        technology, offering customizable and highly competent
                        solutions across all platforms. With a seamless user
                        experience, JoonMS eliminates many of the challenges
                        that come with larger manual workforces while boosting
                        productivity.
                      </div>
                    </div>
                  </div>

                  <div className="testimonial-block">
                    <div className="inner-box">
                      <div className="text">
                        Our focus is on user happiness, functional excellence,
                        long-term thinking, and innovation. We pride ourselves
                        on making it easy for users to connect with our team,
                        and this strong customer support has been a key factor
                        in our clients&apos; success and growth.
                      </div>
                    </div>
                  </div>

                  <div className="testimonial-block">
                    <div className="inner-box">
                      <div className="text">
                        Managed by a youthful and experienced team from diverse
                        sectors, JoonMS excels in research and development,
                        ensuring that we address each necessity smartly and
                        smoothly. This commitment allows us to stay ahead of the
                        curve while keeping our users at the heart of everything
                        we do.
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUsSection;
