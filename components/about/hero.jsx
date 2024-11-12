import Image from "next/image";
// React Server Components
import * as motion from "framer-motion/client";
import HeroOverlay from "../common/hero-overlay";

export function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/security-team.jpg"
          alt="Security Team"
          fill
          className="object-cover"
          priority
        />
        <HeroOverlay />{" "}
      </div>

      <div className="container mx-auto px-6 relative z-10 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.04, 0.62, 0.23, 0.98], // Custom easing
          }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Securing Your World Since 2018
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            We are among the leading organizations in the provision of security
            services.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
