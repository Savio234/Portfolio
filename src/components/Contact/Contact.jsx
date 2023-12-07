import React from 'react'
import contactLinks from '../../mock/contactLinks'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container flex flex-column align-center">
        <div>
          <p className='center'>Get in Touch</p>
          <h1 className='center'>Contact Me</h1>
        </div>

        <div className="card-container flex align-center">
          {contactLinks.map((contact, index) =>
            <a key={index} href={contact.link} target='_blank' rel='noreferrer'>
              <div className="card flex flex-center">
                <div className="contact-icon">
                  <img src={contact.icon} alt="" />
                </div>
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