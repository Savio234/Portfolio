import React from 'react'
import navLinks from '../../mock/navLinks'
import './Footer.css'

const Footer = () => {
  return (
    <div id='footer'>
      <div className="footer-container">
        <nav className='flex align-center'>
          <ul className='flex flex-center footer-nav-list'>
            {navLinks.map((navItem, index) =>
              <li key={index}>
                <a href={navItem.link}>
                  <h3>{navItem.name}</h3>
                </a>
              </li>
            )}
          </ul>
        </nav>
        <p className='center'>
          Copyright © 2023 Dominic Ezeifejafor. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer