"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Target, Rocket, Users, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/security-team.jpg"
            alt="Security Team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <motion.div
          className="container mx-auto px-6 relative z-10 py-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Securing Your World Since 2018
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              We are among the leading organizations in the provision of
              security services, making the protection of life, property, and
              operations our top priority.
            </p>
          </div>
        </motion.div>

        {/* Optional: Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-[2px] h-[64px] bg-white/20 relative">
            <div className="absolute top-0 left-0 w-full h-1/3 bg-white" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "5+", label: "Years Experience" },
              { number: "500+", label: "Trained Guards" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-primary-foreground/80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              At Gallant Security Limited, our daily operations are based on our
              fundamental corporate values that define who we are and how we
              work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Responsibility" },
              { icon: Users, title: "Entrepreneurship" },
              { icon: CheckCircle2, title: "Honesty" },
              { icon: Target, title: "Quality" },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg bg-muted/50 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <value.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">{value.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="p-8 rounded-lg bg-background"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
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
              className="p-8 rounded-lg bg-background"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
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
      </section>

      {/* Director's Message */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
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
      </section>

      {/* Service Standards with Animation */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Service Standards</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We maintain the highest standards of service delivery through our
              comprehensive approach.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                className="p-6 rounded-lg bg-background"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-muted-foreground">{standard}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
