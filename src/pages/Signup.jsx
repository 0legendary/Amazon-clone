import React from 'react'
import { darkLogo } from '../assets/index'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';
function Signup() {
  const handleRegistration=(e)=>{
    e.preventDefault()
  }
  return (
    <div className='sign-in-container'>
      <div className='sign-in-form'>
        <form className='signin-form'>
          <img className='signin-logo' src={darkLogo} alt="Logo" />
          <div className='signin-heading border'>
            <h2 className='form-heading'>Create Account</h2>
            <div className='form-columns '>
              <div className='input-email-div'>
                <p className='email-text'>Your name</p>
                <input className='input-form' type="name" />
              </div>
              <div className='input-email-div'>
                <p className='email-text'>Email or Phone number</p>
                <input className='input-form' type="email" />
              </div>
              <div className='input-email-div'>
                <p className='email-text'>Password</p>
                <input className='input-form' type="password" />
              </div>
              <div className='input-email-div'>
                <p className='email-text'>Re-enter Password</p>
                <input className='input-form' type="password" />
                <p className='sign-up-password-imp'>Passwords must be at least 6 characters.</p>
              </div>
              <button onClick={handleRegistration} className="form-continue">Continue</button>
            </div>
            <p className='privacy-text'>By Continuing, you agree to Amazon's
              <span className='privacy-span'>{" "}Condition of use{" "}</span>and
              <span className='privacy-span'>{" "}Privacy Notice.{" "}</span>
            </p>
            <p className='privacy-text'>
              Already have an account? <Link to='/signin'><span className='need-help'>Sign in</span></Link> 
              <ArrowRightIcon />
              <br />
              Buying for work? <span className='need-help'>Create a free business account</span>
            </p>

          </div>
          

        </form>
      </div>
      <div className='signin-bottom'>
        <div className='sign-in-bottom-div'>
          <p className="sigin-bottom-text">Condition of Use</p>
          <p className="sigin-bottom-text">Privacy Notice</p>
          <p className="sigin-bottom-text">Help</p>
        </div>
        <p className='sigin-bottom-txt'>© 1996-2023, ReactBd.com, Inc. or its affiliates</p>
      </div>
    </div>
  )
}

export default Signup
