import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { darkLogo } from '../assets/index'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link, useNavigate } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner'
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../Redux/amazonSlice';


function SignIn() {
  const dispatch =useDispatch()
  const auth = getAuth();
  const navigate = useNavigate();
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [ErrEmail, setErrEmail] = useState("")
  const [ErrPassword, setErrPassword] = useState("")


  //Firebase Error
  const [UserEmailErr, setUserEmailErr] = useState("")
  const [UserPassErr, setUserPassErr] = useState("")

  //Loading message
  const [loading, setLoading] = useState(false)
  const [SuccessMsg, setSuccessMsg] = useState("")


  const handleEmail = (e) => {
    setEmail(e.target.value)
    setErrEmail('')
    setUserEmailErr('');
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
    setErrPassword('')
    setUserPassErr('');
  }

  const emailValidation = (Email) => {
    return String(Email)
      .toLowerCase()
      .match(/^(?:\w+([-]?\w+)@\w+([-]?\w+)(\.\w{2,3})+|\d{10,12})$/)
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if (!Email) {
      setErrEmail('Enter your email or phone number');
      return;
    } else if (!emailValidation(Email)) {
      setErrEmail('Enter a valid Email or Phone number');
      return;
    } else if (!Password) {
      setErrPassword('Enter your password');
      return;
    }

    setLoading(true);

    signInWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(
          setUserInfo({
            _id: user.uid,
            userName: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );

        setSuccessMsg('Logged in Successfully! Welcome back!');
        setTimeout(() => {
          navigate('/');
        }, 500);
      })
      .catch((error) => {
        setLoading(false);
        const errorCode = error.code;

        if (errorCode.includes('auth/user-not-found')) {
          setUserEmailErr('The email does not exist');
        } else if (errorCode.includes('auth/wrong-password')) {
          setUserPassErr('Wrong password! Try again');
        }
      }
      
      );
  };
  return (

    <div className='sign-in-container'>
      <div className='sign-in-form'>
        {
          SuccessMsg ?

            <div className="success-msg-div">
              <p className="success-msg-p">
                {SuccessMsg}
              </p>
            </div>
            :

            <form className='signin-form'>
              <Link to="/">
                <img className='signin-logo' src={darkLogo} alt="Logo" />
              </Link>
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
                    {
                      UserEmailErr && (
                        <p className='error-text'>
                          <span className='error-text-span'>!</span>
                          {UserEmailErr}
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
                    {
                      UserPassErr && (
                        <p className='error-text'>
                          <span className='error-text-span'>!</span>
                          {UserPassErr}
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
              {
                loading && (
                  <div className='flex justify-center'>
                    <RotatingLines
                      strokeColor="#febd69"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="50"
                      visible={true}
                    />
                  </div>
                )
              }

            </form>
        }

      </div>
      <div className='signin-bottom'>
        <div className='sign-in-bottom-div'>
          <p className="sigin-bottom-text">Condition of Use</p>
          <p className="sigin-bottom-text">Privacy Notice</p>
          <p className="sigin-bottom-text">Help</p>
        </div>
        <p className='sigin-bottom-txt'>© 1996-2023, ReactBd.com, Inc. or its affiliates</p>
      </div>
    </div >



  )
}

export default SignIn
