import profile from "../../assets/images/my_offiicial_portrait.png";
import Resume from "../../assets/pdfs/portfolio.pdf";
import { useGlobalContext } from "../../contexts/AppContext";
import "./Hero.css";

const Hero = () => {
  const { theme } = useGlobalContext();

  return (
    <section id="hero" data-theme={theme} className="hero-wrapper">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-eyebrow">
            DEVELOPMENT | DESIGN | STRATEGY
          </span>

          <h1 className="hero-title">
            Hi, I'm Dominic<br />Ezeifejafor.
          </h1>

          <p className="hero-description">
            A frontend developer and UI engineer passionate about building fast, accessible,
            and beautiful digital products. Welcome to my portfolio.
          </p>

          <div className="hero-actions">
            <a href={Resume} target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn-primary">
              <span>View Resume</span>
              <svg className="hero-btn-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33334 8H12.6667M12.6667 8L8.00001 3.33334M12.6667 8L8.00001 12.6667"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a href="mailto:dominicezeifejafor@gmail.com" className="hero-btn hero-btn-secondary">Let's Talk</a>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-avatar-frame">
            <div className="hero-avatar-backdrop" aria-hidden="true"></div>
            <div className="hero-avatar-img-wrapper">
              <img
                src={profile}
                alt="Dominic Ezeifejafor"
                className="hero-avatar-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;