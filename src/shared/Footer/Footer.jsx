import React from "react";
import { useGlobalContext } from "../../contexts/AppContext";
import contactLinks from "../../mock/contactLinks";
import Resume from "../../assets/pdfs/portfolio.pdf";
import "./Footer.css";

const Footer = () => {
  const { theme } = useGlobalContext();
  const currentYear = new Date().getFullYear();

  const navItems = [
    { name: "About", link: "/about" },
    { name: "Work", link: "/projects" },
    // { name: "Projects", link: "/projects" },
    { name: "Resume", link: Resume, isExternal: true },
  ];

  const socials = contactLinks.filter(
    (item) => item.socials.toLowerCase() !== "gmail"
  );

  return (
    <footer id="footer" data-theme={theme} className="footer-wrapper">
      <div className="footer-container">
        <nav className="footer-nav" aria-label="Footer navigation">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="footer-nav-link"
              {...(item.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <p className="footer-copyright">
          © {currentYear}
          {/* Dominic Ezeifejafor. All Rights Reserved. */}
        </p>

        <div className="footer-socials" aria-label="Social media links">
          {socials.map((social) => (
            <a
              key={social.socials}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label={social.socials}
              title={social.socials}
            >
              <img
                src={social.icon}
                alt={social.socials}
                className="footer-social-icon"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;