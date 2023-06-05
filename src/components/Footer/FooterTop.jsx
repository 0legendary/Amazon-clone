import React from 'react'
import { Link } from 'react-router-dom'

function FooterTop() {
  return (
    <div className='footer-top '>
      <div className='footer-signup-text'>
        <div className='footer-signup'>
          <p className='footer-text'>See Personalised recommendation</p>
          <Link to="/signin">
            <button className='sign-in-button'>Sign In</button>
          </Link>
          <p className='footer-text-1'>New Customer?{""}
            <Link to="/signup">
              <span className='footer-signup-text1'>Start here.</span>
            </Link>
          </p>

        </div>
      </div>

    </div>
  )
}

export default FooterTop
