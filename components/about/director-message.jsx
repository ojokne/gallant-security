// React Server Components
import * as motion from "framer-motion/client";
import Image from "next/image";

export default function DirectorMessage() {
    return <div className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.7,
          ease: [0.04, 0.62, 0.23, 0.98],
        }}
        className="max-w-4xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/testimonials/client1.jpg"
              alt="Director of Gallant Security"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Director's Message</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-muted-foreground">Managing Director</p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                At Gallant Security, we believe in serving beyond self,
                taking pride in providing world class security services such
                as electronic security systems i.e. CCTV camera, fire
                protection services, access control systems as well as
                consultancy and investigation services.
              </p>
              <p>
                Through this approach we have delivered a service that
                exceeds our clients' needs and thus offers value for money.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
}