// React Server Components
import * as motion from "framer-motion/client";
import { CheckCircle2 } from "lucide-react";

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
    <div className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.7,
            ease: [0.04, 0.62, 0.23, 0.98],
          }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Service Standards</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We maintain the highest standards of service delivery through our
            comprehensive approach.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceStandards.map((standard, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                ease: [0.04, 0.62, 0.23, 0.98],
                delay: index * 0.15,
              }}
              className="p-6 rounded-lg bg-background group hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <p className="text-muted-foreground">{standard}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
