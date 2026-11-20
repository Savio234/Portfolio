import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "../AboutMe.css";

const OffScreen = () => {
    const IMG = {
        intro: 'https://images.unsplash.com/photo-1699885960867-56d5f5262d38?auto=format&fit=crop&w=1600&q=80',
        astronomy: 'https://images.unsplash.com/photo-1718215005635-5b9210806aec?auto=format&fit=crop&w=1200&q=80',
        movies: 'https://images.unsplash.com/photo-1717915604557-94283edbcc1b?auto=format&fit=crop&w=1200&q=80',
        football: 'https://images.unsplash.com/photo-1702569802639-9b90f3c21f98?auto=format&fit=crop&w=1200&q=80',
        basketball: 'https://images.unsplash.com/photo-1559369064-c4d65141e408?auto=format&fit=crop&w=1200&q=80',
        fitness: 'https://images.unsplash.com/photo-1589579234096-25cb6b83e021?auto=format&fit=crop&w=1200&q=80',
        travel: 'https://images.unsplash.com/photo-1517951268240-e83cf14013e0?auto=format&fit=crop&w=1200&q=80',
        family: 'https://images.unsplash.com/photo-1661025208052-f4f54db8d743?auto=format&fit=crop&w=1200&q=80',
    };

    const CHAPTERS = [
        {
            key: 'astronomy',
            title: 'Astronomy',
            img: IMG.astronomy,
            body: "There's something about looking at the night sky that resets my brain after a day of staring at a screen. I can't explain half of what's up there, but I don't need to — the scale of it is the point. It's the one hobby that has nothing to do with a deadline.",
        },
        {
            key: 'anime',
            title: 'Anime',
            img: null,
            body: "Naruto is the one that started it and still means the most to me. Attack on Titan and Solo Leveling followed, and between the three I've got a good excuse to not be fully present some evenings. Good anime has the same thing good software has: pacing, payoff, and a story that earns its moments.",
        },
        {
            key: 'movies',
            title: 'Movies',
            img: IMG.movies,
            body: "A good movie night is one of my resets. Doesn't matter the genre — I'm there for a story told well, the same way I notice when an interface is put together with care.",
        },
        {
            key: 'sports',
            title: 'Football & Basketball',
            img: IMG.football,
            body: "Barcelona is my team, through the good seasons and the rough ones — that's what being a fan actually means. Basketball's the one I'll watch just as happily, for the pace of it. Both scratch the same itch: a close game and no idea how it ends.",
        },
        {
            key: 'fitness',
            title: 'Fitness',
            img: IMG.fitness,
            body: "Sitting at a desk all day will wreck you if you let it, so this is the counterweight. Nothing extreme — just showing up consistently, which, now that I think about it, is basically my whole approach to shipping code too.",
        },
        {
            key: 'family',
            title: 'Family',
            img: IMG.family,
            body: "Everything else on this list is a hobby. This is the actual anchor. The placeholder photo here is standing in until I swap in the real thing.",
        },
        {
            key: 'travel',
            title: 'Travel',
            img: IMG.travel,
            body: "The one item on this list I haven't gotten to live out yet. Still based in Lagos, still building — but travel is high on the list for whenever the opportunity lines up. Ask me again in a year.",
        },
    ];
    const [activeChapter, setActiveChapter] = useState(0);
    const totalChapters = CHAPTERS.length;

    const handlePrevChapter = () => {
        setActiveChapter((prev) => (prev - 1 + totalChapters) % totalChapters);
    };

    const handleNextChapter = () => {
        setActiveChapter((prev) => (prev + 1) % totalChapters);
    };

    const getRelativeOffset = (index) => {
        let diff = index - activeChapter;
        if (diff > Math.floor(totalChapters / 2)) diff -= totalChapters;
        if (diff < -Math.floor(totalChapters / 2)) diff += totalChapters;
        return diff;
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveChapter((prev) => (prev + 1) % totalChapters);
        }, 4000);

        return () => clearInterval(timer);
    }, [activeChapter, totalChapters]);

    return (
        <div className="about-page-container about-chapters">
            <p className='about-eyebrow center'>Things I care about</p>
            <h2 className='about-section-title center'>Off the clock</h2>
        
            <div className="chapters-tabs flex align-center">
                {CHAPTERS.map((c, index) => (
                    <button
                        key={c.key}
                        type="button"
                        className={`chapter-tab ${activeChapter === index ? 'is-active' : ''}`}
                        onClick={() => setActiveChapter(index)}
                    >
                        {c.title}
                    </button>
                ))}
            </div>
        
            <div className="chapters-carousel-stage">
                {CHAPTERS.map((c, index) => {
                    const offset = getRelativeOffset(index);
                    return (
                        <div key={c.key} data-offset={offset} onClick={() => setActiveChapter(index)}
                            className={`chapter-carousel-card ${offset === 0 ? 'is-center' : ''}`}
                        >
                            <div className="chapter-card-image-layer">
                                {c.img ? (
                                    <img src={c.img} alt={c.title} />
                                ) : (
                                    <div className="chapter-panel-img-placeholder">あ</div>
                                )}
                                <div className="chapter-card-gradient-overlay" />
                            </div>
        
                            <div className="chapter-card-body">
                                <div className="chapter-card-top-row">
                                    <span className="chapter-card-id">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>
            
                                <div className="chapter-card-bottom-info">
                                    <h3 className="chapter-card-title">{c.title}</h3>
                                    <p className="chapter-card-description">{c.body}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        
            <div className="chapters-carousel-controls">
                <button type="button" onClick={handlePrevChapter} className="chapter-nav-arrow-btn">
                    <ArrowLeft size={18} strokeWidth={2} />
                </button>
                <button type="button" onClick={handleNextChapter} className="chapter-nav-arrow-btn">
                    <ArrowRight size={18} strokeWidth={2} />
                </button>
            </div>
        </div>
    )
}

export default OffScreen