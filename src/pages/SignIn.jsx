import React,{useState} from 'react'
import { darkLogo } from '../assets/index'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';
import { Padding } from '@mui/icons-material';

function SignIn() {
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [ErrEmail, setErrEmail] = useState("")
  const [ErrPassword, setErrPassword] = useState("")


  const handleEmail = (e) => {
    setEmail(e.target.value)
    setErrEmail('')
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
    setErrPassword('')
  }

  const emailValidation= (Email)=>{
    return String(Email)
    .toLowerCase()
    .match(/^(?:\w+([-]?\w+)@\w+([-]?\w+)(\.\w{2,3})+|\d{10,12})$/)
  }

 const handleLogin=(e)=>{
    e.preventDefault()
    if (!Email) {
      setErrEmail("Enter your email or phone number")
    }else{
      if(!emailValidation(Email)){
        setErrEmail("Enter a valid Email or Phone number")
      }
    }
    if (!Password) {
      setErrPassword("Enter your password")
    }

    if(Email && Password){
      console.log(Email,Password)
      setEmail("")
      setPassword("")
    }
  }
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
                <input onChange={handleEmail} value={Email} className='input-form' type="email" />
                {
                  ErrEmail && (
                    <p className='error-text'>
                      <span className='error-text-span'>!</span>
                      {ErrEmail}
                    </p>
                  )
                }
              </div>
              <div className='input-email-div'>
                <p className='email-text'>Password</p>
                <input onChange={handlePassword} value={Password} className='input-form' type="password" />
                {
                  ErrPassword && (
                    <p className='error-text'>
                      <span className='error-text-span'>!</span>
                      {ErrPassword}
                    </p>
                  )
                }
              </div>
              <button onClick={handleLogin} className="form-continue">Continue</button>
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
          <Link className='create-acc-link' to='/signup'>
          <button className="signin-create-acc">
            Create your Amazon account
          </button>
          </Link>
          
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
