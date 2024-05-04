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
                <h1>Research & Development</h1>
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
                  {/* <h2>Research & Development</h2> */}
                  <div className="text">
                    <p>
                      Our dedicated teams in IT Solutions harness the power of
                      cutting-edge AI techniques to develop solutions that not
                      only meet but anticipate the evolving demands of our
                      customers. We invest in thorough market analysis, user
                      feedback mechanisms, and advanced AI-driven tools to stay
                      ahead of the curve. This proactive approach ensures that
                      our solutions are not just current, but future-proof,
                      adapting seamlessly to changing landscapes and emerging
                      trends in the digital realm.
                    </p>
                    <p>
                      By integrating AI technologies into our processes, we
                      enhance efficiency, accuracy, and scalability, empowering
                      our customers with intelligent IT solutions that drive
                      transformative results. At JoonMS, our commitment to
                      excellence knows no bounds. We strive to be not just a
                      solution provider, but a trusted partner in our customers
                      digital transformation journey, powered by the latest
                      advancements in AI technology.
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
                    <img src="/images/joon/service2.jpg" alt="" />
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
