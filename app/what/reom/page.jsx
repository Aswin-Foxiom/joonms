"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AppSection from "@/components/Sections/AppSection";
import PricingSection from "@/components/Sections/PricingSection";
import Script from "next/script";
import React from "react";

function page() {
  return (
    <div>
      <meta charSet="utf-8" />
      <title>JoonMs - ReOM Software</title>
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
                  <h3>Redefine Real Estate Operations with JoonMS ReOM</h3>
                  <p>
                    Simplifying processes, maximizing efficiency, and unlocking
                    new opportunities for growth.
                  </p>

                  <h3>What is ReOM Software?</h3>
                  <p>
                    ReOM (Real Estate Operation Management) software is a
                    cutting-edge digital platform that transforms operational,
                    administrative, and maintenance processes within the real
                    estate sector. At JoonMS, our ReOM system combines the
                    functionalities of CaFM, CMMS, and ERP systems into a
                    unified, comprehensive solution.
                  </p>

                  <h3>What Does a ReOM System Do?</h3>
                  <p>
                    JoonMS's ReOM software integrates core aspects of real
                    estate management into a single, cohesive platform, enabling
                    organizations to:
                  </p>
                </div>

                <div className="row clearfix">
                  <div className="column col-lg-6 col-md-12 col-sm-12">
                    <ul className="list-style-four">
                      <li>Manage Property Portfolios</li>
                      <li>Streamline Maintenance Schedules</li>
                      <li>Track Financial Transactions</li>
                    </ul>
                  </div>
                  <div className="column col-lg-6 col-md-12 col-sm-12">
                    <ul className="list-style-four">
                      <li>Analyze Performance Metrics</li>
                      <li>Automate Routine Tasks</li>
                      <li>Eliminate Redundancies</li>
                    </ul>
                  </div>
                </div>

                <div className="text">
                  <h3>ReOM Advantages and Benefits</h3>
                  <div className="lower-box">
                    <div className="row clearfix">
                      <div className="column col-12">
                        <h4>Enhanced Transparency</h4>
                        <div className="info">
                          Access real-time data across operations for improved
                          visibility
                        </div>
                      </div>
                      <div className="column col-12">
                        <h4>Informed Decision-Making</h4>
                        <div className="info">
                          Leverage accurate analytics for strategic planning
                        </div>
                      </div>
                      <div className="column col-12">
                        <h4>Boosted Productivity</h4>
                        <div className="info">
                          Automation and streamlined processes reduce manual
                          workloads
                        </div>
                      </div>
                      <div className="column col-12">
                        <h4>Tailored Solutions</h4>
                        <div className="info">
                          Adaptable to unique business needs without immediate
                          customization
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text">
                  <h3>Industries Served</h3>
                  <div className="lower-box">
                    <div className="row clearfix">
                      <div className="column col-12">
                        <h4>Facilities Management</h4>
                      </div>
                      <div className="column col-12">
                        <h4>Real Estate Development</h4>
                      </div>
                      <div className="column col-12">
                        <h4>Hospitality and Retail</h4>
                      </div>
                      <div className="column col-12">
                        <h4>Environmental Services</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text">
                  <h3>Standard ReOM Features</h3>
                  <div className="lower-box">
                    <div className="row clearfix">
                      <div className="column col-12">
                        <h4>Asset Management</h4>
                        <div className="info">
                          Comprehensive tracking of asset lifecycles
                        </div>
                      </div>
                      <div className="column col-12">
                        <h4>Work Order Management</h4>
                        <div className="info">
                          Efficient task assignment and monitoring
                        </div>
                      </div>
                      <div className="column col-12">
                        <h4>Financial Integration</h4>
                        <div className="info">
                          Simplified budgeting and invoicing
                        </div>
                      </div>
                      <div className="column col-12">
                        <h4>Mobile Accessibility</h4>
                        <div className="info">Manage operations on the go</div>
                      </div>
                    </div>
                  </div>

                  <h3>Environmental Sustainability</h3>
                  <p>
                    JoonMS is committed to promoting environmentally sustainable
                    practices. Our ReOM enables organizations to reduce paper
                    usage, track energy consumption, and adopt eco-friendly
                    maintenance strategies.
                  </p>

                  <h3>Why Choose JoonMS?</h3>
                  <p>
                    JoonMS's ReOM software is a transformative platform tailored
                    to industry needs. With proven expertise in ERP, CRM, and
                    CaFM solutions, we ensure reliability, adaptability, and
                    superior performance.
                  </p>

                  <h3>Ready to Transform Your Real Estate Operations?</h3>
                  <p>
                    Contact us today to discover how JoonMS ReOM can
                    revolutionize your operational efficiency and
                    sustainability.
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
