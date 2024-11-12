// React Server Components
import * as motion from "framer-motion/client";
import Image from "next/image";

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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.7,
            ease: [0.04, 0.62, 0.23, 0.98],
          }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Trusted Partners</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Working with leading organizations to deliver exceptional security
            services.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <div className="flex justify-center flex-wrap gap-12 max-w-4xl">
            {partners.map((partner, index) => (
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
                className="group"
              >
                <div className="relative  md:w-24 md:h-24 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={64}
                    height={64}
                    className="object-contain transition-all rounded-full "
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
