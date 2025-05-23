// React Server Components
import * as motion from "framer-motion/client";
import Image from "next/image";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function DirectorMessage() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12">
            <motion.div
              variants={itemVariants}
              className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src="/team/director.jpg"
                alt="Director of Gallant Security"
                fill
                className="object-cover object-center"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-6">Director&apos;s Message</h2>
              <div className="mb-6">
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-muted-foreground">Managing Director</p>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At Gallant Security, we believe in serving beyond self, taking
                  pride in providing world class security services such as
                  electronic security systems i.e. CCTV camera, fire protection
                  services, access control systems as well as consultancy and
                  investigation services.
                </p>
                <p>
                  Through this approach we have delivered a service that exceeds
                  our clients&apos; needs and thus offers value for money.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
