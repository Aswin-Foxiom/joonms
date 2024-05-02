import React from "react";

function TestimonialSection() {
  return (
    <div id="who">
      {" "}
      <section
        className="testimonial-section"
        style={{ backgroundImage: "url(images/background/pattern-4.png)" }}
      >
        <div className="auto-container">
          <div className="row clearfix">
            <div className="images-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image image-one">
                  <img src="images/joon/ai1.jpg" alt="" />
                </div>

                <div className="image image-two">
                  <img src="images/joon/ai1.avif" alt="" />
                </div>

                <div className="image image-three">
                  <img src="images/joon/build2.jpg" alt="" />
                </div>

                <div className="big-image image-four">
                  <img src="images/joon/build.jpg" alt="" />
                </div>
              </div>
            </div>

            <div className="carousel-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="sec-title">
                  <h2>Who we Are </h2>
                  {/* <div className="text">
                    Check what&rsquo;s our client say about us!
                  </div> */}
                </div>
                <div className="testimonial-carousel owl-carousel owl-theme">
                  <div className="testimonial-block">
                    <div className="inner-box">
                      {/* <div className="quote-icon flaticon-quote-2" /> */}
                      <div className="text">
                        Welcome to Joon, a globally recognized conglomerate,
                        proudly serving as the sister concern to numerous
                        enterprises spanning various sectors across the globe.
                        With a rich legacy of innovation and excellence, we have
                        embarked on a journey of expansion into diverse
                        industries, including mobile app development, mobile
                        sales, sales solutions, banking apps, cybersecurity,
                        HVAC, and security services. Our commitment to
                        delivering cutting-edge solutions and unparalleled
                        service has propelled us to the forefront of the global
                        market.
                      </div>
                      {/* <div className="author">- Raisa Moni</div>
                      <div className="designation">Envato Customer</div> */}
                    </div>
                  </div>

                  <div className="testimonial-block">
                    <div className="inner-box">
                      {/* <div className="quote-icon flaticon-quote-2" /> */}
                      <div className="text">
                        At Joon, we are not only dedicated to business success
                        but also to making a positive impact on society. We
                        leverage our expertise in the education field to provide
                        support for physically abled children and their parents
                        in Asia and Africa. Through our initiatives, we aim to
                        create inclusive learning environments and empower
                        children with disabilities to reach their full
                        potential. Our holistic approach encompasses not only
                        educational support but also assistance and resources
                        for parents, ensuring they have the necessary tools and
                        knowledge to support their childs development.
                      </div>
                      {/* <div className="author">- Raisa Moni</div>
                      <div className="designation">Envato Customer</div> */}
                    </div>
                  </div>

                  <div className="testimonial-block">
                    <div className="inner-box">
                      {/* <div className="quote-icon flaticon-quote-2" /> */}
                      <div className="text">
                        Our client work environment is characterized by a
                        culture of innovation, creativity, and collaboration,
                        where we work hand in hand with our clients to address
                        their unique challenges and deliver tailored solutions
                        that exceed expectations. Join us as we continue to
                        redefine boundaries and set new standards of success in
                        every sector we operate in, while also making a
                        meaningful difference in the lives of individuals and
                        communities around the world.
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

export default TestimonialSection;
