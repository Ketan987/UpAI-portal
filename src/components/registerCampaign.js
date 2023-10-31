import React, { useState } from "react";
import "../views/profile.css";
import PrimaryPinkButton from "./primary-pink-button";
import Header from "./header";
import Footer from "./footer";
// import registerInfo from '../request/savePreregistration'

const CampaignRegistration = (props) => {
  const [profileInfo, setProfileInfo] = useState({
    name: '',
    email: ''
  });
  const [errorOcc, setErrorOcc] = useState(false);
  const [saving, setSaving] = useState('');

  const clickOnsubmitButton = () => {
    //TODO : Validate Mail, if error put red abel
    console.log('info :', profileInfo)
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if (!regex.test(profileInfo.email)){
      setErrorOcc(true)
    }
    else {
      // registerInfo(profileInfo)
      // .then(res => setSaving('success'))
      // .catch(err => setSaving('error'))
      setErrorOcc(false)
    }
  }

  return (
    <>
      <Header></Header>
      {saving === 'success' ? 
        <div>
          <span>Stored SuccessFully </span>
        </div>
        : saving === 'error' ?
          <div>
            <span>Error Occured While Saving</span>
          </div>
        :
        <>
            <div className="profile-contact" ref={props.reference}>
              <div className="profile-container09">
                
                <div className="profile-form">
                {errorOcc ? 
                  <div>
                    <span style={{backgroundColor:'red', color:'black'}}>Provide Correct Email Address.</span>
                  </div>
                  : null}
                  <span className="profile-text20 Lead">
                    Be among the first to experience our product through early access..
                  </span>
                  <form className="profile-form1" >
                    <label className="profile-text21 Label">My name is</label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="profile-textinput Small input"
                      onChange={(e) => setProfileInfo({...profileInfo, name: e.target.value})}
                    />
                    <label className="profile-text22 Label">
                      My email is
                    </label>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="profile-textinput1 Small input"
                      onChange={(e) => setProfileInfo({...profileInfo, email: e.target.value})}

                    />
                  </form>
                  <div className="profile-container10">
                    <div className="profile-container11">
                      <PrimaryPinkButton button="Register Me" onClick={clickOnsubmitButton}></PrimaryPinkButton>
                    </div>
                  </div>
                </div>
                <div className="profile-info">
                  <div className="profile-container12">
                    
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
        </>
      }
      <Footer />
    </>
  );
};

export default CampaignRegistration;
