import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { logo } from "../../assets/index";
import { allItems } from '../../constants';
import HeaderBottom from './HeaderBottom';

function Header() {
  const [showAll, setShowAll] = useState(false)


  return (
    <section id="Header">
      <div className='header-banner z-50'>
        {/* Logo */}
        <div className='header-effect'>
          <img className='header-banner-logo' src={logo} alt="logo" />
        </div>

        {/* Location */}
        <div className='banner-location header-effect'>
          <LocationOnIcon />
          <p className='banner-location'>
            Delivery to {""} <span className='banner-location-span'>Kerala</span>
          </p>
        </div>

        {/* Search Bar */}
        <div className='searchbar'>
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
        <div className='header-effect font1'>
          <p><LanguageIcon />EN<ArrowDropDownIcon /></p>
        </div>


        {/* SignIn */}
        <div className='sign-in header-effect'>
          <p>Hello, Sign in</p>
          <p className='font1'>Account & Lists {""}
            <span><ArrowDropDownIcon /></span>
          </p>
        </div>

        {/* Returns & Orders */}
        <div className='sign-in header-effect'>
          <p>Returns</p>
          <p className='font1'>& Orders</p>
        </div>

        {/* Cart */}
        <div className='sign-in header-effect'>

          <p className='cart-text'><ShoppingCartIcon className='cart-icon' /> Cart<span className='cart-number'>0</span></p>
        </div>

      </div>
      <div>
        <HeaderBottom />
      </div>
    </section >
  );
}

export default Header
