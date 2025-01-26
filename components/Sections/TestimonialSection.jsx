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
                </div>
                <div className="testimonial-carousel owl-carousel owl-theme">
                  <div className="testimonial-block">
                    <div className="inner-box">
                      <div className="text">
                        At JoonMS, we specialize in delivering cutting-edge
                        software solutions designed to simplify complex
                        processes and drive operational efficiency for
                        businesses across industries. From ERP and CRM systems
                        to specialized platforms like ReOM, EAM, and e-commerce
                        solutions, our tools are tailored to address your unique
                        challenges and streamline your workflows. With a proven
                        track record in enhancing productivity, accountability,
                        and sustainability, we empower organizations to achieve
                        their goals with innovative, user-friendly technology.
                        At JoonMS, we don’t just provide software—we partner
                        with you to ensure success and scalability in an
                        ever-evolving market.
                      </div>
                    </div>
                  </div>

                  {/* <div className="testimonial-block">
                    <div className="inner-box">
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
                    </div>
                  </div>

                  <div className="testimonial-block">
                    <div className="inner-box">
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

export default TestimonialSection;
