import React from "react";

function Footer() {
  return (
    <div id="where">
      <footer className="main-footer">
        <div className="auto-container">
          <div
            className="widgets-section wow fadeInUp"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <div className="row clearfix">
              <div className="big-column col-lg-6 col-md-12 col-sm-12">
                <div className="row clearfix">
                  <div className="footer-column col-lg-7 col-md-6 col-sm-12">
                    <div className="footer-widget logo-widget">
                      <div className="logo">
                        <h1>JoonMS</h1>
                      </div>

                      <ul className="social-icon-one">
                        <li>
                          <a href="#">
                            <span className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                width="22" // Adjust the size as needed
                                height="17" // Adjust the size as needed
                              >
                                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                              </svg>
                            </span>

                            {/* <span className="fa square-x-twitter" /> */}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="fab fa-google-plus-g" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*Footer Column*/}
                  <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                    <div className="footer-widget links-widget">
                      <h2>Address</h2>
                      <div className="widget-content">
                        <ul className="logo-list">
                          <li>
                            Office 43-44,Al Tawar Center <br />
                            Qusais,Dubai, UAE
                          </li>
                          <li>
                            <a href="mailto:info@joonms.com">Info@joonms.com</a>
                          </li>
                          <li>
                            <a href="tel:720-661-2231">+97 150 540 8757</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="big-column col-lg-6 col-md-12 col-sm-12">
                <div className="row clearfix">
                  <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                    <div className="footer-widget links-widget">
                      <h2>About us</h2>
                      <div className="widget-content">
                        <ul className="list">
                          <li>
                            <a href="/#what">What</a>
                          </li>
                          <li>
                            <a href="/#who">Who</a>
                          </li>
                          <li>
                            <a href="/#where">Where</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* <div className="footer-column col-lg-7 col-md-6 col-sm-12">
                    <div className="footer-widget subscribe-widget">
                      <h2>Get weekly update</h2>

                      <div className="newsletter-form">
                        <form method="post" action="/">
                          <div className="form-group">
                            <input
                              type="email"
                              name="email"
                              defaultValue=""
                              placeholder="Give email"
                              required=""
                            />
                            <button
                              type="button"
                              className="theme-btn btn-style-two"
                            >
                              <span className="txt">Subscribe</span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div> */}

                  <div className="footer-column col-lg-7 col-md-6 col-sm-12">
                    <div className="footer-widget subscribe-widget">
                      <h2>Links</h2>

                      <div className="widget-content">
                        <ul className="list">
                          <li>
                            <a
                              target="_blank"
                              href="https://firebasestorage.googleapis.com/v0/b/joonms.appspot.com/o/Privacy%20policy%20July%202024.pdf?alt=media&token=ec10ec7f-65a4-4d2e-a1bf-430a09a5d0c9"
                            >
                              Privacy & Policy{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="bottom-inner">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="copyright">
                    © 2024 copyright all right reserved
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  {/* <ul className="footer-nav">
                    <li>
                      <a href="#">Privace &amp; Policy</a>
                    </li>
                    <li>
                      <a href="#">Faq</a>
                    </li>
                    <li>
                      <a href="#">Terms.</a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
