import React from "react";

function AppSection() {
  return (
    <div id="app-section">
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
              <h2>
                Explore mobile
                <br /> Application
              </h2>
              <div className="text">
                JoonMS is designed specifically for small-scale businesses,
                empowering them to compete with large-scale players without the
                hefty price tag of traditional software.
              </div>
              <ul className="list-style-three">
                <li>Cloud Content Management</li>
                <li>Company Collaboration</li>
                <li>Enterprise Social Networking</li>
                <li>Integrated Digital Workplace</li>
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

export default AppSection;
