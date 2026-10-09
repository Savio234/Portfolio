import React, { useState } from 'react';
import { Crosshair, Zap, Accessibility, Layers, Cpu } from 'lucide-react';
import { useGlobalContext } from "../../contexts/AppContext";
import './AboutMe.css'

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

const OFFSCREEN = [
  { title: 'Naruto', tag: 'Favourite, no contest', color: '#F97316' },
  { title: 'Attack on Titan', tag: 'Close second', color: '#64748B' },
  { title: 'Solo Leveling', tag: 'Recent favourite', color: '#7C3AED' },
  { title: 'FC Barcelona', tag: 'Football, for life', color: '#4581F9' },
];

const STACK = [
  { label: 'Languages', items: 'JavaScript, TypeScript, HTML, CSS, SCSS' },
  { label: 'Frameworks & state', items: 'React.js, Next.js, Redux' },
  { label: 'UI & styling', items: 'Tailwind CSS, shadcn/ui, Chakra UI' },
  { label: 'Design & deploy', items: 'Figma, Vercel, Netlify' },
  { label: 'AI-assisted workflow', items: 'GitHub Copilot, ChatGPT, Claude, Cursor, Antigravity' },
  { label: 'Version control', items: 'Git' },
];

const PRINCIPLES = [
  {
    title: 'Pixel-perfect',
    icon: Crosshair,
    body: "Design fidelity isn't optional. If the spec says 8px, I ship 8px — that gap is the difference between looking finished and looking intentional.",
  },
  {
    title: 'Performant',
    icon: Zap,
    body: 'A slow interface is a broken one. Performance gets budgeted in from the first component, not patched in at the end.',
  },
  {
    title: 'Accessible',
    icon: Accessibility,
    body: 'Semantic markup, keyboard navigation, screen-reader support — built in from the start, not bolted on after an audit.',
  },
  {
    title: 'Scalable',
    icon: Layers,
    body: "Code that works today should still make sense in a year. I write components the next developer — or future me — can extend without fighting the original structure.",
  },
  {
    title: 'Efficient',
    icon: Cpu,
    body: "The fastest code to ship is the code you don't have to rewrite. I reach for the simplest solution that actually solves the problem, not the most impressive one.",
  },
];

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

const AboutMe = () => {
  const { theme } = useGlobalContext();
  const [activeChapter, setActiveChapter] = useState(CHAPTERS[0].key);
  const chapter = CHAPTERS.find((c) => c.key === activeChapter);

  return (
    <section id='about-page' data-theme={theme} className='about-page-wrapper'>
      <div className="about-page-container">
        <p className='center about-eyebrow'>Get to know more</p>

        <div className="about-status flex align-center">
          <span className="about-status-dot" aria-hidden="true"></span>
          <p className="about-status-label margin-0">Lagos, Nigeria — Available for work</p>
        </div>

        <h1 className='about-page-statement center'>
          For 3+ years, I've been turning other people's ideas into
          interfaces that actually ship — fast, accessible, and built to last.
        </h1>

        <div className="about-intro-image">
          <img src={IMG.intro} alt="" />
        </div>
      </div>

      <div className="about-page-container about-story">
        <p className='about-eyebrow center'>The story</p>
        <h2 className='about-section-title center'>How I got here</h2>
        <p className='about-story-text'>
          I always knew I wanted to write code — I just wasn't sure which
          direction to take it in. Two developer friends, at completely
          different points in my life, independently pointed me toward
          frontend development. That was it; the decision made itself.
        </p>
        <p className='about-story-text'>
          Three years on, I'm now the one pointing the way for others. I
          currently mentor three relatives who are finding their own
          footing in frontend development — the same nudge I got, passed
          forward.
        </p>
      </div>

      <div className="about-page-container about-chapters">
        <p className='about-eyebrow center'>Things I care about</p>
        <h2 className='about-section-title center'>Off the clock</h2>

        <div className="chapters-tabs flex align-center">
          {CHAPTERS.map((c) => (
            <button
              key={c.key}
              className={`chapter-tab ${activeChapter === c.key ? 'is-active' : ''}`}
              onClick={() => setActiveChapter(c.key)}
            >
              {c.title}
            </button>
          ))}
        </div>

        <div className="chapter-panel flex align-center">
          <div className="chapter-panel-img">
            {chapter.img ? (
              <img src={chapter.img} alt="" />
            ) : (
              <div className="chapter-panel-img-placeholder">あ</div>
            )}
          </div>
          <div className="chapter-panel-text">
            <h3>{chapter.title}</h3>
            <p>{chapter.body}</p>
          </div>
        </div>
      </div>

      <div className="about-page-container about-stack">
        <p className='about-eyebrow center'>The stack</p>
        <h2 className='about-section-title center'>How I build in 2026</h2>
        <div className="about-stack-grid">
          {STACK.map((row) => (
            <div className="about-stack-row" key={row.label}>
              <span className="about-stack-label">{row.label}</span>
              <span className="about-stack-items">{row.items}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="about-page-container about-principles">
        <p className='about-eyebrow center'>Philosophy</p>
        <h2 className='about-section-title center'>Principles</h2>
        <div className="about-principles-grid">
          {PRINCIPLES.map((p) => {
            const Icon = p.icon;
            return (
              <div className="about-principle-card" key={p.title}>
                <div className="about-principle-icon">
                  <Icon size={24} strokeWidth={2} />
                </div>
                <h4>{p.title}</h4>
                <p>{p.body}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="about-page-container about-timeline">
        <p className='about-eyebrow center'>Experience</p>
        <h2 className='about-section-title center'>Where I've been</h2>
        <div className="timeline-list">
          {TIMELINE.map((role) => (
            <a
              href={role.url}
              target='_blank'
              rel='noreferrer'
              className="timeline-row"
              key={role.company}
            >
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

      <div style={{display: "none"}} className="about-page-container about-offscreen">
        <p className='about-eyebrow center'>Off screen</p>
        <h2 className='about-section-title center'>What I'm into</h2>
        {/* <p className='about-offscreen-note center'>
          Official anime artwork is copyrighted, so these are styled
          cards rather than fan art — swap in your own legally-sourced
          wallpapers whenever you like.
        </p> */}
        <div className="offscreen-grid">
          {OFFSCREEN.map((item) => (
            <div
              className="offscreen-card"
              key={item.title}
              style={{ '--accent': item.color }}
            >
              <span className="offscreen-tag">{item.tag}</span>
              <h4>{item.title}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* ---- Closing CTA ---- */}
      <div className="about-page-container about-cta">
        <h2 className='about-section-title center'>Let's build something</h2>
        <p className='about-cta-text center'>
          Open to frontend roles and freelance work.
        </p>
        <a href="mailto:dominicezeifejafor@gmail.com" className="about-cta-btn">Let's talk</a>
      </div>

    </section>
  )
}

export default AboutMe;
