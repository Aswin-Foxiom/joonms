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
            {/* <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="sec-title">
                  <h2>About Us</h2>
                 
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
          
              </div>
            </div> */}
            <div className="carousel-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="sec-title">
                  <h2>About Us</h2>
                  {/* <div className="text">
                    Check what&rsquo;s our client say about us!
                  </div> */}
                </div>
                <div className="testimonial-carousel owl-carousel owl-theme">
                  <div className="testimonial-block">
                    <div className="inner-box">
                      {/* <div className="quote-icon flaticon-quote-2" /> */}
                      <div className="text">
                        JoonMS is a dynamic hardware distributor and software
                        developer, proudly headquartered in Dubai and operating
                        throughout the GCC countries. Our real estate and
                        property management software has gained widespread
                        popularity in a short time, and we are expanding our
                        Real Estate Operations Management (REOM) and Property
                        Operations Management (POM) solutions. Built on the
                        fundamentals of CaFM, we are developing these systems
                        into a comprehensive software suite that will serve as a
                        full replacement for traditional Enterprise Resource
                        Planning (ERP) systems, offering businesses a smarter,
                        more efficient alternative.
                      </div>
                      {/* <div className="author">- Raisa Moni</div>
                      <div className="designation">Envato Customer</div> */}
                    </div>
                  </div>

                  <div className="testimonial-block">
                    <div className="inner-box">
                      {/* <div className="quote-icon flaticon-quote-2" /> */}
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
                      {/* <div className="author">- Raisa Moni</div>
                      <div className="designation">Envato Customer</div> */}
                    </div>
                  </div>

                  <div className="testimonial-block">
                    <div className="inner-box">
                      {/* <div className="quote-icon flaticon-quote-2" /> */}
                      <div className="text">
                        Our focus is on user happiness, functional excellence,
                        long-term thinking, and innovation. We pride ourselves
                        on making it easy for users to connect with our team,
                        and this strong customer support has been a key factor
                        in our clients' success and growth. As we continue to
                        expand, we aim to provide an all-encompassing solution
                        that evolves from CaFM basics into a software suite
                        capable of replacing ERP systems for any business.
                      </div>
                      {/* <div className="author">- Raisa Moni</div>
                      <div className="designation">Envato Customer</div> */}
                    </div>
                  </div>

                  <div className="testimonial-block">
                    <div className="inner-box">
                      {/* <div className="quote-icon flaticon-quote-2" /> */}
                      <div className="text">
                        Managed by a youthful and experienced team from diverse
                        sectors, JoonMS excels in research and development,
                        ensuring that we address each necessity smartly and
                        smoothly. This commitment allows us to stay ahead of the
                        curve while keeping our users at the heart of everything
                        we do.
                      </div>
                      {/* <div className="author">- Raisa Moni</div>
                      <div className="designation">Envato Customer</div> */}
                    </div>
                  </div>
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
