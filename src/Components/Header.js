import React, { useState } from 'react'
import logo from '../images/logo.svg'
import hamburger from '../images/icon-hamburger.svg'
import close from '../images/icon-close.svg'


export const Header = () => {

  const[isMobile, setIsMobile]= useState(false)
  return (
    <header>

      <nav>
        <div className='logo'>
          <img src={logo} alt=''/>
        </div>

        <div className={isMobile?('navlinks-mobile'):('navlink')} >
          <div className='logo-icon'>
            <img src={logo} alt=""/>
          </div>

          <ul><li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Supports</li>
          </ul>
        </div>

        <span className='mobile-menu-icon' onClick={()=> setIsMobile(!isMobile)}>
       {isMobile? (<img src={close} alt=""/>):(<img src={hamburger} alt=""/>)} 
        
         </span>
        
              </nav>
              <div className='overLay'>
                <h1>
                  Immersive Experiences That Delivers
                </h1>
              </div>
    </header>
  )
}
export default Header
