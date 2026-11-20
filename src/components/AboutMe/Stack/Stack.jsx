import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "../AboutMe.css";

const STACK = [
    { label: 'Languages', items: 'JavaScript, TypeScript, HTML, CSS, SCSS' },
    { label: 'Frameworks & state', items: 'React.js, Next.js, Redux, Zustand, Easy-peasy, Framer Motion, GSAP' },
    { label: 'UI & styling', items: 'Tailwind CSS, shadcn/ui, Chakra UI' },
    { label: 'Design & deploy', items: 'Figma, Vercel, Netlify' },
    { label: 'AI-assisted workflow', items: 'GitHub Copilot, ChatGPT, Claude, Cursor, Antigravity' },
    { label: 'Version control', items: 'Git' },
];

const SPRING_CONFIG = {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
};

const Stack = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 95%", "end 95%"],
    });

    const rawHeaderY = useTransform(scrollYProgress, [0, 0.25], [40, 0]);
    const headerY = useSpring(rawHeaderY, SPRING_CONFIG);
    const rawHeaderOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
    const headerOpacity = useSpring(rawHeaderOpacity, SPRING_CONFIG);

    return (
        <div ref={sectionRef} className="about-page-container about-stack">
            <motion.div style={{ y: headerY, opacity: headerOpacity }}>
                <p className='about-eyebrow center'>The stack</p>
                <h2 className='about-section-title center'>How I build in 2026</h2>
            </motion.div>
            <div className="about-stack-grid">
                {STACK.map((row, index) => (
                    <StackCard
                        key={row.label}
                        label={row.label}
                        items={row.items}
                        scrollYProgress={scrollYProgress}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export const StackCard = ({ label, items, scrollYProgress, index }) => {
    const start = index * 0.1;
    const end = start + 0.25;
    const rawY = useTransform(scrollYProgress, [start, end], [60, 0]);
    const y = useSpring(rawY, SPRING_CONFIG);
    const rawOpacity = useTransform(scrollYProgress, [start, end], [0, 1]);
    const opacity = useSpring(rawOpacity, SPRING_CONFIG);

    return (
        <motion.div className="about-stack-row" style={{ y, opacity }}>
            <span className="about-stack-label">{label}</span>
            <span className="about-stack-items">{items}</span>
        </motion.div>
    );
};

export default Stack;