import React from 'react'
import Open from '../../assets/svgs/hamburger.svg'
import Close from '../../assets/svgs/close-icon.svg'
import navLinks from '../../mock/navLinks'
import { useGlobalContext } from "../../contexts/AppContext";
import light from '../../assets/svgs/lightmode.svg'
import dark from '../../assets/svgs/darkmode.svg'
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
  const { theme, setTheme } = useGlobalContext();
  const currentThemeIcon = theme === 'light' ? light : dark
  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  return (
    <>
      <header id='header-lg'>
        <div data-theme={theme} className="header flex flex-center">
          <div className="logo">
            <a href="/">
              <h1 className='margin-0 logo'>DE</h1>
            </a>
          </div>
          <nav className='nav-container flex flex-center'>
            <div onClick={handleThemeToggle} className='theme-toggle-btn'>
              <img alt='' src={currentThemeIcon} />
            </div>
            <ul className='flex flex-center nav-list'>
              {navLinks.map((navItem, index) =>
                <li className='nav-list-item' key={index}>
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
        <div data-theme={theme} className="mob-header">
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

            <div className='flex flex-center btns-container'>
              <div onClick={handleThemeToggle} className='theme-toggle-btn'>
                <img alt='' src={currentThemeIcon} />
              </div>
              <div className='contact-btn'>
                <a href="#contact">
                  <h3>Contact</h3>
                </a>
              </div>
            </div>
          </div>

          <div className="mob-nav flex">
            <div className="flex mob-nav-container flex-column">
              <div className="flex flex-between">
                <div className="logo-sm-container">
                  <div className="logo_mob">
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
                  {navLinks.map((navItem, index) =>
                    <li className='nav-list-item' onClick={closeNav} key={index}>
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
    </>
  )
}

export default Nav