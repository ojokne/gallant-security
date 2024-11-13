"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Shield,
  Camera,
  Lock,
  FireExtinguisher,
  Users,
  Search,
  Car,
  FileSearch,
} from "lucide-react";
import {
  containerVariants,
  itemVariants,
  fadeInVariants,
} from "@/lib/animation-variants";
import HeroOverlay from "@/components/common/hero-overlay";

const services = [
  {
    icon: Shield,
    title: "Electronic Security Systems",
    description:
      "Comprehensive electronic security solutions including system design, installation, configuration, and maintenance. Our 24/7 incident management center ensures your property is always protected.",
    image: "/services/electronic-security.jpeg",
  },
  {
    icon: Camera,
    title: "CCTV Surveillance",
    description:
      "State-of-the-art video surveillance systems with remote monitoring capabilities. We specialize in design and implementation of advanced recording and automatic analysis systems.",
    image: "/services/cctv1.jpeg",
  },
  {
    icon: Lock,
    title: "Access Control Systems",
    description:
      "Advanced access control solutions with transit data recording and recovery. Ensure only authorized personnel can access sensitive areas of your facility.",
    image: "/services/access-control.jpeg",
  },
  {
    icon: FireExtinguisher,
    title: "Fire Protection",
    description:
      "Early-stage fire detection systems designed to protect your assets and save lives. Our solutions include advanced smoke detection and emergency response protocols.",
    image: "/services/fire-protection.jpeg",
  },
  {
    icon: Users,
    title: "VIP Security & Escort",
    description:
      "Professional security personnel trained in VIP protection and escort services. Customized solutions to meet specific security requirements for high-profile individuals.",
    image: "/services/vip-security.jpeg",
  },
  {
    icon: Search,
    title: "Security Investigations",
    description:
      "Expert investigation services for both simple and complex security matters. Our team of experienced investigators ensures thorough and discreet handling of all cases.",
    image: "/services/investigation.jpeg",
  },
//   {
//     icon: Car,
//     title: "Mobile Patrol",
//     description:
//       "Regular patrol services with rapid response capabilities. Our mobile units provide visible security presence and quick emergency response.",
//     image: "/services/mobile-patrol.jpg",
//   },
  {
    icon: FileSearch,
    title: "Security Consultancy",
    description:
      "Professional security consulting services to assess risks and develop comprehensive security strategies tailored to your specific needs.",
    image: "/services/consultancy.jpeg",
  },
];

export default function ServicesPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <div className="relative min-h-[calc(100vh-24rem)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/services/services-hero.jpg"
            alt="Security Services"
            fill
            className="object-cover"
            priority
          />
          <HeroOverlay />
        </div>

        <div className="container mx-auto px-6 relative z-10 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Security Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Professional security services tailored to protect what matters
              most to you.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group"
              >
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-top object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
