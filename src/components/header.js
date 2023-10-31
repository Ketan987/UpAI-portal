import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

const Header = (props) => {
  // style={props.home ? {backgroundColor: 'red'}: ''}
  return (
    <div data-role="Header" className="header-header">
      <nav className="header-nav">
        <div className="header-container">
          <Link to="/" className="header-navlink Large">
            UPAI
          </Link>

          <div className="header-container1">
            <div className="header-container2">
              <div className="header-menu">
                <Link to="/" className="header-navlink1 Large">
                  Home
                </Link>
                <Link to="/products" className="header-navlink2 Large">
                  Product
                </Link>
                <Link to="/coming-soon" className="header-navlink3 Large">
                  Coming Soon
                </Link>
                <a
                  href="https://marker.upai.tech/"
                  className="header-navlink3 Large"
                  target="_blank"
                >
                  Join Da Club
                </a>
              </div>
            </div>
            <div data-role="BurgerMenu" className="header-burger-menu">
              <svg viewBox="0 0 1024 1024" className="header-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <div data-role="MobileMenu" className="header-mobile-menu">
        <div className="header-top">
          <Link to="/" className="header-navlink4 Large">
            UPAI
          </Link>
          <div data-role="CloseMobileMenu" className="header-close-menu">
            <svg viewBox="0 0 1024 1024" className="header-icon2">
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </div>
        </div>
        <div className="header-mid">
          <div className="header-menu1">
            <Link to="/" className="header-navlink5 Large">
              Home
            </Link>
            <Link to="/products" className="header-navlink6 Large">
              Product
            </Link>
            <Link to="/coming-soon" className="header-navlink6 Large">
              Coming Soon
            </Link>
            <a
              href="https://marker.upai.tech/"
              target="_blank"
              className="header-navlink7 Large"
            >
              Join da Club
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
