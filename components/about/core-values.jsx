"use client";
import * as motion from "framer-motion/client";
import { Shield, Users, CheckCircle2, Target } from "lucide-react";
import {
  containerVariants,
  itemVariants,
  fadeInVariants,
} from "@/lib/animation-variants";

const values = [
  { icon: Shield, title: "Responsibility", color: "primary" },
  { icon: Users, title: "Entrepreneurship", color: "accent" },
  { icon: CheckCircle2, title: "Honesty", color: "primary" },
  { icon: Target, title: "Quality", color: "accent" },
];

export function CoreValues() {
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
          <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our daily operations are based on our fundamental corporate values.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 rounded-lg bg-muted/50 text-center group hover:bg-muted/80 transition-all duration-500"
            >
              <div className="relative">
                <value.icon
                  className="h-12 w-12 mx-auto mb-4 text-primary 
                           group-hover:scale-110 transition-all duration-500"
                />
                {/* Optional: Add a subtle animation or hover effect */}
              </div>
              <h3 className="font-semibold mb-2">{value.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
