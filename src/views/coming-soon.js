import React from "react";

import { Helmet } from "react-helmet";

import Header from "../components/header";
import SecondaryButton from "../components/secondary-button";
import "./coming-soon.css";
import Footer from "../components/footer";

const ComingSoon = (props) => {
  return (
    <div className="coming-soon-container">
      <Helmet>
        <title>ComingSoon - UPAI</title>
        <meta property="og:title" content="ComingSoon - Soft UI Pro" />
      </Helmet>
      <Header></Header>
      <div className="coming-soon-container1">
        <div className="coming-soon-main">
          <div className="coming-soon-container2">
            
            <iframe className="frame-form" src="https://forms.office.com/r/M4jwk3jtE6?embed=true"  allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
            
            {/* frameborder="0" marginwidth="0" marginheight="0" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen */}
          </div>
          <div className="coming-soon-grid">
            <img
              alt="image"
              src="/playground_assets/iphone-3-1000w.png"
              className="coming-soon-image"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-2-1000w.png"
              className="coming-soon-image01"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-4-1000w.png"
              className="coming-soon-image02"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-1-1000w.png"
              className="coming-soon-image03"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-2-1000w.png"
              className="coming-soon-image04"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-4-1000w.png"
              className="coming-soon-image05"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-1-1000w.png"
              className="coming-soon-image06"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-3-1000w.png"
              className="coming-soon-image07"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-2-1000w.png"
              className="coming-soon-image08"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-4-1000w.png"
              className="coming-soon-image09"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-1-1000w.png"
              className="coming-soon-image10"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-3-1000w.png"
              className="coming-soon-image11"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-4-1000w.png"
              className="coming-soon-image12"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-1-1000w.png"
              className="coming-soon-image13"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-3-1000w.png"
              className="coming-soon-image14"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-2-1000w.png"
              className="coming-soon-image15"
            />
          </div>
        </div>
      </div>
      <Footer /> 
    </div>
  );
};

export default ComingSoon;
