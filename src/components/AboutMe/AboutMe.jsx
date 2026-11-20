import { useGlobalContext } from "../../contexts/AppContext";
import OffScreen from "./OffScreen/OffScreen";
import Principles from "./Principles/Principles";
import Timeline from "./Timeline/Timeline";
import Stack from "./Stack/Stack";
import Interest from "./Interest/Interest";
import Intro from "./Intro/Intro";
import "./AboutMe.css"

const AboutMe = () => {
  const { theme } = useGlobalContext();

  return (
    <section id="about-page" data-theme={theme} className="about-page-wrapper">
      <Intro />
      <OffScreen />
      <Stack />
      <Principles />
      <Timeline />
      <Interest />

      <div className="about-page-container about-cta">
        <h2 className="about-section-title center">Let's build something</h2>
        <p className="about-cta-text center">
          Open to frontend roles and freelance work.
        </p>
        <a href="mailto:dominicezeifejafor@gmail.com" className="about-cta-btn">Let's talk</a>
      </div>

    </section>
  )
}

export default AboutMe;
