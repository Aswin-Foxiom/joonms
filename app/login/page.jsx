"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import axios from "axios";
import Script from "next/script";
import React, { useContext, useState } from "react";
import MyContext from "../context/Context";
import { useFormik } from "formik";
import { loginValidationSchema } from "../utils/validation";
import { showToast } from "../utils/Toast";
import { BaseUrl } from "../utils/BaseUrl";

function Page() {
  // Changed here
  const { userId } = useContext(MyContext);
  const [Loading, setLoading] = useState(false);
  const [logDatas, setlogDatas] = useState(null);
  const [isShow, setisShow] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      company_id: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      Login(values);
    },
  });

  const Login = async (loginData) => {
    setLoading(true);
    try {
      const response = await axios.post(`${BaseUrl}/users/login`, loginData);
      console.log(response);
      localStorage.setItem("token", response?.data?.data?.token);
      window.location.href = "/";
    } catch (error) {
      showToast(error?.response?.data?.message ?? "Something Went Wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <>
        <meta charSet="utf-8" />
        <title>JoonMs</title>
        <link rel="icon" href="/images/joon/logo2.png" type="image/x-icon" />

        {/* Stylesheets */}
        <link href="/css/bootstrap.css" rel="stylesheet" />
        <link href="/css/style.css" rel="stylesheet" />
        <link href="/css/responsive.css" rel="stylesheet" />

        <link
          href="/css/masterslider/style/masterslider.css"
          rel="stylesheet"
        />
        <link
          href="/css/masterslider/skins/default/style.css"
          rel="stylesheet"
        />
        <link
          href="/css/masterslider/style/ms-partialview.css"
          rel="stylesheet"
        />
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

          {/* <section className="page-title">
            <div className="auto-container">
              <div
                className="image-layer"
                style={{
                  backgroundImage: "url(images/background/pattern-18.png)",
                }}
              />
              <div className="inner-container clearfix">
                <div className="pull-left">
                  <h1>Let’s Talk.</h1>
                </div>
                <div className="pull-right">
                  <ul className="bread-crumb clearfix">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>contact us</li>
                  </ul>
                </div>
              </div>
            </div>
          </section> */}

          <section
            className="contact-page-section"
            style={{ marginTop: "100px" }}
          >
            <div className="auto-container">
              <div className="row clearfix">
                {/* Map Column */}
                <div className="map-column col-lg-6 col-md-12 col-sm-12">
                  <img
                    src="/images/login-comp.jpg"
                    alt="Description of image"
                    className="responsive-img mt-md-20"
                  />
                </div>
                {/* Form Column */}
                <div className="form-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h2>Login</h2>
                    <div className="text">Login With JoonMS Credentials.</div>
                    {/* Contact Form */}
                    <div className="contact-form">
                      <form
                        onSubmit={(e) => {
                          formik.handleSubmit() & e.preventDefault();
                        }}
                        id="contact-form"
                      >
                        <div className="row clearfix">
                          {/* <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                            <input
                              type="text"
                              name="username"
                              placeholder="Name"
                              required=""
                            />
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                            <input
                              type="text"
                              name="subject"
                              placeholder="Subject"
                              required=""
                            />
                          </div> */}
                          <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <input
                              type="text"
                              name="username"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.username}
                              placeholder="Username"
                            />
                            {formik.touched.username &&
                            formik.errors.username ? (
                              <span
                                className="text-danger text-small pl-10"
                                style={{ marginLeft: "20px" }}
                              >
                                {formik.errors.username}
                              </span>
                            ) : null}
                          </div>

                          <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <div className="input-container">
                              <input
                                type={isShow ? "text" : "password"}
                                name="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                placeholder="Password"
                                className="input-field"
                              />
                              {isShow ? (
                                <i
                                  className="fas fa-eye-slash"
                                  id="input-icon"
                                  onClick={() => setisShow(!isShow)}
                                />
                              ) : (
                                <i
                                  className="fas fa-eye"
                                  id="input-icon"
                                  onClick={() => setisShow(!isShow)}
                                />
                              )}
                            </div>
                            {formik.touched.password &&
                            formik.errors.password ? (
                              <span
                                className="text-danger text-small pl-10"
                                style={{ marginLeft: "20px" }}
                              >
                                {formik.errors.password}
                              </span>
                            ) : null}
                          </div>

                          <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <input
                              type="text"
                              name="company_id"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.company_id}
                              placeholder="Company ID"
                              className="input-field"
                            />

                            {formik.touched.company_id &&
                            formik.errors.company_id ? (
                              <span
                                className="text-danger text-small pl-10"
                                style={{ marginLeft: "20px" }}
                              >
                                {formik.errors.company_id}
                              </span>
                            ) : null}
                          </div>

                          <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            {Loading ? (
                              <button
                                className="theme-btn submit-btn"
                                type="button"
                                name="submit-form"
                              >
                                Loading ...
                              </button>
                            ) : (
                              <button
                                className="theme-btn submit-btn"
                                type="submit"
                                name="submit-form"
                              >
                                Enter
                              </button>
                            )}
                            <br />
                            <div style={{ marginTop: "20px" }}>
                              <span
                                style={{
                                  fontWeight: "bold",
                                  color: "red",
                                }}
                              >
                                To sign up or reset your password, please use
                                our mobile app.
                              </span>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/*End Contact Form */}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <section
            className="call-to-action-section style-three"
            style={{ backgroundImage: "url(images/background/pattern-19.png)" }}
          >
            <div className="auto-container">
              <div className="content">
                <h2>
                  Getting connected with us &amp; for <br /> the update.
                </h2>
                <a href="contact.html" className="theme-btn btn-style-five">
                  <span className="txt">Subscribe Now!</span>
                </a>
              </div>
            </div>
          </section> */}

          <Footer />
        </div>
        {/*End pagewrapper*/}
        {/*Scroll to top*/}
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
      </>
    </div>
  );
}

export default Page; // Changed here
