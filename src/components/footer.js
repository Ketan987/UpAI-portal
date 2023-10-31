import React from 'react'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer-footer">
      <div className="footer-container">
        <div className="footer-container1">
          <span className="footer-text">UPAI</span>
          <span>Copyright © 2023 UpAI XZENT SOLUTIONS PRIVATE LIMITED.</span>
        </div>
        <div className="footer-container2">          
          <div>
            <span className="footer-container3"> About UPAI</span>
            <span></span>
            <div class="icon-container">
              <a href="https://www.linkedin.com/company/up-ai/">
                <img
                alt="linkdin"
                src="/playground_assets/linkdlin.png"
                className='social-image'
                />
              </a>
              <a href="https://twitter.com/UpAI_tech">
              <img
                alt="twitter"
                src="/playground_assets/twiter.png"
                className='social-image'
                />
              </a>
              <a href="https://www.instagram.com/upai.tech/">
              <img
                alt="linkdin"
                src="/playground_assets/insta.png"
                className='social-image'
                />
              </a>

              <a href="https://www.facebook.com/upai.tech">
              <img
                alt="fb"
                src="/playground_assets/fb.png"
                className='social-image'
                />
              </a>

              <a href="https://www.youtube.com/@UpAI-xzent">
              <img
                alt="youtube"
                src="/playground_assets/utube.png"
                className='social-image'
                />
              </a>
          </div>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/waves-white.svg"
        className="footer-image"
      />
    </footer>
  )
}

export default Footer
