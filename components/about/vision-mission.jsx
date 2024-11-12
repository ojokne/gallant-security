// React Server Components
import * as motion from "framer-motion/client";
import { Rocket, Target } from "lucide-react";
import {
  containerVariants,
  itemVariants,
  fadeInVariants,
} from "@/lib/animation-variants";

export default function VisionMission() {
  return (
    <div className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-lg bg-background group"
          >
            <Target className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-500" />
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              To be uniquely identified in market for the provision of quality
              and cost effective security services to the satisfaction of our
              clients.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-8 rounded-lg bg-background group"
          >
            <Rocket className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-500" />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To provide professional, unique and unequalled services that meet
              international standards in the field of security.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
