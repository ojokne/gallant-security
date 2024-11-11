import Link from "next/link";
import { Shield, Users, Car, Calendar } from "lucide-react";
// React Server Components
import * as motion from "framer-motion/client";

export function Services() {
  const services = [
    {
      icon: Shield,
      title: "Security Guards",
      description:
        "Professional, trained security personnel for your property and events",
      href: "/services/security-guards",
    },
    {
      icon: Car,
      title: "Mobile Patrol",
      description:
        "Regular patrol services to ensure your property is secure at all times",
      href: "/services/mobile-patrol",
    },
    {
      icon: Calendar,
      title: "Event Security",
      description: "Specialized security solutions for events of all sizes",
      href: "/services/event-security",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      {/* Animated Blobs - Updated colors and opacity */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-indigo-500/20 blur-[100px]"
          animate={{
            x: [0, 30, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-0 top-1/2 h-[500px] w-[500px] rounded-full bg-sky-500/15 blur-[100px]"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute left-1/3 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-[100px]"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content - Added higher z-index */}
      <motion.div
        className="relative z-10 container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          className="text-center max-w-[640px] mx-auto mb-16"
          variants={headerVariants}
        >
          <h2 className="text-3xl font-bold mb-4">
            Comprehensive Security Solutions
          </h2>
          <p className="text-muted-foreground">
            Tailored security services to protect what matters most to you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative overflow-hidden rounded-lg border bg-background/80 backdrop-blur-sm p-8 hover:border-primary/50 transition-all hover:shadow-lg"
              variants={cardVariants}
              whileHover="hover"
              custom={index}
            >
              <motion.div
                className="mb-4 text-primary"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 * index, duration: 0.3 }}
              >
                <service.icon className="h-6 w-6" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 * index, duration: 0.3 }}
              >
                <Link
                  href={service.href}
                  className="text-sm font-medium text-primary group-hover:underline"
                >
                  Learn More →
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
