// React Server Components
import * as motion from "framer-motion/client";
import Image from "next/image";
import {
  containerVariants,
  itemVariants,
  fadeInVariants,
} from "@/lib/animation-variants";

const partners = [
  { name: "Partner 1", logo: "/partners/partner1.png" },
  { name: "Partner 2", logo: "/partners/partner2.jpg" },
  { name: "Partner 3", logo: "/partners/partner3.png" },
];

export function Partners() {
  return (
    <div className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Trusted Partners</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Working with leading organizations to deliver exceptional security
            services.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="flex justify-center flex-wrap gap-12 max-w-4xl">
            {partners.map((partner, index) => (
              <motion.div key={index} variants={itemVariants} className="group">
                <div className="relative md:w-24 md:h-24 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={64}
                    height={64}
                    className="object-contain transition-all rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
