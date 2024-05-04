import React from "react";
import Script from "next/script";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BannerSection from "@/components/Sections/BannerSection";
import ServiceSection from "@/components/Sections/ServiceSection";
import AboutUsSection from "@/components/Sections/AboutUsSection";
import TestimonialSection from "@/components/Sections/TestimonialSection";
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
          <Navbar />

          <BannerSection />

          <section className="about-contact-section">
            <div className="auto-container">
              <div
                className="inner-container"
                style={{ backgroundColor: "#F9F9F9" }}
              >
                <div className="clearfix">
                  <div className="pull-left">
                    <div className="title">Have any question about us?</div>
                    <h2>How Do We Do ?</h2>
                  </div>
                  <div className="pull-right">
                    <a href="/" className="theme-btn btn-style-two">
                      <span className="txt">Contact Us</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ServiceSection />

          <AboutUsSection />

          {/* <PricingSection /> */}

          <TestimonialSection />

          {/* <NewsSection /> */}

          {/* <section
            className="call-to-action-section"
            style={{
              backgroundImage: "url(images/background/map-pattern.png)",
            }}
          >
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
          </section> */}

          <Footer />
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