"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/Sections/PricingSection";
import AppSection from "@/components/Sections/AppSection";
import Script from "next/script";
import React from "react";

function page() {
  return (
    <div>
      <meta charSet="utf-8" />
      <title>JoonMs - CAFM Software</title>
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

      <link rel="icon" href="//images/joon/logo2.png" type="image/x-icon" />

      {/* Responsive */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      <div className="page-wrapper">
        <Navbar />

        <section className="projects-detail-section">
          <div className="auto-container">
            <div className="inner-container">
              <div className="lower-content">
                <div className="text">
                  <h3>Transform Facility Management with JoonMS</h3>
                  <p>
                    Transform facility management with JoonMS: Your all-in-one
                    solution to streamline operations, boost productivity, and
                    deliver unmatched efficiency
                  </p>

                  <h3>
                    Computer-Aided Facilities Management (CaFM): A Comprehensive
                    Solution by JoonMS
                  </h3>
                  <p>
                    At JoonMS, we redefine the landscape of Computer-Aided
                    Facilities Management (CAFM) with a cutting-edge ERP
                    application tailored for facilities management and real
                    estate companies. CAFM software acts as a powerful platform,
                    streamlining diverse aspects of facility management,
                    operations, and maintenance.
                  </p>

                  <h3>What is CAFM by JoonMS?</h3>
                  <p>
                    JoonMS's CAFM solution integrates extensive facilities
                    management functions to enhance the efficiency and
                    effectiveness of operations. Our system offers advanced
                    capabilities, bridging the gap between traditional facility
                    management methods and modern technological solutions.
                  </p>

                  <h3>Key Areas of Focus</h3>
                </div>

                <div className="row clearfix">
                  <div className="column col-lg-6 col-md-12 col-sm-12">
                    <ul className="list-style-four">
                      <li>Space Planning and Utilization</li>
                      <li>Asset Lifecycle Management</li>
                      <li>Maintenance and Work Order Management</li>
                    </ul>
                  </div>
                  <div className="column col-lg-6 col-md-12 col-sm-12">
                    <ul className="list-style-four">
                      <li>Sustainability and Energy Optimization</li>
                      <li>Comprehensive Reporting</li>
                      <li>Vendor and Contract Management</li>
                    </ul>
                  </div>
                </div>

                <div className="text">
                  <h3>Industries Benefiting from JoonMS's CAFM</h3>
                  <p>
                    Our CAFM system is versatile, making it a go-to solution for
                    various industries requiring robust facility management:
                  </p>
                  <div className="lower-box">
                    <div className="row clearfix">
                      <div className="column col-12">
                        <h4>1. Commercial Property Management</h4>
                      </div>
                      <div className="column col-12">
                        <h4>2. Healthcare Institutions</h4>
                      </div>
                      <div className="column col-12">
                        <h4>3. Educational Campuses</h4>
                      </div>
                      <div className="column col-12">
                        <h4>4. Hospitality and Resorts</h4>
                      </div>
                      <div className="column col-12">
                        <h4>5. Multi-facility Manufacturing Operations</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text">
                  <h3>Why Choose JoonMS CAFM?</h3>
                  <h4>Unparalleled Features:</h4>
                  <div className="lower-box">
                    <div className="row clearfix">
                      <div className="column col-12">
                        <h4>1. Real-Time Space Visualization:</h4>
                        <div className="info">
                          Leverage CAD-integrated visuals for precise space
                          planning
                        </div>
                      </div>
                      <div className="column col-12">
                        <h4>2. Energy Performance Analysis:</h4>
                        <div className="info">
                          Track and optimize energy usage with data-driven
                          insights
                        </div>
                      </div>
                      <div className="column col-12">
                        <h4>3. User-Friendly Interface:</h4>
                        <div className="info">
                          Designed for users at all technical levels, our
                          platform ensures seamless navigation
                        </div>
                      </div>
                      <div className="column col-12">
                        <h4>4. Enhanced Communication Channels:</h4>
                        <div className="info">
                          Integrated tools to facilitate effective communication
                          and task delegation
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3>Tangible Benefits:</h3>
                  <div className="lower-box">
                    <div className="row clearfix">
                      <div className="column col-12">
                        <ul className="list-style-four">
                          <li>
                            Cost Reduction: Efficient use of space and
                            streamlined maintenance activities lower operational
                            expenses
                          </li>
                          <li>
                            Improved Operational Efficiency: Centralized data
                            and automated workflows save time and boost
                            productivity
                          </li>
                          <li>
                            Environmental Impact: Promote sustainability by
                            reducing energy consumption and minimizing waste
                          </li>
                          <li>
                            Empowered Decision-Making: Data-rich analytics
                            support proactive and strategic decisions
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text">
                  <h3>Tailored for You</h3>
                  <p>
                    JoonMS recognizes that every organization has unique
                    requirements. Whether you manage large-scale properties or
                    specialized facilities, our CAFM platform is designed to
                    adapt to your specific needs. Explore the unparalleled
                    efficiency and effectiveness JoonMS brings to facilities
                    management.
                  </p>

                  <h3>Ready to Transform Your Facility Management?</h3>
                  <p>
                    Start your journey with JoonMS today by scheduling a demo or
                    reaching out for a free consultation. Let us help you
                    transform facility management into a strategic advantage!
                  </p>
                </div>

                <PricingSection />
                <AppSection />
              </div>
            </div>
          </div>
        </section>

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
      <Script src="/js/script.js"></Script>
    </div>
  );
}

export default page;
