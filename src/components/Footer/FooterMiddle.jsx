import React from 'react'
import { logo} from '../../assets'
import LanguageIcon from '@mui/icons-material/Language';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';





function FooterMiddle() {
    return (
        <div className='footer-middle'>
            {/* Top */}
            <div className='middle-container '>
                <div className='ft-md-text '>
                    <div className='ft-md-container grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-6
                                    md:place-items-center md:items-start'>      
                        <div className='w-full'>
                            <h3 className='ft-md-heading'>Get to Know Us</h3>
                            <ul>
                                <li className='ft-md-lists'>About Us</li>
                                <li className='ft-md-lists'>Careers</li>
                                <li className='ft-md-lists'>Press Releases</li>
                                <li className='ft-md-lists'>Amazon Science</li>
                            </ul>
                        </div>
                        <div className='w-full' >
                            <h3 className='ft-md-heading'>Connect with Us</h3>
                            <ul>
                                <li className='ft-md-lists'>Facebook</li>
                                <li className='ft-md-lists'>Twitter</li>
                                <li className='ft-md-lists'>Instagram</li>
                            </ul>
                        </div>
                        <div className='w-full'>
                            <h3 className='ft-md-heading'>Make Money with Us</h3>
                            <ul>
                                <li className='ft-md-lists'>Sell on Amazon</li>
                                <li className='ft-md-lists'>Sell under Amazon Accelerator</li>
                                <li className='ft-md-lists'>Protect and Build Your Brand</li>
                                <li className='ft-md-lists'>Amazon Global Selling</li>
                                <li className='ft-md-lists'>Become an Affiliate</li>
                                <li className='ft-md-lists'>Fulfilment by Amazon</li>
                                <li className='ft-md-lists'>Advertise Your Products</li>
                                <li className='ft-md-lists'>Amazon Pay on Merchants</li>
                            </ul>
                        </div>
                        <div className='w-full'>
                            <h3 className='ft-md-heading'>Let Us Help You</h3>
                            <ul>
                                <li className='ft-md-lists'>COVID-19 and Amazon</li>
                                <li className='ft-md-lists'>Your Account</li>
                                <li className='ft-md-lists'>Returns Centre</li>
                                <li className='ft-md-lists'>100% Purchase Protection</li>
                                <li className='ft-md-lists'>Amazon App Download</li>
                                <li className='ft-md-lists'>Help</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            {/* Bottom */}
            <div className='bottom-footer'>
                <div>
                    <img className='footer-logo' src={logo} alt="Logo" />
                </div>
                <div className='footer-language-div'>
                    <p className='footer-language'>
                        <span><LanguageIcon className='language-icon' />
                        </span> English <span><UnfoldMoreIcon className='language-icon' /></span></p>
                </div>
                
            </div>
            {/* <div>
                <p>Australia</p>
            </div> */}
        </div>
    )
}

export default FooterMiddle
