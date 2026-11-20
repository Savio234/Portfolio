import React from "react";
import "../AboutMe.css";

const Intro = () => {
    return (
        <React.Fragment>
            <div className="about-page-container">
                <p className="center about-eyebrow">Get to know more</p>
                <div className="about-status flex align-center">
                    <span className="about-status-dot" aria-hidden="true"></span>
                    <p className="about-status-label margin-0">Lagos, Nigeria — Available for work</p>
                </div>

                <h1 className="about-page-statement center">
                    For 3+ years, I've been turning other people's ideas into
                    interfaces that actually ship — fast, accessible, and built to last.
                </h1>

                <div className="about-intro-image">
                    <img src={`https://images.unsplash.com/photo-1699885960867-56d5f5262d38?auto=format&fit=crop&w=1600&q=80`} alt="" />
                </div>
            </div>

            <div className="about-page-container about-story">
                <p className="about-eyebrow center">The story</p>
                <h2 className="about-section-title center">How I got here</h2>
                <p className="about-story-text">
                    I always knew I wanted to write code — I just wasn't sure which
                    direction to take it in. Two developer friends, at completely
                    different points in my life, independently pointed me toward
                    frontend development. That was it; the decision made itself.
                </p>
                <p className="about-story-text">
                    Three years on, I'm now the one pointing the way for others. I
                    currently mentor three relatives who are finding their own
                    footing in frontend development — the same nudge I got, passed
                    forward.
                </p>
            </div>
        </React.Fragment>
    )
}

export default Intro