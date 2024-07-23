import Script from "next/script";
import React from "react";

function Page() {
  return (
    <div>
      <meta charSet="utf-8" />
      <title>JoonMs</title>
      <link rel="icon" href="/images/joon/logo2.png" type="image/x-icon" />

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
        <section
          className="projects-detail-section"
          style={{ paddingTop: "10px" }}
        >
          <div className="auto-container">
            <div className="inner-container">
              <div className="lower-content">
                <h2>Privacy Policy for JoonMS</h2>
                <div className="lower-box" style={{ marginTop: "10px" }}>
                  <div className="row clearfix">
                    <div
                      className="column col-lg-3 col-md-6 col-sm-12"
                      style={{ marginBottom: "0px" }}
                    >
                      <h4>Effective Date:</h4>
                      <div className="info">July 01, 2024</div>
                    </div>
                  </div>
                </div>
                <div className="text">
                  <h3>1. Introduction</h3>
                  <p>
                    JoonMS Computer Systems & Communication Equipment Software
                    Trading Co LLC ("Company", "We", "Us", or "Our") is
                    committed to protecting your privacy. This Privacy Policy
                    explains how we collect, use, and disclose your personal
                    information when you use our mobile application, JoonMS
                    ("Application"), and our services ("Services"), including
                    hardware sales.
                  </p>
                  <h3>2. Data Collection and Usage</h3>
                  <h4>
                    <b>2.1 Information We Collect</b>
                  </h4>
                  <div className="row clearfix mt-3 ml-4">
                    <ul className="list-style-four">
                      <li>
                        <b>Personal Information:</b> When you register for an
                        account, purchase hardware, or use our Services, we may
                        collect personal information such as your name, email
                        address, phone number, shipping address, payment
                        information, and any other information you provide.
                      </li>
                      <li>
                        <b>Usage Data:</b> We collect data on how you interact
                        with our Application, Services, and hardware, including
                        IP addresses, browser types, pages viewed, and other
                        usage statistics.
                      </li>
                    </ul>
                  </div>
                  <h4>
                    <b>2.2 How We Use Your Information</b>
                  </h4>
                  <div className="row clearfix mt-3 ml-4">
                    <ul className="list-style-four">
                      <li>
                        <b>Service Delivery:</b> To provide, maintain, and
                        improve our Application, Services, and hardware.
                      </li>
                      <li>
                        <b>Order Fulfillment:</b> To process and fulfill your
                        orders for hardware and provide customer support.
                      </li>
                      <li>
                        <b>Communication:</b> To communicate with you, including
                        sending updates, security alerts, and support messages.
                      </li>
                      <li>
                        <b>Personalization:</b> To personalize your experience
                        with our Services and tailor content to your
                        preferences.
                      </li>
                    </ul>
                  </div>
                  <h3>3. Data Sharing and Disclosure</h3>
                  <h4>
                    <b>3.1 Third-Party Services</b>
                  </h4>
                  <p>
                    We do not share your personal data with third-party services
                    without your explicit consent, except as required by law.
                    This includes not publishing or sharing consumer data
                    without consent.
                  </p>
                  <h4>
                    <b>3.2 Legal Requirements</b>
                  </h4>
                  <p>
                    We may disclose your information if required to do so by law
                    or in response to valid requests by public authorities
                    (e.g., a court or a government agency). The Company abides
                    by the laws of the country in which it operates, including
                    IT laws governing data privacy and security. We reserve the
                    right to transfer data to government authorities upon proper
                    submission through legal and official channels as per the
                    country's governing laws.
                  </p>
                  <h3>4. Data Security</h3>
                  <p>
                    We employ reasonable measures to protect the security of
                    your personal data. However, no method of transmission over
                    the internet or method of electronic storage is 100% secure.
                  </p>
                  <h3>5. Child Safety and Age Restrictions</h3>
                  <h4>
                    <b>5.1 Age Restriction</b>
                  </h4>
                  <p>
                    Our Services are intended for users who are at least 18
                    years old. By using the Service, you represent and warrant
                    that you are at least 18 years of age. If you are under 18,
                    you may not use the Service. We reserve the right to
                    terminate your account if it is discovered that you are
                    under 18 years of age.
                  </p>
                  <h4>
                    <b>5.2 Child Safety</b>
                  </h4>
                  <div className="row clearfix mt-3 ml-4">
                    <ul className="list-style-four">
                      <li>
                        <b> Prohibited Actions: </b> You may not post, upload,
                        share, or distribute any content that depicts, promotes,
                        or glorifies child abuse, child exploitation, or any
                        form of child endangerment. You are strictly prohibited
                        from using our Service to engage in any activity that
                        involves the sexual, physical, or emotional abuse of
                        children.
                      </li>
                      <li>
                        <b>Reporting and Enforcement:</b> If you encounter any
                        content or activity on our Service that you believe
                        violates this Child Safety Policy, please report it
                        immediately to our support team at{" "}
                        <a href="mailto:info@joonms.com"> info@joonms.com. </a>{" "}
                        We will promptly investigate all reports of child abuse
                        or exploitation. Users found to be in violation of this
                        policy will be subject to immediate termination of their
                        accounts and may be reported to relevant law enforcement
                        authorities.
                      </li>
                      <li>
                        <b>Cooperation with Authorities:</b> We cooperate fully
                        with law enforcement agencies in their efforts to
                        investigate and prosecute child abuse and exploitation.
                        This includes preserving evidence, providing information
                        about suspected offenders, and complying with legal
                        requests.
                      </li>
                      <li>
                        <b>Education and Awareness: </b> We are committed to
                        raising awareness about the importance of protecting
                        children from abuse and exploitation. We provide
                        resources and support to help users recognize and report
                        child abuse.
                      </li>
                    </ul>
                  </div>
                  <h3>6. Prohibited Content and Activities Using AI</h3>
                  <h4>
                    <b>6.1 Prohibited AI-Generated Content</b>
                  </h4>
                  <div className="row clearfix mt-3 ml-4">
                    <ul className="list-style-four">
                      <li>
                        <b>Violent Content:</b> Content that depicts or promotes
                        violence or harm against individuals or groups is
                        strictly prohibited.
                      </li>
                      <li>
                        <b>Hate Speech:</b> Content that promotes hate or
                        violence against people based on race, ethnicity,
                        religion, gender, sexual orientation, disability, or
                        other protected characteristics is not allowed.
                      </li>
                      <li>
                        <b>Misinformation: </b> AI-generated content that
                        spreads false information, including misinformation
                        related to health, safety, and elections, is prohibited.
                      </li>
                    </ul>
                  </div>
                  <h4>
                    <b>6.2 Prohibited AI Activities</b>
                  </h4>
                  <div className="row clearfix mt-3 ml-4">
                    <ul className="list-style-four">
                      <li>
                        <b>Automated Harassment:</b> Using AI to harass, bully,
                        or intimidate individuals or groups is strictly
                        forbidden.
                      </li>
                      <li>
                        <b>Deepfakes and Manipulated Media:</b> Creating and
                        distributing manipulated media (e.g., deepfakes)
                        intended to deceive or mislead viewers is not allowed.
                      </li>
                      <li>
                        <b>Unauthorized Data Collection:</b> Using AI to collect
                        personal data from users without their explicit consent
                        is prohibited.
                      </li>
                    </ul>
                  </div>
                  <h3>7. Hardware Sales</h3>
                  <h4>
                    <b>7.1 Order Processing and Fulfillment</b>
                  </h4>
                  <div className="row clearfix mt-3 ml-4">
                    <ul className="list-style-four">
                      <li>
                        <b>Order Information:</b> When you purchase hardware
                        from us, we collect the necessary information to process
                        your order, including your name, shipping address,
                        billing address, and payment information.
                      </li>
                      <li>
                        <b>Shipping and Delivery:</b> We use the provided
                        information to ship your order to the specified address
                        and to communicate with you about your order status.
                      </li>
                    </ul>
                  </div>
                  <h4>
                    <b>7.2 Warranty and Support</b>
                  </h4>
                  <div className="row clearfix mt-3 ml-4">
                    <ul className="list-style-four">
                      <li>
                        <b>Warranty Information:</b> Information related to the
                        warranty of your purchased hardware is recorded and
                        maintained to provide support and service as needed.
                      </li>
                      <li>
                        <b>Customer Support:</b> We may collect additional
                        information from you when you contact customer support
                        to resolve any issues or inquiries related to your
                        hardware purchase.
                      </li>
                    </ul>
                  </div>
                  <h3>8. Your Rights</h3>
                  <p>
                    You have the right to access, correct, or delete your
                    personal data. You can manage your information through your
                    account settings or by contacting us directly.
                  </p>
                  <h3>9. Changes to This Privacy Policy</h3>
                  <p>
                    We may update our Privacy Policy from time to time. Any
                    changes will be posted on this page with an updated
                    effective date.
                  </p>
                  <h3>10. Contact Us</h3>
                  <p>
                    If you have any questions or concerns about this Privacy
                    Policy, please contact us at
                    <a href="mailto:info@joonms.com"> info@joonms.com</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
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
