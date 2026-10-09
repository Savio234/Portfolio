import React, { useState } from 'react';
import { useGlobalContext } from '../../contexts/AppContext';
import logo from '../../assets/svgs/logo_black.svg';
import Open from '../../assets/svgs/hamburger.svg';
import Close from '../../assets/svgs/close-icon.svg';
import navLinks from "../../mock/navLinks";
import './Nav.css';

const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useGlobalContext();

  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const closeNav = () => {
    setMobileOpen(false);
  };

  const openNav = () => {
    setMobileOpen(true);
  };

  return (
    <React.Fragment>
      <header id="header-lg" data-theme={theme} className="header-wrapper">
        <div className="header-container flex flex-between flex-center">
          <div className="logo">
            <a href="/" aria-label="Home">
              <img alt="Dominic Ezeifejafor Logo" src={logo} />
            </a>
          </div>

          <div className="nav-actions flex flex-center">
            <nav className="nav-container" aria-label="Main Navigation">
              <ul className="flex flex-center nav-list">
                {navLinks.map((navItem, index) => (
                  <li className="nav-list-item" key={index}>
                    <a
                      href={navItem.link}
                      {...(navItem.isExternal
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      <span>{navItem.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              type="button"
              onClick={handleThemeToggle}
              className="theme-toggle-btn"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? (
                <svg
                  className="theme-icon moon-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg
                  className="theme-icon sun-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <header id="header-sm" data-theme={theme} className="mob-header">
        <div className="mob-header-bar flex flex-between flex-center">
          <div className="logo">
            <a href="/" aria-label="Home" onClick={closeNav}>
              <img alt="logo" src={logo} />
            </a>
          </div>

          <div className="flex flex-center mob-controls">
            <button
              type="button"
              onClick={handleThemeToggle}
              className="theme-toggle-btn"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? (
                <svg className="theme-icon moon-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg
                  className="theme-icon sun-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </button>

            <button
              type="button"
              onClick={openNav}
              className="mob-menu-btn"
              aria-label="Open navigation menu"
            >
              <img src={Open} alt="" />
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <div className={`mob-nav-drawer ${mobileOpen ? 'is-open' : ''}`}>
          <div className="mob-nav-header flex flex-between flex-center">
            <div className="logo">
              <a href="/" onClick={closeNav}>
                <img alt="logo" src={logo} />
              </a>
            </div>
            <button
              type="button"
              onClick={closeNav}
              className="mob-close-btn"
              aria-label="Close navigation menu"
            >
              <img src={Close} alt="" />
            </button>
          </div>

          <ul className="mob-nav-list flex flex-column align-center">
            {navLinks.map((navItem, index) => (
              <li className="mob-nav-item" key={index} onClick={closeNav}>
                <a
                  href={navItem.link}
                  {...(navItem.isExternal
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  <h2>{navItem.name}</h2>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Nav;