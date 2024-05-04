import Navbar from "@/components/Navbar";
import React from "react";

function page() {
  return (
    <div>
      <link href="/css/bootstrap.css" rel="stylesheet" />
      <link href="/css/style.css" rel="stylesheet" />
      <link href="/css/responsive.css" rel="stylesheet" />

      <div className="page-wrapper">
        {/* <div class="preloader"></div> */}
        <Navbar />
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
                <h1>Listening & Understanding</h1>
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
                  {/* <h2>Listening & unuderstanding</h2> */}
                  <div className="text">
                    <p>
                      We recognize that every individual, every business, has
                      unique challenges and aspirations. That&apos;s why we
                      strive to go beyond simply hearing our customers; we seek
                      to truly understand them. By immersing ourselves in their
                      perspectives, concerns, and objectives, we can effectively
                      tailor our solutions to address their specific pain points
                      and goals.
                    </p>
                    <p>
                      This customer-centric approach is at the heart of
                      everything we do. It&apos;s what drives us to innovate, to
                      create, and to deliver practical solutions that not only
                      meet but exceed expectations. Our commitment to listening
                      and understanding empowers us to craft apps that not only
                      solve problems but enhance experiences, ultimately
                      fostering lasting partnerships built on trust,
                      reliability, and mutual success.
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
                    <img src="/images/joon/service1.jpg" alt="" />
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
