import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import { logo } from "../../assets/index";

function Header() {
  const [showAll, setShowAll] = useState(false)
  console.log(showAll)
  const allItems = [
    { _id: "100", title: "All Catagories" },
    { _id: "2", title: "Alexa Skills" },
    { _id: "3", title: "Amazon Divices" },
    { _id: "4", title: "Amazon fashion" },
    { _id: "5", title: "Amazon Pharmacy" },
    { _id: "6", title: "Appliances" },
    { _id: "7", title: "Apps & Games" },
    { _id: "8", title: "Baby" },
    { _id: "9", title: "Beauty" },
    { _id: "10", title: "Books" },
    { _id: "11", title: "Car & Motorbikes" },
    { _id: "12", title: "Electronics" },
    { _id: "13", title: "Computers & Accessories" },
    { _id: "14", title: "Furniture" },
    { _id: "15", title: "Garden & OutClothing & Accessoriesdoors" },
    { _id: "16", title: "Gift Cards" },
    { _id: "17", title: "Health & personal Care" },
  ]
  return (
    <section id="Header">
      <div className='header-banner flex flex-col'>
        <div className='header-effect'>
          <img className='header-banner-logo' src={logo} alt="logo" />
        </div>
        <div className='banner-location header-effect'>
          <LocationOnIcon />
          <p className='banner-location'>
            Delivery to {""} <span className='banner-location-span'>Kerala</span>
          </p>
        </div>
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
      </div>
    </section >
  );
}

export default Header
