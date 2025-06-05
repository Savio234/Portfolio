import React from 'react'
import navLinks from '../../mock/navLinks'
import './Footer.css'

const Footer = () => {
  return (
    <footer id='footer' className='footer-wrapper'>
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
          Copyright © 2024 Dominic Ezeifejafor. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer