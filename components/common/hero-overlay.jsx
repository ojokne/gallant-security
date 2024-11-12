// React Server Components
import * as motion from "framer-motion/client";
export default function HeroOverlay() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"
    />
  );
}
