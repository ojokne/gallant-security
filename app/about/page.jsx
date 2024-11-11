"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Target, Rocket, Users, CheckCircle2 } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const slideIn = {
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const partners = [
  { name: "Partner 1", logo: "/partners/partner1.jpg" },
  { name: "Partner 2", logo: "/partners/partner1.jpg" },
  { name: "Partner 3", logo: "/partners/partner1.jpg" },
];

const team = [
  { name: "John Doe", position: "Managing Director", image: "/team/team1.jpg" },
];

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/security-team.jpg"
            alt="Security Team"
            fill
            className="object-cover"
            priority
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-black/60" 
          />
        </div>

        {/* Content */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-6 relative z-10 py-24"
        >
          <motion.div variants={fadeIn} className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Securing Your World Since 2018
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              We are among the leading organizations in the provision of
              security services.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section 
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-12 bg-primary text-primary-foreground"
      >
        <div className="container mx-auto px-6">
          <motion.div 
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "5+", label: "Years Experience" },
              { number: "500+", label: "Trained Guards" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-primary-foreground/80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Core Values Section */}
      <motion.section 
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4">
              Our Core Values
            </motion.h2>
            <motion.p variants={fadeIn} className="text-muted-foreground max-w-2xl mx-auto">
              At Gallant Security Limited, our daily operations are based on our
              fundamental corporate values.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              { icon: Shield, title: "Responsibility" },
              { icon: Users, title: "Entrepreneurship" },
              { icon: CheckCircle2, title: "Honesty" },
              { icon: Target, title: "Quality" },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="p-6 rounded-lg bg-muted/50 text-center"
              >
                <value.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">{value.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Vision & Mission */}
      <motion.section 
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-muted/50"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 rounded-lg bg-background"
            >
              <Target className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be uniquely identified in market for the provision of quality
                and cost effective security services to the satisfaction of our
                clients.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 rounded-lg bg-background"
            >
              <Rocket className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide professional, unique and unequalled services that
                meet international standards in the field of security.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Director's Message */}
      <motion.section 
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24"
      >
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
      </motion.section>

      {/* Service Standards with Animation */}
      <motion.section 
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-muted/50"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4">
              Service Standards
            </motion.h2>
            <motion.p variants={fadeIn} className="text-muted-foreground max-w-2xl mx-auto">
              We maintain the highest standards of service delivery through our
              comprehensive approach.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              "Determine client expectations and requirements",
              "Analyze needs and develop service objectives",
              "Execute plans ensuring all commitments are met",
              "Establish effective communications",
              "Provide insights on security conditions",
              "Offer meaningful improvements",
            ].map((standard, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="p-6 rounded-lg bg-background"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-muted-foreground">{standard}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4">
              Our Leadership Team
            </motion.h2>
            <motion.p variants={fadeIn} className="text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced professionals leading our security operations.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={stagger}
            className="flex justify-center"
          >
            <div className="flex flex-wrap justify-center gap-12 max-w-4xl">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="text-center w-full md:w-auto"
                >
                  <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden
                                ring-2 ring-primary/10 ring-offset-2 ring-offset-background
                                group-hover:ring-primary/30 transition-all">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary mb-2">{member.position}</p>
                  {member.description && (
                    <p className="text-muted-foreground text-sm max-w-sm">
                      {member.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Partners Section */}
      <motion.section 
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-muted/50"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4">
              Our Trusted Partners
            </motion.h2>
            <motion.p variants={fadeIn} className="text-muted-foreground max-w-2xl mx-auto">
              Working with leading organizations to deliver exceptional security services.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={stagger}
            className="flex justify-center"
          >
            <div className="flex flex-wrap justify-center gap-12 max-w-4xl">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="relative w-32 h-32 md:w-40 md:h-40 hover:scale-105 transition-transform">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain filter  transition-all rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
