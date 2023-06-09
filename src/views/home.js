import React, { useRef, useEffect } from "react";

import { Helmet } from "react-helmet";

import Header from "../components/header";
import PrimaryPinkButton from "../components/primary-pink-button";
import OutlineGrayButton from "../components/outline-gray-button";
import FeatureCard from "../components/feature-card";
import OutlineBlackButton from "../components/outline-black-button";
import ListItem from "../components/list-item";
import Footer from "../components/footer";
import "./home.css";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  const history = useHistory();

  return (
    <div className="home-container">
      <Helmet>
        <title>UPAI - AI Trading</title>
        <meta property="og:title" content="Soft UI Pro" />
      </Helmet>
      <Header></Header>
      <div className="home-hero">
        <div className="home-container01">
          <div className="home-card">
            <h1 className="home-text HeadingOne">
              Let AI be your fund Manager.
            </h1>
            <h1 className="home-text01 HeadingOne">Choose the best</h1>
            <span className="home-text02 Lead">
              <span>We have the AI in Market</span>
            </span>
            <div className="home-container02">
              <div className="home-container03">
                <PrimaryPinkButton
                  onClick={() => history.push("/contactus")}
                  button="contact us"
                ></PrimaryPinkButton>
              </div>
              <OutlineGrayButton
                button="read more"
                onClick={() => history.push("/products")}
              ></OutlineGrayButton>
            </div>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/stockAIFrontPage.png"
        className="home-image04"
      />
      <section className="home-features">
        <FeatureCard
          text="Choose the best design system for your next product."
          title="Components"
          new_prop="Easy & Secure"
          image_src="/playground_assets/cube1.svg"
        ></FeatureCard>
        <FeatureCard
          image_src="/playground_assets/person1.svg"
          text="Unlock the captivating allure of AI's autonomous decision-making, where trade execution transcends human sentiment."
          title="AI Decision-Making"
          new_prop="AI Decision-Making"
        ></FeatureCard>
        <FeatureCard
          text="Make informed trading decisions with our AI-powered intraday calls."
          title="Smart Trades"
          new_prop="Smart Trades"
          image_src="/playground_assets/rocket1.svg"
        ></FeatureCard>
        <FeatureCard
          text="Experience the convenience of our online services, available to you 24/7."
          title="Easy Access"
          new_prop="Access Anywhere"
          image_src="/playground_assets/credit%20card1.svg"
        ></FeatureCard>
      </section>
      <section className="home-container05">
        <div className="home-container06">
          <h1 className="home-text05 HeadingOne">
            <span className="home-text06">From nothing to something</span>
          </h1>
          <span className="home-text07">
            <span className="home-text08">
              The stock market is a device for transferring money from the
              impatient to the patient.
            </span>
          </span>
        </div>
        <div className="home-container07">
          <div className="home-container08">
            <img
              alt="image"
              src="/playground_assets/upaiAsset01.jpeg"
              className="home-image05"
              height="500cm"
            />
            <span className="home-text09 Small">
              <span className="home-text10">
                &quot;AI in the stock market: Where human intuition meets
                machine precision, unlocking untapped potential.&quot;
              </span>
            </span>
            <div className="home-container09">
              <img
                alt="image"
                src="/playground_assets/upaiAsset02.jpeg"
                className="home-image06"
                height="250cm"
              />
            </div>
          </div>
          <div className="home-container10">
            <img
              alt="image"
              src="/playground_assets/upaiAsset03.jpeg"
              className="home-image07"
              height="200cm"
            />
            <div className="home-container11">
              <h3 className="HeadingTwo">
                <span className="home-text14">How to get started?</span>
              </h3>
              <p>
                <br></br>
                <span className="home-text16">
                  Fund your account: Once you've created your account, you'll
                  need to fund it with the amount of money you want to trade
                  with. We accept a variety of payment methods, including credit
                  and debit cards, bank transfers, and cryptocurrencies.
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span className="home-text19">
                  Configure your trading strategy: Our platform allows you to
                  customize your trading strategy to suit your specific needs
                  and risk tolerance. You can choose from a variety of pre-built
                  strategies or create your own using our advanced AI
                  algorithms.
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span className="home-text22">
                  Monitor your trades: With your trading strategy in place, you
                  can sit back and watch as our AI platform executes trades on
                  your behalf. You can monitor the progress of your trades in
                  real-time and adjust your strategy as needed.
                </span>
                <br></br>
                <span></span>
                <br></br>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-testimonials">
        <div className="home-container12">
          <div className="home-container13">
            <div className="home-container14">
              <h2 className="home-text23 HeadingOne">
                How AI Drives Unprecedented Growth and Profits
              </h2>
              <p className="home-text24 Lead">
                <span className="home-text25">AI got you Covered!</span>
              </p>
              <p className="home-text26 Body">
                <span className="home-text27">
                  &quot;AI Revolutionizes Stock Market: Profits Soar with
                  Advanced Analysis. Cutting-edge algorithms and machine
                  learning enable AI to swiftly analyze vast financial data,
                  identifying patterns and predicting market trends. Investors
                  leverage AI insights for informed decision-making, maximizing
                  profitability. This transformative integration of AI reshapes
                  stock markets, ushering in a new era of intelligent
                  trading.&quot;
                </span>
              </p>
            </div>
          </div>
          <div className="home-logos">
            <p> bc</p>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/bottom.svg"
          className="home-bottom-wave-image"
        />
        <img
          alt="image"
          src="/playground_assets/waves-white.svg"
          className="home-image19"
        />
        <img
          alt="image"
          src="/playground_assets/top.svg"
          className="home-top-wave-image"
        />
      </section>
      <section className="home-contaier">
        <div className="home-container30">
          <div className="home-container31">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M363.722 722.052l41.298-57.816-45.254-45.256-57.818 41.296c-10.722-5.994-22.204-10.774-34.266-14.192l-11.682-70.084h-64l-11.68 70.086c-12.062 3.418-23.544 8.198-34.266 14.192l-57.818-41.298-45.256 45.256 41.298 57.816c-5.994 10.72-10.774 22.206-14.192 34.266l-70.086 11.682v64l70.086 11.682c3.418 12.060 8.198 23.544 14.192 34.266l-41.298 57.816 45.254 45.256 57.818-41.296c10.722 5.994 22.204 10.774 34.266 14.192l11.682 70.084h64l11.68-70.086c12.062-3.418 23.544-8.198 34.266-14.192l57.818 41.296 45.254-45.256-41.298-57.816c5.994-10.72 10.774-22.206 14.192-34.266l70.088-11.68v-64l-70.086-11.682c-3.418-12.060-8.198-23.544-14.192-34.266zM224 864c-35.348 0-64-28.654-64-64s28.652-64 64-64 64 28.654 64 64-28.652 64-64 64zM1024 384v-64l-67.382-12.25c-1.242-8.046-2.832-15.978-4.724-23.79l57.558-37.1-24.492-59.128-66.944 14.468c-4.214-6.91-8.726-13.62-13.492-20.13l39.006-56.342-45.256-45.254-56.342 39.006c-6.512-4.766-13.22-9.276-20.13-13.494l14.468-66.944-59.128-24.494-37.1 57.558c-7.812-1.892-15.744-3.482-23.79-4.724l-12.252-67.382h-64l-12.252 67.382c-8.046 1.242-15.976 2.832-23.79 4.724l-37.098-57.558-59.128 24.492 14.468 66.944c-6.91 4.216-13.62 8.728-20.13 13.494l-56.342-39.006-45.254 45.254 39.006 56.342c-4.766 6.51-9.278 13.22-13.494 20.13l-66.944-14.468-24.492 59.128 57.558 37.1c-1.892 7.812-3.482 15.742-4.724 23.79l-67.384 12.252v64l67.382 12.25c1.242 8.046 2.832 15.978 4.724 23.79l-57.558 37.1 24.492 59.128 66.944-14.468c4.216 6.91 8.728 13.618 13.494 20.13l-39.006 56.342 45.254 45.256 56.342-39.006c6.51 4.766 13.22 9.276 20.13 13.492l-14.468 66.944 59.128 24.492 37.102-57.558c7.81 1.892 15.742 3.482 23.788 4.724l12.252 67.384h64l12.252-67.382c8.044-1.242 15.976-2.832 23.79-4.724l37.1 57.558 59.128-24.492-14.468-66.944c6.91-4.216 13.62-8.726 20.13-13.492l56.342 39.006 45.256-45.256-39.006-56.342c4.766-6.512 9.276-13.22 13.492-20.13l66.944 14.468 24.492-59.13-57.558-37.1c1.892-7.812 3.482-15.742 4.724-23.79l67.382-12.25zM672 491.2c-76.878 0-139.2-62.322-139.2-139.2s62.32-139.2 139.2-139.2 139.2 62.322 139.2 139.2c0 76.878-62.32 139.2-139.2 139.2z"></path>
            </svg>
          </div>
          <h2 className="home-text30 HeadingTwo">
            <span className="home-text31">
              Get Familier With Your Components
            </span>
          </h2>
          <h3 className="home-text32 HeadingTwo">
            <span className="home-text33">How To Handle Them</span>
            <br></br>
          </h3>
          <span className="home-text34">
            <span className="home-text35">
              We’re constantly trying to express ourselves and actualize our
              dreams. Don&apos;t stop.
            </span>
          </span>
        </div>
        <div className="home-container32">
          <div className="home-container33">
            <div className="home-container34"></div>
            <div className="home-container35">
              <svg viewBox="0 0 987.4285714285713 1024" className="home-icon2">
                <path d="M438.857 508.571l312 312c-79.429 80.571-190.286 130.286-312 130.286-242.286 0-438.857-196.571-438.857-438.857s196.571-438.857 438.857-438.857v435.429zM545.714 512h441.714c0 121.714-49.714 232.571-130.286 312zM950.857 438.857h-438.857v-438.857c242.286 0 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <h1 className="home-text36 HeadingOne">Search and Discover!</h1>
              <span className="home-text37">
                <span>Website visitors</span>
                <span></span>
              </span>
              <OutlineBlackButton
                button="get started"
                onClick={() => history.push("/products")}
              ></OutlineBlackButton>
            </div>
          </div>
          <div className="home-container36">
            <ListItem
              new_prop="1. Speed and Efficiency"
              title="1. Speed and Efficiency"
              description="AI trading algorithms can process and analyze vast amounts of data much faster than a human trader could. This allows for quicker and more accurate trades, which can result in higher profits."
            ></ListItem>
            <ListItem
              new_prop="2. Consistency"
              title="2. Consistency"
              description="Human traders can be affected by emotions and biases that can impact their decision-making. AI trading algorithms, on the other hand, are not affected by emotions, and can make consistent trades based on data and pre-programmed rules."
            ></ListItem>
            <ListItem
              new_prop="3. Improved Risk Management"
              title="3. Improved Risk Management"
              description="AI trading algorithms can be programmed to manage risk through techniques such as diversification and portfolio optimization. This can help to minimize potential losses."
            ></ListItem>
          </div>
        </div>
        <div className="home-divider"></div>
        <div className="home-container37">
          <div className="home-container38">
            <ListItem
              new_prop="1. 24 / 7 trading"
              title="1. 24 / 7 trading"
              description="AI trading algorithms can operate 24/7, which means trades can be made even when the markets are closed, giving an edge to the AI trader over manual traders."
            ></ListItem>
            <ListItem
              new_prop="2. Handling Complex Data"
              title="2. Handling Complex Data"
              description="AI algorithms are designed to handle large and complex sets of data, which can be difficult for humans to process. This enables AI trading algorithms to make trades based on a wider range of information than a human trader could."
            ></ListItem>
            <ListItem
              new_prop="3. Maximizing Opportunities"
              title="3. Maximizing Opportunities"
              description="AI trading algorithms can be programmed to manage risk through techniques such as diversification and portfolio optimization. This can help to minimize potential losses."
            ></ListItem>
          </div>
          <div className="home-container39">
            <div className="home-container40"></div>
            <div className="home-container41">
              <svg viewBox="0 0 1152 1024" className="home-icon4">
                <path d="M1088 901.166c0 45.5 26.028 84.908 64 104.184v15.938c-10.626 1.454-21.472 2.224-32.5 2.224-68.008 0-129.348-28.528-172.722-74.264-26.222 6.982-54.002 10.752-82.778 10.752-159.058 0-288-114.616-288-256s128.942-256 288-256c159.058 0 288 114.616 288 256 0 55.348-19.764 106.592-53.356 148.466-6.824 14.824-10.644 31.312-10.644 48.7zM512 0c278.458 0 504.992 180.614 511.836 405.52-49.182-21.92-103.586-33.52-159.836-33.52-95.56 0-185.816 33.446-254.138 94.178-70.846 62.972-109.862 147.434-109.862 237.822 0 44.672 9.544 87.888 27.736 127.788-5.228 0.126-10.468 0.212-15.736 0.212-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z"></path>
              </svg>
              <h1 className="home-text40 HeadingOne">Let's Talk!</h1>
              <span className="home-text41">
                <span>Website visitors</span>
                <span></span>
              </span>
              <OutlineBlackButton
                button="get started"
                onClick={() => history.push("/contactus")}
              ></OutlineBlackButton>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Home;
