import React from "react";
import Script from "next/script";
import Image from "next/image";
export default function page() {
  return (
    <div>
      <>
        <meta charSet="utf-8" />
        <title>JoonMs</title>
        {/* Stylesheets */}
        <link href="css/bootstrap.css" rel="stylesheet" />
        <link href="css/style.css" rel="stylesheet" />
        <link href="css/responsive.css" rel="stylesheet" />
        {/* <link
          rel="shortcut icon"
          href="images/favicon.png"
          type="image/x-icon"
        />
        <link rel="icon" href="images/joon/logo1.png" type="image/x-icon" /> */}
        {/* Responsive */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />

        <div className="page-wrapper">
          {/* Preloader */}
          {/* <div className="preloader" /> */}
          {/* Header Style One */}
          <header className="main-header header-style-one">
            {/* Header Upper */}
            <div className="header-upper">
              <div className="inner-container">
                <div className="auto-container clearfix">
                  {/*Info*/}
                  <div className="logo-outer">
                    <div className="logo">
                      <a href="index.html">
                        <img
                          src="images/joon/logo1-croped.png"
                          alt=""
                          title=""
                        />
                        {/* <img src="images/logo.png" alt="" title="" /> */}
                      </a>
                    </div>
                  </div>
                  {/*Nav Box*/}
                  <div className="nav-outer clearfix">
                    {/*Mobile Navigation Toggler*/}
                    <div className="mobile-nav-toggler">
                      <span className="icon flaticon-menu" />
                    </div>
                    {/* Main Menu */}
                    <nav className="main-menu navbar-expand-md navbar-light">
                      <div className="navbar-header">
                        {/* Togg le Button */}
                        <button
                          className="navbar-toggler"
                          type="button"
                          data-toggle="collapse"
                          data-target="#navbarSupportedContent"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <span className="icon flaticon-menu" />
                        </button>
                      </div>
                      <div
                        className="collapse navbar-collapse clearfix"
                        id="navbarSupportedContent"
                      >
                        <ul className="navigation clearfix">
                          {/* <li className="current dropdown">
                            <a href="index.html">Home</a>
                            <ul>
                              <li>
                                <a href="index.html">Home page 01</a>
                              </li>
                              <li>
                                <a href="index-2.html">Home page 02</a>
                              </li>
                              <li>
                                <a href="index-3.html">Home page 03</a>
                              </li>
                              <li>
                                <a href="index-4.html">Home page 04</a>
                              </li>
                              <li>
                                <a href="index-5.html">Home page 05</a>
                              </li>
                              <li className="dropdown">
                                <a href="index.html">Header Styles</a>
                                <ul>
                                  <li>
                                    <a href="index.html">Header Style One</a>
                                  </li>
                                  <li>
                                    <a href="index-2.html">Header Style Two</a>
                                  </li>
                                  <li>
                                    <a href="index-3.html">
                                      Header Style Three
                                    </a>
                                  </li>
                                  <li>
                                    <a href="index-4.html">Header Style Four</a>
                                  </li>
                                  <li>
                                    <a href="index-5.html">Header Style Five</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a href="about.html">About Us</a>
                            <ul>
                              <li>
                                <a href="about.html">About us</a>
                              </li>
                              <li>
                                <a href="team.html">Our Team</a>
                              </li>
                              <li>
                                <a href="price.html">Price</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="services.html">Services</a>
                          </li>
                          <li className="dropdown">
                            <a href="projects.html">Projects</a>
                            <ul>
                              <li>
                                <a href="projects.html">Our Work</a>
                              </li>
                              <li>
                                <a href="projects-detail.html">
                                  Projects Details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a href="blog-classic.html">News</a>
                            <ul>
                              <li>
                                <a href="blog-classic.html">
                                  Blog with Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="blog-masonry.html">Blog Masonry</a>
                              </li>
                              <li>
                                <a href="blog-detail.html">Blog Detail</a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a href="shops.html">Shop</a>
                            <ul>
                              <li>
                                <a href="shops.html">Our Products</a>
                              </li>
                              <li>
                                <a href="shop-single.html">Product Single</a>
                              </li>
                              <li>
                                <a href="shoping-cart.html">Shopping Cart</a>
                              </li>
                              <li>
                                <a href="checkout.html">Checkout</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="contact.html">Contact</a>
                          </li> */}
                          <li>
                            <a href="/">What</a>
                          </li>
                          <li>
                            <a href="/">Who</a>
                          </li>
                          <li>
                            <a href="/">Where</a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                    {/* Main Menu End*/}
                    {/* Option Box */}
                    <div className="option-box clearfix">
                      {/* Number Box */}
                      <div className="number-box">
                        <a className="phone" href="tel:+880-762-009">
                          <span>Call Us</span> +880.762.009
                        </a>
                      </div>
                      {/* Button Box */}
                      <div className="btn-box">
                        <a
                          href="contact.html"
                          className="theme-btn btn-style-one"
                        >
                          <span className="txt">Get A Quote</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End Header Upper*/}
            {/* Mobile Menu  */}
            <div className="mobile-menu">
              <div className="menu-backdrop" />
              <div className="close-btn">
                <span className="icon flaticon-plus" />
              </div>
              <nav className="menu-box">
                <div className="nav-logo">
                  <a href="index.html">
                    <img src="images/logo-2.png" alt="" title="" />
                  </a>
                </div>
                <ul className="navigation clearfix">
                  {/*Keep This Empty / Menu will come through Javascript*/}
                </ul>
                <div className="social-links">
                  <ul className="clearfix">
                    <li>
                      <a href="#">
                        <span className="fab fa-facebook-square" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fab fa-twitter-square" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fab fa-dribbble-square" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fab fa-youtube-square" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-envelope-square" />
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            {/* End Mobile Menu */}
          </header>
          {/* End Main Header */}
          {/* Banner Carousel Section */}
          <section className="banner-carousel-section">
            {/* Banner Carousel */}
            <div className="banner-carousel owl-carousel owl-theme">
              {/* Slide */}
              <div className="slide">
                <div className="icons">
                  {/* Icon One */}
                  <div
                    className="icon-one"
                    style={{ backgroundImage: "url(images/icons/icon-1.png)" }}
                  />
                  {/* Icon Two */}
                  <div
                    className="icon-two"
                    style={{ backgroundImage: "url(images/icons/icon-2.png)" }}
                  />
                  {/* Icon Three */}
                  <div
                    className="icon-three"
                    style={{ backgroundImage: "url(images/icons/icon-3.png)" }}
                  />
                  {/* Icon Four */}
                  <div
                    className="icon-four"
                    style={{ backgroundImage: "url(images/icons/icon-4.png)" }}
                  />
                  {/* Icon Five */}
                  <div
                    className="icon-five"
                    style={{ backgroundImage: "url(images/icons/icon-5.png)" }}
                  />
                  {/* Icon Six */}
                  <div
                    className="icon-six"
                    style={{ backgroundImage: "url(images/icons/icon-6.png)" }}
                  />
                  {/* Icon Seven */}
                  <div
                    className="icon-seven"
                    style={{ backgroundImage: "url(images/icons/icon-7.png)" }}
                  />
                  {/* Icon Eight */}
                  <div
                    className="icon-eight"
                    style={{ backgroundImage: "url(images/icons/icon-8.png)" }}
                  />
                  {/* Icon Nine */}
                  <div
                    className="icon-nine"
                    style={{ backgroundImage: "url(images/icons/icon-9.png)" }}
                  />
                </div>
                {/* Pattern Layer */}
                <div
                  className="pattern-layer"
                  style={{
                    backgroundImage: "url(images/main-slider/pattern-1.png)",
                  }}
                />
                <div className="auto-container">
                  <div className="row clearfix">
                    {/* Content Column */}
                    <div className="content-column col-xl-5 col-lg-6 col-md-12 col-sm-12">
                      <div className="inner-column">
                        <div className="content">
                          <h2>Digital Agency with Excellence Services.</h2>
                          <div className="text">
                            The 3 golden rules professional graphic designer
                            don’t want you to know about.
                          </div>
                          <div className="link-box">
                            <a
                              href="about.html"
                              className="theme-btn btn-style-two"
                            >
                              <span className="txt">More About</span>
                            </a>
                            <a
                              href="https://www.youtube.com/watch?v=SXZXtD60t2g"
                              className="lightbox-image theme-btn btn-style-three"
                            >
                              <span className="txt">See Live Demo</span>
                              <span className="icon fas fa-play" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Images Column */}
                    <div className="images-column col-xl-7 col-lg-6 col-md-12 col-sm-12">
                      <div className="inner-column parallax-scene-1">
                        <div
                          data-depth="0.20"
                          className="parallax-layer image image-one"
                        >
                          <img
                            src="images/main-slider/content-image-1.png"
                            alt=""
                          />
                        </div>
                        <div
                          data-depth="0.20"
                          className="image image-two parallax-layer"
                        >
                          <img
                            src="images/main-slider/content-image-2.png"
                            alt=""
                          />
                        </div>
                        <div
                          data-depth="0.50"
                          className="image image-three parallax-layer"
                        >
                          <img
                            src="images/main-slider/content-image-3.png"
                            alt=""
                          />
                        </div>
                        <div
                          data-depth="0.30"
                          className="image image-four parallax-layer"
                        >
                          <img
                            src="images/main-slider/content-image-4.png"
                            alt=""
                          />
                        </div>
                        <div
                          data-depth="0.40"
                          className="image image-five parallax-layer"
                        >
                          <img
                            src="images/main-slider/content-image-5.png"
                            alt=""
                          />
                        </div>
                        <div
                          data-depth="0.60"
                          className="image image-six parallax-layer"
                        >
                          <img
                            src="images/main-slider/content-image-6.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slide */}
              <div className="slide">
                <div className="icons">
                  {/* Icon One */}
                  <div
                    className="icon-one"
                    style={{ backgroundImage: "url(images/icons/icon-1.png)" }}
                  />
                  {/* Icon Two */}
                  <div
                    className="icon-two"
                    style={{ backgroundImage: "url(images/icons/icon-2.png)" }}
                  />
                  {/* Icon Three */}
                  <div
                    className="icon-three"
                    style={{ backgroundImage: "url(images/icons/icon-3.png)" }}
                  />
                  {/* Icon Four */}
                  <div
                    className="icon-four"
                    style={{ backgroundImage: "url(images/icons/icon-4.png)" }}
                  />
                  {/* Icon Five */}
                  <div
                    className="icon-five"
                    style={{ backgroundImage: "url(images/icons/icon-5.png)" }}
                  />
                  {/* Icon Six */}
                  <div
                    className="icon-six"
                    style={{ backgroundImage: "url(images/icons/icon-6.png)" }}
                  />
                  {/* Icon Seven */}
                  <div
                    className="icon-seven"
                    style={{ backgroundImage: "url(images/icons/icon-7.png)" }}
                  />
                  {/* Icon Eight */}
                  <div
                    className="icon-eight"
                    style={{ backgroundImage: "url(images/icons/icon-8.png)" }}
                  />
                  {/* Icon Nine */}
                  <div
                    className="icon-nine"
                    style={{ backgroundImage: "url(images/icons/icon-9.png)" }}
                  />
                </div>
                {/* Pattern Layer */}
                <div
                  className="pattern-layer"
                  style={{
                    backgroundImage: "url(images/main-slider/pattern-1.png)",
                  }}
                />
                <div className="auto-container">
                  <div className="row clearfix">
                    {/* Content Column */}
                    <div className="content-column col-xl-5 col-lg-6 col-md-12 col-sm-12">
                      <div className="inner-column">
                        <div className="content">
                          <h2>Digital Agency with Excellence Services.</h2>
                          <div className="text">
                            The 3 golden rules professional graphic designer
                            don’t want you to know about.
                          </div>
                          <div className="link-box">
                            <a
                              href="about.html"
                              className="theme-btn btn-style-two"
                            >
                              <span className="txt">More About</span>
                            </a>
                            <a
                              href="https://www.youtube.com/watch?v=SXZXtD60t2g"
                              className="lightbox-image theme-btn btn-style-three"
                            >
                              <span className="txt">See Live Demo</span>
                              <span className="icon fas fa-play" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Images Column */}
                    <div className="images-column col-xl-7 col-lg-6 col-md-12 col-sm-12">
                      <div className="inner-column parallax-scene-2">
                        <div
                          data-depth="0.20"
                          className="parallax-layer image image-one"
                        >
                          <img
                            src="images/main-slider/content-image-1.png"
                            alt=""
                          />
                        </div>
                        <div
                          data-depth="0.20"
                          className="image image-two parallax-layer"
                        >
                          <img
                            src="images/main-slider/content-image-2.png"
                            alt=""
                          />
                        </div>
                        <div
                          data-depth="0.50"
                          className="image image-three parallax-layer"
                        >
                          <img
                            src="images/main-slider/content-image-3.png"
                            alt=""
                          />
                        </div>
                        <div
                          data-depth="0.30"
                          className="image image-four parallax-layer"
                        >
                          <img
                            src="images/main-slider/content-image-4.png"
                            alt=""
                          />
                        </div>
                        <div
                          data-depth="0.40"
                          className="image image-five parallax-layer"
                        >
                          <img
                            src="images/main-slider/content-image-5.png"
                            alt=""
                          />
                        </div>
                        <div
                          data-depth="0.60"
                          className="image image-six parallax-layer"
                        >
                          <img
                            src="images/main-slider/content-image-6.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slide */}
              <div className="slide">
                <div className="icons">
                  {/* Icon One */}
                  <div
                    className="icon-one"
                    style={{ backgroundImage: "url(images/icons/icon-1.png)" }}
                  />
                  {/* Icon Two */}
                  <div
                    className="icon-two"
                    style={{ backgroundImage: "url(images/icons/icon-2.png)" }}
                  />
                  {/* Icon Three */}
                  <div
                    className="icon-three"
                    style={{ backgroundImage: "url(images/icons/icon-3.png)" }}
                  />
                  {/* Icon Four */}
                  <div
                    className="icon-four"
                    style={{ backgroundImage: "url(images/icons/icon-4.png)" }}
                  />
                  {/* Icon Five */}
                  <div
                    className="icon-five"
                    style={{ backgroundImage: "url(images/icons/icon-5.png)" }}
                  />
                  {/* Icon Six */}
                  <div
                    className="icon-six"
                    style={{ backgroundImage: "url(images/icons/icon-6.png)" }}
                  />
                  {/* Icon Seven */}
                  <div
                    className="icon-seven"
                    style={{ backgroundImage: "url(images/icons/icon-7.png)" }}
                  />
                  {/* Icon Eight */}
                  <div
                    className="icon-eight"
                    style={{ backgroundImage: "url(images/icons/icon-8.png)" }}
                  />
                  {/* Icon Nine */}
                  <div
                    className="icon-nine"
                    style={{ backgroundImage: "url(images/icons/icon-9.png)" }}
                  />
                </div>
                {/* Pattern Layer */}
                <div
                  className="pattern-layer"
                  style={{
                    backgroundImage: "url(images/main-slider/pattern-1.png)",
                  }}
                />
                <div className="auto-container">
                  <div className="row clearfix">
                    {/* Content Column */}
                    <div className="content-column col-xl-5 col-lg-6 col-md-12 col-sm-12">
                      <div className="inner-column">
                        <div className="content">
                          <h2>Digital Agency with Excellence Services.</h2>
                          <div className="text">
                            The 3 golden rules professional graphic designer
                            don’t want you to know about.
                          </div>
                          <div className="link-box">
                            <a
                              href="about.html"
                              className="theme-btn btn-style-two"
                            >
                              <span className="txt">More About</span>
                            </a>
                            <a
                              href="https://www.youtube.com/watch?v=SXZXtD60t2g"
                              className="lightbox-image theme-btn btn-style-three"
                            >
                              <span className="txt">See Live Demo</span>
                              <span className="icon fas fa-play" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Images Column */}
                    <div className="images-column col-xl-7 col-lg-6 col-md-12 col-sm-12">
                      <div className="inner-column parallax-scene-3">
                        <div
                          data-depth="0.20"
                          className="parallax-layer image image-one"
                        >
                          <img
                            src="images/main-slider/content-image-1.png"
                            alt=""
                          />
                        </div>
                        <div
                          data-depth="0.20"
                          className="image image-two parallax-layer"
                        >
                          <img
                            src="images/main-slider/content-image-2.png"
                            alt=""
                          />
                        </div>
                        <div
                          data-depth="0.50"
                          className="image image-three parallax-layer"
                        >
                          <img
                            src="images/main-slider/content-image-3.png"
                            alt=""
                          />
                        </div>
                        <div
                          data-depth="0.30"
                          className="image image-four parallax-layer"
                        >
                          <img
                            src="images/main-slider/content-image-4.png"
                            alt=""
                          />
                        </div>
                        <div
                          data-depth="0.40"
                          className="image image-five parallax-layer"
                        >
                          <img
                            src="images/main-slider/content-image-5.png"
                            alt=""
                          />
                        </div>
                        <div
                          data-depth="0.60"
                          className="image image-six parallax-layer"
                        >
                          <img
                            src="images/main-slider/content-image-6.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Banner Carousel Section */}
          {/* Services Section */}

          <section className="about-contact-section">
            <div className="auto-container">
              <div
                className="inner-container"
                style={{ backgroundColor: "#F9F9F9" }}
              >
                <div className="clearfix">
                  <div className="pull-left">
                    <div className="title">Have any question about us?</div>
                    <h2>AI Related Content</h2>
                  </div>
                  <div className="pull-right">
                    <a href="contact.html" className="theme-btn btn-style-two">
                      <span className="txt">Contact Us</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="services-section">
            <div className="icons">
              {/* Icon One */}
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
              {/* Sec Title */}
              <div className="sec-title centered">
                <h2>What We Do</h2>
                <div className="text">
                  The things motivates me is common <br /> form of motivation.
                </div>
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
                      <a href="services.html">Strategy &amp; Research.</a>
                    </h3>
                    <div className="text">
                      Lorem ipsum dolor si amet, an dus situ pertinacia
                      constituto, mir dignsius quo great.
                    </div>
                    <a href="services.html" className="read-more">
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
                      <a href="services.html">Design &amp; Development.</a>
                    </h3>
                    <div className="text">
                      Lorem ipsum dolor si amet, an dus situ pertinacia
                      constituto, mir dignsius quo great.
                    </div>
                    <a href="services.html" className="read-more">
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
                      <a href="services.html">Managment &amp; Marketing.</a>
                    </h3>
                    <div className="text">
                      Lorem ipsum dolor si amet, an dus situ pertinacia
                      constituto, mir dignsius quo great.
                    </div>
                    <a href="services.html" className="read-more">
                      More About This
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* End Services Section */}
          {/* About Section */}
          <section className="about-section">
            {/* Icon Layer */}
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
                    <div className="btn-box">
                      <a href="#" className="theme-btn btn-style-two">
                        <span className="txt">Learn More</span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    {/* Sec Title */}
                    <div className="sec-title">
                      <h2>About Us</h2>
                      <div className="text">
                        Leading Digital Agency for <br /> Business Solution.
                      </div>
                    </div>
                    <div className="text">
                      <p>
                        Lorem ipsum dolor sit amet, hendrerit omittantur mel, es
                        vidit animal iracundia. Ius te altera essent incorrupte.
                        Id alien accu consetetur eam, nibh aliquam iracundia.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, hendrerit omittantur mel et,{" "}
                        <br /> est ut vidit animal iracundia luis.
                      </p>
                    </div>
                    <div className="author">M. Rashied, CEO Cologe.</div>
                    <div className="signature">
                      <img src="images/icons/signature.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/*Pricing Section*/}
          <section className="pricing-section" style={{ marginTop: "-100px" }}>
            {/* Icon One */}
            <div
              className="icon-one"
              style={{ backgroundImage: "url(images/icons/icon-16.png)" }}
            />
            {/* Icon Three */}
            <div
              className="icon-three"
              style={{ backgroundImage: "url(images/icons/icon-1.png)" }}
            />
            {/* Icon Four */}
            <div
              className="icon-four"
              style={{ backgroundImage: "url(images/icons/icon-16.png)" }}
            />
            <div className="auto-container">
              {/* Icon Two */}
              <div
                className="icon-two"
                style={{ backgroundImage: "url(images/icons/icon-14.png)" }}
              />
              <div className="outer-container pricing-tabs tabs-box">
                <div className="clearfix">
                  {/*Title Column*/}
                  <div className="title-column">
                    <div className="inner-column">
                      {/* Sec Title */}
                      <div className="sec-title">
                        <h2>Pricing Plan</h2>
                        <div className="text">
                          No Hidden Charges! <br /> Choose your Plan.
                        </div>
                      </div>
                      <div className="title-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Lorem ipsum dolor sit amet.
                      </div>
                      {/*Tab Btns*/}
                      <ul className="tab-buttons clearfix">
                        <li
                          data-tab="#prod-monthly"
                          className="tab-btn active-btn"
                        >
                          Monthly
                        </li>
                        <li data-tab="#prod-yearly" className="tab-btn">
                          Yearly
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*Price Column*/}
                  <div className="price-column">
                    <div className="inner-column">
                      {/*Tabs Container*/}
                      <div className="tabs-content">
                        {/*Tab*/}
                        <div className="tab active-tab" id="prod-monthly">
                          <div className="content">
                            <div className="row clearfix">
                              {/*Price Block*/}
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
                                  <a
                                    href="#"
                                    className="theme-btn btn-style-four"
                                  >
                                    <span className="txt">Try Now</span>
                                  </a>
                                </div>
                              </div>
                              {/*Price Block*/}
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
                                  <a
                                    href="#"
                                    className="theme-btn btn-style-four"
                                  >
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
                              {/*Price Block*/}
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
                                  <a
                                    href="#"
                                    className="theme-btn btn-style-four"
                                  >
                                    <span className="txt">Try Now</span>
                                  </a>
                                </div>
                              </div>
                              {/*Price Block*/}
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
                                  <a
                                    href="#"
                                    className="theme-btn btn-style-four"
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
              </div>
            </div>
          </section>
          {/*End Pricing Section*/}
          {/* Testimonial Section */}
          <section
            className="testimonial-section"
            style={{ backgroundImage: "url(images/background/pattern-4.png)" }}
          >
            <div className="auto-container">
              <div className="row clearfix">
                {/* Title Column */}
                <div className="images-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    {/* Image */}
                    <div className="image image-one">
                      <img src="images/joon/ai1.avif" alt="" />
                    </div>
                    {/* Image */}
                    <div className="image image-two">
                      <img src="images/joon/ai1.avif" alt="" />
                    </div>
                    {/* Image */}
                    <div className="image image-three">
                      <img src="images/joon/ai1.avif" alt="" />
                    </div>
                    {/* Image */}
                    <div className="big-image image-four">
                      <img src="images/joon/ai1.avif" alt="" />
                    </div>
                  </div>
                </div>
                {/* Carousel Column */}
                <div className="carousel-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    {/* Sec Title */}
                    <div className="sec-title">
                      <h2>AI Related Contents</h2>
                      <div className="text">
                        Check what’s our client say about us!
                      </div>
                    </div>
                    <div className="testimonial-carousel owl-carousel owl-theme">
                      {/* Testimonial Block */}
                      <div className="testimonial-block">
                        <div className="inner-box">
                          <div className="quote-icon flaticon-quote-2" />
                          <div className="text">
                            Having a home based business is a wonderful asset to
                            your life. The problem still stands, when it comes
                            timeadvertise your business for a cheap cost. I know
                            you have looked for to answer everywhere; I am here
                            to share a few simple creative ways.
                          </div>
                          <div className="author">- Raisa Moni</div>
                          <div className="designation">Envato Customer</div>
                        </div>
                      </div>
                      {/* Testimonial Block */}
                      <div className="testimonial-block">
                        <div className="inner-box">
                          <div className="quote-icon flaticon-quote-2" />
                          <div className="text">
                            Having a home based business is a wonderful asset to
                            your life. The problem still stands, when it comes
                            timeadvertise your business for a cheap cost. I know
                            you have looked for to answer everywhere; I am here
                            to share a few simple creative ways.
                          </div>
                          <div className="author">- Raisa Moni</div>
                          <div className="designation">Envato Customer</div>
                        </div>
                      </div>
                      {/* Testimonial Block */}
                      <div className="testimonial-block">
                        <div className="inner-box">
                          <div className="quote-icon flaticon-quote-2" />
                          <div className="text">
                            Having a home based business is a wonderful asset to
                            your life. The problem still stands, when it comes
                            timeadvertise your business for a cheap cost. I know
                            you have looked for to answer everywhere; I am here
                            to share a few simple creative ways.
                          </div>
                          <div className="author">- Raisa Moni</div>
                          <div className="designation">Envato Customer</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Testimonial Section */}
          {/* News Section */}
          <section className="news-section">
            <div className="auto-container">
              {/* Icon One */}
              <div
                className="icon-one"
                style={{ backgroundImage: "url(images/icons/icon-14.png)" }}
              />
              {/* Sec Title */}
              <div className="sec-title centered">
                <h2>Our Latest News</h2>
                <div className="text">
                  Our Latest Blogs and Artical For Our Clients
                </div>
              </div>
              <div className="row clearfix">
                {/* News Block */}
                <div className="news-block col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="inner-box wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <h3>
                      <a href="blog-detail.html">
                        We often find it is difficult Resolve the problem.
                      </a>
                    </h3>
                    <div className="text">
                      Lorem ipsum dolor sit amet, hendrerit omittantur mel, es
                      vidit animal iracundia. Ius te altera essent incorrupte.
                      Id alien accu consetetur eam.
                    </div>
                    <div className="lower-box">
                      <div className="box-inner">
                        <div className="post-info">
                          June 29, 2018. <strong>By: Joni Monika</strong>{" "}
                          <span className="author-image">
                            <img src="images/resource/author-5.jpg" alt="" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* News Block */}
                <div className="news-block col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="inner-box wow fadeInLeft"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    <h3>
                      <a href="blog-detail.html">
                        Internet Advertising for every Customer company.
                      </a>
                    </h3>
                    <div className="text">
                      Lorem ipsum dolor sit amet, hendrerit omittantur mel, es
                      vidit animal iracundia. Ius te altera essent incorrupte.
                      Id alien accu consetetur eam.
                    </div>
                    <div className="lower-box">
                      <div className="box-inner">
                        <div className="post-info">
                          June 29, 2018. <strong>By: Joni Monika</strong>{" "}
                          <span className="author-image">
                            <img src="images/resource/author-5.jpg" alt="" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* News Block */}
                <div className="news-block col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="inner-box wow fadeInLeft"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms"
                  >
                    <h3>
                      <a href="blog-detail.html">
                        Right now For the Decent fact for the customer rong.
                      </a>
                    </h3>
                    <div className="text">
                      Lorem ipsum dolor sit amet, hendrerit omittantur mel, es
                      vidit animal iracundia. Ius te altera essent incorrupte.
                      Id alien accu consetetur eam.
                    </div>
                    <div className="lower-box">
                      <div className="box-inner">
                        <div className="post-info">
                          June 29, 2018. <strong>By: Joni Monika</strong>{" "}
                          <span className="author-image">
                            <img src="images/resource/author-5.jpg" alt="" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End News Section */}
          {/* Call To Action Section */}
          <section
            className="call-to-action-section"
            style={{
              backgroundImage: "url(images/background/map-pattern.png)",
            }}
          >
            {/* Icon One */}
            <div
              className="icon-one"
              style={{ backgroundImage: "url(images/icons/icon-16.png)" }}
            />
            <div className="auto-container">
              <div className="content">
                <h2>
                  Do You Have Any Projects? <br /> Contact Us.
                </h2>
                <a href="contact.html" className="theme-btn btn-style-five">
                  <span className="txt">Contact Us</span>
                </a>
              </div>
            </div>
          </section>
          {/* End Call To Action Section */}
          {/*Main Footer*/}
          <footer className="main-footer">
            <div className="auto-container">
              {/*Widgets Section*/}
              <div
                className="widgets-section wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="row clearfix">
                  {/*big column*/}
                  <div className="big-column col-lg-6 col-md-12 col-sm-12">
                    <div className="row clearfix">
                      {/*Footer Column*/}
                      <div className="footer-column col-lg-7 col-md-6 col-sm-12">
                        <div className="footer-widget logo-widget">
                          <div className="logo">
                            <a href="index.html">
                              <img src="images/footer-logo.png" alt="" />
                            </a>
                          </div>
                          <ul className="logo-list">
                            <li>
                              Royal Orville Road Apt. 728 <br /> California, USA
                            </li>
                            <li>
                              <a href="mailto:colin.inc@company.com">
                                colin.inc@company.com
                              </a>
                            </li>
                            <li>
                              <a href="tel:720-661-2231">720.661.2231</a>
                            </li>
                          </ul>
                          <ul className="social-icon-one">
                            <li>
                              <a href="#">
                                <span className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="fab fa-linkedin-in" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="fab fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="fab fa-google-plus-g" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/*Footer Column*/}
                      <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                        <div className="footer-widget links-widget">
                          <h2>Services</h2>
                          <div className="widget-content">
                            <ul className="list">
                              <li>
                                <a href="#">Web Design</a>
                              </li>
                              <li>
                                <a href="#">Development</a>
                              </li>
                              <li>
                                <a href="#">Wordpress</a>
                              </li>
                              <li>
                                <a href="#">Online Marketing</a>
                              </li>
                              <li>
                                <a href="#">Content</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*big column*/}
                  <div className="big-column col-lg-6 col-md-12 col-sm-12">
                    <div className="row clearfix">
                      {/*Footer Column*/}
                      <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                        <div className="footer-widget links-widget">
                          <h2>About us</h2>
                          <div className="widget-content">
                            <ul className="list">
                              <li>
                                <a href="#">About Us</a>
                              </li>
                              <li>
                                <a href="#">Work Portfolio</a>
                              </li>
                              <li>
                                <a href="#">Our Team</a>
                              </li>
                              <li>
                                <a href="#">Price Plan</a>
                              </li>
                              <li>
                                <a href="#">Latest News</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/*Footer Column*/}
                      <div className="footer-column col-lg-7 col-md-6 col-sm-12">
                        <div className="footer-widget subscribe-widget">
                          <h2>Get weekly update</h2>
                          {/* Newsletter Form */}
                          <div className="newsletter-form">
                            <form
                              method="post"
                              action="https://t.commonsupport.xyz/colin/contact.html"
                            >
                              <div className="form-group">
                                <input
                                  type="email"
                                  name="email"
                                  defaultValue=""
                                  placeholder="Give email"
                                  required=""
                                />
                                <button
                                  type="submit"
                                  className="theme-btn btn-style-two"
                                >
                                  <span className="txt">Subscribe</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Footer Bottom*/}
              <div className="footer-bottom">
                <div className="bottom-inner">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div className="copyright">
                        © 2019 copyright all right reserved
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <ul className="footer-nav">
                        <li>
                          <a href="#">Privace &amp; Policy</a>
                        </li>
                        <li>
                          <a href="#">Faq</a>
                        </li>
                        <li>
                          <a href="#">Terms.</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>

        <div className="scroll-to-top scroll-to-target" data-target="html">
          <span className="fa fa-angle-up" />
        </div>
        <Script src="/js/jquery.js"></Script>
        <Script src="/js/popper.min.js"></Script>
        <Script src="/js/jquery-ui.js"></Script>
        <Script src="/js/bootstrap.min.js"></Script>
        <Script src="/js/jquery.paroller.min.js"></Script>
        <Script src="/js/jquery.fancybox.js"></Script>
        <Script src="/js/owl.js"></Script>
        <Script src="/js/element-in-view.js"></Script>
        <Script src="/js/parallax.min.js"></Script>
        <Script src="/js/wow.js"></Script>
        <Script src="/js/appear.js"></Script>
        <Script src="/js/script.js"></Script>
      </>
    </div>
  );
}
