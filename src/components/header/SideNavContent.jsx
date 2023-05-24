import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function SideNavContent({ title, ...items }) {
  const itemList = Object.entries(items);

  return (
    <div className='bottom-line'>
      <h3 className='nav-titles'>{title}</h3>
      <ul>
        {itemList.map(([key, text]) => (
          <li className='nav-lists' key={key}>
            {text}
            {shouldShowIcon(title, key) && <span><KeyboardArrowRightIcon /></span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

function shouldShowIcon(title, key) {
  if (title === 'Trending') {
    return key !== 'one' && key !== 'two' && key !=='three';
  } else if (title === 'Digital Content And Devices') {
    return key !== 'one';
  } else if (title === 'Programs & Features') {
    return key !== 'two' && key !== 'three';
  } else if (title === 'Help & Settings') {
    return key !== 'one' && key !== 'two' && key !=='three';
  } else {
    return true; // Display the icon for all items in other sections
  }
}

export default SideNavContent;

