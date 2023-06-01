import React from 'react'
import { darkLogo } from '../assets/index'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function SignIn() {
  return (

    <div className='sign-in-container'>
      <div className='sign-in-form'>
        <form className='signin-form'>
          <img className='signin-logo' src={darkLogo} alt="Logo" />
          <div className='signin-heading border'>
            <h2 className='form-heading'>Sign in</h2>
            <div className='form-columns '>
              <div className='input-email-div'>
                <p className='email-text'>Email or Phone number</p>
                <input className='input-form' type="email" />
              </div>
              <div className='input-email-div'>
                <p className='email-text'>Password</p>
                <input className='input-form' type="password" />
              </div>
              <button onClick={(e) => e.preventDefault()} className="form-continue">Continue</button>
            </div>
            <p className='privacy-text'>By Continuing, you agree to Amazon's
              <span className='privacy-span'>{" "}Condition of use{" "}</span>and
              <span className='privacy-span'>{" "}Privacy Notice.{" "}</span>
            </p>
            <p className='form-icon'><ArrowRightIcon />
              <span className='need-help'>Need help?</span>
            </p>
          </div>
          <p className='f-last-part '>
            <span className='last-part-span '></span>
            <span className='new-to'>New to Amazon?</span>
            <span className='last-part-span '></span>
          </p>
          <button onClick={(e) => e.preventDefault()} className="signin-create-acc">
            Create your Amazon account
          </button>
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

export default SignIn
