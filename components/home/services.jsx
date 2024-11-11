import Link from "next/link";
import { Shield, Users, Car, Calendar } from "lucide-react";
// React Server Components
import * as motion from "framer-motion/client";

export function Services() {
  const services = [
    {
      icon: Shield,
      title: "Security Guards",
      description: "Professional, trained security personnel for your property and events",
      href: "/services/security-guards"
    },
    {
      icon: Car,
      title: "Mobile Patrol",
      description: "Regular patrol services to ensure your property is secure at all times",
      href: "/services/mobile-patrol"
    },
    {
      icon: Calendar,
      title: "Event Security",
      description: "Specialized security solutions for events of all sizes",
      href: "/services/event-security"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section className="py-24 bg-background">
      <motion.div 
        className="container mx-auto px-6"
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
              className="group relative overflow-hidden rounded-lg border bg-background p-8 hover:border-primary/50 transition-colors"
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
              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>
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