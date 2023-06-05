import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { logo } from "../../assets/index";
import { allItems } from '../../constants';
import HeaderBottom from './HeaderBottom';
import { useDispatch, useSelector } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';
import { userSignOut } from '../../Redux/amazonSlice';

function Header() {
  const auth = getAuth();
  const dispatch = useDispatch()
  const [showAll, setShowAll] = useState(false)
  const products = useSelector((state) => state.amazon.products)
  const userInfo = useSelector((state) => state.amazon.userInfo)

  const handleLogout = ()=>{
    signOut(auth).then(() => {
      console.log("Signed Out")
      dispatch(userSignOut())
    }).catch((error) => {
      console.log(error)
    });
    
  }

  return (
    <section id="Header">
      <div className='header-banner z-50'>
        {/* Logo */}
        <Link to="/">
          <div className='header-effect'>
            <img className='header-banner-logo' src={logo} alt="logo" />
          </div>
        </Link>


        {/* Location */}
        <div className='banner-location header-effect hidden mdl:inline-flex'>
          <LocationOnIcon />
          <p className='banner-location'>
            Delivery to {""} <span className='banner-location-span'>Kerala</span>
          </p>
        </div>

        {/* Search Bar */}
        <div className='searchbar hidden lgl:flex'>
          <span onClick={() => setShowAll(!showAll)}>All<span><ArrowDropDownIcon /></span></span>
          {
            showAll && (
              <div>
                <ul className="searchbar-dropdown">

                  {allItems.map((item) => (
                    <li key={item._id} className=" dropdown-items">{item.title}</li>
                  ))}
                </ul>
              </div>
            )
          }
          <input className='input-searchbar' type="text" />
          <span className='input-search-icon'>
            <SearchIcon />
          </span>
        </div>

        {/* language */}
        <div className='header-effect font1  hidden mdl:inline-flex'>
          <p><LanguageIcon />EN<ArrowDropDownIcon /></p>
        </div>


        {/* SignIn */}
        <Link to='/signin'>
          <div className='sign-in header-effect'>
            {
              userInfo ?
                <p className='text-xs mdl:text-sm text-white mdl:text-lightText'>{userInfo.userName}</p> :
                <p className='text-xs mdl:text-sm text-white mdl:text-lightText'>Hello, Sign in</p>
            }

            <p className='font1  hidden mdl:inline-flex'>Account & Lists {""}
              <span><ArrowDropDownIcon /></span>
            </p>
          </div>
        </Link>


        {/* Returns & Orders */}
        <div className='hidden lgl:flex sign-in header-effect'>
          <p>Returns</p>
          <p className='font1'>& Orders</p>
        </div>

        {/* Cart */}
        <Link to="/cart">
          <div className='sign-in header-effect'>

            <p className='cart-text'><ShoppingCartIcon className='cart-icon' /> Cart
              <span className='cart-number '>
                {products.length > 0 ? products.length : 0}
              </span></p>
          </div>
        </Link>

        {userInfo && (
          <div onClick={handleLogout} className='header-effect flex flex-col justify-center items-center headerHover relative'>
            <LogoutIcon/>
            <p className='hidden mdl:inline-flex text-sm font-semibold text-whiteText'>Log out</p>
          </div>
        )}


      </div>
      <div>
        <HeaderBottom />
      </div>
    </section >
  );
}

export default Header
