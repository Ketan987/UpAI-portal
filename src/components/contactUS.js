import React from "react";
import "../views/profile.css";
import PrimaryBlueButton from "../components/primary-blue-button";
import Header from "../components/header";
import Footer from "./footer";

const ContactUs = (props) => {
  return (
    <>
      <Header></Header>
      <div className="profile-contact" ref={props.reference}>
        <div className="profile-container09">
          <div className="profile-form">
            <h2 className="profile-text18 HeadingOne">
              <span>Say Hi!</span>
            </h2>
            <span className="profile-text20 Lead">
              We&apos;d like to talk with you.
            </span>
            <form className="profile-form1">
              <label className="profile-text21 Label">My name is</label>
              <input
                type="text"
                placeholder="Full Name"
                className="profile-textinput Small input"
              />
              <label className="profile-text22 Label">
                I&apos;m looking for
              </label>
              <input
                type="text"
                placeholder="What you love"
                className="profile-textinput1 Small input"
              />
              <label className="profile-text23 Label">Your message</label>
              <textarea
                rows="8"
                placeholder="I want to say that..."
                className="profile-textarea textarea Small"
              ></textarea>
            </form>
            <div className="profile-container10">
              <div className="profile-container11">
                <PrimaryBlueButton button="send message"></PrimaryBlueButton>
              </div>
            </div>
          </div>
          <div className="profile-info">
            <div className="profile-container12">
              <h3 className="HeadingTwo">
                <span>
                  Contact
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <span>Information</span>
              </h3>
              <span className="profile-text27">
                Fill up the form and our Team will get back to you within 24 * 7
                hours.
              </span>
              <div className="profile-container13">
                {/* <div className="profile-container14">
                  <svg viewBox="0 0 1024 1024" className="profile-icon02">
                    <path d="M742 460l-94-94q-18-18-10-44 24-72 24-152 0-18 12-30t30-12h150q18 0 30 12t12 30q0 300-213 513t-513 213q-18 0-30-12t-12-30v-150q0-18 12-30t30-12q80 0 152-24 24-10 44 10l94 94q186-96 282-282z"></path>
                  </svg>
                  <a href="tel:+40 772 100 200" className="profile-link Small">
                    (+40) 772 100 200
                  </a>
                </div> */}
                <div className="profile-container15">
                  <svg viewBox="0 0 1024 1024" className="profile-icon04">
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                  <a
                    href="mailto:hello@creative-tim.com?subject="
                    className="profile-link1 Small"
                  >
                    hello@upai.tech
                  </a>
                </div>
                <div className="profile-container16">
                  <svg viewBox="0 0 1024 1024" className="profile-icon06">
                    <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
                  </svg>
                  <span className="profile-text28 Small">
                    Manish Nagar, Nagpur - 440034
                  </span>
                </div>
              </div>
              <div className="profile-container17">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="profile-icon08"
                >
                  <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="profile-icon10"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="profile-icon12"
                >
                  <path d="M20.25 3h-16.5c-1.241 0-2.25 1.009-2.25 2.25v16.5c0 1.241 1.009 2.25 2.25 2.25h16.5c1.241 0 2.25-1.009 2.25-2.25v-16.5c0-1.241-1.009-2.25-2.25-2.25zm-6.75 17.25h-3v-7.5h3v7.5zm-1.5-8.25c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25 2.25 1.009 2.25 2.25-1.009 2.25-2.25 2.25zm7.5 8.25h-3v-4.5c0-1.172-.978-2.25-2.25-2.25s-2.25 1.078-2.25 2.25v4.5h-3v-7.5h3v1.125c.75-1.219 2.156-2.063 3.75-2.063 2.484 0 4.5 2.016 4.5 4.5v4.938z" />
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="profile-icon14"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </div>
            </div>
            <img
              alt="image"
              src="/playground_assets/wave-1.svg"
              className="profile-image1"
            />
            <div className="profile-container18"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
