import "../AboutMe.css";

const Interest = () => {
    const OFFSCREEN = [
        { title: "Naruto", tag: "Favourite, no contest", color: "#F97316" },
        { title: "Attack on Titan", tag: "Close second", color: "#64748B" },
        { title: "Solo Leveling", tag: "Recent favourite", color: "#7C3AED" },
        { title: "FC Barcelona", tag: "Football, for life", color: "#4581F9" },
    ];
    return (
        <div style={{display: "none"}} className="about-page-container about-offscreen">
            <p className='about-eyebrow center'>Off screen</p>
            <h2 className='about-section-title center'>What I'm into</h2>
            <p className='about-offscreen-note center'>
                Official anime artwork is copyrighted, so these are styled
                cards rather than fan art — swap in your own legally-sourced
                wallpapers whenever you like.
            </p>
            <div className="offscreen-grid">
                {OFFSCREEN.map((item) => (
                    <div className="offscreen-card" key={item.title} style={{ '--accent': item.color }}>
                        <span className="offscreen-tag">{item.tag}</span>
                        <h4>{item.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Interest