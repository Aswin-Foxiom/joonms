"use client";
import MyContext from "@/app/context/Context";
import { showToast } from "@/app/utils/Toast";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { useParams } from "next/navigation";
import Script from "next/script";
import React, { useContext, useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { BlockUI } from "primereact/blockui";
import { BaseUrl } from "@/app/utils/BaseUrl";

function Page() {
  // Renamed to start with an uppercase letter

  const params = useParams();
  const [loading, setloading] = useState(true);
  const { user } = useContext(MyContext);
  const [planData, setplanData] = useState(null);
  const [profile, setprofile] = useState(null);
  const [referal_id, setreferal_id] = useState("");
  const [totalAmount, settotalAmount] = useState(0);
  const [discount_percent, setdiscount_percent] = useState(0);
  const [dataEligibility, setdataEligibility] = useState(null);
  const { id } = params;

  const calculateAmount = () => {
    const perUserAmt = planData?.subtype_Id?.per_user_amt || 0;
    const usersAllowed = planData?.users_allowed || 0;
    const perDayBackupAmt = planData?.subtype_Id?.per_day_backup_amt || 0;
    const backupDays = planData?.backup_days || 0;

    let amount = perUserAmt * usersAllowed + perDayBackupAmt * backupDays;

    if (discount_percent) {
      amount = amount * (1 - discount_percent / 100);
    }

    return (amount * 100).toFixed(0); // Stripe expects the amount in the smallest currency unit (e.g., cents)
  };

  useEffect(() => {
    if (!localStorage.getItem("token") || !id || id.length !== 24) {
      window.location.href = "/";
      return;
    }
    getPlanDetails();
    getUserProfile();
  }, [id]); // Added dependency array

  useEffect(() => {
    checkPurchaseStatus();
  }, []);

  useEffect(() => {
    settotalAmount(calculateAmount());
  }, [planData, discount_percent]);

  const getUserProfile = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      const response = await axios.get(`${BaseUrl}/users/profile`, config);

      setprofile(response?.data?.data?.profile);

      setdiscount_percent(
        response?.data?.data?.profile?.company?.purchase_plan?.discount ?? 0
      );
    } catch (error) {
      localStorage.clear();
      window.location.href = "/";
    }
  };

  const getPlanDetails = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/subscriptions/${id}`);
      setplanData(response?.data?.data ?? null);
    } catch (error) {
      showToast("Sorry , something went wrong", false);
    } finally {
      setloading(false);
    }
  };

  const checkPurchaseStatus = async () => {
    const response = await axios.post(
      `${BaseUrl}/purchase/check-eligible`,
      {
        plan_id: id,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Attach token here
        },
      }
    );
    if (response?.status) {
      setdataEligibility(response?.data);
    }
  };

  // const purchasePlan = async () => {
  //   const token = localStorage.getItem("token");
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };
  //   const data = {
  //     company_id: user,
  //     plan_id: id,
  //     referral_id: referal_id,
  //     total_amt: `${
  //       planData?.subtype_Id?.per_user_amt * planData?.users_allowed +
  //       planData?.subtype_Id?.per_day_backup_amt * planData?.backup_days
  //     }`,
  //   };
  //   try {
  //     const response = await axios.post(
  //       `${BaseUrl}/purchase/plan`,
  //       data,
  //       config
  //     );
  //     console.log("THE RESPONSE IS", response);
  //   } catch (error) {
  //     console.log(error?.response?.data?.message);
  //   } finally {
  //     console.log("completed");
  //   }
  // };

  const makePayment = async (token) => {
    // const body = { token: token };
    setloading(true);
    const body = {
      token: token,
      referral_id: referal_id,
      company_id: profile?.company?._id,
      plan_id: id,
      amount: totalAmount,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    try {
      const response = await axios.post(
        `${BaseUrl}/purchase/plan`,
        body,
        config // Include the config object here
      );
      localStorage.setItem("ispurchase", true);
      window.location.href = "/thank-you";
      console.log(response);
    } catch (error) {
      console.log(error?.response?.data?.message);
      localStorage.setItem("error", error?.response?.data?.message ?? "");
      localStorage.setItem("iserror", true);
      window.location.href = "/error";
    } finally {
      setloading(false);
    }
  };

  return (
    <BlockUI
      fullScreen
      template={
        <h1 style={{ color: "white", fontWeight: "bolder" }}> Loading ... </h1>
      }
      blocked={loading}
    >
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
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <div
                          className="sec-title"
                          style={{ marginBottom: "20px" }}
                        >
                          <h2>Referral Code</h2>
                        </div>
                        <div className="billing-inner">
                          <div className="row clearfix">
                            {/*Form Group*/}
                            <div
                              className="form-group col-12"
                              style={{ marginTop: "-9px" }}
                            >
                              {/* <div className="field-label">
                                First name <sup>*</sup>
                              </div> */}
                              <input
                                type="text"
                                value={referal_id}
                                onChange={(e) => setreferal_id(e.target.value)}
                                name="first-name"
                                placeholder="Referral Code"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="sidebar-title"
                          style={{ marginBottom: "15px" }}
                        >
                          <h2>About the plan</h2>
                        </div>
                        <p>
                          {planData?.description ?? "No Description Available"}
                        </p>

                        <div
                          className="sidebar-title"
                          style={{ marginBottom: "20px" }}
                        >
                          <h2>Services included in this plan</h2>
                        </div>

                        <div className="row">
                          {planData?.menuLists?.length ? (
                            <>
                              {planData.menuLists
                                .slice(0, 10)
                                .map((value, index) => (
                                  <div className="col-6" key={index}>
                                    <span className="fa fa-star">
                                      <span style={{ paddingLeft: "5px" }}>
                                        {value.item}
                                      </span>
                                    </span>
                                    <br />
                                  </div>
                                ))}
                              {planData.menuLists
                                .slice(10)
                                .map((value, index) => (
                                  <div className="col-6" key={index + 10}>
                                    <span className="fa fa-star">
                                      <span style={{ paddingLeft: "5px" }}>
                                        {value.item}
                                      </span>
                                    </span>
                                    <br />
                                  </div>
                                ))}
                            </>
                          ) : (
                            <div
                              className="sidebar-title"
                              style={{
                                marginBottom: "15px",
                                textAlign: "center",
                              }}
                            >
                              <h3>No services included in this plan.</h3>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <div
                          className="sec-title"
                          style={{ marginBottom: "20px" }}
                        >
                          <h2>Your Order</h2>
                        </div>
                        <div
                          className="shop-order-box"
                          style={{ marginTop: "-1px" }}
                        >
                          <ul className="order-list">
                            <li>
                              Product<span>TOTAL</span>
                            </li>
                            <li>
                              Plan Name <span>{planData?.name}</span>
                            </li>
                            <li>
                              Company <span>{profile?.company?.name}</span>
                            </li>
                            <li>
                              Price Plan
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
                              Discount{" "}
                              <span>
                                {" "}
                                {discount_percent
                                  ? `${discount_percent} %`
                                  : "No Discount Added"}{" "}
                              </span>
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
                                {discount_percent ? (
                                  <>
                                    {/* Calculate discounted amount */}
                                    {(
                                      (planData?.subtype_Id?.per_user_amt *
                                        planData?.users_allowed +
                                        planData?.subtype_Id
                                          ?.per_day_backup_amt *
                                          planData?.backup_days) *
                                      (1 - discount_percent / 100)
                                    ).toFixed(2)}{" "}
                                    AED
                                  </>
                                ) : (
                                  // Show normal total if no discount
                                  <>
                                    {(
                                      planData?.subtype_Id?.per_user_amt *
                                        planData?.users_allowed +
                                      planData?.subtype_Id?.per_day_backup_amt *
                                        planData?.backup_days
                                    ).toFixed(2)}{" "}
                                    AED
                                  </>
                                )}
                              </span>
                            </li>
                          </ul>

                          {/*Place Order*/}
                          <div
                            className="place-order"
                            style={{
                              marginTop: "20px",
                              textAlign: `${
                                dataEligibility?.eligible ? "right" : "left"
                              }`,
                            }}
                          >
                            {dataEligibility?.eligible ? (
                              <StripeCheckout
                                stripeKey="pk_live_51PF9MIRwgybEvRGEU2ZWhyHEZTfl5IA1ubbVPc6Lwt0TPVs7cupZt1i9KV3i3CfUqfRyqMal0LVVRVJSrifr8HEu00x3IQMDNU"
                                // stripeKey="pk_test_51PF9MIRwgybEvRGE3uPBLqN1RiZY6TGLcabqHoJ8S4tNev0I2iJMnsL3f2mKdr8WF6E0OoJLZNl48hj8ie6Pk5NT002bYnIzbg"
                                amount={totalAmount}
                                currency="AED"
                                name="JoonMS Computer systems & Communication equipment software trading CO. L.L.C"
                                token={makePayment}
                                className="theme-btn order-btn"
                              />
                            ) : (
                              <span
                                style={{ color: "red", fontWeight: "bold" }}
                              >
                                {dataEligibility?.message}
                              </span>
                            )}
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

        {/* <Script src="/js/jquery.js"></Script>
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
        <Script src="/js/script.js"></Script> */}
      </>
    </BlockUI>
  );
}

export default Page; // Renamed to match the function name
