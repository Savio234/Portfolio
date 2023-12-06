import React from 'react'
import Open from '../../assets/svgs/hamburger.svg'
import Close from '../../assets/svgs/close-icon.svg'
import './Nav.css'

const Nav = () => {
  function openNav() {
    const menu = document.querySelector(".mob-nav");
    menu.style.width = "100%";
  }
  function closeNav() {
    const menu = document.querySelector(".mob-nav");
    menu.style.width = "0%";
  }
  const navItems = [
    {
      name: 'About',
      link: '#about'
    },
    {
      name: 'Experience',
      link: '#experience'
    },
    {
      name: 'Projects',
      link: '#project'
    },
    {
      name: 'Contact',
      link: '#contact'
    }
  ]
  return (
    <div>
      <header id='header-lg'>
        <div className="header flex flex-center">
          <div className="logo">
            {/* eslint-disable-next-line */}
            <a href="/">
              <h1 className='margin-0 logo'>DE</h1>
            </a>
          </div>
          <nav className='nav-container flex flex-center'>
            <ul className='flex flex-center nav-list'>
              {navItems.map((navItem, index) =>
                <li key={index}>
                  <a href={navItem.link}>
                    <h3>{navItem.name}</h3>
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>

      <header id='header-sm'>
        <div className="mob-header">
          <div className='flex flex-center flex-between logo-sm-container'>
            <div className="logo">
              <a href="/">
                <h1>DE</h1>
              </a>
            </div>

            <div className="hamburger flex-end" id="hamburger-toggle">
              <div className="flex">
                <span onClick={openNav} className="navIcon">
                  <img src={Open} loading="lazy" alt="" />
                </span>
              </div>
            </div>
          </div>

          <div className="mob-nav flex">
            <div className="flex mob-nav-container flex-column">
              <div className="flex flex-between">
                <div className="logo-sm-container">
                  <div className="logo">
                    <a href="/">
                      <h1>DE</h1>
                    </a>
                  </div>

                    <span onClick={closeNav} className="closeIcon">
                      <img src={Close} alt="" className="close-icon" />
                    </span>
                  </div>
                </div>

                <ul className="nav-list flex flex-center flex-columnn flex-between">
                  {navItems.map((navItem, index) =>
                    <li onClick={closeNav} key={index}>
                      <a href={navItem.link}>
                        <h3>{navItem.name}</h3>
                      </a>
                    </li>
                  )}
                </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Nav