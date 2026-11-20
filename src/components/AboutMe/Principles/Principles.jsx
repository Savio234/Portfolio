import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Crosshair, Zap, Accessibility, Layers, Cpu } from "lucide-react";
import "../AboutMe.css";

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

const SPRING_CONFIG = {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
};

const Principles = () => {
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
        <div ref={sectionRef} className="about-page-container about-principles">
            <motion.div style={{ y: headerY, opacity: headerOpacity }}>
                <p className='about-eyebrow center'>Philosophy</p>
                <h2 className='about-section-title center'>Principles</h2>
            </motion.div>
            <div className="about-principles-grid">
                {PRINCIPLES.map((p, index) => (
                    <PrincipleCard
                        key={p.title}
                        title={p.title}
                        icon={p.icon}
                        body={p.body}
                        scrollYProgress={scrollYProgress}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export const PrincipleCard = ({ title, icon: Icon, body, scrollYProgress, index }) => {
    const start = index * 0.15;
    const end = start + 0.3;
    const rawY = useTransform(scrollYProgress, [start, end], [60, 0]);
    const y = useSpring(rawY, SPRING_CONFIG);
    const rawOpacity = useTransform(scrollYProgress, [start, end], [0, 1]);
    const opacity = useSpring(rawOpacity, SPRING_CONFIG);

    return (
        <motion.div className="about-principle-card" style={{ y, opacity }}>
            <div className="about-principle-icon">
                <Icon size={24} strokeWidth={2} />
            </div>
            <h4>{title}</h4>
            <p>{body}</p>
        </motion.div>
    );
};

export default Principles;