// React Server Components
import * as motion from "framer-motion/client";

const stats = [
  { number: "5+", label: "Years Experience" },
  { number: "500+", label: "Trained Guards" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "24/7", label: "Support" },
];

export function Stats() {
  return (
    <div className="py-12 bg-primary text-primary-foreground">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.7,
              ease: [0.04, 0.62, 0.23, 0.98],
              delay: index * 0.15, // Slightly longer delay for smoother stagger
            }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-bold mb-2">
              {stat.number}
            </div>
            <div className="text-sm text-primary-foreground/80">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
  );
} 