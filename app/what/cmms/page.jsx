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
      <title>JoonMs - CMMS Software</title>
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
                  <h3>Revolutionize Maintenance Management with JoonMS CMMS</h3>
                  <p>
                    Streamline operations, enhance uptime, and deliver
                    measurable ROI with our comprehensive Computerized
                    Maintenance Management System.
                  </p>

                  <h3>What is CMMS Software by JoonMS?</h3>
                  <p>
                    Computerized Maintenance Management Systems (CMMS) by JoonMS
                    revolutionize the way organizations manage maintenance
                    operations. Designed with user-centric simplicity and
                    cutting-edge features, our CMMS platform empowers
                    facilities, technicians, and managers with the tools to
                    maintain assets efficiently, reduce downtime, and optimize
                    resources.
                  </p>

                  <h3>What Does a CMMS System Do?</h3>
                  <p>
                    A CMMS platform centralizes maintenance-related activities,
                    providing organizations with a comprehensive view of all
                    maintenance tasks, assets, and resources.
                  </p>
                </div>

                <div className="row clearfix">
                  <div className="column col-lg-6 col-md-12 col-sm-12">
                    <ul className="list-style-four">
                      <li>Tracks maintenance schedules and work orders</li>
                      <li>Organizes asset histories and performance metrics</li>
                      <li>Streamlines preventive maintenance</li>
                    </ul>
                  </div>
                  <div className="column col-lg-6 col-md-12 col-sm-12">
                    <ul className="list-style-four">
                      <li>Automates notifications and updates</li>
                      <li>Simplifies compliance reporting</li>
                      <li>Provides intelligent data analytics</li>
                    </ul>
                  </div>
                </div>

                <div className="text">
                  <h3>Industries Benefiting from JoonMS CMMS</h3>
                  <p>
                    JoonMS CMMS is tailored for a broad range of industries:
                  </p>
                  <div className="lower-box">
                    <div className="row clearfix">
                      <div className="column col-12">
                        <h4>1. Manufacturing and Industrial Operations</h4>
                      </div>
                      <div className="column col-12">
                        <h4>2. Healthcare and Hospital Facilities</h4>
                      </div>
                      <div className="column col-12">
                        <h4>3. Hospitality and Tourism</h4>
                      </div>
                      <div className="column col-12">
                        <h4>4. Retail Chains and Warehousing</h4>
                      </div>
                      <div className="column col-12">
                        <h4>5. Government and Educational Institutions</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text">
                  <h3>Benefits of JoonMS CMMS</h3>
                  <div className="lower-box">
                    <div className="row clearfix">
                      <div className="column col-12">
                        <h4>1. Enhanced Operational Efficiency</h4>
                        <div className="info">
                          Automate repetitive tasks, optimize workflows, and
                          reduce human errors
                        </div>
                      </div>
                      <div className="column col-12">
                        <h4>2. Cost Savings</h4>
                        <div className="info">
                          Minimize equipment downtime, extend asset lifespans,
                          and reduce emergency repair costs
                        </div>
                      </div>
                      <div className="column col-12">
                        <h4>3. Data-Driven Decision Making</h4>
                        <div className="info">
                          Leverage real-time data visualization and analytics
                          for informed insights
                        </div>
                      </div>
                      <div className="column col-12">
                        <h4>4. Compliance and Safety Assurance</h4>
                        <div className="info">
                          Maintain regulatory compliance with robust
                          documentation and reporting
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text">
                  <h3>Why Choose JoonMS CMMS?</h3>
                  <div className="lower-box">
                    <div className="row clearfix">
                      <div className="column col-12">
                        <h4>1. Intuitive User Experience</h4>
                        <div className="info">
                          Designed for simplicity and minimal training time
                        </div>
                      </div>
                      <div className="column col-12">
                        <h4>2. Advanced Predictive Maintenance</h4>
                        <div className="info">
                          AI-powered insights to predict equipment failures
                        </div>
                      </div>
                      <div className="column col-12">
                        <h4>3. Seamless Integration</h4>
                        <div className="info">
                          Effortless integration with ERP, IoT devices, and
                          other systems
                        </div>
                      </div>
                      <div className="column col-12">
                        <h4>4. Customization and Flexibility</h4>
                        <div className="info">
                          Extensive customization options to match specific
                          workflows
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3>Environmental Sustainability</h3>
                  <p>
                    JoonMS CMMS contributes to sustainability by optimizing
                    resource use, reducing waste, and improving energy
                    efficiency. Our platform's data insights empower
                    organizations to implement eco-friendly practices.
                  </p>

                  <h3>Ready to Transform Your Maintenance Management?</h3>
                  <p>
                    Explore the difference with JoonMS and elevate your
                    maintenance operations to new heights. Schedule a demo or
                    contact us for a free consultation today!
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
