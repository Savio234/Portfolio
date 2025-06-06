import React from 'react'
import { useGlobalContext } from "../../contexts/AppContext";
import contactLinks from '../../mock/contactLinks'
import './Contact.css'

const Contact = () => {
  const { theme } = useGlobalContext();
  return (
    <section id="contact" data-theme={theme} className='contact-wrapper'>
      <div className="contact-container flex flex-column align-center">
        <div>
          <p className='center contact-p'>Get in Touch</p>
          <h1 className='center'>Contact Me</h1>
        </div>

        <div className="card-container flex align-center">
          {contactLinks.map((contact, index) =>
            <a key={index} href={contact.link} target='_blank' rel='noreferrer'>
              <div className="card flex flex-center">
                {theme === 'light' && (
                  <div className="contact-icon">
                    <img src={contact.icon} alt="" />
                  </div>
                )}
                {theme === 'dark' && (
                  <div className='contact-icon-wrapper flex align-center'>
                    <div className="contact-icon">
                      <img src={contact.icon} alt="" />
                    </div>
                  </div>
                )}
                <h3>{contact.socials}</h3>
              </div>
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact