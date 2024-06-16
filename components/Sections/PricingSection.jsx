"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "primereact/carousel";
const responsiveOptions = [
  {
    breakpoint: "1400px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
    numScroll: 1,
  },
];
function PricingSection() {
  const onPurchaseClicked = (planId) => {
    const isLogedIn = localStorage.getItem("token") ? true : false;
    if (!isLogedIn) {
      window.location.href = "/login";
    } else {
      window.location.href = `/purchase-plan/${planId}`;
    }
  };

  const productTemplate = (product) => {
    return (
      <div className="price-block style-two">
        <div className="inner-box">
          <div className="line-one" />
          <div className="line-two" />
          <div className="icon-box">
            <span className="icon flaticon-rocket-ship" />
          </div>
          <h3>{product?.name}</h3>
          <ul className="price-list">
            <li>{product?.validity_days} days validity</li>
            <li>{product?.users_allowed} users allowed</li>
            <li>{product?.voices_allowed} voices allowed</li>
            <li>{product?.pics_allowed} pics allowed</li>
            <li>{product?.backup_days} days backup</li>
          </ul>
          <div className="price">
            <sub>₹</sub>
            {product.subtype_Id.per_user_amt * product.users_allowed +
              product.subtype_Id.per_day_backup_amt * product.backup_days}
            .00
          </div>
          <a
            href={undefined}
            onClick={() => onPurchaseClicked(product?._id)}
            className="theme-btn btn-alternate"
          >
            <span
              className="txt"
              style={{ fontWeight: "bolder", color: "white" }}
            >
              Purchase
            </span>
          </a>
        </div>
      </div>
    );
  };
  const [pricingData, setPricingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace the URL with the API endpoint you want to fetch data from
    axios
      .get("https://server.joonms.com/subscriptions")
      .then((response) => {
        console.log("THE RESPONSE IS", response?.data?.data?.docs);
        setPricingData(response?.data?.data?.docs ?? []);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {/* <section className="pricing-section-two" style={{ marginTop: "-180px" }}>
        <div className="auto-container">
          <div className="outer-container pricing-tabs-two tabs-box">
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
                        <div className="carousel-outer">
                          <div className="ms-partialview-template">
                            <div
                              className="master-slider ms-skin-default"
                              id="price-carousel-one"
                            >
                              <div className="ms-slide">
                                <div className="price-block style-two">
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
                                    <a
                                      href="#"
                                      className="theme-btn btn-alternate"
                                    >
                                      <span className="txt">Try Now</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="ms-slide">
                                <div className="price-block style-two">
                                  <div className="inner-box">
                                    <div className="line-one" />
                                    <div className="line-two" />
                                    <div className="icon-box">
                                      <span className="icon flaticon-rocket-ship" />
                                    </div>
                                    <h3>Professional</h3>
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
                                    <a
                                      href="#"
                                      className="theme-btn btn-alternate"
                                    >
                                      <span className="txt">Try Now</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="ms-slide">
                                <div className="price-block style-two">
                                  <div className="inner-box">
                                    <div className="line-one" />
                                    <div className="line-two" />
                                    <div className="icon-box">
                                      <span className="icon flaticon-start" />
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
                                      <sub>$</sub>99.00
                                    </div>
                                    <a
                                      href="#"
                                      className="theme-btn btn-alternate"
                                    >
                                      <span className="txt">Try Now</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="ms-slide">
                                <div className="price-block style-two">
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
                                    <a
                                      href="#"
                                      className="theme-btn btn-alternate"
                                    >
                                      <span className="txt">Try Now</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="ms-slide">
                                <div className="price-block style-two">
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
                                      <sub>$</sub>99.00
                                    </div>
                                    <a
                                      href="#"
                                      className="theme-btn btn-alternate"
                                    >
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
                    <div className="tab" id="prod-yearly">
                      <div className="content">
                        <div className="carousel-outer">
                          <div className="ms-partialview-template">
                            <div
                              className="master-slider ms-skin-default"
                              id="price-carousel-two"
                            >
                              <div className="ms-slide">
                                <div className="price-block style-two">
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
                                      <sub>$</sub>190.00
                                    </div>
                                    <a
                                      href="#"
                                      className="theme-btn btn-alternate"
                                    >
                                      <span className="txt">Try Now</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="ms-slide">
                                <div className="price-block style-two">
                                  <div className="inner-box">
                                    <div className="line-one" />
                                    <div className="line-two" />
                                    <div className="icon-box">
                                      <span className="icon flaticon-rocket-ship" />
                                    </div>
                                    <h3>Professional</h3>
                                    <ul className="price-list">
                                      <li>2gb Hosting</li>
                                      <li>10 Custom Domain</li>
                                      <li>SSD Hosting</li>
                                      <li>50 gb Bandwith</li>
                                      <li>Free Support</li>
                                    </ul>
                                    <div className="price">
                                      <sub>$</sub>450.00
                                    </div>
                                    <a
                                      href="#"
                                      className="theme-btn btn-alternate"
                                    >
                                      <span className="txt">Try Now</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="ms-slide">
                                <div className="price-block style-two">
                                  <div className="inner-box">
                                    <div className="line-one" />
                                    <div className="line-two" />
                                    <div className="icon-box">
                                      <span className="icon flaticon-start" />
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
                                      <sub>$</sub>890.00
                                    </div>
                                    <a
                                      href="#"
                                      className="theme-btn btn-alternate"
                                    >
                                      <span className="txt">Try Now</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="ms-slide">
                                <div className="price-block style-two">
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
                                      <sub>$</sub>190.00
                                    </div>
                                    <a
                                      href="#"
                                      className="theme-btn btn-alternate"
                                    >
                                      <span className="txt">Try Now</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="ms-slide">
                                
                                <div className="price-block style-two">
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
                                      <sub>$</sub>890.00
                                    </div>
                                    <a
                                      href="#"
                                      className="theme-btn btn-alternate"
                                    >
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
                  
                  <ul className="dots-style">
                    <li />
                    <li className="active" />
                    <li />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <div
          className="pattern-layer"
          style={{
            backgroundImage: "url(images/background/pattern-8.png)",
          }}
        />
      </section> */}

      <section className="services-section-two" style={{ marginTop: "-100px" }}>
        {/* Pattern Layer */}
        <div
          className="pattern-layer"
          style={{ backgroundImage: "url(images/background/pattern-7.png)" }}
        />
        <div className="auto-container">
          {/* Sec Title Two */}
          <div className="sec-title-two centered">
            <h2>Pricing Plans</h2>
            <div className="title-text">
              We Are Specialized in the Following Services
            </div>
          </div>

          <Carousel
            value={pricingData}
            numVisible={3}
            autoplayInterval={3000}
            circular
            numScroll={1}
            responsiveOptions={responsiveOptions}
            itemTemplate={productTemplate}
          />

          {/* <div className="services-carousel owl-carousel owl-theme">
            <div className="price-block style-two">
              <div className="inner-box">
                <div className="line-one" />
                <div className="line-two" />
                <div className="icon-box">
                  <span className="icon flaticon-rocket-ship" />
                </div>
                <h3>Premium </h3>
                <ul className="price-list">
                  <li>2gb Hosting</li>
                  <li>10 Custom Domain</li>
                  <li>SSD Hosting</li>
                  <li>50 gb Bandwith</li>
                  <li>Free Support</li>
                </ul>
                <div className="price">
                  <sub>$</sub>890.00
                </div>
                <a href="#" className="theme-btn btn-alternate">
                  <span className="txt">Try Now</span>
                </a>
              </div>
            </div>
          </div> */}

          {/* {pricingData?.length ? (
            <div className="services-carousel owl-carousel owl-theme">
              <div className="price-block style-two">
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
                    <sub>$</sub>890.00
                  </div>
                  <a href="#" className="theme-btn btn-alternate">
                    <span className="txt">Try Now</span>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ textAlign: "center", fontWeight: "bold" }}>
              <h3> No Pricing Plan Added </h3>
            </div>
          )} */}
          {/* <div className="services-carousel owl-carousel owl-theme">
           
            <div className="price-block style-two">
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
                  <sub>$</sub>890.00
                </div>
                <a href="#" className="theme-btn btn-alternate">
                  <span className="txt">Try Now</span>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default PricingSection;
