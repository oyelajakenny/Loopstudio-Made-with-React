import React from 'react'
import logo from '../images/logo.svg'


const Footer = () => {
    return (
        <footer>
            <div className='footer-one'>

                <img src={logo} alt='footer' />
                <div className='footerlinks'>
                    <ul>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Events</li>
                        <li>Products</li>
                        <li>Supports</li>
                    </ul>

                </div>

            </div>

            <div className='footer-two'>
<div className='icons'>
 <img src='./images/icon-facebook.svg'/>
 <img src='./images/icon-twitter.svg'/>
 <img src='./images/icon-pinterest.svg'/>
 <img src='./images/icon-instagram.svg'/>

</div>

<div className='copyright'>
<small>&copy; 2021 Loostudios. All Right Reserved</small>

</div>
            </div>
 

        </footer>
    )
}

export default Footer