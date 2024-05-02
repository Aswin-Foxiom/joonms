import React from "react";

function Navbar() {
  return (
    <header className="main-header header-style-one">
      {/* Header Upper */}
      <div className="header-upper">
        <div className="inner-container">
          <div className="auto-container clearfix">
            {/*Info*/}
            <div className="logo-outer">
              <div className="logo">
                <a href="/">
                  <img src="images/joon/logo1-croped.png" alt="" title="" />
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
                      <a href="#what">What</a>
                    </li>
                    <li>
                      <a href="#who">Who</a>
                    </li>
                    <li>
                      <a href="#where">Where</a>
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
                    <span>Call Us</span> +97 150 540 8757
                  </a>
                </div>
                {/* Button Box */}
                <div className="btn-box">
                  <a href="/" className="theme-btn btn-style-one">
                    <span className="txt">Get started</span>
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
            <a href="/">
              {/* <img src="images/logo-2.png" alt="" title="" /> */}
              <h1 style={{ color: "#FFE000", fontWeight: "bold" }}> JoonMs </h1>
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
  );
}

export default Navbar;
