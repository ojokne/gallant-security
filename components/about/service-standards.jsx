// React Server Components
import * as motion from "framer-motion/client";
import { CheckCircle2 } from "lucide-react";
import {
  containerVariants,
  itemVariants,
  fadeInVariants,
} from "@/lib/animation-variants";

const serviceStandards = [
  "Determine client expectations and requirements",
  "Analyze needs and develop service objectives",
  "Execute plans ensuring all commitments are met",
  "Establish effective communications",
  "Provide insights on security conditions",
  "Offer meaningful improvements",
];

export default function ServiceStandards() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Service Standards</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We maintain high standards in all our security operations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {serviceStandards.map((standard, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-start gap-4 p-4"
            >
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
              <span>{standard}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
