import React from "react";

function ServiceSection() {
  return (
    <div id="services">
      {" "}
      <section className="services-section">
        <div className="icons">
          <div
            className="icon-one paroller"
            data-paroller-factor="-0.10"
            data-paroller-factor-lg="0.10"
            data-paroller-type="foreground"
            data-paroller-direction="horizontal"
            style={{ backgroundImage: "url(images/icons/icon-11.png)" }}
          />
          {/* Icon Two */}
          <div
            className="icon-two paroller"
            data-paroller-factor="0.20"
            data-paroller-factor-lg="0.10"
            data-paroller-type="foreground"
            data-paroller-direction="horizontal"
            style={{ backgroundImage: "url(images/icons/icon-2.png)" }}
          />
          {/* Icon Three */}
          <div
            className="icon-three"
            style={{ backgroundImage: "url(images/icons/icon-1.png)" }}
          />
          {/* Icon Four */}
          <div
            className="icon-four paroller"
            data-paroller-factor="0.20"
            data-paroller-factor-lg="0.10"
            data-paroller-type="foreground"
            data-paroller-direction="horizontal"
            style={{ backgroundImage: "url(images/icons/icon-12.png)" }}
          />
        </div>

        <div className="auto-container">
          <div className="sec-title centered">
            <h2>
              Driven by principles <br /> Defined by results
            </h2>
            {/* <div className="text">
              The things motivates me is common <br /> form of motivation.
            </div> */}
          </div>
          <div className="row clearfix">
            {/* Services Block */}
            <div className="service-block col-lg-4 col-md-6 col-sm-12">
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div
                  className="icon-box wow slideInDown"
                  data-wow-delay="250ms"
                  data-wow-duration="1500ms"
                >
                  <span className="icon flaticon-backend" />
                </div>
                <h3>
                  <a href="/services/listening-and-understanding">
                    Listening & Understanding.
                  </a>
                </h3>
                <div className="text">
                  Dedicated to actively listening to our customers, putting
                  ourselves in their shoes, and empathizing with their needs.
                </div>
                <a
                  href="/services/listening-and-understanding"
                  className="read-more"
                >
                  More About This
                </a>
              </div>
            </div>
            {/* Services Block */}
            <div className="service-block col-lg-4 col-md-6 col-sm-12">
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div
                  className="icon-box wow slideInDown"
                  data-wow-delay="250ms"
                  data-wow-duration="1500ms"
                >
                  <span className="icon flaticon-code" />
                </div>
                <h3>
                  <a href="/services/research-and-development">
                    Research & Development.
                  </a>
                </h3>
                <div className="text">
                  Embarking on a journey of continuous research and innovation,
                  leveraging the latest AI technologies.
                </div>
                <a
                  href="/services/research-and-development"
                  className="read-more"
                >
                  More About This
                </a>
              </div>
            </div>
            {/* Services Block */}
            <div className="service-block col-lg-4 col-md-6 col-sm-12">
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div
                  className="icon-box wow slideInDown"
                  data-wow-delay="250ms"
                  data-wow-duration="1500ms"
                >
                  <span className="icon flaticon-search-1" />
                </div>
                <h3>
                  <a href="/services/customer-happiness">Customer Happiness.</a>
                </h3>
                <div className="text">
                  Our commitment to customer happiness and satisfaction extends
                  beyond mere transactional interactions.
                </div>
                <a href="/services/customer-happiness" className="read-more">
                  More About This
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceSection;
