// React Server Components
import * as motion from "framer-motion/client";
import { Rocket, Target } from "lucide-react";

export default function VisionMission() {
    return <div className="py-24 bg-muted/50">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.7,
            ease: [0.04, 0.62, 0.23, 0.98],
          }}
          className="p-8 rounded-lg bg-background group hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 transition-all duration-500"
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.7,
            ease: [0.04, 0.62, 0.23, 0.98],
            delay: 0.2,
          }}
          className="p-8 rounded-lg bg-background group hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 transition-all duration-500"
        >
          <Rocket className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-500" />
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-muted-foreground">
            To provide professional, unique and unequalled services that
            meet international standards in the field of security.
          </p>
        </motion.div>
      </div>
    </div>
  </div>
}