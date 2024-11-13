// React Server Components
import * as motion from "framer-motion/client";
import Image from "next/image";
import {
  containerVariants,
  itemVariants,
  fadeInVariants,
} from "@/lib/animation-variants";

const team = [
  { name: "John Doe", position: "Managing Director", image: "/team/ceo.jpeg" },
];

export function LeadershipTeam() {
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
          <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the experienced professionals leading our security operations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="flex flex-wrap justify-center gap-12 max-w-4xl">
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center w-full md:w-auto group"
              >
                <div
                  className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden
                            ring-2 ring-primary/10 ring-offset-2 ring-offset-background
                            group-hover:ring-primary/30 transition-all"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-primary mb-2">{member.position}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
