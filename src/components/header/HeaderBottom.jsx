import React, { useEffect, useState,useRef } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {motion} from "framer-motion"
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SideNavContent from './SideNavContent';

function HeaderBottom() {
  const ref = useRef();
  const [sideBar, setsideBar] = useState(false)
  useEffect(()=>{
    document.body.addEventListener("click",(e)=>{
      if(e.target.contains(ref.current)){
        setsideBar(false)
      }
    })
  },[ref,sideBar])
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
        {/* <li className='header-effect bottom-list'>New Launches From Mobiles, Electronics & more | Shop now</li> */}
      </ul>
      {/* Side NavBar */}

      {
        sideBar && (
          <div className="side-bar">
            <motion.div ref={ref} initial={{x:-500,opacity:1}} animate={{x:0,opacity:1}} 
                transition={{duration:.5}}className='side-bar-items'>
              <div  className='side-bar-border'>
                <div className='inner-side-bar'>
                  <AccountCircleIcon />
                  <h3 className='side-nav-acc'>Hello, Sign In</h3>
                </div>
                

                <SideNavContent
                  title="Trending"
                  one="Best Sellers"
                  two="New Relases"
                  three="Movie & Shakers"
                />
                <SideNavContent
                  title="Digital Content And Devices"
                  one="Amazon miniTv-FREE entertainment"
                  two="Echo & Alexa"
                  three="Fire TV"
                  four="Kindle E-Readers & eBooks"
                  five="Audible Audiobooks"
                  six="Amazon Prime Video"
                  seven="Amazon Prime Music"
                />
                <SideNavContent
                  title="Shop By Category"
                  one="Mobiles, Computers"
                  two="TV, Appliances, Electronics"
                  three="Men's Fashion"
                  four="Women's Fashion"
                />
                <SideNavContent
                  title="Programs & Features"
                  one="Gift Cards & Mobile Recharges"
                  two="Flight Tickets"
                  three=" Clearance store"
                />
                <SideNavContent
                  title="Help & Settings"
                  one="Your Account"
                  two="Customer Service"
                  three="Sign Out"
                />
              </div>

              <span onClick={()=>setsideBar(false)} className="close-icon"><CloseIcon className='close-icon-side-bar'/></span>
            </motion.div>
          </div>
        )
      }


    </div>
  )
}

export default HeaderBottom
