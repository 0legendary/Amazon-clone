import React, { useState } from 'react'
import { darkLogo } from '../assets/index'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { motion } from "framer-motion"
import { Link, useNavigate } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner'



function Signup() {
  const navigate = useNavigate()
  const auth = getAuth();
  const [ClientName, setClientName] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [CPassword, setCPassword] = useState("")

  // Error Message
  const [ErrClientName, setErrClientName] = useState("")
  const [ErrEmail, setErrEmail] = useState("")
  const [ErrPassword, setErrPassword] = useState("")
  const [ErrCPassword, setErrCPassword] = useState("")
  const [FirebaseErr, setFirebaseErr] = useState("")

  //Loading message
  const [loading, setLoading] = useState(false)
  const [SuccessMsg, setSuccessMsg] = useState("")

  // handle Function
  const handleName = (e) => {
    setClientName(e.target.value)
    setErrClientName('')
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
    setErrEmail('')
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
    setErrPassword('')
  }
  const handleCPassword = (e) => {
    setCPassword(e.target.value)
    setErrCPassword('')
  }

  const emailValidation = (Email) => {
    return String(Email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)@\w+([-]?\w+)(\.\w{2,3})+$/)
  }

  //Submit Function
  const handleRegistration = (e) => {
    e.preventDefault()
    if (!ClientName) {
      setErrClientName("Enter your name")
    }
    if (!Email) {
      setErrEmail("Enter your email")
      setFirebaseErr("")
    } else {
      if (!emailValidation(Email)) {
        setErrEmail("Enter a valid Email")
      }
    }
    if (!Password) {
      setErrPassword("Enter your password")
    } else {
      if (Password.length <= 6) {
        setErrCPassword("Password must be at least 6 characters")
      }
    }
    if (!CPassword) {
      setErrCPassword("Confirm your password")
    } else {
      if (CPassword !== Password) {
        setErrCPassword("Password not matched")
      }
    }

    if (ClientName
      && Email
      && emailValidation(Email)
      && Password
      && Password.length >= 6
      && CPassword
      && CPassword === Password) {
      

      setLoading(true)
      createUserWithEmailAndPassword(auth, Email, Password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: ClientName,
            photoURL: 'https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png'
          })
          // Signed in 
          const user = userCredential.user;
          setLoading(false)
          setSuccessMsg("Account Created Successfully!")
          setTimeout(() => {
            navigate("/signin")
          }, 3000)


        })
        .catch((error) => {
          const errorCode = error.code;

          if (errorCode.includes("auth/email-already-in-use")) {
            setFirebaseErr("Email Already in use, Try another one")

          }
        });


      //To clean up the form after entering it.
      setClientName("")
      setEmail("")
      setPassword("")
      setCPassword("")
      setFirebaseErr("")
    }

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
                <input onChange={handleName} value={ClientName} className='input-form-up' type="name" />
                {
                  ErrClientName && (
                    <p className='error-text'>
                      <span className='error-text-span'>!</span>
                      {ErrClientName}
                    </p>
                  )
                }
              </div>
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
                {/* {
                  FirebaseErr && (
                    <p className='error-text'>
                      <span className='error-text-span'>!</span>
                      {FirebaseErr}
                    </p>
                  )
                } */}
              </div>
              <div className='input-email-div'>
                <p className='email-text'>Password</p>
                <input onChange={handlePassword} value={Password} className='input-form-up' type="password" />
                {
                  ErrPassword && (
                    <p className='error-text'>
                      <span className='error-text-span'>!</span>
                      {ErrPassword}
                    </p>
                  )
                }
              </div>
              <div className='input-email-div'>
                <p className='email-text'>Re-enter Password</p>
                <input onChange={handleCPassword} value={CPassword} className='input-form-up' type="password" />
                {
                  ErrCPassword && (
                    <p className='error-text'>
                      <span className='error-text-span'>!</span>
                      {ErrCPassword}
                    </p>
                  )
                }
                {
                  FirebaseErr && (
                    <p className='error-text'>
                      <span className='error-text-span'>!</span>
                      {FirebaseErr}
                    </p>
                  )
                }

              </div>
              <button onClick={handleRegistration} className="form-continue">Continue</button>
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
              {
                SuccessMsg && (
                  <div>
                    <motion.p
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="signup-create-acc-animate"
                    >{SuccessMsg}</motion.p>
                  </div>
                )
              }
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
