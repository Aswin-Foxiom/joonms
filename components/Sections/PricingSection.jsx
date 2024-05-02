import React from "react";

function PricingSection() {
  return (
    <div>
      <section className="pricing-section" style={{ marginTop: "-100px" }}>
        <div
          className="icon-one"
          style={{ backgroundImage: "url(images/icons/icon-16.png)" }}
        />
        <div
          className="icon-three"
          style={{ backgroundImage: "url(images/icons/icon-1.png)" }}
        />
        <div
          className="icon-four"
          style={{ backgroundImage: "url(images/icons/icon-16.png)" }}
        />
        <div className="auto-container">
          <div
            className="icon-two"
            style={{ backgroundImage: "url(images/icons/icon-14.png)" }}
          />
          <div className="outer-container pricing-tabs tabs-box">
            <div className="clearfix">
              <div className="title-column">
                <div className="inner-column">
                  <div className="sec-title">
                    <h2>Pricing Plan</h2>
                    <div className="text">
                      No Hidden Charges! <br /> Choose your Plan.
                    </div>
                  </div>
                  <div className="title-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet.
                  </div>
                  {/*Tab Btns*/}
                  <ul className="tab-buttons clearfix">
                    <li data-tab="#prod-monthly" className="tab-btn active-btn">
                      Monthly
                    </li>
                    <li data-tab="#prod-yearly" className="tab-btn">
                      Yearly
                    </li>
                  </ul>
                </div>
              </div>
              <div className="price-column">
                <div className="inner-column">
                  <div className="tabs-content">
                    <div className="tab active-tab" id="prod-monthly">
                      <div className="content">
                        <div className="row clearfix">
                          <div className="price-block col-lg-6 col-md-6 col-sm-12">
                            <div className="inner-box">
                              <div className="line-one" />
                              <div className="line-two" />
                              <div className="icon-box">
                                <span className="icon flaticon-send" />
                              </div>
                              <h3>Standard</h3>
                              <ul className="price-list">
                                <li>2gb Hosting</li>
                                <li>10 Custom Domain</li>
                                <li>SSD Hosting</li>
                                <li>50 gb Bandwith</li>
                                <li>Free Support</li>
                              </ul>
                              <div className="price">
                                <sub>$</sub>19.00
                              </div>
                              <a href="#" className="theme-btn btn-style-four">
                                <span className="txt">Try Now</span>
                              </a>
                            </div>
                          </div>

                          <div className="price-block col-lg-6 col-md-6 col-sm-12">
                            <div className="inner-box">
                              <div className="line-one" />
                              <div className="line-two" />
                              <div className="icon-box">
                                <span className="icon flaticon-rocket-ship" />
                              </div>
                              <h3>Premium</h3>
                              <ul className="price-list">
                                <li>2gb Hosting</li>
                                <li>10 Custom Domain</li>
                                <li>SSD Hosting</li>
                                <li>50 gb Bandwith</li>
                                <li>Free Support</li>
                              </ul>
                              <div className="price">
                                <sub>$</sub>49.00
                              </div>
                              <a href="#" className="theme-btn btn-style-four">
                                <span className="txt">Try Now</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*Tab*/}
                    <div className="tab" id="prod-yearly">
                      <div className="content">
                        <div className="row clearfix">
                          <div className="price-block col-lg-6 col-md-6 col-sm-12">
                            <div className="inner-box">
                              <div className="line-one" />
                              <div className="line-two" />
                              <div className="icon-box">
                                <span className="icon flaticon-send" />
                              </div>
                              <h3>Standard</h3>
                              <ul className="price-list">
                                <li>2gb Hosting</li>
                                <li>10 Custom Domain</li>
                                <li>SSD Hosting</li>
                                <li>50 gb Bandwith</li>
                                <li>Free Support</li>
                              </ul>
                              <div className="price">
                                <sub>$</sub>19.00
                              </div>
                              <a href="#" className="theme-btn btn-style-four">
                                <span className="txt">Try Now</span>
                              </a>
                            </div>
                          </div>

                          <div className="price-block col-lg-6 col-md-6 col-sm-12">
                            <div className="inner-box">
                              <div className="line-one" />
                              <div className="line-two" />
                              <div className="icon-box">
                                <span className="icon flaticon-rocket-ship" />
                              </div>
                              <h3>Premium</h3>
                              <ul className="price-list">
                                <li>2gb Hosting</li>
                                <li>10 Custom Domain</li>
                                <li>SSD Hosting</li>
                                <li>50 gb Bandwith</li>
                                <li>Free Support</li>
                              </ul>
                              <div className="price">
                                <sub>$</sub>49.00
                              </div>
                              <a href="#" className="theme-btn btn-style-four">
                                <span className="txt">Try Now</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default PricingSection;
