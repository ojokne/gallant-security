'use client';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgressBar = () => {
const { scrollYProgress } = useScroll();

// Add spring physics for smoother animation
const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
});

return (
    <motion.div
    className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50 origin-left"
    >
    <motion.div
        className="h-full bg-pink-500 origin-left transition-colors"
        style={{ scaleX }}
        role="progressbar"
    />
    </motion.div>
);
};

export default ScrollProgressBar;