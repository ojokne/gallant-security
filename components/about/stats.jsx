// React Server Components
import * as motion from "framer-motion/client";
import {
  containerVariants,
  itemVariants,
  fadeInVariants,
} from "@/lib/animation-variants";

const stats = [
  { number: "5+", label: "Years Experience" },
  { number: "500+", label: "Trained Guards" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "24/7", label: "Support" },
];

export function Stats() {
  return (
    <div className="py-12 bg-primary text-primary-foreground">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-6"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
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
      </motion.div>
    </div>
  );
}
