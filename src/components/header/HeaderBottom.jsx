import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function HeaderBottom() {
  const [sideBar, setsideBar] = useState(false)
  return (
    <div className='header-bottom'>
      {/* List Items */}
      <ul className='header-bottom-lists'>
        <li onClick={() => setsideBar(true)} className='header-effect menu'><MenuIcon className='menu-icon' />All</li>
        <li className='header-effect'>Fresh</li>
        <li className='header-effect'>Amazon miniTV</li>
        <li className='header-effect'>Sell</li>
        <li className='header-effect'>Amazon Pay</li>
        <li className='header-effect'>Today's Deal</li>
        <li className='header-effect'>Best Sellers</li>
        <li className='header-effect'>Buy Again</li>
        <li className='header-effect'>Prime</li>
        <li className='header-effect'>Mobiles</li>
        <li className='header-effect'>Customer Service</li>
        <li className='header-effect'>Gift Card</li>
        <li className='header-effect'>Electronics</li>
        <li className='header-effect'>New Releases</li>
        <li className='header-effect'>Coupons</li>
        <li className='header-effect'>Home & Kitchen</li>
      </ul>
      {/* Side NavBar */}

      {
        sideBar && (
          <div className="side-bar">
            <div className='side-bar-items'>
              <div className='side-bar-border'>
                <div>
                  hai
                </div>
              </div>
            </div>
          </div>
        )
      }


    </div>
  )
}

export default HeaderBottom
