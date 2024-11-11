import * as motion from "framer-motion/client";

export function Stats() {
  const stats = [
    { number: "500+", label: "Clients Protected" },
    { number: "50+", label: "Security Professionals" },
    { number: "24/7", label: "Active Protection" },
    { number: "15+", label: "Years Experience" }
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

  const statVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
      <motion.div 
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              variants={statVariants}
              custom={index}
              className="relative"
            >
              <motion.div 
                className="text-4xl font-bold mb-2"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ 
                  scale: 1, 
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.1
                  }
                }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <motion.div 
                className="text-primary-foreground/80"
                initial={{ opacity: 0 }}
                whileInView={{ 
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 + index * 0.1
                  }
                }}
                viewport={{ once: true }}
              >
                {stat.label}
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 left-1/2 h-1 bg-primary-foreground/20 rounded-full"
                initial={{ width: 0, x: "-50%" }}
                whileInView={{ 
                  width: "40%",
                  transition: {
                    duration: 0.8,
                    delay: 0.3 + index * 0.1
                  }
                }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 