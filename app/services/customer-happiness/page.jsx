import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import React from "react";

function page() {
  return (
    <div>
      <link href="/css/bootstrap.css" rel="stylesheet" />
      <link href="/css/style.css" rel="stylesheet" />
      <link href="/css/responsive.css" rel="stylesheet" />

      <div className="page-wrapper">
        <Navbar />
        {/* End Main Header */}
        {/*Page Title*/}

        <section className="page-title">
          <div className="auto-container">
            {/* Image Layer */}
            <div
              className="image-layer"
              style={{
                backgroundImage: "url(images/background/pattern-18.png)",
              }}
            />
            <div className="inner-container clearfix">
              <div className="pull-left">
                <h1>Customer hapiness</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="history-section mt-4">
          <div className="auto-container">
            <div className="row clearfix">
              {/* Content Column */}
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner-column wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  {/* <h2>Customer hapiness</h2> */}
                  <div className="text">
                    <p>
                      We understand that true value lies in the ongoing support
                      we provide, ensuring that our solutions evolve with our
                      customers' needs. Additionally, our pricing plans are
                      designed with flexibility in mind, tailored to fit
                      individual requirements without compromising on quality.
                    </p>
                    <p>
                      By prioritizing affordability and adaptability, we foster
                      long-term partnerships that benefit both our customers and
                      ourselves. Through their word-of-mouth recommendations,
                      our satisfied customers become integral to our expansion,
                      driving mutual growth and success. At JoonMS, customer
                      advocacy is not just a byproduct of our service; it's the
                      cornerstone of our collaborative journey towards
                      excellence.
                    </p>
                  </div>
                </div>
              </div>
              {/* Image Column */}
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner-column wow fadeInRight"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="image">
                    <img src="/images/joon/service3.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <Footer /> */}
        {/* End Main Footer */}
      </div>
      {/*End pagewrapper*/}
      {/*Scroll to top*/}
      <div className="scroll-to-top scroll-to-target" data-target="html">
        <span className="fa fa-angle-up" />
      </div>
      {/* <Script src="/js/jquery.js"></Script>
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
      <Script src="/js/script.js"></Script> */}
    </div>
  );
}

export default page;
