"use client";
import MyContext from "@/app/context/Context";
import React, { useContext, useEffect, useState } from "react";

function Navbar() {
  const { user, setUser } = useContext(MyContext);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    console.log("Menu visibility changed:", menuVisible);
    if (menuVisible) {
      document.body.classList.add("mobile-menu-visible");
    } else {
      document.body.classList.remove("mobile-menu-visible");
    }

    // Cleanup to avoid side effects
    return () => {
      document.body.classList.remove("mobile-menu-visible");
    };
  }, [menuVisible]);

  const onLogoutClicked = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <header className="main-header header-style-one fixed-header">
      <div className="header-upper">
        <div className="inner-container">
          <div className="auto-container clearfix">
            <div className="logo-outer">
              <div className="logo">
                <a href="/">
                  <img src="/images/joon/logo1-croped.png" alt="" title="" />
                </a>
                <span
                  style={{
                    fontSize: "40px",
                    fontWeight: "bold",
                    marginLeft: "10px",
                    color: "#FFE000",
                  }}
                >
                  JoonMS
                </span>
              </div>
            </div>
            <div className="nav-outer clearfix">
              <div className="mobile-nav-toggler" onClick={toggleMenu}>
                <span className="icon flaticon-menu" />
              </div>
              <nav className="main-menu navbar-expand-md navbar-light">
                <div className="navbar-header">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="icon flaticon-menu" />
                  </button>
                </div>
                <div
                  className="collapse navbar-collapse clearfix"
                  id="navbarSupportedContent"
                >
                  <ul className="navigation clearfix">
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
              </nav>
              <div className="option-box clearfix">
                <div className="number-box">
                  <a className="phone" href="tel:+880-762-009">
                    <span>Call Us</span> +97 150 540 8757
                  </a>
                </div>
                <div className="btn-box">
                  {user ? (
                    <a
                      href={undefined}
                      onClick={onLogoutClicked}
                      className="theme-btn btn-style-one"
                    >
                      <span className="txt">Logout</span>
                    </a>
                  ) : (
                    <a href="/login" className="theme-btn btn-style-one">
                      <span className="txt">Login</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {menuVisible && (
        <div className="mobile-menu">
          <div className="menu-backdrop" onClick={toggleMenu} />
          <div className="close-btn" onClick={toggleMenu}>
            <span className="icon flaticon-plus" />
          </div>
          <nav className="menu-box">
            <div className="nav-logo">
              <a href="/">
                <h1 style={{ color: "#FFE000", fontWeight: "bold" }}>JoonMs</h1>
              </a>
            </div>
            <ul className="navigation clearfix">
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
            <div className="social-links">
              <div className="btn-box">
                {user ? (
                  <a
                    href={undefined}
                    onClick={onLogoutClicked}
                    className="theme-btn btn-style-one"
                  >
                    <span className="txt">Logout</span>
                  </a>
                ) : (
                  <a href="/login" className="theme-btn btn-style-one">
                    <span className="txt">Login</span>
                  </a>
                )}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
