"use client";
import MyContext from "@/app/context/Context";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { useParams } from "next/navigation";
import Script from "next/script";
import React, { useContext, useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";

function Page() {
  // Renamed to start with an uppercase letter
  const params = useParams();
  const { user } = useContext(MyContext);
  const [planData, setplanData] = useState(null);
  const [referal_id, setreferal_id] = useState("");
  const { id } = params;

  useEffect(() => {
    if (!id || id.length !== 24) {
      window.location.href = "/";
      return;
    }
    getPlanDetails();
  }, [id]); // Added dependency array

  const getPlanDetails = async () => {
    try {
      const response = await axios.get(
        `https://server.joonms.com/subscriptions/${id}`
      );
      console.log("THE RESPONSE IS", response);
      setplanData(response?.data?.data ?? null);
    } catch (error) {
      console.log(error?.response?.data?.message);
    } finally {
      console.log("completed");
    }
  };

  const purchasePlan = async () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const data = {
      company_id: user,
      plan_id: id,
      referral_id: referal_id,
      total_amt: `${
        planData?.subtype_Id?.per_user_amt * planData?.users_allowed +
        planData?.subtype_Id?.per_day_backup_amt * planData?.backup_days
      }`,
    };
    try {
      const response = await axios.post(
        `https://server.joonms.com/purchase/plan`,
        data,
        config
      );
      console.log("THE RESPONSE IS", response);
    } catch (error) {
      console.log(error?.response?.data?.message);
    } finally {
      console.log("completed");
    }
  };

  // const makePayment = async (token) => {
  //   const body = { token };

  //   try {
  //     const response = await axios.post(`http://localhost:3002/payment`, body);
  //     console.log("THE RESPONSE IS", response);
  //   } catch (error) {
  //     console.log(error?.response?.data?.message);
  //   } finally {
  //     console.log("completed");
  //   }
  // };

  return (
    <div>
      <>
        <meta charSet="utf-8" />
        <title>JoonMs</title>
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
          href="/images/favicon.png"
          type="image/x-icon"
        />
        <link rel="icon" href="/images/joon/logo1.png" type="image/x-icon" /> */}
        {/* Responsive */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <div className="page-wrapper">
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
                  <h1>Checkout</h1>
                </div>
                <div className="pull-right">
                  <ul className="bread-crumb clearfix">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>Checkout</li>
                  </ul>
                </div>
              </div>
            </div>
          </section> */}

          <div className="checkout-page" style={{ marginTop: "100px" }}>
            <div className="auto-container">
              {/*Default Links*/}
              {/* <ul className="default-links">
                <li>
                  Have a coupone? <a href="#">Click here to enter your code</a>
                </li>
              </ul> */}
              {/*Billing Details*/}
              <div className="billing-details">
                <div className="shop-form">
                  <form method="post" action="checkout.html">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="sec-title">
                          <h2>Refereal Code</h2>
                        </div>
                        <div className="billing-inner">
                          <div className="row clearfix">
                            {/*Form Group*/}
                            <div className="form-group col-12">
                              {/* <div className="field-label">
                                First name <sup>*</sup>
                              </div> */}
                              <input
                                type="text"
                                value={referal_id}
                                onChange={(e) => setreferal_id(e.target.value)}
                                name="first-name"
                                placeholder="Refereal Code"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="sec-title">
                          <h2>Your Order</h2>
                        </div>
                        <div
                          className="shop-order-box"
                          style={{ marginTop: "-1px" }}
                        >
                          <ul className="order-list">
                            <li>
                              Prodcut<span>TOTAL</span>
                            </li>
                            <li>
                              Plan Name <span>{planData?.name}</span>
                            </li>
                            <li>
                              Price Plan{" "}
                              <span>
                                {planData?.subtype_Id?.per_user_amt *
                                  planData?.users_allowed +
                                  planData?.subtype_Id?.per_day_backup_amt *
                                    planData?.backup_days}{" "}
                                AED
                              </span>
                            </li>
                            {/* <li>
                              Discount <span>$35.00</span>
                            </li> */}
                            <li>
                              Discount <span> No Discount Added</span>
                            </li>
                            {/* <li>
                              Subtotal<span className="dark">$35.00</span>
                            </li>
                            <li>
                              Shipping And Handling
                              <span className="shipping">Free Shipping</span>
                            </li> */}
                            <li className="total">
                              TOTAL
                              <span className="dark">
                                {planData?.subtype_Id?.per_user_amt *
                                  planData?.users_allowed +
                                  planData?.subtype_Id?.per_day_backup_amt *
                                    planData?.backup_days}{" "}
                                AED
                              </span>
                            </li>
                          </ul>

                          {/*Place Order*/}
                          <div
                            className="place-order"
                            style={{ marginTop: "20px" }}
                          >
                            {/* <StripeCheckout
                              stripeKey="pk_test_51PF9MIRwgybEvRGE3uPBLqN1RiZY6TGLcabqHoJ8S4tNev0I2iJMnsL3f2mKdr8WF6E0OoJLZNl48hj8ie6Pk5NT002bYnIzbg"
                              amount={200}
                              currency="AED"
                              name="Joon Ms"
                              token={makePayment}
                            /> */}

                            <button
                              type="button"
                              // onClick={purchasePlan}
                              className="theme-btn order-btn"
                            >
                              Purchase Now
                            </button>
                          </div>
                          {/*End Place Order*/}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/*End Billing Details*/}
            </div>
          </div>

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
      </>
    </div>
  );
}

export default Page; // Renamed to match the function name
