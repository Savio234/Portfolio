import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer id='footer' className='footer-wrapper'>
      <div className="footer-container">
        <nav className='flex flex-between footer-nav'>
          {/* <ul className='flex flex-center footer-nav-list'>
            {navLinks.map((navItem, index) =>
              <li key={index}>
                <a href={navItem.link}>
                  <h3>{navItem.name}</h3>
                </a>
              </li>
            )}
          </ul> */}
          <div className='logo'>
            <a href="/">
              <h1>DE</h1>
            </a>
          </div>
        </nav>
        <p className='center'>
          Copyright © 2024 Dominic Ezeifejafor. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer