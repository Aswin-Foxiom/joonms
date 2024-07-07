"use client";
import React, { useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Script from "next/script";

function Page() {
  useEffect(() => {
    // Cleanup function for when component unmounts or user navigates away
    const handleBeforeUnload = (e) => {
      // Remove "ispurchase" from localStorage
      localStorage.removeItem("ispurchase");
    };

    // Add event listener for beforeunload
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      // Clean up the event listener when component unmounts
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // Redirect logic when "ispurchase" is not found in localStorage
  useEffect(() => {
    if (!localStorage.getItem("ispurchase")) {
      window.location.href = "/"; // Redirect to home if "ispurchase" is not found
    }
  }, []);

  return (
    <div>
      <meta charSet="utf-8" />
      <title>JoonMs</title>
      {/* Stylesheets */}
      <link href="/css/bootstrap.css" rel="stylesheet" />
      <link href="/css/style.css" rel="stylesheet" />
      <link href="/css/responsive.css" rel="stylesheet" />
      <link href="/css/masterslider/style/masterslider.css" rel="stylesheet" />
      <link href="/css/masterslider/skins/default/style.css" rel="stylesheet" />
      <link
        href="/css/masterslider/style/ms-partialview.css"
        rel="stylesheet"
      />
      {/* Responsive */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />

      <div className="page-wrapper">
        <Navbar />
        <section className="banner-section-four thank-you-padding">
          <div className="auto-container">
            <div className="content-box">
              <h2>Thank You for Your Purchase!</h2>
              <div
                className="text"
                style={{
                  fontWeight: "bold",
                  marginBottom: "10px",
                  color: "black",
                }}
              >
                We are thrilled to have you on-board. Your subscription to our
                business plan is now active, and you are one step closer to
                managing your business more efficiently with our mobile App.
              </div>

              <a href="/" className="theme-btn btn-style-fourteen">
                Back To Home
              </a>
            </div>
            <div className="image">
              <img
                src="/images/gallery/thankyou.png"
                alt=""
                className="thank-image"
              />
            </div>
          </div>
        </section>

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
      <Script src="/js/jquery.easing.min.js"></Script>
      <Script src="/js/masterslider.js"></Script>
      <Script src="/js/jquery.fancybox.js"></Script>
      <Script src="/js/owl.js"></Script>
      <Script src="/js/element-in-view.js"></Script>
      <Script src="/js/parallax.min.js"></Script>
      <Script src="/js/wow.js"></Script>
      <Script src="/js/appear.js"></Script>
      <Script src="/js/script.js"></Script>
    </div>
  );
}

export default Page;
