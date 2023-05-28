import React from 'react';
import { footerBottomItem } from '../../constants';

function FooterBottom() {
  return (
    <div className='fb-container'>
      <div className='ft-div '>
        <div className='ft-lists grid-cols-3 md:grid-cols-5 mdl:grid-cols-5 lgl:grid-cols-5'>
          {footerBottomItem.map((item) => {
            return (
              <div className='ft-div-hv' key={item._id}>
                <h3 className='ft-div-title'>{item.title}</h3>
                <p className='ft-div-lists' >{item.des}</p>
                <p className='ft-div-lists'>{item.des1}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;
