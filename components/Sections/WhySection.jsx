import React from "react";

function WhySection() {
  return (
    <div id="why">
      <section className="fluid-section-two">
        {/* Pattern Layer */}
        <div
          data-paroller-factor="-0.10"
          data-paroller-factor-lg="0.10"
          data-paroller-type="foreground"
          data-paroller-direction="horizontal"
          //   style={{ backgroundImage: "url(images/background/pattern-14.png)" }}
        />
        <div className="outer-container clearfix">
          {/*Image Column*/}
          <div className="image-column">
            <div
              className="inner-column wow fadeInLeft"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="image">
                <img src="/images/app2.png" alt="Image" />
              </div>
            </div>
          </div>
          {/*End Image Column*/}
          {/*Content Column*/}
          <div
            className="content-column"
            style={{ padding: "80px 15px 60px 95px" }}
          >
            <div className="content-box">
              <h2>Why Choose JoonMS</h2>
              <div className="text">
                Unlock new possibilities with JoonMS: Elevate your operations,
                embrace innovation, and maximize your ROI with solutions built
                for growth.
              </div>
              <ul className="list-style-three">
                <li>Stay Ahead of the Curve</li>
                <li>Maximize ROI</li>
                <li>Tailored Solutions</li>
                <li>Partner in Success</li>
                <li>Scalable and Future-Ready</li>
                <li>Innovative Yet Intuitive</li>
                <li>Proven Expertise</li>
              </ul>
              <a
                href="https://apps.apple.com/in/app/joonms/id6445896145"
                target="_blank"
                className="theme-btn btn-style-fourteen mr-2"
              >
                Get on iOS
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.joonms.app.joonms&pcampaignid=web_share"
                target="_blank"
                className="theme-btn btn-style-fourteen"
              >
                Get on Android
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhySection;
