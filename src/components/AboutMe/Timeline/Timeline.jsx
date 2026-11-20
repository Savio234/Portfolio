import "../AboutMe.css";

const Timeline = () => {
    const TIMELINE = [
        {
            company: 'Govtech Africa',
            url: 'https://govtechafrica.com',
            role: 'Lead Developer',
            tag: 'Government technology',
            dates: 'Oct 2025 — Present',
            body: 'Leading frontend development on the digital tools Govtech Africa builds to help African governments and public institutions serve citizens better.',
        },
        {
            company: 'Gruve',
            url: 'https://www.gruve.events',
            role: 'Frontend Developer',
            tag: 'Event ticketing',
            dates: 'Oct 2024 — Oct 2025',
            body: 'Moved on from a junior role here, building the customer and organizer-facing interfaces for a platform that sells event tickets across Nigeria.',
        },
        {
            company: 'Sippy Life',
            url: 'https://www.sippy.life',
            role: 'Frontend Developer Intern → Junior Frontend Developer',
            tag: 'On-demand drinks delivery',
            dates: 'Oct 2023 — Oct 2024',
            body: "Started as an intern and was promoted to Junior Frontend Developer within the year, building and maintaining customer-facing interfaces for Sippy Life's drinks delivery platform across Lagos, Abuja, and Calabar.",
        },
    ];
    return (
        <div className="about-page-container about-timeline">
            <p className="about-eyebrow center">Experience</p>
            <h2 className="about-section-title center">Where I've been</h2>
            <div className="timeline-list">
            {TIMELINE.map((role) => (
                <a href={role.url} target="_blank" rel="noreferrer" className="timeline-row" key={role.company}>
                    <div className="timeline-row-head">
                        <h3>{role.company}</h3>
                        <span className="timeline-dates">{role.dates}</span>
                    </div>
                    <p className="timeline-role">{role.role} · {role.tag}</p>
                    <p className="timeline-body">{role.body}</p>
                </a>
            ))}
            </div>
        </div>
    )
}

export default Timeline